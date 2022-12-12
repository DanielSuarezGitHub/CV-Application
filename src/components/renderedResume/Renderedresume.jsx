import React, { Component } from 'react'

export default class Renderedresume extends Component {
  render() {
    return (
      <div className='Rendered'>
        <div className="top">
          <div className="name">{this.props.info.personal.name}</div>
          <div className="email">{this.props.info.personal.email}</div>
          <div className="topInfo">
            <div className="phone">{this.props.info.personal.phone}</div>
            <div className="address">{this.props.info.personal.address}</div>
            <div className="jobtitle">{this.props.info.personal.job_title}</div>
          </div>
        </div>
        <h3>Objective</h3>
        <div className="objective">{this.props.info.personal.objective}</div>
        <div className="bottom">
          <div className='Work'>
            <h3>Work</h3>
            {this.props.info.workArr.map((job) => {
              return (
                <div className='workInfo'>
                  <div>{job.company}</div>
                  <div>{job.start}</div>
                  <div>{job.end}</div>
                  <div>{job.position}</div>
                  <div>{job.city}</div>
                  <div>{job.description}</div>
                </div>
              )
            })}
          </div>
          <div className='edu'>
            <h3>Education</h3>
            {this.props.info.educationArr.map((education) => {
              return (
                <div>
                  <div>{education.school}</div>
                  <div>{education.start}</div>
                  <div>{education.end}</div>
                  <div>{education.degree}</div>
                  <div>{education.study}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
