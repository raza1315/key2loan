import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Footer from "./Pages/Footer/Footer";
import SecuredLoan from "./Pages/SecuredLoan/SecuredLoan";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/securedLoan" element={<SecuredLoan />} />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
