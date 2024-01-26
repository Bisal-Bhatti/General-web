import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Team from "./Pages/Team/Team";
import NotFoundPage from "./Pages/404Page/NotFoundPage";
import PricingPlan from "./Pages/PricingPlan/PricingPlan";
import ContactForm from "./Pages/ContactUs/ContactForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout children={<Dashboard />} />} />
      <Route path="/Team" element={<DashboardLayout children={<Team />} />} />
      <Route
        path="/Price-Plans"
        element={<DashboardLayout children={<PricingPlan />} />}
      />
      <Route
        path="/contact-us"
        element={<DashboardLayout children={<ContactForm />} />}
      />
      <Route
        path="/404"
        element={<DashboardLayout children={<NotFoundPage />} />}
      />
    </Routes>
  );
}

export default App;
