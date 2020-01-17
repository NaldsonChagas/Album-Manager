import React from 'react';

const Table = (props) => {
  return (
    <table>
      <Thead />
      <Tbody data={props.data} />
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
        </tr>
      )}
    </tbody>
  );
}

export default Table;
