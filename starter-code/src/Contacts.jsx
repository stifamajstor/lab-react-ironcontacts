import React from "react";
import Contact from "./Contact";
const Contacts = props => {
  return (
    <div>
      <h1>Iron Contacts</h1>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {props.contacts.map(contact => {
            return <Contact key={contact.id} data={contact} />;
          })}

          {/* {props.contacts.map(contact => {
            return <RandomContact key={contact.id} data={contact} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
