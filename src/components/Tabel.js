import React from "react";

const Table = props => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Produtos</th>
        </tr>
      </thead>
      {props.children}
    </table>
  );
};

export default Table;
