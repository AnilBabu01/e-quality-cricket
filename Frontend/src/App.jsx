import { useState } from "react";
import Navigation from "./components/header/Navigation";

import Auth from "./screens/Auth";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Auth />
    </div>
  );
}

export default App;
