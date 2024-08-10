import React, { createContext, useState } from 'react';

export const LabelContext = createContext();

export const LabelProvider = ({ children }) => {
  const [labels, setLabels] = useState(['Urgent', 'Work', 'Personal']);

  const addLabel = (label) => {
    setLabels([...labels, label]);
  };

  return (
    <LabelContext.Provider value={{ labels, addLabel }}>
      {children}
    </LabelContext.Provider>
  );
};
