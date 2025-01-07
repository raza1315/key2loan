import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SecuredLoan from "./Pages/SecuredLoan/SecuredLoan";
import Footer from "./Pages/Footer/Footer";
import Contactbar from "./Pages/Landing/components/Contactbar";
import UnSecuredLoan from "./Pages/UnsecuredLoan/UnsecuredLoan";
import Form from "./Pages/FormPage/Form";
function App() {
  return (
    <div>
      {/* Top Contactbar */}
      <Contactbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/securedLoan" element={<SecuredLoan />} />
          <Route path="/unsecuredLoan" element={<UnSecuredLoan />} />
          <Route path="/apply" element={<Form/>} />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
