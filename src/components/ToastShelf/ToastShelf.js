import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastProviderContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, dismiss } = React.useContext(ToastProviderContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} onDismiss={() => dismiss(toast.id)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
