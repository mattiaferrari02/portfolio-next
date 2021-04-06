import React, { useState } from "react";
import Head from "next/head";

import fetch from "node-fetch";

const Status = {
  Submit: "Submit",
  Success: "Success",
  Error: "Error",
  Warning: "Warning",
};

const Contact = (props) => {
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState(null);
  const [disable, setDisable] = useState(false);
  const [status, setStatus] = useState(Status.Submit);


  const sendForm = async (e) =>{
    e.preventDefault();
    console.log(contact, message);
    if (contact == null || message == null || contact=="" || contact=="") {
      setStatus(Status.Warning);
      return window.setTimeout(() => setStatus(Status.Submit), 1500);
    }
    setDisable(true);
    const request = await fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactEmail: contact,
        emailText: message,
      }),
    })
      .then((res) => {
        setStatus(Status.Success);
      })
      .catch(() => {
        setStatus(Status.Error);
      })
      .finally(()=>{
        setContact("");
        setMessage("");
        setDisable(false)});

    return setTimeout(()=> {setStatus(Status.Submit)}, 2000)
    
  }




  return (
    <form id="contactme" className={props.className}>
      <input
        className="col-span-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-10 mb-4"
        type="text"
        value={contact}
        placeholder="Email"
        onChange={(event) => setContact(event.target.value)}
      />

      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-24 mb-5"
        placeholder="Contattami per qualsiasi cosa!"
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />

      {status == Status.Submit && (
        <button
          className="xs:w-full sm:w-64 shadow bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5 text-gray-50"
          onClick={sendForm}
        >
          Invia &nbsp;📨
        </button>
      )}

      {status == Status.Success && (
        <button
          className="xs:w-full sm:w-64 shadow bg-green-500 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5 text-gray-50"
          onClick={(event) => event.preventDefault()}
          disabled={disable}
        >
          Message inviato! &nbsp;✔
        </button>
      )}

      {status == Status.Error && (
        <button
          className="xs:w-full sm:w-64 shadow bg-red-500 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5 text-gray-50"
          onClick={(event) => event.preventDefault()}
        >
          Riprova &nbsp;❌
        </button>
      )}

      {status == Status.Warning && (
        <button
          className="xs:w-full sm:w-64 shadow bg-yellow-500 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5 text-gray-50"
          onClick={(event) => event.preventDefault()}
        >
          Inserisci tutte le informazioni&nbsp;⚠️
        </button>
      )}
    </form>
  );
};

export default Contact;
