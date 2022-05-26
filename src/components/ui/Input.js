import { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const { Icon, errorMessage, onChange, isSubmit, val, ...inputProps } = props;
  const [isFocus, setIsFocus] = useState(false);

  let error = false;

  if (val === "" && isSubmit) {
    error = true;
  }

  const focusHandler = (e) => {
    setIsFocus(true);
  };

  const blurHandler = (e) => {
    setIsFocus(false);
  };

  return (
    <div className="input-container flex">
      <Icon
        style={{
          fontSize: "2.6rem",
          color: ` ${isFocus ? "#f03e94" : "#adadad"}`,
          marginLeft: `${isFocus ? "2rem" : "3.1rem"}`,
          transition: "all 0.4s",
        }}
        className="input-icon"
      />

      <input
        {...inputProps}
        onFocus={focusHandler}
        focus={isFocus.toString()}
        error={error.toString()}
        onBlur={blurHandler}
        onChange={onChange}
      />

      <div className="input-error">
        <p msg={errorMessage}> !</p>
      </div>

      <span />
    </div>
  );
};

export default Input;
