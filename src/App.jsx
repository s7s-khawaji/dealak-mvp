import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateRequest from "./pages/CreateRequest";
import Success from "./pages/Success";
import CustomerDashboard from "./pages/CustomerDashboard";
import Brokers from "./pages/Brokers";
import BrokerRegister from "./pages/BrokerRegister";
import BrokerDashboard from "./pages/BrokerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-request" element={<CreateRequest />} />
        <Route path="/success" element={<Success />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/brokers" element={<Brokers />} />
        <Route path="/broker-register" element={<BrokerRegister />} />
        <Route path="/broker-dashboard" element={<BrokerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
