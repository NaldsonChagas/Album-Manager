import React from 'react';

const Table = (props) => {
  return (
    <table>
      <Thead />
      <Tbody data={props.data} deleteAlbum={props.deleteAlbum} />
    </table>
  );
}

const Thead = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Band</th>
        <th>Genre</th>
        <th>Release year</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

const Tbody = (props) => {
  const { data } = props;
  return (
    <tbody>
      {data.map((row, index) =>
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.band}</td>
          <td>{row.genre}</td>
          <td>{row.releaseYear}</td>
          <td><button type="button" className="btn red darken-4" onClick={() => props.deleteAlbum(index)}>Delete</button></td>
        </tr>
      )}
    </tbody>
  );
}

export default Table;
