import React, { Component } from "react";
import axios from "axios";
import Cat from "./cat";

class Cats extends Component {
  state = {
    allCats: [],
  };
  render() {
    console.log("Rendering Cats component ......");
    return (
      <div className="container">
        <div className="row">
          {this.state.allCats.map((cat) => (
            <div key={cat.id} className="col">
              <Cat
                key={cat.id}
                cat={cat}
                onDelete={() => this.deletecat(cat.id)}
                //onLike={() => this.likeAvenger(cat)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  async deletecat(catId) {
    let updatedCatArray = this.state.allCats.filter((cat) => cat.id !== catId);

    await axios.delete(`http://localhost:5000/api/cats/${catId}`, {});
    this.setState({ allCats: updatedCatArray });
  }

  async componentDidMount() {
    console.log("Rendering finished. Component is fully mounted");
    let { data } = await axios.get("http://localhost:5000/api/cats");
    // console.log(data);
    let cats = data.map((cat) => {
      return {
        id: cat._id,
        imgUrl: cat.imgUrl,
        name: cat.name,
        age: cat.age,
        gender: cat.gender,
        description: cat.description,
        features: cat.features,
        contactnumber: cat.contactnumber,
      };
    });
    this.setState({ allCats: cats });
  }
}

export default Cats;
