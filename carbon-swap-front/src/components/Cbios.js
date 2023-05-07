import React from 'react';
import makeStyles from 'styled-components';
import Header from "./Header";
import bkg from '../images/background_v1.jpeg';
import bra from '../images/braflag.jpeg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "rgb(22, 35, 39)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: "white",
    color: 'white',
}));

function createData(
    bid: number,
    bid_size: number,
    ask: number,
    ask_size: number,
  ) {
    return { bid, bid_size, ask, ask_size };
  }
  
  const rows = [
    createData(159, 6.0, 24, 4.0),
    createData(237, 9.0, 37, 4.3),
    createData(262, 16.0, 24, 6.0),
    createData(305, 3.7, 67, 4.3),
    createData(356, 16.0, 49, 3.9),
  ];

export default function Cbios() {

    const history = useNavigate();

    const [inputs, setInputs] = useState({token: '', quantidade: '', price: ''});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // setInputs({
        //     'nome': name == 'nome' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'valor': name == 'valor' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <CbiosStyle>
            <Header/>
            <MainDiv>
                <LeftDiv>
                    <BoxInputs>
                        <BoxStatic>
                            <FlagStyle src={bra} alt="" />
                            <TitleStyle>CBIOS</TitleStyle>
                        </BoxStatic>
                        <ButtonBoxStyle onClick={() => history("/")}>Conectar Carteira</ButtonBoxStyle>
                        <MyForm>
                            <SelectStyle
                                type="text"
                                onWheel={(e) => e.target.blur()}
                                placeholder="Token a ser transferido"
                                name="token"
                                value={inputs.token}
                                onChange={handleChange}
                            >
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                            </SelectStyle>
                            <InputStyle
                                type="number"
                                onWheel={(e) => e.target.blur()}
                                placeholder="Quantidadade a ser transferida"
                                name="quantidade"
                                value={inputs.quantidade} 
                                onChange={handleChange}                            
                            />
                            <InputStyle
                                type="number"
                                onWheel={(e) => e.target.blur()}
                                placeholder="Preço em BTG Dol"
                                name="price"
                                value={inputs.price} 
                                onChange={handleChange}
                            />
                            <SendButtonSubmit type="submit">Emitir Ordem</SendButtonSubmit>
                        </MyForm>
                        <ButtonBoxStyle onClick={() => history("/send")}>Aposentar Tokens</ButtonBoxStyle>
                    </BoxInputs>
                </LeftDiv>
                <RightDiv>
                    <TableWrapBox>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell align="right">Bid&nbsp;(BTG Dol)</StyledTableCell>
                                    <StyledTableCell align="right">Size&nbsp;(tokens)</StyledTableCell>
                                    <StyledTableCell align="right">Ask&nbsp;(BTG Dol)</StyledTableCell>
                                    <StyledTableCell align="right">Size&nbsp;(tokens)</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell align="right">{row.bid}</StyledTableCell>
                                    <StyledTableCell align="right">{row.bid_size}</StyledTableCell>
                                    <StyledTableCell align="right">{row.ask}</StyledTableCell>
                                    <StyledTableCell align="right">{row.ask_size}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TableWrapBox>
                </RightDiv>
            </MainDiv>
        </CbiosStyle>
    );
};

const CbiosStyle = makeStyles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 1000px;
    background-size: 1600px;
    align-items: center;
    width: 100%;
`;

const MainDiv = makeStyles.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 90px;
`;

const LeftDiv = makeStyles.div`
    display: center;
    flex-direction: column;
    justify-content: space-between;
    height: 600px;
    width: 40%;
`;

const RightDiv = makeStyles.div`
    background: white;
    display: center;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 60px 0px 0px 60px;
    height: 600px;
    width: 60%;
`;

const TableWrapBox = makeStyles.div`
    display: center;
    flex-direction: column;
    justify-content: space-between;
    margin: 35px 0px 0px 35px;
    height: 100%;
    width: 90%;
`;

const BoxInputs = makeStyles.div`
    display: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(256,256,256,0.5);
    margin: 0px 0px 0px 20px;
    border-radius: 60px;
    border: 4px solid #FFFFFF;
    height: 100%;
    width: 90%;
`;

const BoxStatic= makeStyles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 8%;
    height: 20%;
`;

const TitleStyle = makeStyles.div`
    width: 60%;
    height: 40px;
    margin-bottom: 30px;
    font-size: 28pt;
    font-weight: 900;
    text-align: center;
    letter-spacing: 1pt;
    vertical-align: middle;
    line-height: 70px; 
    color: #162327;
`;

const FlagStyle = makeStyles.img`
    width: 15%;
    margin-bottom: 10px;
`;

const MyForm = makeStyles.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 4%;
    height: 40%;
`;

const InputStyle = makeStyles.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 14pt;
    font-weight: 800;
    color: #162327;
    text-indent: 40px;
    letter-spacing: 1pt;
    vertical-align: middle;
    background-color: rgb(256,256,256,0.5);
    border: 3px solid white;
    border-radius: 30px;
    height: 40px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background-color: rgb(22,35,39,0.5);
        color: #FFFFFF;
        border: 3px solid #162327;
    } 
    ::-webkit-input-placeholder {
        font-size: 14pt;
        color: #162327;
        font-weight: 600;
        opacity: 80%;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const SelectStyle = makeStyles.select`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 14pt;
    font-weight: 800;
    color: #162327;
    text-indent: 40px;
    letter-spacing: 1pt;
    vertical-align: middle;
    background-color: rgb(256,256,256,0.5);
    border: 3px solid white;
    border-radius: 30px;
    height: 40px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background-color: rgb(22,35,39,0.5);
        color: #FFFFFF;
        border: 3px solid #162327;
    } 
    ::-webkit-input-placeholder {
        font-size: 14pt;
        color: #162327;
        font-weight: 300;
        opacity: 50%;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const SendButtonSubmit = makeStyles.button`
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    background: #FFFFFF;
    border: 50px;
    border-radius: 500px;
    font-size: 14pt;
    font-weight: 900;
    line-height: 40px;
    vertical-align: middle;
    color: #328d98;
    letter-spacing: 1pt;
    margin-top: 10px;
    :hover {
        background-color: #162327;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const ButtonBoxStyle = makeStyles.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    width: 80%;
    height: 40px;
    margin-top: 4%;
    background: #328d98;
    border: 50px;
    border-radius: 500px;
    font-size: 14pt;
    font-weight: 600;
    line-height: 60px;
    vertical-align: middle;
    color: #FFFFFF;
    letter-spacing: 1pt;
    :hover {
        background-color: #162327;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        background: #FFFFFF;
        color: #328d98;
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;