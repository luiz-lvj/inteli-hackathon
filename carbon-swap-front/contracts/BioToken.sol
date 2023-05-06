// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./RetiredBioToken.sol";
import "hardhat/console.sol";

contract BioToken is ERC20, ERC20Burnable, Ownable {
    //variables

    IERC20 public paymentToken;
    RetiredBioToken public retiredBioToken;

    mapping(address => uint256) public noncesSell;

    uint256 internal INITIAL_CHAIN_ID;
    bytes32 internal INITIAL_DOMAIN_SEPARATOR;

    //Events
    event PaymentTokenUpdated(address indexed _oldPaymentToken, address indexed _newPaymentToken);
    event Retirement(address indexed _who, address indexed _retirementAddress, uint256 _amount);


    constructor(string memory name, string memory ticker, address _paymentToken) ERC20(name, ticker) {
        paymentToken = IERC20(_paymentToken);
        INITIAL_CHAIN_ID = block.chainid;
        INITIAL_DOMAIN_SEPARATOR = computeDomainSeparator();
    }

    function mint(address _to, uint256 _amount)  public onlyOwner {
        _mint(_to, _amount);
    }

    function setPaymentToken(address _newPaymentToken) public onlyOwner {
        emit PaymentTokenUpdated(address(paymentToken), _newPaymentToken);
        paymentToken = IERC20(_newPaymentToken);   
    }

    function setRetiredBioToken(address _retiredBioToken) public onlyOwner {
        retiredBioToken = RetiredBioToken(_retiredBioToken);
    }

    function retire(uint256 _amount) public {
        console.log(_amount);
        console.log(balanceOf(msg.sender));
        burn(_amount);
        retiredBioToken.mint(msg.sender, _amount);
        emit Retirement(msg.sender,  address(retiredBioToken), _amount);
    }

    


    function permitSell(
        address owner,
        uint256 price,
        uint256 quantity,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public virtual{
        require(block.timestamp <= deadline, "ERC20Permit: expired deadline");

        unchecked{
            address recovered = ecrecover(
                keccak256(
                    abi.encodePacked(
                        "\x19\x01",
                        DOMAIN_SEPARATOR(),
                        keccak256(
                            abi.encode(
                                keccak256("Sell(address owner,uint256 price, uint256 quantity,uint256 nonce,uint256 deadline)"),
                                owner,
                                price,
                                quantity,
                                noncesSell[owner]++,
                                deadline
                            )
                        )
                    )
                ),
                v,
                r,
                s
            );
            uint256 amount = price * quantity;
            require(recovered != address(0) && recovered == owner, "ERC20Permit: invalid signature");
            require(IERC20(paymentToken).balanceOf(msg.sender) >= amount, "ERC20Permit: insufficient balance");
            
            IERC20(paymentToken).transferFrom(msg.sender, owner, amount);
            _transfer(owner, msg.sender, quantity);
        }
    }

    function DOMAIN_SEPARATOR() public view virtual returns (bytes32) {
        return block.chainid == INITIAL_CHAIN_ID ? INITIAL_DOMAIN_SEPARATOR : computeDomainSeparator();
    }

    function computeDomainSeparator() internal view virtual returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
                    keccak256(bytes(name())),
                    keccak256("1"),
                    block.chainid,
                    address(this)
                )
            );
    }

    
}


