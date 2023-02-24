import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastProviderContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismiss = (id) => {
    const filteredToasts = toasts.filter((t) => t.id !== id);
    setToasts(filteredToasts);
  };

  const createToast = (toast) => {
    setToasts([...toasts, toast])
  }

  useEscapeKey(React.useCallback(() => setToasts([]), []));

  return (
    <ToastProviderContext.Provider
      value={{
        toasts,
        createToast,
        dismiss,
      }}
    >
      {children}
    </ToastProviderContext.Provider>
  );
}

export default ToastProvider;
