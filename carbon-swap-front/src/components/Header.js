import React from "react";
import styled from "styled-components";
import icon from "../images/logo_carbonswap_WHITE.png";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const HeaderHome = (props) => {
  const history = useNavigate();

  return (
    <Box>
      <LogoIMGStyle src={icon} alt="" />
      <LogoStyle onClick={() => history("/")}>carbonswap</LogoStyle>
      <MenuStyle>
        <ButtonStyle1 onClick={() => history("/market")}>MARKET</ButtonStyle1>
        <ButtonStyle onClick={() => history("/")}>
          Conecte sua carteira
        </ButtonStyle>
        <ButtonStyle onClick={() => history("/send")}>
          Traga seus Tokens
        </ButtonStyle>
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
  right: 0 !important;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ffffff;
  min-width: 100px;
  background: rgb(22, 35, 39, 0.8);
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
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  letter-spacing: 3pt;
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
  left: 35%;
  height: 80px;
  width: 57%;
`;

const ButtonStyle = styled.button`
  white-space: nowrap;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  background: #328d98;
  border: 50px;
  border-radius: 500px;
  font-size: 14px;
  font-weight: 600;
  line-height: 60px;
  vertical-align: middle;
  color: #ffffff;
  letter-spacing: 1pt;
  :hover {
    color: #162327;
    transition: 0.3s;
    cursor: pointer;
  }
  :focus {
    background: #ffffff;
    color: #328d98;
    border: 0px;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
      0.1s padding ease-in-out;
  }
`;

const ButtonStyle1 = styled.button`
  margin-top: 7.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;
  height: 45px;
  margin-right: 10%;
  background: transparent;
  border: 50px;
  border-radius: 500px;
  font-size: 14px;
  font-weight: 600;
  line-height: 60px;
  vertical-align: middle;
  color: #ffffff;
  letter-spacing: 1pt;
  :hover {
    color: #328d98;
    transition: 0.3s;
    cursor: pointer;
  }
  :focus {
    border: 0px;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
      0.1s padding ease-in-out;
  }
`;
