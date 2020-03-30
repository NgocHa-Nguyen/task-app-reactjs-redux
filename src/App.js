import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditing: null,
      isDisplayForm: false,
      filter: {
        name: "",
        status: -1
      }
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }
  onToggerForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  };
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  };
  onSubmit = data => {
    let { tasks } = this.state;
    data.id = Date.now();
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onUpdateStatus = id => {
    let { tasks } = this.state;
    tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status;
      }
    });
    this.setState({
      tasks: tasks
    });
  };
  onDelete = id => {
    let tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onEdit = id => {
    let { tasks} = this.state;
    tasks.map(task => {
      if (task.id === id) {
        this.setState({
          taskEditing: task
        });
      }
    });
    this.onShowForm();
  };
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      name: filterName,
      status: filterStatus
    });
    console.log(this.state)
  };
  render() {
    let { tasks, isDisplayForm, taskEditing, filter } = this.state;
    console.log(filter);
    if (filter.name) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(filter.name) !== -1;
      });
    }
    const elemteTaskForm = isDisplayForm ? (
      <TaskForm
        onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        istaskEditing={taskEditing}
      />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>TODO - APP</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            {elemteTaskForm}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggerForm}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <Control></Control>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                  onFilter={this.onFilter}
                ></TaskList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
