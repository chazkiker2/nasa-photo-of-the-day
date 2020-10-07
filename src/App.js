import React, { useState, useEffect } from "react";
import axios from "axios";
import {API_KEY, BASE_URL} from "./constants/index";
import "./App.css";

console.log(axios);

function App() {


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
