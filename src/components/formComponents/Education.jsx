import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        {this.props.educationInfo.map((education, indx) => {
          return (
            <div key={indx}>
              <label htmlFor="school">School</label>
              <input type="text" name="school" id="school" onInput={this.props.handleEducation} className={indx} />
              <label htmlFor="start">Start</label>
              <input type="text" name="start" id="start" onInput={this.props.handleEducation} className={indx} />
              <label htmlFor="end">End</label>
              <input type="text" name="end" id="end" onInput={this.props.handleEducation} className={indx} />
              <label htmlFor="degree">Degree Obtained</label>
              <input type="text" name="degree" id="degree" onInput={this.props.handleEducation} className={indx} />
              <label htmlFor="study">Study</label>
              <input type="text" name="study" id="study" onInput={this.props.handleEducation} className={indx} />
              <button
                type="button"
                id="indx"
                onClick={this.props.deleteEducation}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button type="button" onClick={this.props.addEducation}>
          Add Education
        </button>
      </div>
    );
  }
}
