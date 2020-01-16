import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Container from '../../Components/Utils/Container/Container';
import FormAlbum from '../../Components/FormAlbum/FormAlbum';

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
