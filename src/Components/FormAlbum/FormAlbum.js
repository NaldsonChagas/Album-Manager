import React from 'react';

class FormAlbum extends React.Component {

  render() {
    return (
      <form>
        <div class="row">
          <div class="input-field col s12">
            <input id="album" type="text" name="album" class="validate" />
            <label for="album">Album</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="band" type="text" name="band" class="validate" />
            <label for="band">Band</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="genre" type="text" name="genre" class="validate" />
            <label for="genre">Genre</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="releaseYear" type="number" name="releaseYear" class="validate" />
            <label for="releaseYear">Release Year</label>
          </div>
        </div>
        <button class="waves-effect waves-light btn red darken-4" type="button">Salvar</button>
      </form>
    );
  }
}

export default FormAlbum;