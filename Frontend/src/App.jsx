import { useState } from "react";
import Navigation from "./components/header/Navigation";

import Auth from "./screens/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <Auth />
    </div>
  );
}

export default App;
