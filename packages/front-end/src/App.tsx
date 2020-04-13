import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { isEnabled, getValue } from "@treinamento/feature-flags";

function App() {
  // const TESTE = isEnabled("TESTE");
  // const TESTE_val = getValue("TESTE");
  // const CODE_FLAG_01 = isEnabled("CODE_FLAG_01");
  const CODE_FLAG_01_val = getValue("CODE_FLAG_01");
  // const FEATURE_FLAG_01 = isEnabled("FEATURE_FLAG_01");
  const FEATURE_FLAG_01_val = getValue("FEATURE_FLAG_01");
  // const CODE_FLAG_02 = isEnabled("CODE_FLAG_02");
  const CODE_FLAG_02_val = getValue("CODE_FLAG_02");
  // const FEATURE_FLAG_02 = isEnabled("FEATURE_FLAG_02");
  const FEATURE_FLAG_02_val = getValue("FEATURE_FLAG_02");

  // console.log({ TESTE });
  // console.log({ TESTE_val });
  // console.log({ CODE_FLAG_01 });
  console.log({ CODE_FLAG_01_val });
  // console.log({ FEATURE_FLAG_01 });
  console.log({ FEATURE_FLAG_01_val });
  // console.log({ CODE_FLAG_02 });
  console.log({ CODE_FLAG_02_val });
  // console.log({ FEATURE_FLAG_02 });
  console.log({ FEATURE_FLAG_02_val });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>isEnabled: {isEnabled("TESTE") ? "true" : "false"}</p>
      </header>
    </div>
  );
}

export default App;
