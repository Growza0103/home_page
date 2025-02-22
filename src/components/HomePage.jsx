import { useNavigate } from "react-router-dom";

const HomePage = ({ showAdminButton }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Organic Farming</h1>
      {showAdminButton && (
        <button onClick={() => navigate("/admin-login")} style={buttonStyle}>
          Admin Login
        </button>
      )}
    </div>
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 20px",
  backgroundColor: "#ff6b6b",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

export default HomePage;
