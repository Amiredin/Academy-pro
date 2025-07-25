import React, { createContext, useContext, useState } from 'react';
import { Organization, Academy } from '../types';

interface AppContextType {
  selectedOrganization: Organization | null;
  selectedAcademy: Academy | null;
  setSelectedOrganization: (org: Organization | null) => void;
  setSelectedAcademy: (academy: Academy | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
  const [selectedAcademy, setSelectedAcademy] = useState<Academy | null>(null);

  const value = {
    selectedOrganization,
    selectedAcademy,
    setSelectedOrganization,
    setSelectedAcademy,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};