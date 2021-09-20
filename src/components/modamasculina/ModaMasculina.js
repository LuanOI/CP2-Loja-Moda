import React, {useState} from 'react';

import Capa from '../../img/imgmasculina/capamasculina.jpg';
import Calca from '../../img/imgmasculina/calca.jpg';
import Camiseta from '../../img/imgmasculina/camiseta.jpg';
import Camiseta1 from '../../img/imgmasculina/camiseta1.jpg';
import Camiseta3 from '../../img/imgmasculina/camiseta3.jpg';
import Camiseta4 from '../../img/imgmasculina/camiseta4.jpg';
import Camiseta5  from '../../img/imgmasculina/camiseta5.jpg';
import Camiseta6  from '../../img/imgmasculina/camiseta6.jpg';
import Camiseta7  from '../../img/imgmasculina/camiseta7.jpg';
import Camiseta8  from '../../img/imgmasculina/camiseta8.jpg';
import Camiseta9  from '../../img/imgmasculina/camiseta9.jpg';
import Camiseta10  from '../../img/imgmasculina/camiseta10.jpg';

import {StyledSection, Header, StyledSpam, StyledImage, StyledNovo } from './Styledmasculina';

const SemDisplay = {
  display: "none"
};

const Display = {
  display: "block"
};


export default () => {

  const [theme, setTheme] = useState(SemDisplay);
  
  const [isDark, setIsDark] = useState(false);
  
  const changeDisplay = () => {
    setIsDark(!isDark);
    setTheme(isDark ? Display : SemDisplay);
  };
  
  return(
    <>
      <StyledSection>
        <StyledImage>
          <StyledNovo>
            <img src={Capa} alt="Capa da pagina"></img>
          </StyledNovo>
        </StyledImage>
        <div>
          <img src={Calca} onClick={changeDisplay} alt='calça masculina'></img>
            <Header theme= {theme}>
              <h1>Calça Jeans</h1>
              <h2>Tamanhos Disponiveis:</h2>
              <p> P M G GG</p>
            </Header>
        </div>
        <div>
          <img src={Camiseta} onClick={changeDisplay} alt='camiseta masculina'></img>
            <StyledSpam theme= {theme}>
              <h1>Calça Jeans</h1>
              <h2>Tamanhos Disponiveis:</h2>
              <p> P M G GG</p>
            </StyledSpam>
        </div>

      </StyledSection>
    </>
  );
}