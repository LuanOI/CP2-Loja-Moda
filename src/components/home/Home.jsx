import React, {Component} from 'react';
import Carrocel from './Carrocel';

import {Title, StyledContainer, Section} from './Stylehome';

class Home extends Component {
  render() {
      return(
        <>
          <Section>
            <Title>Sejam Bemvidos a Loja Moda Panace I.A</Title>
            <Title>“As pessoas mais jovens costumam abusar da criatividade e,
               se você for desse tipo, use-a com sabedoria. Seja estiloso e crie a sua moda!”</Title>
          </Section>
          <StyledContainer>
              <Carrocel />
          </StyledContainer>
        </>
      );
  }
}
export default Home;


