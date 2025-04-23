import { createContext, useContext, useState } from 'react';

const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState({
    budget: '',
    profile: 'gaming'
  });

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  return useContext(ConfigContext);
}
