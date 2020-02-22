import React, { useEffect, useState } from "react";
import axios from "axios";

export default class ListItem extends React.Component {
  render() {
    const newItems = this.props.info.map(i => {
      return (
        <div
          key={i.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ace123",
            marginTop: "10px"
          }}
        >
          <p>{i.title}</p>

          <button key={i.id} onClick={() => this.props.handleDelete(i.id)}>
            delete
          </button>
        </div>
      );
    });

    return <div>{newItems}</div>;
  }
}
