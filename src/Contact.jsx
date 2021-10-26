import React from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
const url = {lat:28.641625010458238, lng:77.08258211418905}

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vxx587a",
        "template_6uuus3c",
        e.target,
        "user_rD67G5tamUJP7vmlMPjWI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email Sent");
    e.target.reset();
  }

  return (
    <div>
      <div className="contact">
        <h1 className="title">Contact Me</h1>
        <div class="contact-details">
          {/* <div class="left">
                    <div class="address">
                        <a href=""><i class="fas fa-mail-bulk fa-spin" style={{fontSize:"30px", color:"white"}}></i></a>
                        <p>arjitgupta24@gmail.com</p>
                    </div>

                    <div class="address">
                        <a href=""><i class="fas fa-address-card fa-spin" style={{fontSize:"30px", color:"white"}}></i></a>
                        <p>Vikaspuri,New Delhi</p>
                    </div>

                    <div class="address">
                        <a href=""><MdEmail style={{fontSize:"30px", color:"black"}}/></a>
                        <p>+91 6387125220</p>
                    </div>
                 </div> */}

          <div class="contact-form">
            <form id="form" onSubmit={sendEmail}>
              {/* <div class="field">
                <label for="from_name">Sender Name</label>
                <input type="text" name="from_name" id="from_name" />
              </div> */}

              <legend>Name</legend>
              <div class="field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write Your Name Here.."
                  required
                />
              </div>
              <label for="message">Message</label>
              <div class="field">
                {/* <input type="text" name="message" id="message" cols="4" ro placeholder="Enter Your Message Here.. "/> */}
                <textarea
                  name="message"
                  id="message"
                  cols="100"
                  rows="10"
                  placeholder="Enter Your Message Here.. "
                  required
                ></textarea>
              </div>
              <div class="field">
                <label for="email">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail Here..."
                  required
                />
              </div>
              {/* <div class="field">
                <label for="reply_to">reply_to</label>
                <input type="text" name="reply_to" id="reply_to" />
              </div> */}

              <input type="submit" id="button" value="Send Email" />
            </form>
          </div>

          <div class="contact-map">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14005.880307319632!2d77.09098035!3d28.645640349999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1628441071146!5m2!1sen!2sin"
                width="100%"
                height="auto"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                position={url}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
