import React, { Component } from "react";

export default class Charthead extends Component {
  render() {
    return (
      <div className="">
        <div className="flex -mb-14 lg:ml-12 ml-4 ">
          <select
            className="bg-white p-2 px-3 mr-2 text-sm font-bold rounded-full text-royal"
            type="select"
            id="experience"
            required
            name="experience"
          >
            <option value="1 year">SEO consultant </option>
            <option value="2 year">SEO Manager</option>
            <option value="3 year ">Technichal SEO </option>
          </select>
        </div>
      </div>
    );
  }
}
