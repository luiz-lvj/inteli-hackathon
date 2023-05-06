import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import bkg from '../images/background_v1.jpeg';

export default function Send() {

    return (
        <SendStyle>
            <Header/>
        </SendStyle>
    );
};

const SendStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 1000px;
    background-size: 1600px;
    align-items: center;
    width: 100%;
`;

