import React, { useState, useContext } from "react";

export const SiteContext = React.createContext();

export const SiteProvider = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <SiteContext.Provider
      value={{
        isBookingOpen,
        isFaqOpen,
        setIsFaqOpen,
        setIsBookingOpen,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteContext = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error("useSiteContext must be used within a SiteProvider");
  }

  return context;
};
