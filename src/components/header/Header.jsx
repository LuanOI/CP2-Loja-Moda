import React from 'react'
import Logo from '../../img/grupo/logo.png'
import Menu from '../menu/Menu'
import styled from 'styled-components';


const StyledHeader = styled.header`
   width: 100%;
   background-color: #48a048;
   height: 110px;
   img {
      height: 100px;
      width: 100px;
      padding: 10px;
   } 
`;

const Stylednovo = styled.div`
   display: flex;
   justify-content:center;
   p {
   margin:0;
   padding-top:2rem;
   font-size:30px;
   font-weight:bold;
   }
`;

export default () => {

   return (
      <> 
         <section> 
            <StyledHeader>
               <Stylednovo>
                  <img src={Logo} alt="logo do site"></img>
                  <p> Loja de Moda Panace IA</p>
               </Stylednovo>
            </StyledHeader>
            <Menu/>
            
         </section>  
      </>
   )
}