import React from "react";

import { ToastContainer, toast } from "react-toastify";
import ModalEx from "./components/ModalEx";
import TooltipEx from "./components/TooltipEx";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
      <ModalEx></ModalEx>
      <br />
      <br />
      <TooltipEx></TooltipEx>
    </div>
  );
}

export default App;
