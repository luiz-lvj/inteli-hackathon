import React from "react";
// import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer"
// import bkg from "../images/background_v1.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const history = useNavigate();

  return (
    <div className="HomeStyle">
      <Header />
      <div className="TopHomeStyle">
        <div className="parallax"></div>
        <h1 className="SiteTitleStyle">Carbon Swap</h1>
        <br></br>
        <h3 className="SiteSubTitleStyle">
          The future of  <spam> Green </spam>  assets
        </h3>
      </div>
      <div className="BottomHomeStyle">
        {/* <BottomLStyle> */}
          <div className="CardStyle">
            <div className="TextCardStyle">Empresa</div>
            <div className="TextBoxStyle">Aqui você pode encontrar diversas empresas</div>
            <button className="OvalButton" onClick={() => history("/company")}>
              Descobrir Empresas
            </button>
          </div>
        {/* </BottomLStyle> */}
        {/* <BottomRStyle> */}
          <div className="CardStyle">
            <div className="TextCardStyle">Comprador</div>
            <div className="TextBoxStyle">Descubra diversos compradores</div>
            <button className="OvalButton">Saiba Mais </button>
          </div>
        {/* </BottomRStyle> */}
      </div>
      <Footer />
    </div>
  );
}

// const HomeStyle = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     background-image: url(${bkg});
//     height: 1000px;
//     background-size: 1600px;
//     align-items: center;
//     width: 100%;
// `;

// const TopHomeStyle = styled.div`
//   display: center;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 80%;
//   height: 360px;
//   margin-top: 100px;
// `;

// const SiteTitleStyle = styled.div`
//   font-size: 48pt;
//   letter-spacing: 1pt;
//   color: #ffffff;
//   font-weight: 700;
//   vertical-align: middle;
//   line-height: 100px;
//   margin-top: 50px;
// `;

// const SiteSubTitleStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 36pt;
//   letter-spacing: 4pt;
//   width: 60%;
//   color: #ffffff;
//   font-weight: 300;
//   vertical-align: middle;
// `;

// const BottomHomeStyle = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   background-color: #162327;
//   width: 100%;
//   height: 400px;
// `;

// const TextBoxStyle = styled.div`
//   width: 60%;
//   height: 30%;
//   font-size: 12pt;
//   font-weight: 300;
//   letter-spacing: 1pt;
//   text-align: center;
//   vertical-align: middle;
//   line-height: 40px;
//   color: #ffffff;
// `;

// const TextCardStyle = styled.div`
//   width: 60%;
//   font-size: 20pt;
//   font-weight: 700;
//   letter-spacing: 1pt;
//   text-align: center;
//   align-items: center;
//   vertical-align: middle;
//   line-height: 100px;
//   color: #ffffff;
// `;

// const BottomLStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-left: 15%;
//   width: 35%;
// `;

// const BottomRStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-right: 15%;
//   width: 35%;
// `;

// const OvalButton = styled.button`
//   margin-bottom: 5%;
//   border-radius: 30px;
//   width: 70%;
//   height: 12%;
//   font-size: 12pt;
//   font-weight: 600;
//   background-color: #ffffff;
//   color: #328d98;
//   :hover {
//     color: #162327;
//     transition: 0.3s;
//     cursor: pointer;
//   }
// `;

// const CardStyle = styled.div`
//   margin-top: 40px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   text-align: center;
//   align-items: center;
//   width: 90%;
//   height: 70%;
//   vertical-align: middle;
//   background-color: #1e3036;
//   box-shadow: 7px 7px 7px #212121;
//   border-radius: 40px;
//   border: 2px solid #ffffff;
//   :hover {
//     transform: translateY(-10px);
//     transition: transform 600ms;
//   }
// `;
