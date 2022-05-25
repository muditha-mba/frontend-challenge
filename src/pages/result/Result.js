import { useSelector } from "react-redux";
import "./Result.css";

const Result = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="result flex">
      <span>{currentUser}</span>
    </div>
  );
};

export default Result;
