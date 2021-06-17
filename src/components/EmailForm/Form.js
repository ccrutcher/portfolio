import React, {useState} from 'react';
import './Form.css'

import emailjs, {init} from 'emailjs-com';
init(process.env.REACT_APP_EMAIL_USER);

export default function Form() {
    const [emailBody, setEmailBody] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [emailSent, setEmailSent] = useState(false)
    const [success, setSuccess] = useState()

    const handleBodyChange = (e) => {
        setEmailBody(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
	    sendEmail(serviceId, templateId, {message_html: emailBody, from_name: name, reply_to: email})
    }

    const sendEmail = (serviceId ,templateId, variables) => {
        

        emailjs.send(
          serviceId, templateId,
          variables
          ).then(res => {
            setSuccess(true)
            setEmailSent(true)
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {
              setSuccess(false)
              setEmailSent(true)
              console.error('Something went wrong! This is our best guess:', err)
            })
      }

    return (
        <div className="email-container">
            {emailSent
                ? 
                    <div className="result">
                        {success ? <div className="result-message">Email sent!</div> : <div className="result-message">Sorry, something went wrong.</div>}
                    </div>
                :   
                    <form className="email-form">
                        <h1 className="header">Get In Touch</h1>
                        <div id="name-field">
                            <label>Name</label>
                            <input type="text" id="name-input" name="user_name" autoComplete="off" placeholder="Full Name" onChange={(e) => handleNameChange(e)} required />
                        </div>
                        <div id="email-field">
                            <label>Email</label>
                            <input type="email" id="email-input" name="user_email" autoComplete="off" placeholder="Email" onChange={(e) => handleEmailChange(e)} required />
                        </div>
                        <div id="mailing-field">
                            <textarea
                                name="mailing-field"
                                autoComplete="off"
                                onChange={(e) => handleBodyChange(e)}
                                placeholder="Type your message here"
                                required
                                value={emailBody}
                                style={{width: '100%', height: '150px'}}
                            />
                        </div>
                        <input type="button" value="Submit" className="submit-btn" onClick={handleSubmit} />
                    </form>
            }
        </div>
	)
  }
