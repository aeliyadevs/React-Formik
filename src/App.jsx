import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormikLogin from "./components/FormikLogin";
import FormikLoginYup from "./components/FormikLoginYup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FormikLogin /> */}
      <FormikLoginYup />
    </>
  );
}

export default App;
