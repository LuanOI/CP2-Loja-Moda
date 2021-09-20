import React, { useState } from 'react';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

import carrocel from '../../img/imghome/carrocel.jpg';
import carrocel2 from '../../img/imghome/carrocel2.jpg';
import carrocel3 from '../../img/imghome/carrocel3.jpg';
import carrocel4 from '../../img/imghome/carrocel4.jpg';
import carrocel5 from '../../img/imghome/carrocel5.jpg';
import carrocel6 from '../../img/imghome/carrocel6.jpg';
import carrocel8 from '../../img/imghome/carrocel8.jpg';
import carrocel9 from '../../img/imghome/carrocel9.jpg';
import carrocel10 from '../../img/imghome/carrocel10.jpg';
import carrocel11 from '../../img/imghome/carrocel11.jpg';
import carrocel12 from '../../img/imghome/carrocel12.jpg';
import carrocel13 from '../../img/imghome/carrocel13.jpg';
import carrocel14 from '../../img/imghome/carrocel14.jpg';

import {StyledCarrocelContainer, StyledImageContainer, StyledArrowContainer, StyledImage } from './Stylehome';



const imagens =[carrocel13,carrocel,carrocel14,carrocel2,carrocel3,carrocel4,
  carrocel5,carrocel6,carrocel8,carrocel9,carrocel10,carrocel11,carrocel12,
];

const Carrocel = () => {
  const [mudarImageIndex, setMudarImageIndex]= useState(0);

  const nextImage = () =>{
      setMudarImageIndex(primeiroIndex => primeiroIndex + 1);
  };

  const preImage = ()=>{
    setMudarImageIndex(primeiroIndex => primeiroIndex - 1);
  };

  return(
    <StyledCarrocelContainer>
      {mudarImageIndex !== 0 && (
         <StyledArrowContainer onClick={preImage}>
        <MdKeyboardArrowLeft />
      </StyledArrowContainer>
      )}
      <StyledImageContainer>
        <StyledImage src={imagens[mudarImageIndex]}/>
      </StyledImageContainer>
      {mudarImageIndex !== imagens.length -1 && ( 
      <StyledArrowContainer onClick={nextImage}>
        <MdKeyboardArrowRight />
      </StyledArrowContainer>
      )} 
    </StyledCarrocelContainer>
  );
}

export default Carrocel;