import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import { getData } from "../actions/taskAction";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1
    };
  }
  componentDidMount() {
    this.props.actionGetData();
  }
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });
  };
  element = () => {
    {
      let { data } = this.props.tasks.tasks;
      if (data !== undefined && data.length > 0) {
        return data.map((task, index) => (
          <TaskItem
            onUpdateStatus={this.props.onUpdateStatus}
            onDelete={this.props.onDelete}
            onEdit={this.props.onEdit}
            key={task.id}
            task={task}
            index={index}
          ></TaskItem>
        ));
      }
    }
  };
  render() {
    let { filterName, filterStatus } = this.state;
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
                  <option value="2">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td></td>
            </tr>
            {this.element()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actionGetData: () => {
      dispatch(getData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
