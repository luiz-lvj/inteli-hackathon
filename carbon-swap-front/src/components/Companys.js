import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import bkg from '../images/background_v1.jpeg';

export default function Company() {

    return (
        <CompanyStyle>
            <TopCompanyStyle>
                <SiteTitleStyle>Empresas</SiteTitleStyle>
            </TopCompanyStyle>
            <BottomCompanyStyle>
                <div>
                    <button onClick={handleClick}>Mostrar lista</button>
                    {lista}
                </div>
            </BottomCompanyStyle>
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
    height: 400px;
    margin-top: 100px;
`;

const [expandido, setExpandido] = useState(false);

const handleClick = () => {
  setExpandido(!expandido);
};

const lista = expandido ? (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
) : null;

