import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      keySearch : ""
    }
  }
  onChange = (event) => {
    let keySearch = event.target.value;
    this.setState({
      keySearch : keySearch
    })
  }
  onSearch = () => {
    this.props.onSearch(this.state.keySearch);
  }
  render() {
    const {keySearch} = this.state.keySearch
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa..."
              value = {keySearch}
              onChange = {this.onChange}
            />
            <span className="input-group-btn">
              <button onClick={this.onSearch}
               className="btn btn-primary" type="button">
                <span className="fa fa-search mr-5"></span>Tìm
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
