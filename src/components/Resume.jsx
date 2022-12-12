import React, { Component } from 'react'
import Education from './formComponents/Education'
import Personal from './formComponents/Personal'
import Work from './formComponents/Work'
import Renderedresume from './renderedResume/Renderedresume'


export default class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
          personal: {

          },
            workArr: [{
              company: '',
              start: '',
              end: '',
              position: '',
              city: '',
              description: ''
            }],
          educationArr: [{
              school: '',
              start: '',
              end: '',
              degree: '',
              study: ''
            }]
          
        }
        this.handlePersonal = this.handlePersonal.bind(this);
        this.handleEducation = this.handleEducation.bind(this);
        this.handleWork = this.handleWork.bind(this);
        this.workAdd = this.workAdd.bind(this);
        this.workDelete = this.workDelete.bind(this);
        this.educationAdd = this.educationAdd.bind(this);
        this.educationDelete = this.educationDelete.bind(this);
    }
    handlePersonal(e) {
      let id = e.target.id
        this.setState({
            personal: {
              ...this.state.personal,
              [id]: e.target.value
            }
        })
      }

      handleEducation(e) {
        let id = e.target.id
        let indx = e.target.className
        let New = this.state.educationArr
        New[indx][id] = e.target.value
        this.setState({
          educationArr: New
        })
      }

      handleWork(e) {
        let id = e.target.id
        let indx = e.target.className
        let New = this.state.workArr
        New[indx][id] = e.target.value
        this.setState({
          workArr: New
        })
      }

      workAdd() {
        this.setState({
          workArr: this.state.workArr.concat({
            company: '',
            start: '',
            end: '',
            position: '',
            city: '',
            description: ''
          }

          )
        })
      }

      workDelete(e) {
        let index = e.target.id
        let arr = this.state.workArr
        arr.splice(index, 1)
        this.setState({
          workArr: arr
        })
      }
      educationAdd() {
        this.setState({
          educationArr: this.state.educationArr.concat({
            school: '',
            start: '',
            end: '',
            degree: '',
            study: ''
          })
        })
      }
      educationDelete(e) {
        let index = e.target.id
        let arr = this.state.educationArr
        arr.splice(index, 1)
        this.setState({
          educationArr: arr
        })
      }


  render() {
    return (
      <div className='Resume'>
        <form>
          <Personal handlePersonal={this.handlePersonal}/>
          <Work handleWork={this.handleWork} workInfo={this.state.workArr} addWork={this.workAdd} deleteWork={this.workDelete}/>
          <Education handleEducation={this.handleEducation} educationInfo={this.state.educationArr} addEducation={this.educationAdd} deleteEducation={this.educationDelete}/>
        </form>
        <Renderedresume info={this.state}/>
      </div>
    )
  }
}
