import PropertiesProvider from "./properties";

// import { createContext } from "react";

// const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>{children}</PropertiesProvider>
    </>
  );
};

export default RootContext;
