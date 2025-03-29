import React from "react";
import Footer from "../footer/Footer";
import "./Player.css";
import Sidebar from "../sidebar/Sidebar";


function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
