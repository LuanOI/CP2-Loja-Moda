import React from 'react';
import styled from 'styled-components';

const StyledFooter= styled.footer`
   width: auto;
   text-align: center;
   background: linear-gradient(hsl(108, 48%, 74%), transparent);
   padding:0.2%;
   p {
   font-size: 15px;
   color: rgb(0, 0, 0);
   }
`;

export default () => {

   return(
      <>
          <StyledFooter>
            <p> Copyright &copy; Grupo Panace I.A 2021 </p>
         </StyledFooter>
      </>
)}