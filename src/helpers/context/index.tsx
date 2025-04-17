import React, { useMemo, useState } from 'react';

export const GlobContext = React.createContext<{
  isProfileShown: boolean;
  setIsProfileShown: (value: boolean) => void;
  toggleProfile: () => void;
  logoutPromptIsActive: boolean;
  setLogoutPromptIsActive: (value: boolean) => void;
  toggleLogoutPrompt: () => void;
}>({} as any);

export const GlobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isProfileShown, setIsProfileShown] = useState<boolean>(false);
  const [logoutPromptIsActive, setLogoutPromptIsActive] = useState<boolean>(false);
  const toggleProfile = () => {
    setIsProfileShown(!isProfileShown);
  };
  const toggleLogoutPrompt = () => {
    setLogoutPromptIsActive(!logoutPromptIsActive);
  };
  const value = useMemo(() => {
    return { isProfileShown, setIsProfileShown, toggleProfile, logoutPromptIsActive, setLogoutPromptIsActive, toggleLogoutPrompt };
  }, [isProfileShown, setIsProfileShown, toggleProfile, logoutPromptIsActive, setLogoutPromptIsActive, toggleLogoutPrompt]);
  return <GlobContext.Provider value={value}>{children}</GlobContext.Provider>;
};

export const useGlobalContext = () => React.useContext(GlobContext);
