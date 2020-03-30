import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }
  onDelete = () => {
    this.props.onDelete(this.props.task.id)
  }
  onUpdate = () => {
    this.props.onEdit(this.props.task.id)

  }
  render() {
    const { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.title}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "label label-success"
                : "label label-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Kich Hoat" : " An"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5" onClick={this.onUpdate}>Edit</span>
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <span className="fa fa-trash mr-5" onClick={this.onDelete}>Delete</span>
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
