import React from "react";
import { Phone, Mail } from "lucide-react";
function Contactbar() {
  return (
    <div className="border-b bg-[#074E3B]">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-row-reverse justify-between items-center text-sm">
          <div className="flex items-center space-x-10">
            <p
              href="tel:+918077xxxxxx"
              className="text-[#9FB7AF] hover:text-white flex items-center cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91807xxxxxxx
            </p>
            <p
              href="mailto:contact@key2loan.com"
              className="text-[#9FB7AF]  hover:text-white flex items-center cursor-pointer"
            >
              <Mail className="w-4 h-4 mr-2" />
              contact@key2loan.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactbar;
