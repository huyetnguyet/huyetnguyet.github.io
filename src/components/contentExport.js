import React, { Component } from "react";
import Tabletop from "tabletop";

import { googleSheetKey } from "../config/googleSheetMethod";

export default class HomeContentSection extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: googleSheetKey,
      callback: (googleData) => {
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
    console.log(this.state.data);
  }

  render() {
    console.log("updated state --->", this.state);
    const { data } = this.state;
    return (
      <div>
        {data.map((obj) => {
          return (
            <div>
              <p style={{ color: "white" }}>
                * title:"{obj.title}", content:"{obj.content}", src:"
                {obj.src}", alt:"{obj.alt}", category:"{obj.category}", time:"
                {obj.time}", date:"{obj.date}", timestamp:"{obj.timestamp}",
                link:"
                {obj.link}"&,
              </p>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
}

/*
        {data.map((obj) => {
          return (
            <div>
              <p style={{ color: "white" }}>
                *ContentItem title="{obj.title}" content="{obj.content}" src="
                {obj.src}" alt="{obj.alt}" types="{obj.types}" time="{obj.time}"
                date="{obj.date}" timestamp="{obj.timestamp}" link="{obj.link}"&
              </p>
              <br></br>
            </div>
          );
        })}

*/
