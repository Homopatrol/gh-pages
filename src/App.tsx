import React from "react";
import {
  Content,
  Header,
  HeaderName,
} from "@carbon/react";
import { Theme } from "@carbon/react";
import "./app.scss";
// import Homepage from "./pages/HomePage/Homepage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import HomePage from "./pages/homepage/index";
import Navigation from "./components/Navigation";
import { Provider, useSelector } from "react-redux";
import { store } from "../src/store/Store";
// import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

function App() {
  return (
    // <div className="bg-gray-300vh] w-100">

    <BrowserRouter>

      {/* <Provider store={store}> */}
    
      <div className="bg-blue-300 h-full w-full">
        {/* <Content> */}
          <Theme theme="g100">
            <Header aria-label="Header for Our Skeleton App">
              <HeaderName
                href="/gh-pages/homepage/"
                prefix="Homoapatrol"
              >
                Panda
              </HeaderName>
            </Header>
          </Theme>

          <Navigation />
          </div> 
          {/* <Theme theme="g10"> */}
         
            <Routes>
          
              <Route path="/" element={<Navigate to="/gh-pages/homepage" />} />

              <Route path="/gh-pages/about" element={<AboutPage />} />

              <Route path="/gh-pages/upload"  />

              <Route path="/gh-pages/homepage" element={<HomePage />} />

         
              
            </Routes>

          {/* </Theme> */}
       
        {/* </Content> */}
   

      {/* </Provider> */}
  

    </BrowserRouter>
  //  </div> 
  );
}

export default App;
