import React from "react";

const Table = props => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Produtos</th>
            <th>Action</th>
          </tr>
        </thead>
        {props.children}
      </table>
    </div>
  );
};

export default Table;
