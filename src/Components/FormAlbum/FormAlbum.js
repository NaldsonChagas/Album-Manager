import React from 'react';

class FormAlbum extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {
      title: '',
      band: '',
      genre: '',
      releaseYear: '',
    }
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    this.props.addAlbum(this.state);
    this.setState(this.initialState);
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
              value={this.state.genre} />
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
            <label htmlFor="releaseYear" className="input-field">Release Year</label>
          </div>
        </div>
        <button className="waves-effect waves-light btn red darken-4" type="button" onClick={this.handleClick}>Save</button>
      </form>
    );
  }
}

export default FormAlbum;