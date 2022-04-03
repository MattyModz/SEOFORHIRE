import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import motion from "framer-motion";
import Application from "./Applicationform";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "0px",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="" style={OVERLAY_STYLES} />
      <div
        style={MODAL_STYLES}
        className="bg-gradient-to-br from-[#190873] via-[#100750] to-black rounded-xl  w-full h-full text-white"
      >
        <div className="flex justify-end mr-4 mt-2">
          <button onClick={onClose}>X</button>
        </div>
        <div className=" flex justify-center text-white p-8 m-8 rounded-xl overflow-hidden">
          <motion.div>
            <Application />
          </motion.div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
