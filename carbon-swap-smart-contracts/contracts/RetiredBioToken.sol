// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./BioToken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract RetiredBioToken is ERC20{
    
    BioToken public bioToken;
    constructor(string memory name, string memory ticker, address _bioToken) ERC20(name, ticker) {
        bioToken = BioToken(_bioToken);
    }

    function mint(address _to, uint256 _amount) public {
        require(msg.sender == address(bioToken), "Only BioToken can mint");
        _mint(_to, _amount);
    }

    function setBioToken(address _bioToken) public {
        bioToken = BioToken(_bioToken);
    }

    function transfer(address recipient, uint256 amount) public pure override returns (bool) {
        revert("RetiredBioToken is not transferable");
    }

    function transferFrom(address sender, address recipient, uint256 amount) public pure override returns (bool) {
        revert("RetiredBioToken is not transferable");
    }
    

}




