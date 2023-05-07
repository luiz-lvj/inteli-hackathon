import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import { useState } from 'react';
import bkg from '../images/background_v1.jpeg';
import Footer from './Footer';

export default function Company() {

    const [expandido1, setExpandido1] = useState(false);

    const handleClick1 = () => {
        setExpandido1(!expandido1);
    };

    const [expandido2, setExpandido2] = useState(false);

    const handleClick2 = () => {
        setExpandido2(!expandido2);
    };

    const [expandido3, setExpandido3] = useState(false);

    const handleClick3 = () => {
        setExpandido3(!expandido3);
    };
      
    const lista1 = expandido1 ? (
        <ul>
            <ListaStyle>Item 1</ListaStyle>
            <ListaStyle>Item 2</ListaStyle>
            <ListaStyle>Item 3</ListaStyle>
        </ul>
    ) : null;

    const lista2 = expandido2 ? (
        <ul>
          <ListaStyle>Item 1</ListaStyle>
          <ListaStyle>Item 2</ListaStyle>
          <ListaStyle>Item 3</ListaStyle>
        </ul>
      ) : null;

      const lista3 = expandido3 ? (
        <ul>
          <ListaStyle>Item 1</ListaStyle>
          <ListaStyle>Item 2</ListaStyle>
          <ListaStyle>Item 3</ListaStyle>
        </ul>
      ) : null;

    return (
        <CompanyStyle>
            <Header/>
            <TopCompanyStyle>
                <SiteTitleStyle>Empresas</SiteTitleStyle>
            </TopCompanyStyle>
            <BottomCompanyStyle>
                <BottomLStyle>
                    <ButtonStyle onClick={handleClick1} style={{backgroundColor: expandido1 ? "white" : "#328d98", color: expandido1 ? "black" : "white"}}>Mostrar lista1</ButtonStyle>
                    <ButtonStyle onClick={handleClick2} style={{backgroundColor: expandido2 ? "white" : "#328d98", color: expandido2 ? "black" : "white"}}>Mostrar lista2</ButtonStyle>
                    <ButtonStyle onClick={handleClick3} style={{backgroundColor: expandido3 ? "white" : "#328d98", color: expandido3 ? "black" : "white"}}>Mostrar lista3</ButtonStyle>
                </BottomLStyle>
                <BottomRStyle>
                    {lista1}
                    {lista2}
                    {lista3}
                </BottomRStyle>
            </BottomCompanyStyle>
            <Footer/>
        </CompanyStyle>
    );
};

const CompanyStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 100%;
    background-size: 100%;
    align-items: center;
    width: 100%;
`;

const TopCompanyStyle = styled.div`
    display: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
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

const BottomCompanyStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #162327;
    width: 100%;
    height: 360px;
    margin-top: 100px;
`;

const BottomLStyle = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin-left: 7%;
   width: 40%;
`;

const BottomRStyle = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin-right: 7%;
   width: 40%;
`;

const ButtonStyle = styled.button`
    display: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #328d98;
    border: 50px;
    border-radius: 500px;
    font-size: 14pt;
    font-weight: 500;
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

const ListaStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #328d98;
    border: 50px;
    border-radius: 500px;
    font-size: 14pt;
    font-weight: 500;
    line-height: 10px;
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