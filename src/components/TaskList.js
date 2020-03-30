import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1
    };
  }
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });
  };
  render() {
    let { tasks } = this.props;
    let { filterName, filterStatus } = this.state;
    const element = tasks.map((task, index) => {
      return (
        <TaskItem
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onEdit={this.props.onEdit}
          key={task.id}
          index={index}
          task={task}
        ></TaskItem>
      );
    });
    return (
      <div>
        <table className="table table-bordered table-hover mt-15">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  value={filterName}
                  name="filterName"
                  className="form-control"
                  onChange={this.onChange}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  value={filterStatus}
                  name="filterStatus"
                  onChange={this.onChange}
                >
                  <option value="-1">Tất Cả</option>
                  <option value="0">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {element}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
