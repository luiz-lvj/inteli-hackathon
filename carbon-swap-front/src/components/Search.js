import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import bkg from '../images/background_v1.jpeg';
import bra from '../images/braflag.jpeg'
import usa from '../images/usaflag.jpeg'
import eu from '../images/euflag.jpeg'

export default function Search() {

    return (
        <SearchStyle>
            <Header/>
            <TopSearchStyle>
                <SiteTitleStyle>CONHEÇA OS TOKENS</SiteTitleStyle>
            </TopSearchStyle>
            <BottomSearchStyle>
                <BottomLStyle>
                    <CardStyle>
                        <TitleCardStyle>CBIOS</TitleCardStyle>
                        <ContentCardStyle>Tokens no Mercado: </ContentCardStyle>
                        <ContentCardStyle>Tokens Aposentados: </ContentCardStyle>
                        <FlagStyle src={bra} alt="" />
                    </CardStyle>
                </BottomLStyle>
                <BottomCStyle>
                    <CardStyle>
                        <TitleCardStyle>LCFS</TitleCardStyle>
                        <ContentCardStyle>Tokens no Mercado: </ContentCardStyle>
                        <ContentCardStyle>Tokens Aposentados: </ContentCardStyle>
                        <FlagStyle src={usa} alt="" />
                    </CardStyle>
                </BottomCStyle>
                <BottomRStyle>
                    <CardStyle>
                        <TitleCardStyle>RED</TitleCardStyle>
                        <ContentCardStyle>Tokens no Mercado: </ContentCardStyle>
                        <ContentCardStyle>Tokens Aposentados: </ContentCardStyle>
                        <FlagStyle src={eu} alt="" />
                    </CardStyle>
                </BottomRStyle>
            </BottomSearchStyle>
        </SearchStyle>
    );
};

const SearchStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 100%;
    background-size: 100%;
    align-items: center;
    width: 100%;
`;

const TopSearchStyle = styled.div`
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

const BottomSearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #162327;
    width: 100%;
    height: 400px;
    margin-top: 100px;
`;

const BottomLStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 4%;
    width: 28%;
`;

const BottomRStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 4%;
    width: 28%;
`;

const BottomCStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 4%;
    margin-left: 4%;
    width: 28%;
`;

const CardStyle = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 70%;
    vertical-align: middle;
    background-color: #1E3036;
    box-shadow: 7px 7px 7px #212121;
    border-radius: 40px;
    border: 2px solid #FFFFFF;
    :hover {
        transform: translateY(-10px);
        transition: transform 600ms;
    }
`;

const TitleCardStyle = styled.div`
    width: 60%;
    font-size: 20pt;
    font-weight: 700;
    letter-spacing: 1pt;
    text-align: center;
    align-items: center;
    vertical-align: middle;
    line-height: 20px; 
    color: #FFFFFF;
`;

const FlagStyle = styled.img`
    margin-bottom: 10px;
    height: 30px;
`;

const ContentCardStyle = styled.div`
    width: 60%;
    height: 30%;
    font-size: 12pt;
    font-weight: 300;
    letter-spacing: 1pt;
    text-align: center;
    vertical-align: middle;
    line-height: 40px; 
    color: #FFFFFF;
`;