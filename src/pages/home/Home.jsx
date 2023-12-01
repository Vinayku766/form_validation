import { useNavigate } from "react-router-dom";
import "./style.css";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="home-container">
     <h1>Welcome Sir!</h1>
     <div className= "btns">
         <button onClick={() => navigate("/login")}>Login</button>
         <button onClick={() => navigate("/register")}>Register</button>
     </div>
    </div>
  )
}

export default Home