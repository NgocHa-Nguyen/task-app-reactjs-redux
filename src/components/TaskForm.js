import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
//truyen qua lai App, theem vao array
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Title :</label>
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <label>Status :</label>
            <select
              name="status"
              className="form-control"
              onChange={this.onChange}
              required="required"
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Add
              </button>
              &nbsp;
              <button type="submit" className="btn btn-danger">
                Cancle
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default TaskForm;
