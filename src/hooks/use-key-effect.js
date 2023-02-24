import React from "react";

const useKeyEffect = (key, callback) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (event.key === key) {
        callback();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [key, callback]);
};

export default useKeyEffect;
