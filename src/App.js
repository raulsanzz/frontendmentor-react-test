import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./footer";
import styled from 'styled-components'
const Timer = styled.div`
display: flex;
justify-content:space-evenly;
@media (max-width: 375px) {
justify-content:unset;
display:flex;
text-align:center;
}
`;
const Interval = styled.span`
background:#2b2c44;
    width: 100px;
    justify-content: center;
    align-items: center;
    height: 100px;
    position:relative;
    border-radius:5px;
    margin-bottom:10px;
    color:hsl(345, 95%, 68%);
    font-size: 50pt;
    font-weight: 900 ;
    display: flex;
    @media (max-width: 375px) {
      width:70px;
      height:70px;
      font-size: 20pt;
      margin-left:20px;
      &:before {
        content: "";
                  position: absolute;
                  bottom: 19px !important;
                  right: 2px;
                  border-top: 14px solid  #261f2d;
                  border-left: 0px solid transparent;
                  border-right: 14px solid transparent;
                  transform: rotate( -46deg);
                  transform-origin: 25% -85% 0;
        }
        &:after {
          content: "";
          position: absolute;
          bottom: 28px !important;
          right:156px !important;
          border-top: 14px solid #261f2d;
          border-right: 0px solid transparent;
          border-left: 14px solid transparent;
          -webkit-transform: rotate( 
      45.65deg
      );
        }
    }
    &:before {
  content: "";
            position: absolute;
            bottom: 32px;
            right: 2px;
            border-top: 14px solid  #261f2d;
            border-left: 0px solid transparent;
            border-right: 14px solid transparent;
            transform: rotate( -46deg);
            transform-origin: 25% -85% 0;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 41px;
    right: 97px ;
    border-top: 14px solid #261f2d;
    border-right: 0px solid transparent;
    border-left: 14px solid transparent;
    -webkit-transform: rotate( 
45.65deg
);
  }
`;
const ComingSoon = styled.div`
display: flex;
justify-content:center;
flex-direction:column;
height:80%;
width: 550px;
margin:0 auto;
color: hsl(0, 0%, 100%);
@media (max-width: 425px) {
  
  width:100% !important;
  }
`;
const Title = styled.h1`
  text-align: center;
  margin:0 auto;
  margin-bottom:60px !important;
`;
const InnerTimer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (20000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      < InnerTimer>
        <Interval>{timeLeft[interval]}</Interval>  <span style={{textTransform: 'uppercase'}}>{interval}{" "}</span>
      </ InnerTimer>
    );
  });
  return (
    <div className='main' style={{height:'100vh'}}>
      <ComingSoon>
      <Title>WE'RE LAUNCHING SOON</Title>
      <Timer>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}</Timer></ComingSoon>
      
    <Footer/>
    </div>
  );
}

export default App;
