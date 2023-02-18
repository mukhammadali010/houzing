import PropertiesProvider from "./properties";

import { createContext } from "react";

const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <PropertiesProvider>{children}</PropertiesProvider>
    </Root.Provider>
  );
};

export default RootContext;
