import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Landing from "./pages/Landing_page";
import StatementPage from "./pages/printpage";
import Diary from "./pages/diarypage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/Home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
       
        <Route path="/Expense_Tracker" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Expense_Tracker/summary"
          exact
          element={<StatementPage />}
        />
        <Route path="/diaries" element={<Diary />} />
      </Routes>
    </>
  );
}
export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
