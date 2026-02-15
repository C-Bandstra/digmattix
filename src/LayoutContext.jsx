import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [header, setHeader] = useState(<></>);
  const [footer, setFooter] = useState(<footer>Default Footer</footer>);

  return (
    <LayoutContext.Provider value={{ header, setHeader, footer, setFooter }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);