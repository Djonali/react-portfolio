import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Your emailjs service ID, template ID, and public key
    const serviceId = "service_pasajf4";
    const templateId = "template_w8ntmg9";
    const publickey = "x-EdC0xmd2wvTvn_2";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jonali",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }; // end handleSubmit

  return (
    <section id="contact" className="container-fluid">
     <div className="main-heading width200">
       <h2>GET IN TOUCH</h2>  
       {/* <div className="underline"></div>     */}
      </div>
      <div className="row contact-box">
        <div className="col-md-5">
          <h2>Let's talk</h2>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <svg
                width="36"
                height="26"
                viewBox="0 0 38 28"
                fill="#ff5800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9853 0H5.15656C2.30882 0 0 2.30882 0 5.15656V22.1304C0 24.9781 2.30882 27.287 5.15656 27.287H31.9853C34.833 27.287 37.1419 24.9781 37.1419 22.1304V5.15656C37.1419 2.30882 34.833 0 31.9853 0ZM12.9247 18.411L5.70375 24.5713C5.19442 25.006 4.42873 24.9456 3.99413 24.4357C3.55945 23.9264 3.61988 23.1607 4.12979 22.7261L11.3507 16.5658C11.8599 16.1311 12.6256 16.1915 13.0602 16.7014C13.4949 17.2107 13.4345 17.9764 12.9247 18.411ZM18.5709 16.069C17.6051 16.0666 16.6689 15.7457 15.9369 15.1127L15.9375 15.1133L15.9352 15.1115C15.9358 15.1121 15.9364 15.1121 15.9369 15.1127L4.85761 5.49649C4.35126 5.05703 4.29736 4.29141 4.73617 3.78572C5.17556 3.27937 5.94125 3.22547 6.44687 3.66428L17.5293 13.2829C17.7662 13.4937 18.1564 13.6459 18.5709 13.6435C18.9849 13.6447 19.3685 13.4967 19.6185 13.2787L19.6238 13.274L30.6949 3.66435C31.2006 3.22554 31.9663 3.27944 32.4057 3.78579C32.8445 4.29141 32.7906 5.0571 32.2843 5.49656L21.2019 15.1157C20.4724 15.7421 19.5374 16.0678 18.5709 16.069ZM33.1483 24.4357C32.7136 24.9456 31.9479 25.006 31.4387 24.5713L24.2178 18.411C23.708 17.9763 23.6476 17.2107 24.0822 16.7014C24.5168 16.1915 25.2825 16.1312 25.7918 16.5658L33.0127 22.7261C33.5225 23.1607 33.5829 23.9264 33.1483 24.4357Z"
                  fill="#ff5800"
                />
              </svg>{" "}
              <p>jonalidas@gmail.com</p>
            </div>
            <div className="contact-detail">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3519 21.5541L19.6136 22.3313C19.6136 22.3313 17.8588 24.1788 13.0692 19.1361C8.27955 14.0935 10.0343 12.2461 10.0343 12.2461L10.4992 11.7567C11.6444 10.551 11.7524 8.61524 10.7532 7.20206L8.7093 4.31127C7.47262 2.56218 5.08295 2.33112 3.66549 3.82344L1.12139 6.50191C0.418552 7.24186 -0.0524378 8.20107 0.00468137 9.26515C0.150802 11.9874 1.31405 17.8445 7.80503 24.6783C14.6884 31.9252 21.147 32.2132 23.7882 31.9526C24.6236 31.8701 25.3501 31.4197 25.9356 30.8032L28.2382 28.3791C29.7924 26.7428 29.3541 23.9376 27.3655 22.793L24.2688 21.0105C22.9631 20.2589 21.3723 20.4797 20.3519 21.5541Z"
                  fill="#ff5800"
                />
                <path
                  d="M16.6306 1.02087C16.7379 0.358117 17.3644 -0.091461 18.0271 0.0158238C18.0682 0.023685 18.2003 0.0483545 18.2693 0.0637527C18.4077 0.0945652 18.6006 0.141975 18.8411 0.212045C19.3222 0.352153 19.9942 0.582979 20.8008 0.952747C22.4156 1.69309 24.5646 2.98816 26.7945 5.21814C29.0245 7.44812 30.3196 9.59707 31.0598 11.2119C31.4297 12.0185 31.6605 12.6905 31.8006 13.1715C31.8706 13.4121 31.9181 13.605 31.9489 13.7433C31.9643 13.8125 31.9756 13.868 31.9834 13.909L31.9928 13.9596C32.0999 14.6223 31.6545 15.2748 30.9918 15.3821C30.3309 15.4891 29.7084 15.0416 29.5985 14.3821C29.5951 14.3642 29.5857 14.3167 29.5758 14.2718C29.5557 14.1821 29.5212 14.0397 29.4664 13.8514C29.3566 13.4749 29.1662 12.9151 28.8498 12.2252C28.218 10.8469 27.0818 8.94374 25.0753 6.93732C23.069 4.93092 21.1658 3.79472 19.7876 3.16286C19.0976 2.84653 18.5379 2.65603 18.1612 2.54633C17.973 2.49149 17.7364 2.43718 17.6466 2.41719C16.9869 2.30725 16.5236 1.68173 16.6306 1.02087Z"
                  fill="#ff5800"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9963 6.6115C17.1807 5.96594 17.8536 5.59214 18.4991 5.77658L18.1652 6.94546C18.4991 5.77658 18.4991 5.77658 18.4991 5.77658L18.5016 5.77726L18.504 5.77797L18.5094 5.77954L18.522 5.7833L18.5541 5.79329C18.5784 5.8011 18.609 5.81128 18.6453 5.8242C18.7181 5.85003 18.8144 5.88676 18.9324 5.93733C19.1686 6.03854 19.4911 6.19482 19.8876 6.42938C20.6808 6.89891 21.7639 7.67883 23.0363 8.95116C24.3086 10.2235 25.0884 11.3065 25.558 12.0999C25.7925 12.4962 25.9488 12.8189 26.0501 13.055C26.1007 13.173 26.1375 13.2692 26.1632 13.342C26.1762 13.3784 26.1862 13.4089 26.1942 13.4334L26.2041 13.4654L26.2078 13.478L26.2094 13.4834L26.2101 13.4859C26.2101 13.4859 26.2109 13.4882 25.0419 13.8222L26.2109 13.4882C26.3953 14.1338 26.0214 14.8066 25.376 14.991C24.7359 15.1739 24.0689 14.808 23.8778 14.1725L23.8718 14.1551C23.8632 14.1307 23.8454 14.0828 23.8154 14.0127C23.7554 13.8728 23.6467 13.6439 23.4658 13.3382C23.1043 12.7276 22.4516 11.8049 21.317 10.6703C20.1826 9.53582 19.2598 8.8831 18.6492 8.5217C18.3435 8.34078 18.1147 8.23202 17.9746 8.17205C17.9046 8.14204 17.8566 8.12415 17.8323 8.11551L17.8148 8.10953C17.1794 7.91846 16.8134 7.25156 16.9963 6.6115Z"
                  fill="#ff5800"
                />
              </svg>
              <p>+772-825-524</p>
            </div>
            <div className="contact-detail">
              <svg
                width="27"
                height="37"
                viewBox="0 0 27 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.494 0C6.05469 0 3.19006e-06 6.0571 0 13.4964C-4.66239e-06 26.5864 12.7344 36.5376 12.7344 36.5376C13.1817 36.8939 13.8159 36.8939 14.2632 36.5376C14.2632 36.5376 27 26.5864 27 13.4964C27 6.0571 20.9333 0 13.494 0ZM13.494 7.36407C16.8676 7.36407 19.6359 10.1228 19.6359 13.4964C19.636 16.87 16.8676 19.6359 13.494 19.6359C10.1204 19.6359 7.36166 16.87 7.36168 13.4964C7.36169 10.1228 10.1204 7.36407 13.494 7.36407Z"
                  fill="#ff5800"
                />
              </svg>
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
        {/* ---The FORM PART--- */}
        <div className="col-md-7 p-4">
          <form onSubmit={handleSubmit}>
            <div class="mb-2">
              <label htmlFor="" class="form-label">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-2">
              <label htmlFor="" class="form-label">
                Your Email
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-2">
              <label htmlFor="" class="form-label">
                Write your message here
              </label>
              <textarea
                value={message}
                rows="8"
                class="form-control"
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
