import React from "react";
import ApisComponent from "../../Components/ApisComponent";
import BannerComponent from "../../Components/BannerComponent";
import ChargesComponent from "../../Components/ChargesComponent";
import FooterComponent from "../../Components/FooterComponent";
import FourCardsComponent from "../../Components/FourCardsComponent";
import Prebuilt from "../../Components/Prebuilt-Component";
import RateComponent from "../../Components/RateComponent";
import SeamlessPayment from "../../Components/SeamlessPayment";
import SettlementComponent from "../../Components/SettlementComponent";
import WhoUseComponent from "../../Components/SettlementComponent";

const Homepage = () => {
  return (
    <>
      <BannerComponent />
      <RateComponent />
      <SeamlessPayment />
      <ApisComponent />
      <ChargesComponent />
      <Prebuilt />
      <FourCardsComponent />
      <SettlementComponent />
      <FooterComponent />
    </>
  );
};

export default Homepage;
