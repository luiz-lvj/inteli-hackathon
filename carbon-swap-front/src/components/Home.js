import React from 'react';
import styled from 'styled-components';
import Header from "./Header";

export default function Home() {

    return (
        <HomeStyle>
            <Header/>
            <TopHomeStyle>
            </TopHomeStyle>
        </HomeStyle>
    );
};

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: red;
    height: 1550px;
    background-size: 1600px;
    align-items: center;
    width: 100%;
`;

const TopHomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 360px;
    margin-top: 100px;
`;
