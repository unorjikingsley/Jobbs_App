import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext()

const DashboardLayout = () => {
  // temporary
  const user = { name: 'John' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toogleDarkTheme = () => {
    console.log('toogle dark theme');
  }

  const toogleSidebar = () => {
    setShowSidebar(!showSidebar)
  };

  const logoutUser = async () => {
    console.log('logout user');
  }

  return (
    <DashboardContext.provider
      value = {{
        user,
        showSidebar,
        isDarkTheme,
        toogleDarkTheme,
        toogleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout