import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Facebook } from '../src/assets/images/icon-facebook.svg'
import { ReactComponent as Instagram } from '../src/assets/images/icon-instagram.svg'

import { ReactComponent as Pinterest } from '../src/assets/images/icon-pinterest.svg'
import mySvg from '../src/assets/images/pattern-hills.svg'
const Icons = styled.div`
display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    margin: 0 auto;
 `  
const Footer = () =>{
    return(
        <div style={{ backgroundImage: `url(${mySvg})`,backgroundSize:'cover',height:'20%',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}} >
            <Icons className="icons" style={{marginTop:'30px'}}>
        <a className="iconh" href=""><Facebook/></a>
        <a className="iconh" href=""> <Instagram/></a>
        <a className="iconh" href=""> <Pinterest/></a>
        </Icons>
        <div class="attribution" style={{textAlign:'center'}}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Raul Sanz</a>.
        </div>
        </div >
    )
}
export default Footer