import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import bkg from '../images/background_v1.jpeg';

export default function Home() {

    return (
        <HomeStyle>
            <Header/>
            <TopHomeStyle>
            <SiteTitleStyle>Carbon Swap</SiteTitleStyle><br></br>
            <SiteSubTitleStyle>Aqui vai uma mensagem bem legal para vocês compradores</SiteSubTitleStyle>
            </TopHomeStyle>
            <BottomHomeStyle>
                <BottomLStyle>
                    <NumDataStyle>
                        <NumBoxStyle>Empresa</NumBoxStyle>
                        <TextBoxStyle>Aqui você vai fazer pipipi popopo</TextBoxStyle>
                        <OvalButton>Pipipi popopo</OvalButton>
                    </NumDataStyle>
                </BottomLStyle>
                <BottomRStyle>
                    <NumDataStyle>
                        <NumBoxStyle>Comprador</NumBoxStyle>
                        <TextBoxStyle>Aqui você vai fazer pipipi popopo</TextBoxStyle>
                        <OvalButton>Pipipi popopo</OvalButton>
                    </NumDataStyle>
                </BottomRStyle>
            </BottomHomeStyle>
        </HomeStyle>
    );
};

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 1000px;
    background-size: 1600px;
    align-items: center;
    width: 100%;
`;

const TopHomeStyle = styled.div`
    display: center;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 360px;
    margin-top: 100px;
`;

const SiteTitleStyle = styled.div`
    font-size: 48pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    font-weight: 700;
    vertical-align: middle;
    line-height: 100px; 
`;

const SiteSubTitleStyle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 36pt;
    letter-spacing: 4pt;
    width: 60%;
    color: #FFFFFF;
    font-weight: 300;
    vertical-align: middle;
`;

const BottomHomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #00ffa8;
    width: 100%;
    height: 400px;
`;

const TextBoxStyle = styled.div`
    width: 60%;
    height: 90%;
    font-size: 20pt;
    font-weight: 400;
    letter-spacing: 1pt;
    text-align: center;
    vertical-align: middle;
    line-height: 40px; 
    color: #FFFFFF;
`;

const NumBoxStyle = styled.div`
    width: 60%;
    height: 50%;
    font-size: 24pt;
    font-weight: 700;
    letter-spacing: 1pt;
    text-align: center;
    align-items: center;
    vertical-align: middle;
    line-height: 100px; 
    color: #FFFFFF;
`;

const BottomLStyle = styled.div`
    margin-left: 4%;
    width: 50%;
`;

const BottomRStyle = styled.div`
    margin-right: 2%;
    width: 50%;
`;

const OvalButton = styled.button`
    margin-bottom: 8%;
    border-radius: 30px;
    width: 200px;
    height: 50px;
    background-colour: blue;
    color: red;
    font-size: 20px;
`;

const NumDataStyle = styled.div`
    margin-top: 40px;
    margin-left: 2.5%;
    margin-right: 2.5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 90%;
    height: 80%;
    vertical-align: middle;
    background-color: #328d98;
    box-shadow: 7px 7px 7px #212121;
    border-radius: 40px;
    border: 4px solid #212121;
    :hover {
        transform: translateY(-10px);
        transition: transform 600ms;
    }
`;
