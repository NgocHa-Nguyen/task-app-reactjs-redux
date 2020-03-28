import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props){
    super(props);
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };
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
          <form>
            <div className="form-group">
              <label>Title :</label>
              <input type="text" className="form-control" />
            </div>
            <label>Status :</label>
            <select className="form-control" required="required">
              <option value="1">Kích Hoạt</option>
              <option value="0">Ẩn</option>
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
