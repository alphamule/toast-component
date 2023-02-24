import React from "react";

import Button from "../Button";
import { ToastProviderContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(DEFAULT_VARIANT);
  const { createToast } = React.useContext(ToastProviderContext);

  const onSubmit = (event) => {
    event.preventDefault();
    if (message === "") {
      return;
    }

    createToast({
      id: crypto.randomUUID(),
      variant: selectedVariant,
      message: message,
    });
    setMessage("");
    setSelectedVariant(DEFAULT_VARIANT);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={onSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((variant) => (
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              key={variant}
            >
              <label htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value="notice"
                  checked={selectedVariant === variant}
                  onChange={() => setSelectedVariant(variant)}
                />
                {variant}
              </label>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
