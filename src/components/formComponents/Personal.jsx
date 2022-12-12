import React, { Component } from 'react'

export default class Personal extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div>
          <h2>Personal Information</h2>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onInput={this.props.handlePersonal} />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" onInput={this.props.handlePersonal} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onInput={this.props.handlePersonal} />
          <label htmlFor="objective">Objective</label>
          <input type="text" name="objective" id="objective" onInput={this.props.handlePersonal} />
          <label htmlFor="job_title">Job Title</label>
          <input type="text" name="job_title" id="job_title" onInput={this.props.handlePersonal} />
          <label htmlFor="address">Address</label>
          <input type="text" name='address' id='address' onInput={this.props.handlePersonal} />
      </div>
    )
  }
}
