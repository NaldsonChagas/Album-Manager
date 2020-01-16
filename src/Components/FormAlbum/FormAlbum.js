import React from 'react';

class htmlFormAlbum extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      band: '',
      genre: '',
      releaseYear: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              name="title"
              className="validate"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <label htmlFor="title" className="input-field">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="band"
              type="text"
              name="band"
              className="validate"
              onChange={this.handleChange}
              value={this.state.band} />
            <label htmlFor="band" className="input-field">Band</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="genre"
              type="text"
              name="genre"
              className="validate"
              onChange={this.handleChange}
              value={this.state.gerne} />
            <label htmlFor="genre" className="input-field">Genre</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="releaseYear"
              type="number"
              name="releaseYear"
              className="validate"
              onChange={this.handleChange}
              value={this.state.releaseYear} />
            <label htmlFor="releaseYear" className="releaseYear">Release Year</label>
          </div>
        </div>
        <button className="waves-effect waves-light btn red darken-4" type="button">Salvar</button>
      </form>
    );
  }
}

export default htmlFormAlbum;