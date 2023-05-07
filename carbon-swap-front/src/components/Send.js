import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import bkg from '../images/background_v1.jpeg';
import { useState } from "react";

export default function Send() {

    const [inputs, setInputs] = useState({token: '', quantidade: '', documento: ''});

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
        <SendStyle>
            <Header/>
            <TopSendStyle>
                <SiteTitleStyle>TRAGA SEUS TOKENS</SiteTitleStyle>
            </TopSendStyle>
            <BottomSendStyle>
                <BottomBoxStyle>
                    <SendButtonStyle>Conecte sua carteira</SendButtonStyle>
                    <MyForm>
                        <InputText><u>Token:</u></InputText>
                        <SelectStyle
                            type="text"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Token a ser transferido"
                            name="token"
                            value={inputs.token}
                            onChange={handleChange}
                        >
                            <option value="BRA">cBios</option>
                            <option value="USA">USA</option>
                            <option value="EUR">EUR</option>
                        </SelectStyle>
                        <InputText><u>Quantidade:</u></InputText>
                        <InputStyle
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Quantidadade a ser transferida"
                            name="quantidade"
                            value={inputs.quantidade} 
                            onChange={handleChange}                            
                        />
                        <InputText><u>Documento:</u></InputText>
                        <InputFileStyle
                            type="file"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Documento"
                            name="documento"
                            value={inputs.documento} 
                            onChange={handleChange}
                        />
                        <SendButtonSubmit type="submit">Enviar Tokens</SendButtonSubmit>
                    </MyForm>
                </BottomBoxStyle>
            </BottomSendStyle>
        </SendStyle>
    );
};

const SendStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 100vh;
    background-size: 100%;
    align-items: center;
    width: 100vw;
`;

const TopSendStyle = styled.div`
    display: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 60px;
`;

const SiteTitleStyle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 28pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    font-weight: 500;
    vertical-align: middle;
    line-height: 100px; 
    margin-top: 60px;
`;

const BottomSendStyle = styled.div`
    display: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #162327;
    width: 100%;
    height: 100%;
    margin-top: 100px;
`;

const BottomBoxStyle = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 80%;
    height: 90%;
    border-radius: 60px;
    border: 3px solid white;
    vertical-align: middle;
    background-color: #1E3036;
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;
    padding-bottom: 25px;
`;

const InputStyle = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 14pt;
    font-weight: 800px;
    color: white;
    text-indent: 40px;
    letter-spacing: 1pt;
    vertical-align: middle;
    line-height: 10px;
    background-color: #162327;
    border: 1px solid white;
    border-radius: 30px;
    height: 40px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background: #1E3036;
        border: 1px solid #328d98;
    } 
    ::-webkit-input-placeholder {
        font-size: 14pt;
        color: #FFFFFF;
        font-weight: 300;
        opacity: 50%;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const InputFileStyle = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 14pt;
    font-weight: 800px;
    color: white;
    text-indent: 40px;
    letter-spacing: 1pt;
    vertical-align: middle;
    line-height: 10px;
    background-color: #162327;
    border: 1px solid white;
    border-radius: 30px;
    height: 40px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background: #1E3036;
        border: 1px solid #328d98;
    } 
    ::-webkit-input-placeholder {
        font-size: 14pt;
        color: #FFFFFF;
        font-weight: 300;
        opacity: 50%;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::file-selector-button {
        font-size: 14pt;
        background: #1E3036;
        color: white;
        margin-top: 0.3em;
        border: thin solid grey;
        border-radius: 15px;
        width: 200px;
        cursor: pointer;
    }
`;

const SelectStyle = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 14pt;
    font-weight: 800px;
    color: white;
    text-indent: 40px;
    letter-spacing: 1pt;
    vertical-align: middle;
    background-color: #162327;
    border: 1px solid white;
    border-radius: 30px;
    height: 40px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background: #1E3036;
        border: 1px solid #328d98;
    } 
    ::-webkit-input-placeholder {
        font-size: 14pt;
        color: #FFFFFF;
        font-weight: 300;
        opacity: 50%;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const InputText = styled.div`
    display: flex;
    font-size: 12pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    width: 100px;
    font-weight: 500;
    margin-top: 10px;
    margin-right: 65%;
    line-height: 30px; 
`;

const SendButtonStyle = styled.button`
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 40px;
    background: #FFFFFF;
    border: 50px;
    border-radius: 500px;
    font-size: 14pt;
    font-weight: 900;
    line-height: 40px;
    vertical-align: middle;
    color: #328d98;
    letter-spacing: 1pt;
    margin-top: 20px;
    :hover {
        color: #162327;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const SendButtonSubmit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    background: #328d98;
    border: 50px;
    border-radius: 500px;
    font-size: 14pt;
    font-weight: 900;
    line-height: 40px;
    vertical-align: middle;
    color: #FFFFFF;
    letter-spacing: 1pt;
    margin-top: 20px;
    :hover {
        color: #162327;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

