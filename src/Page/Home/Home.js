import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Container from '../../Components/Utils/Container/Container';
import FormAlbum from '../../Components/FormAlbum/FormAlbum';
import Table from '../../Components/Table/Table';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    }
  }

  addAlbum = (album) => {
    this.setState({
      albums: [...this.state.albums, album],
    });
  }

  deleteAlbum = (indexAlbumDelete) => {
    this.setState({
      albums: this.state.albums.filter((album, index) => index !== indexAlbumDelete),
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <div className="col s6 left">
            <Table deleteAlbum={this.deleteAlbum} data={this.state.albums} />
          </div>
          <div className="col s6 right">
            <FormAlbum addAlbum={this.addAlbum} />
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
