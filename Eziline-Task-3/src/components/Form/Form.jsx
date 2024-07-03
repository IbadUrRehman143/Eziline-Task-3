import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div>
      <div className="bg">
        <div className="form">
          <form className="form2">
            <h3>Get In Touch</h3>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Your Contact" />
            <textarea className="resize" placeholder="Message">
              Message
            </textarea>
          <button className="tr">Submit Message</button>
          </form>
        <div className="Contact">
          <h3>Email</h3>
          <p>khan9909@gmail.com</p>
          <h3>Phone</h3>
          <p>+92 34565788</p>
          <h3>Fax</h3>
          <p>+30 976 1382 9922</p>
          <h3>Address</h3>
          <p>San Francisco, CA 4th Floor8 Lower San Francisco street, M1 50F</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
