import React, { Component } from "react";

class Cat extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
            {/* <img src={this.props.cat.imgUrl} className="card-img-top" /> */}

            <div className="card-body">
              <h5 className="card-title">Name : {this.props.cat.name}</h5>
              <h5 className="card-title">Age : {this.props.cat.age}</h5>
              <h5 className="card-title">Gender : {this.props.cat.gender}</h5>
              <h5 className="card-title">
                Description : {this.props.cat.description}
              </h5>
              <h5 className="card-title">
                Fetures : {this.props.cat.features}
              </h5>
              <h5 className="card-title">
                Contact Number : {this.props.cat.contactnumber}
              </h5>
              {/* <h5 className="card-title">{this.props.cat.imgUrl}</h5> */}

              <button className="btn btn-danger" onClick={this.clickbtn}>
                Add to Favourite
              </button>
              <button
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}
                onClick={this.props.onDelete}
              >
                Delete
              </button>

              {/* <NavLink activeclassname = 'active' to='/addcat'>Add to Favourite</NavLink> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cat;
