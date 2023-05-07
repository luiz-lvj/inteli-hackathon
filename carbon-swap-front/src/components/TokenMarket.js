import { useState } from "react";
import { connectMetamask } from "../utils/connectMetamask";
import { ethers } from "ethers";
import { CREDIT_TOKEN_ABI } from "../artifacts/Biotoken";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {  LoadingButton } from "@mui/lab";

export default function TokenMarket(){

    const [web3Provider, setWeb3Provider] = useState(null);
    const [web3Signer, setWeb3Signer] = useState(null);
    const [address, setAddress] = useState(null);
    
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [deadline, setDeadline] = useState(null);
    const [loading, setLoading] = useState(false);
    const [creditAddress, setCreditAddress] = useState("");
    
    const [loadingOrder, setLoadingOrder] = useState(false);

    const [openOrder, setOpenOrder] = useState(false);




    async function connect(){
        const connection = await connectMetamask();
        console.log(connection)
        if(connection){
            setWeb3Provider(connection.web3Provider);
            setWeb3Signer(connection.web3Signer);
            setAddress(connection.address);
        }
    }

    function getTimestamp(objDate){
        if(!objDate){
            return 0;
        }
        const month = objDate["$M"] + 1;
        const day = objDate["$D"];
        const year = objDate["$y"];
        const date = new Date(year, month, day);
        const dateNext = new Date(date.getTime() + 24*60*60*1000);
        return dateNext.getTime()/1000
    }

    async function signMessage(){
        try{
            if(!web3Signer){
                alert("Conecte sua carteira!");
                return;
            }
            setLoading(true);

            const creditContract = new ethers.Contract(creditAddress, CREDIT_TOKEN_ABI, web3Signer);
            const [nonce, name, version, chainId] = await Promise.all([
                creditContract.nonncesSell(address),
                creditContract.name(),
                "1",
                creditContract.getChainId()
            ]);

            const signedMessage = await web3Signer._signTypedData(
                {
                    name, 
                    version,
                    chainId,
                    verifyingContract: creditContract.address
                },
                {
                    Sell: [
                        {
                            name: "owner",
                            type: "address"
                        },
                        {
                            name: "price",
                            type: "uint256"
                        },
                        {
                            name: "quantity",
                            type: "uint256"
                        },
                        {
                            name: "nonce",
                            type: "uint256"
                        },
                        {
                            name: "deadline",
                            type: "uint256"
                        }
                    ]
                }, {
                    owner: address,
                    price: ethers.utils.parseEther(price),
                    quantity: ethers.BigNumber.from(quantity),
                    nonce: nonce,
                    deadline: getTimestamp(deadline)
                }
            );

            const { v, r, s } = ethers.utils.splitSignature(signedMessage);

            const body = {
                owner: address,
                price: price,
                quantity: quantity,
                deadline: getTimestamp(deadline),
                v,
                r,
                s
            }


        } catch(err){
            console.log(err);
            alert("")
        } finally{
            setLoading(false);
        }
    }

    return(
        <div>

            <button onClick={connect}>Conectar</button>
            <button onClick={signMessage}>Assinar Ordem de venda</button>

            <Dialog open={openOrder} onClose={() => setOpenOrder(false)}>
                <DialogTitle
                style={{"textAlign": "center", "color": "GrayText"}}
                >Poste sua ordem de venda no mercado</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Preencha os campos abaixo para gerar uma ordem de venda.
                    </DialogContentText>
                    <br/><br/>
                    <TextField
                    id="qtd-order"
                    label="Quantidade"
                    type="number"
                    value={quantity}
                    onChange={ e => setQuantity(e.target.value)}
                    />
                    <TextField
                    style={{
                        "marginLeft": "30px"
                    }}
                    id="price-per-token"
                    label="Preço por token"
                    type="number"
                    value={price}
                    onChange={ e => setPrice(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                        label="Validade da ordem"
                        value={deadline}
                        onChange={e => setDeadline(e)}
                        />
                    </LocalizationProvider>

                </DialogContent>
                <DialogActions>
                    <LoadingButton 
                    onClick={() => setOpenOrder(false)}>Cancelar</LoadingButton>
                    <LoadingButton 
                    loading={loadingOrder}
                    variant="contained"
                    onClick={signMessage}>Assinar Ordem</LoadingButton>
                </DialogActions>
            </Dialog>
            
        </div>
    );
}