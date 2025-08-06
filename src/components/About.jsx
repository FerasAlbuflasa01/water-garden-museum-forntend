import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const About = () => {
  const [messageSend, setMessageSend] = useState(null)
  const x = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [formData, setFormData] = useState({ x })
  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setMessageSend(null)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await emailjs.sendForm(
      'service_hjhotbc',
      'template_b9pv4tn',
      e.target,
      '5vv7XWBRiwCKwSAgP'
    )
    setFormData({ x })
    setMessageSend(<h3>Email Sent successfully..!!</h3>)
  }

  return (
    <div className="about-page">
      <h1>About Al-Ma'aeeya Park</h1>
      <p>
        Welcome to Al-Ma'aeeya Park's official web platform — your one-stop
        destination to discover and explore all the exciting games and
        attractions we offer! Whether you're planning your next visit or just
        browsing for fun, this site helps you get to know our rides in detail.
        Admins can also sign in to manage and update the listings, keeping
        everything up-to-date for our visitors. We're here to make your park
        experience smoother, more fun, and easier to explore.
      </p>
      <br />
      <br />
      <br />

      <p>
        Contact :
      </p>
      <br />

      {messageSend}
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  )
}

export default About
