import React from "react";
import styled from 'styled-components';
// import icon from '../images/logo_TRANSPARENT.png'
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const HeaderHome=(props) => {
    
    const history = useNavigate();
    
        return (
            <Box>
                {/* <LogoIMGStyle src={icon} alt="" /> */}
                <img src="images/logoverde.jpg" alt="Logo da carbonswap"></img>
                <LogoStyle onClick={() => history("/")}>carbonswap</LogoStyle>
                <MenuStyle>
                    <ButtonStyle1 onClick={() => history("/")}>MARKET</ButtonStyle1>
                    <ButtonStyle onClick={() => history("/")}>Conecte sua carteira</ButtonStyle>
                    <ButtonStyle onClick={() => history("/")}>Traga seus Tokens</ButtonStyle>
                </MenuStyle>
            </Box>
    );
};

export default HeaderHome;

export const Box = styled.div`
    position: fixed;
    display: fixed;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0 !important;
    height: 60px;
    width: 100%;
    min-width: 100px;
    background: rgb(47, 47, 47, 0.9);
    flex-direction: row;
    bottom: 0;
    padding-left: 10%;
    padding-right: 7%;
    z-index: 1;
`;

const LogoStyle = styled.div`
    position: fixed;
    left: 9%;
    height: 40px;
    margin-top: 10px;
    font-size: 20pt;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    line-height: 40px; 
    letter-spacing: 3pt;
    background: -webkit-linear-gradient(60deg, #41FFB1, #3FBBFE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    :hover {
        cursor: pointer;
    }
`;

const LogoIMGStyle = styled.img`
    position: fixed;
    left: 5%;
    margin-top: 12px;
    height: 36px;
    :hover {
        cursor: pointer;
    }
`;

const MenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 30%;
    height: 80px;
    width: 45%;
`;

const ConnectStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 82%;
    margin-top: 10px;
    height: 50px;
    width: 16%;
    background-image: linear-gradient(60deg, #41FFB1, #3FBBFE);
    border-radius: 20px;
    border: 0px solid #2F2F2F;
    font-size: 14pt;
    font-weight: 600;
    color: #212121;
    :hover {
        color: #FFFFFF;
        background: linear-gradient(#2F2F2F, #2F2F2F) padding-box,
                    linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
        border-radius: 20px;
        border: 2px solid transparent;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        border: 2px solid #FFFFFF;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const ButtonStyle = styled.button`
    white-space: nowrap;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 40px;
    background: #328d98;
    border: 50px;
    border-radius: 500px;
    font-size: 14px;
    font-weight: 600;
    line-height: 60px;
    vertical-align: middle;
    color: #FFFFFF;
    letter-spacing: 1pt;
    :hover {
        color: #212121;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        background: #212121;
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const ButtonStyle1 = styled.button`
    margin-top: 7.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14%;
    height: 45px;
    background: transparent;
    border: 50px;
    border-radius: 500px;
    font-size: 14px;
    font-weight: 600;
    line-height: 60px;
    vertical-align: middle;
    color: #FFFFFF;
    letter-spacing: 1pt;
    :hover {
        color: #212121;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        background: #212121;
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;