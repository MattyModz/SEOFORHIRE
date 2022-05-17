import { createContext, useState, useContext } from "react";

const Contextform = createContext({});

const ContextProviderform = ({ children }) => {
  const [form, setForm] = useState("");
  <></>;

  return (
    <Contextform.Provider value={{ form, setForm }}>
      {children}
    </Contextform.Provider>
  );
};
export const myContextform = () => useContext(Contextform);
export default ContextProviderform;
