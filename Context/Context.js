import { createContext, useState, useContext } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [value, setState] = useState([1.5]);
  <></>;

  return (
    <Context.Provider value={{ value, setState }}>{children}</Context.Provider>
  );
};
export const myContext = () => useContext(Context);
export default ContextProvider;
