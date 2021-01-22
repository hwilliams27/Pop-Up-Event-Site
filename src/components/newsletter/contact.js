
import {db} from "./firebase";
import React, { useState } from "react"

const Contact = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Form</h1>
            <span>Feel free to leave your contact info below. We will send you updates regarding upcoming events, or new ones if that's what you want.</span>

            <label>Name</label>
            <input 
                placeholder="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
             >
                Submit
            </button>            
        </form>
    );
};

export default Contact;