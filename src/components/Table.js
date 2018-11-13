import React from 'react';
import TableRow from './TableRow'

const Table = (props) => {
  const {usuarios, hide} = props;
  return (
    <div className="container">
    <TableRow usuarios={usuarios} hide={hide}></TableRow>
    </div>
  );
}

export default Table;
