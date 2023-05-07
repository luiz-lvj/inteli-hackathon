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
                        <InputText>Token:</InputText>
                        <InputStyle
                            type="text"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Token a ser transferido"
                            name="token"
                            value={inputs.token}
                            onChange={handleChange}
                        />
                        <InputText>Quantidade:</InputText>
                        <InputStyle
                            type="text"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Quantidadade a ser transferida"
                            name="quantidade"
                            value={inputs.quantidade} 
                            onChange={handleChange}                            
                        />
                        <InputText>Documento:</InputText>
                        <InputStyle
                            type="text"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Documento"
                            name="documento"
                            value={inputs.documento} 
                            onChange={handleChange}
                        />
                        <SendButtonSubmit type="submit">Enviar</SendButtonSubmit>
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
    height: 100%;
    background-size: 100%;
    align-items: center;
    width: 100%;
`;

const TopSendStyle = styled.div`
    display: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 30px;
`;

const SiteTitleStyle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 32pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    font-weight: 500;
    vertical-align: middle;
    line-height: 100px; 
    margin-top: 50px;
`;

const BottomSendStyle = styled.div`
    display: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    height: 500px;
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
    height: 80%;
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
    padding-bottom: 40px;
`;

const InputStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    font-size: 12pt;
    font-weight: 800px;
    color: white;
    text-indent: 40px;
    letter-spacing: 1pt;
    vertical-align: middle;
    line-height: 10px;
    
    background: linear-gradient(#2A2A2A, #2A2A2A) padding-box,
                linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
    border: 2px solid transparent;
    border-radius: 30px;
    height: 80px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background: linear-gradient(#2f2f2f, #2f2f2f) padding-box,
                    linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
        border: 2px solid transparent;
    } 
    ::-webkit-input-placeholder {
        font-size: 20pt;
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
    textAlign: left;
    font-size: 12pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    font-weight: 500;
    vertical-align: center;
    line-height: 40px; 
`;

const SendButtonStyle = styled.button`
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 45px;
    background: #00DE92;
    border: 50px;
    border-radius: 500px;
    font-size: 12pt;
    font-weight: 600;
    line-height: 40px;
    vertical-align: middle;
    color: #FFFFFF;
    letter-spacing: 1pt;
    :hover {
        color: #002E1E;
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
    height: 45px;
    background: #00DE92;
    border: 50px;
    border-radius: 500px;
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    vertical-align: middle;
    color: #FFFFFF;
    letter-spacing: 1pt;
    :hover {
        color: #002E1E;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

