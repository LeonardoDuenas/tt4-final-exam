import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import ExpenseListPage from "./pages/ExpenseListPage";
import CreateExpensePage from "./pages/CreateExpensePage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ExpenseList" element={<ExpenseListPage />} />
          <Route path="/CreateExpense" element={<CreateExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
