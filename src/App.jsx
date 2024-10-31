import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import './App.scss'; // Import custom CSS
import mySvg from './assets/logo.svg';
import BootStrapMenu from "./Components/bootMenu"
import DJButtonWithPopover from './Components/logoutBtn';
import { icons } from 'antd/es/image/PreviewGroup';
import { Routes, Route, Navigate, Link, Router, useParams, useLocation } from "react-router-dom";
import SiteAdmin from './Sections/SiteAdmin';
import Reports from './Sections/Reports';
import Preview from './Sections/Preview';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const param = useLocation();
  
  const pickLeftNavigationToDisplay = () => {
    switch (param.pathname) {
      case '/site-admin':
        return <BootStrapMenu />;
      default:
        return <BootStrapMenu />;
    }
  }

  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
      <Sider width="7%" className='slider' style={{ backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: "center", margin: "5% 0% 15% 0%" }}>
          <img src={mySvg} alt="My SVG Icon" width="32px" height="32px" />
        </div>
        <div style={{ textAlign: "center", margin: "5% 0% 15% 0%" }}>
          <img src=" https://sso.mypepsico.com/login/images/pepsico.png" alt="My SVG Icon" width="80px" height="20px" />
        </div>
        {pickLeftNavigationToDisplay()}
      </Sider>

      <Layout style={{ height: "100vh", width: "100%" }}>
        <Header className='header'
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5", backgroundColor: "#f5f5f5" }}
        >
          <div className='header-container'>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" disabled>
                <option selected>Frito-LayInc.</option>
              </select>

            </div>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" disabled>
                <option selected>LE-USA025</option>

              </select>

            </div>
            <div className="header-dd">
              <select className="form-select header-dd" aria-label="Default select example" disabled>
                <option selected>LE-USA025</option>
              </select>
            </div>
            <div>
              <DJButtonWithPopover />
            </div>
          </div>
        </Header>
        <Content
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5" }}
        >
          <div>
            <Routes>
              <Route
                path='/site-admin'
                element={<SiteAdmin />}
                exact
              ></Route>
              <Route
                path='/reports'
                element={<Reports />}
                exact
              ></Route>
              <Route
                path='/preview'
                element={<Preview />}
                exact
              ></Route>
            </Routes>
          </div>
        </Content>
        <Footer
          style={{ width: "100%", borderBottom: "1.5px solid #d0cdf5" }}
          className='footer'
        >
        <div style={{ textAlign: "center", padding: "10px", fontSize: "0.9em", color: "#6c757d" }}>
          © 2024 YourCompanyName. All rights reserved. | Privacy Policy | Terms of Service
        </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;