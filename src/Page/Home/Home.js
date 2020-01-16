import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Container from '../../Components/Utils/Container/Container';
import FormAlbum from '../../Components/FormAlbum/FormAlbum';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      albuns: [],
    }
  }

  addAlbum = (album) => {
    this.setState({
      albuns: [...this.state.albuns, album],
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <div className="col s6 right">
            <FormAlbum addAlbum={this.addAlbum} />
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
