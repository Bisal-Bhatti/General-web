import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { DashboardLayoutProps } from "../../interfaces/dashboardInterfaces/dashboardInterface";

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 min-h-screen">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
