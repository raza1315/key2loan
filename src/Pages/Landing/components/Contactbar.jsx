import React from 'react'

function Contactbar() {
  return (
    <div className="border-b bg-[#074E3B]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-row-reverse justify-between items-center text-sm">
            <div className="flex items-center space-x-10">
              <p
                href="tel:+918077xxxxxx"
                className="text-[#9FB7AF] hover:text-white flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91807xxxxxxx
              </p>
              <p
                href="mailto:contact@key2loan.com"
                className="text-[#9FB7AF]  hover:text-white"
              >
                contact@key2loan.com
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contactbar
