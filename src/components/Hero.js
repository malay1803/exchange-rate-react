import React, { useEffect, useState } from "react";
import { HeroText, HeroTime, HeroDiv } from "./Hero.style";

const Hero = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <HeroDiv>
        <HeroText>
          Currex Live
          <br />
          Exchange Rates
        </HeroText>
        <HeroTime>{`${("0" + date.getDate()).slice(
          -2
        )}th  ${date.toLocaleString("default", {
          month: "long",
        })}  ${date.getFullYear()}`}</HeroTime>
      </HeroDiv>
      <div></div>
    </>
  );
};

export default Hero;
