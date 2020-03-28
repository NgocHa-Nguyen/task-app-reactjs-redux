import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import "./App.css";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks : [],
      isDisplayForm : false
    }
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem("tasks")){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      })
    }
  }
  onGenerateData = () => {
    var tasks = [
      {
        id :1 ,
        title : 'GotoSchool',
        status: true,
      },
      {
        id :2 ,
        title : 'GotoBed',
        status: true,
      },
      {
        id :3 ,
        title : 'Swim',
        status: false,
      },
      {
        id :4 ,
        title : 'Read book',
        status: false,
      }
    ];
    this.setState({
      tasks : tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  onToggerForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    })
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    })
  }
  render() {
    const {tasks, isDisplayForm} = this.state;
    const elemteTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}/> : ''
    return (
      <div className="container">
        <div className="text-center">
          <h1>TODO - APP</h1>
          <hr/>
        </div>
        <div className="row">
          <div className={isDisplayForm == true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
            {elemteTaskForm}
          </div>
          <div className={isDisplayForm == true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggerForm}>
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <button type="button" className="btn btn-success ml-5" onClick={this.onGenerateData}>
              Data
            </button>
            <Control></Control>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks = {tasks}></TaskList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
