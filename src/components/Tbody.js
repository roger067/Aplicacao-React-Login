import React from "react";

const Tbody = props => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>John</td>
        <td>john@example.com</td>
        <td>Doe</td>
        <td>Doe</td>
        <td>{props.children}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>Doe</td>
        <td>{props.children}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>Doe</td>
        <td>{props.children}</td>
      </tr>
    </tbody>
  );
};

export default Tbody;
