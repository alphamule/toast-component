import React from "react";

export const ToastProviderContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismiss = (id) => {
    const filteredToasts = toasts.filter((t) => t.id !== id);
    setToasts(filteredToasts);
  };

  return (
    <ToastProviderContext.Provider
      value={{
        toasts,
        setToasts,
        dismiss
      }}
    >
      {children}
    </ToastProviderContext.Provider>
  );
}

export default ToastProvider;
