import React from "react";
import NavigationBar from "./Components/Navbar";
import TopContainer from "./Components/TopContainer";
import "../public/styles.scss";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <TopContainer />
    </div>
  );
}
