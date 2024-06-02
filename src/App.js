import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>   
    </>
  );
}

export default App;
