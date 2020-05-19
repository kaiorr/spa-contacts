import React from "react"
import { format } from "date-fns"
import './Contact.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.contact = props.data
    this.isTitle = props.isTitle
  }

  render() {
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img src={this.contact.avatar} alt="" />
        </span>
        <span data-testid="contact-name" className="contact__data">
          {this.contact.name}
        </span>
        <span data-testid="contact-phone" className="contact__data">
          {this.contact.phone}
        </span>
        <span data-testid="contact-country" className="contact__data">
          {this.contact.country}
        </span>
        <span data-testid="contact-date" className="contact__data">
          {this.isTitle
            ? this.contact.admissionDate
            : format(new Date(this.contact.admissionDate), "dd/MM/yyyy")}
        </span>
        <span data-testid="contact-company" className="contact__data">
          {this.contact.company}
        </span>
        <span data-testid="contact-department" className="contact__data">
          {this.contact.department}
        </span>
      </article>
    )
  }
}

export default Contact