import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./LoginPage.css";
import Input from "../../components/ui/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess, loginFailure } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (values.username === "" || values.password === "") return;

    try {
      const res = await axios.post("https://fetest.kodeia.com/api", values);
      dispatch(loginSuccess(res.data.data.id));
      navigate("/result");
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div onSubmit={submitHandler} className="login">
      <div className="login-wrapper flex">
        <h1>Account Login</h1>
        <form action="submit" className="login-form flex">
          <Input
            placeholder={"User name"}
            Icon={PersonOutlineOutlinedIcon}
            type={"text"}
            name={"username"}
            onChange={onChange}
            errorMessage={"Enter username"}
            isSubmit={isSubmit}
            val={values.username}
          />
          <Input
            placeholder={"Password"}
            Icon={LockOutlinedIcon}
            type={"password"}
            name={"password"}
            onChange={onChange}
            errorMessage={"Enter password"}
            isSubmit={isSubmit}
            val={values.password}
          />
          <div className="login__button--container flex">
            <button className="flex">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
