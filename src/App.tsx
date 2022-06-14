import { useState } from "react";
import ButtonAppBar from "./components/Appbar";
import PermanentDrawerLeft from "./components/Drawer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PermanentDrawerLeft />
    </>
  );
}

export default App;
