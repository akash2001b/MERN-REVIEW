import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactForm() {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current != null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [current, contactContext]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(current === null){
        addContact(contact);
    }else{
        updateContact(contact);
    }
    clearAll();
  };


  const clearAll = () => {
    clearCurrent();
  };


  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <div className="row" style={{paddingTop: "1rem"}}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      />        
      </div>
      <div className="row" style={{paddingTop: "1rem"}}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      </div>
      <div className="row" style={{paddingTop: "1rem"}}>
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      </div>
      <div className="row" style={{paddingTop: "1rem"}}>
      <h3>Contact Type</h3>
      </div>
      <div style={{textAlign:"center"}}>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional{" "}
      <div id="button" class="row" style={{paddingTop: "1rem"}}>
        <input style={{background:"linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)"}}
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="aka"
        />

      </div>
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
