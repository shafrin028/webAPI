import React, { Component } from "react";

class Addcat extends Component {
  componentDidMount() {
    console.log(this.props.location.state.employee);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          {/* <button onClick={()=>{this.alertMessage()}}>click me to see log</button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Addcat;
