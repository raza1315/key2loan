import { useState } from "react";
import { Shield, Wallet, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const loanTypes = [
  {
    title: "Unsecured Business Loan",
    type: 1,
    description:
      "An unsecured business loan is a type of loan that does not require the borrower to provide any collateral, such as property or other assets, to secure the loan. Instead, the loan is granted based on the borrower's creditworthiness, business performance, and financial history.",
    icon: Wallet,
    benefits: [
      "No collateral required",
      "Quick approval process",
      "Flexible usage of funds",
      "Simple documentation",
    ],
    image: "/unsecuredloan.png",
  },
  {
    title: "Secured Business Loan",
    type: 2,
    description:
      "A secured business loan is a type of loan where the borrower pledges an asset (called collateral) to the lender as security for the loan. If the borrower fails to repay the loan, the lender has the legal right to seize and sell the collateral to recover the outstanding amount.",
    icon: Shield,
    benefits: [
      "Lower interest rates",
      "Higher loan amounts",
      "Longer repayment terms",
      "Build business credit",
    ],
    image: "/securedloan.png",
  },
];

function Loantypesection() {
  const navigate = useNavigate();
  const changeRoute = (loanType) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (loanType === 1) {
      navigate("/unsecuredloan");
    } else if (loanType === 2) {
      navigate("/securedloan");
    }
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 sm:px-0 px-2">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose the Right{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Loan Type
            </span>{" "}
            for Your Business
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#828993]">
            We offer flexible loan options to meet your specific business needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {loanTypes.map((loan, index) => (
            <div
              key={loan.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 blur-[3px]"
                  />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="mb-2 flex items-center gap-2">
                      <loan.icon className="h-6 w-6" />
                      <h3 className="text-xl font-semibold">{loan.title}</h3>
                    </div>
                    <p className="max-w-lg text-sm text-gray-100">
                      {loan.description.split(".")[0]}.
                    </p>
                  </div>
                </div>
                <div className="space-y-6 p-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#69696B]">Key Benefits</h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {loan.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <div className="rounded-full bg-emerald-600/10 p-1">
                            <Check className="h-4 w-4 text-emerald-600" />
                          </div>
                          <span className="text-sm text-[#868D96]">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => changeRoute(loan.type)}
                    className="group flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
                  >
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Loantypesection;
