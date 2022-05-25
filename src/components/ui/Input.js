import { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const { Icon, errorMessage, isError, onChange, romoveError, ...inputProps } =
    props;
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = (e) => {
    setIsFocus(!isFocus);
    romoveError();
  };

  const blurHandler = (e) => {
    setIsFocus(!isFocus);
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
        error={isError.toString()}
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
