import React from "react";
import "./Form.css";
const Form = () => {
    return (
        <div className="Form-section">
        <div className="form-and-contact">
            <div className="form-area">
                <h6>Get In Touch</h6>
                <form action="">
                    {/* Name Email Phone Message submit */}
                    <input type="text" placeholder="Your Name" name="" id="" />
                    <input type="email" placeholder="Your Email" name="" id="" />
                    <input type="number" placeholder="Your Phone" name="" id="" />
                    <textarea placeholder="Write Message" name="" id=""></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </div>

            <div className="contact">
                <div className="contact-text">
                    Email
                    <div className="contact-value">probootstrap@gmail.com</div>
                </div>
                <div className="contact-text">
                    Phone
                    <div className="contact-value">+92 342 789234</div>
                </div>
                <div className="contact-text">
                    Fax
                    <div className="contact-value">+71 9345 23</div>
                </div>
                <div className="contact-text">
                    Address 
                    <div className="contact-value">
                        San Francisco, CA
                        4th Floor8 Lower
                        San Francisco street, M1 50F
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Form;
