import React, { Component } from 'react'

export default class Work extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
          <h2>Work</h2>
          {this.props.workInfo.map((company, indx) => {
            return (
          <div key={indx}>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" className={indx} onInput={this.props.handleWork} id="company"/>
            <label htmlFor="start">Start</label>
            <input type="text" name="start" id="start" className={indx} onInput={this.props.handleWork} />
            <label htmlFor="end">End</label>
            <input type="text" name="end" id="end" className={indx} onInput={this.props.handleWork}/>
            <label htmlFor="position">Position</label>
            <input type="text" name="position" id="position" className={indx} onInput={this.props.handleWork}/>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city"className={indx} onInput={this.props.handleWork} />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" className={indx} onInput={this.props.handleWork}/>
            <button type='button' id={indx} onClick={this.props.deleteWork}>Delete</button>
          </div>
            )
          })}
          <button type='button' onClick={this.props.addWork}>Add Work</button>
      </div>
    )
  }
}
