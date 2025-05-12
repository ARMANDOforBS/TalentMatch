"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface DemoModeContextType {
  isDemoMode: boolean;
  enableDemoMode: () => void;
  disableDemoMode: () => void;
  demoUserRole: string;
  setDemoUserRole: (role: string) => void;
}

const DemoModeContext = createContext<DemoModeContextType | undefined>(undefined);

export function DemoModeProvider({ children }: { children: React.ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [demoUserRole, setDemoUserRole] = useState('CANDIDATO');

  useEffect(() => {
    // Verificar si el modo demo está activado en localStorage al cargar
    const savedDemoMode = localStorage.getItem('demoMode');
    if (savedDemoMode === 'true') {
      setIsDemoMode(true);
      // Recuperar el rol guardado
      const savedRole = localStorage.getItem('demoUserRole');
      if (savedRole) {
        setDemoUserRole(savedRole);
      }
    }
  }, []);

  const enableDemoMode = () => {
    setIsDemoMode(true);
    localStorage.setItem('demoMode', 'true');
    localStorage.setItem('demoUserRole', demoUserRole);
  };

  const disableDemoMode = () => {
    setIsDemoMode(false);
    localStorage.removeItem('demoMode');
    localStorage.removeItem('demoUserRole');
  };

  const changeDemoUserRole = (role: string) => {
    setDemoUserRole(role);
    if (isDemoMode) {
      localStorage.setItem('demoUserRole', role);
    }
  };

  return (
    <DemoModeContext.Provider value={{
      isDemoMode,
      enableDemoMode,
      disableDemoMode,
      demoUserRole,
      setDemoUserRole: changeDemoUserRole
    }}>
      {children}
    </DemoModeContext.Provider>
  );
}

export function useDemoMode() {
  const context = useContext(DemoModeContext);
  if (context === undefined) {
    throw new Error('useDemoMode debe ser usado dentro de un DemoModeProvider');
  }
  return context;
}
