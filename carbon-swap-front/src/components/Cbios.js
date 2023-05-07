import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import bkg from '../images/background_v1.jpeg';
import { useNavigate } from "react-router-dom";

export default function Cbios() {

    const history = useNavigate();

    return (
        <CbiosStyle>
            <Header/>
        </CbiosStyle>
    );
};

const CbiosStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${bkg});
    height: 1000px;
    background-size: 1600px;
    align-items: center;
    width: 100%;
`;

