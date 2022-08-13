import ReactDOM from "react-dom";

import Applicationform from "./Applicationform";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingbottom: "20px",
  overflowY: "scroll",
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

export default function Modal({
  open,
  children,
  onClose,
  type,
  location,
  salary,
}) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="" style={OVERLAY_STYLES} />
      <div
        style={MODAL_STYLES}
        className="bg-royal rounded-xl fixed w-full h-full text-white"
      >
        <div className="justify-end p-4 mt-2">
          <button className="" onClick={onClose}>
            X
          </button>

          <Applicationform
            props={children}
            type={type}
            location={location}
            salary={salary}
          />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
