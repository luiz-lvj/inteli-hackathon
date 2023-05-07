import React from "react";
// import styled from "styled-components";
import Header from "./Header";
// import bkg from "../images/background_v1.jpeg";
import bra from "../images/braflag.jpeg";
import usa from "../images/usaflag.jpeg";
import eu from "../images/euflag.jpeg";
import bra_photo from "../images/bkg_bra.png";
import us_photo from "../images/bkg_us.png";
import eur_photo from "../images/bkg_eur.png";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const history = useNavigate();

  return (
    <div className="SearchStyle">
      <Header />
      <div className="TopSearchStyle">
        <h1 className="SiteTitleStyleSearch">MERCADO</h1>
      </div>
      <div className="BottomSearchStyle">
        <div className="cardSearch" onClick={() => history("/")}>
          <img className="ImageCard" src={bra_photo} alt="" />
          <img className="FlagStyle" src={bra} alt="" />
          <h2 className="TitleCardStyle">CBIOS</h2>
          <h5 className="ContentCardStyle">Tokens no Mercado: </h5>
          <h5 className="ContentCardStyle">Tokens Aposentados: </h5>
        </div>
        <div className="cardSearch">
          <img className="ImageCard" src={us_photo} alt="" />
          <img className="FlagStyle" src={usa} alt="" />
          <h2 className="TitleCardStyle">LCFS</h2>
          <h5 className="ContentCardStyle">Tokens no Mercado: </h5>
          <h5 className="ContentCardStyle">Tokens Aposentados: </h5>
        </div>
        <div className="cardSearch">
          <img className="ImageCard" src={eur_photo} alt="" />
          <img className="FlagStyle" src={eu} alt="" />
          <h2 className="TitleCardStyle">RED</h2>
          <h5 className="ContentCardStyle">Tokens no Mercado: </h5>
          <h5 className="ContentCardStyle">Tokens Aposentados: </h5>
        </div>
      </div>
    </div>
  );
}

// const SearchStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background-image: url(${bkg});
//   height: 100%;
//   background-size: 100%;
//   align-items: center;
//   width: 100%;
// `;

// const TopSearchStyle = styled.div`
//   background-image: url(${bkg});
//   display: center;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;
//   height: 50px;
// `;

// const SiteTitleStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 28pt;
//   letter-spacing: 1pt;
//   color: #ffffff;
//   font-weight: 500;
//   vertical-align: middle;
//   line-height: 100px;
//   margin-top: 60px;
// `;

// const BottomSearchStyle = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     background-color: #162327;
//     width: 100%;
//     height: 560px;
//     margin-top: 100px;
// `;

// const BottomLStyle = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-left: 6%;
//     width: 26%;
// `;

// const BottomRStyle = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-right: 6%;
//     width: 26%;
// `;

// const BottomCStyle = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-right: 5%;
//     margin-left: 5%;
//     width: 26%;
// `;

// const CardStyle = styled.div`
//     margin-top: 40px;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     text-align: center;
//     align-items: center;
//     width: 100%;
//     height: 455px;
//     padding-bottom: 30px;
//     vertical-align: middle;
//     background-color: #1E3036;
//     box-shadow: 7px 7px 7px #212121;
//     border-radius: 40px;
//     border: 2px solid #FFFFFF;
//     :hover {
//         transform: translateY(-10px);
//         transition: transform 600ms;
//         background: #328d98;
//         cursor: pointer;
//         border: 5px solid #FFFFFF;
//     }
//     :onClick {
//         transform: translateX(32vm);
//     }
// `;

// const TitleCardStyle = styled.div`
//   width: 60%;
//   height: 40px;
//   margin-bottom: 30px;
//   font-size: 20pt;
//   font-weight: 700;
//   letter-spacing: 1pt;
//   text-align: center;
//   align-items: center;
//   vertical-align: middle;
//   line-height: 70px;
//   color: #ffffff;
// `;

// const FlagStyle = styled.img`
//   width: 15%;
//   margin-bottom: 10px;
// `;

// const ImageCard = styled.img`
//   border-radius: 40px 40px 0px 0px;
//   width: 100%;
//   margin-bottom: 30px;
// `;

// const ContentCardStyle = styled.div`
//   width: 60%;
//   height: 40px;
//   font-size: 14pt;
//   font-weight: 300;
//   letter-spacing: 1pt;
//   text-align: center;
//   vertical-align: middle;
//   line-height: 40px;
//   color: #ffffff;
// `;
