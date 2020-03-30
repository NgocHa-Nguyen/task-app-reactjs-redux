import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      status: ""
    };
  }
  componentDidMount() {
    if (this.props.istaskEditing) {
      this.setState({
        id: this.props.istaskEditing.id,
        name: this.props.istaskEditing.name,
        status: this.props.istaskEditing.status
      });
      console.log(this.state);
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //<--CANCLE & CLOSE FORM-->
    this.onClear();
    this.onCloseForm();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: ""
    });
  };
  render() {
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== '' ? 'UpDated the task !!'  : 'Add the task !!'}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Title :{}</label>
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                className="form-control"
            >{}</input>
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
              {id !== '' ? 'Update'  : 'Add'}
              </button>
              &nbsp;
              <button
                onClick={this.onClear}
                type="submit"
                className="btn btn-danger"
              >
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
