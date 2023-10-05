import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import FormikLogin from "./components/FormikLogin";
import FormikLoginYup from "./components/FormikLoginYup";
import FormFormikComponents from "./components/FormFormikCompoments";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <DefaultLayout>
        {/* <FormikLogin />
        <FormikLoginYup /> */}
        <FormFormikComponents />
      </DefaultLayout>
    </>
  );
}

export default App;
