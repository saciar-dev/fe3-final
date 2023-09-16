import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onSubmitForm = (e) => {

    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/
    if (emailRegex.test(email)) {
      if (userName.length > 0) {
        alert(`Thank you: ${userName}, we will contact you as soon as possible via email`);
        setEmail("")
        setUserName("")
      }
      else {
        alert(`The user name should not be empty`);
      }
    } else {
      alert(`Enter a valid email, please`);
    }

  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder="User name" value={userName} onChange={onChangeUserName} />
        <input type="text" placeholder="Email" value={email} onChange={onChangeEmail} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;