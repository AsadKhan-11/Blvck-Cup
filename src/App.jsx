import { useState } from "react";

import "./index.css";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
    </div>
  );
}

export default App;
