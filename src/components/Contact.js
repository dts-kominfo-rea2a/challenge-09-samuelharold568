// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
  return (
      <div>
          <img src={props.data.photo} alt={props.data.name}/>
          <div>
              <h1>{props.data.name}</h1>
              <h4>{props.data.phone}</h4>
              <h4>{props.data.email}</h4>
          </div>
      </div>
  )
}

export default Contact;

