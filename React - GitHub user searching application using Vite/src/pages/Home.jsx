import React from "react";
import IspisUsera from "../components/IspisUsera";
import UserSearch from "../components/UserSearch";

class Home extends React.Component {
  render() {
    return (
      <>
        <UserSearch />
        <IspisUsera />
      </>
    );
  }
}

export default Home;
