import { createContext, useState, useContext } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  <></>;

  return (
    <Context.Provider value={{ showModal, setShowModal }}>
      {children}
    </Context.Provider>
  );
};
export const myContext = () => useContext(Context);
export default ContextProvider;
