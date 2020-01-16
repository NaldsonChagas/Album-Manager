import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import FormAlbum from '../FormAlbum/FormAlbum';

function Home() {
  return (
    <Fragment>
      <Header />
      <Container>
        <div className="col s6 right">
          <FormAlbum />
        </div>
      </Container>
    </Fragment>

  );
}

export default Home;
