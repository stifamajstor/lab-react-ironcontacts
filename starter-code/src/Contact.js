import React from "react";

const Contact = props => {
  const { name, popularity, pictureUrl } = props.data;

  return (
    <React.Fragment>
      <tr>
        <td>
          <img style={{ width: "50px" }} src={pictureUrl} alt="contactpic" />
        </td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
      </tr>
    </React.Fragment>
  );
};

export default Contact;
