import React from 'react'
import email from './../assets/images/message.svg';
import linkedin from './../assets/images/linkedin-icon.svg'
import github from './../assets/images/github.svg'
export const Contact = () => {
  return (
    <section className="contact">
        <h2 id="contact-me">Contact Me</h2>
        <div className="contact-container">
            <div>
            <h3>How to Reach Me</h3>
            <address>
                <div>
                <p>Phone: <a href="tel:+6474570516">(647)457-0516</a></p>
                <p>Email: <a href="mailto:mtaycruz@gmail.com">mtaycruz@gmail.com</a></p>
                </div>
                <div>
                <a href="https://github.com/cruzma"><img src={github} alt="github logo"/></a>
                <a href="https://www.linkedin.com/in/mateo-cruz-b76619133/"><img src={linkedin} alt="linkedin logo"/></a>
                <a href="mailto: mtaycruz@gmail.com"><img src={email} alt="Email logo"/></a>
                </div>
            </address>
            </div>

            <div className="contact-form">
            <h3>Leave me a Message</h3>
            <form action="https://formsubmit.co/mtaycruz@gmail.com" method="POST" >
                <label htmlFor="contact-name">Your Name</label>
                <input type="text" name="name"  id="contact-name" placeholder="Your Name" required/>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email"   placeholder="your email" required/>

                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message"  placeholder="message"  ></textarea>

                <button type="submit">Submit</button>
            </form>
            </div>
        </div> 

    </section>
  )
}
