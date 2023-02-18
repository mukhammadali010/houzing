import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
    [state , dispatch] = useReducer(reducer, [])
  return <PropertiesContext.Provider>{children}</PropertiesContext.Provider>;
};

export default PropertiesProvider;
