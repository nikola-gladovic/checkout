import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import AppRoutes from "./routes";
import React from "react";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppRoutes />
    </div>
  );
}

export default App;
