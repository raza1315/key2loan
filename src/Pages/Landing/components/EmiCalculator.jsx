import { useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [tenure, setTenure] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const formatIndianNumber = (value) => {
    const number = value.replace(/,/g, '')
    const parts = number.split('.')
    parts[0] = parts[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
    return parts.join('.')
  }

  const handleLoanAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, '')
    if (value === '' || /^\d+$/.test(value)) {
      setLoanAmount(formatIndianNumber(value))
    }
  }

  const validateInputs = (amount, rate, months) => {
    const numericAmount = Number(amount.replace(/,/g, ''))
    if (numericAmount < 100000 || numericAmount > 1000000000) {
      setError('Loan amount must be between 1 Lakhs and 100 Crores')
      return false
    }
    if (rate < 1 || rate > 50) {
      setError('Interest rate must be between 1% and 50%')
      return false
    }
    if (months < 12 || months > 600) {
      setError('Tenure must be between 12 and 600 months')
      return false
    }
    setError('')
    return true
  }

  const calculateEMI = () => {
    const amount = Number(loanAmount.replace(/,/g, ''))
    const rate = Number(interestRate)
    const months = Number(tenure)

    if (!validateInputs(loanAmount, rate, months)) {
      setResult(null)
      return
    }

    const monthlyRate = rate / (12 * 100)
    const emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    const totalAmount = emi * months
    const totalInterest = totalAmount - amount

    setResult({
      monthlyEMI: emi,
      totalAmount: totalAmount,
      totalInterest: totalInterest,
      principalAmount: amount,
    })
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getPieChartData = () => {
    if (!result) return []
    return [
      { name: 'Principal', value: result.principalAmount },
      { name: 'Interest', value: result.totalInterest },
    ]
  }

  const COLORS = ['#10B981', '#EF4444'] // emerald-500 and red-500

  return (
    <section className="pb-16 pt-6 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-center mb-12 tracking-wide">
          EMI Calculator
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Input Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 z-10">
            <div className="space-y-6">
              <div className="space-y-2">
                <label 
                  htmlFor="loanAmount" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Loan Amount (₹)
                </label>
                <input
                  id="loanAmount"
                  type="text"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                  placeholder="Enter amount (1,00,000 to 1,00,00,00,000)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="space-y-2">
                <label 
                  htmlFor="interestRate" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Interest Rate (%)
                </label>
                <input
                  id="interestRate"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="Enter rate (1% to 50%)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="space-y-2">
                <label 
                  htmlFor="tenure" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Loan Tenure (Months)
                </label>
                <input
                  id="tenure"
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  placeholder="Enter months (12 to 600)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>
              <button 
                onClick={calculateEMI}
                className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200"
              >
                Calculate EMI
              </button>
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 z-10">
            {result ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">Monthly EMI:</span>
                  <span className="text-lg font-semibold text-emerald-600">
                    {formatCurrency(result.monthlyEMI)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">Total Amount Payable:</span>
                  <span className="text-lg font-semibold text-emerald-600">
                    {formatCurrency(result.totalAmount)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[0] }} />
                    <span className="text-sm">Principal Amount</span>
                  </div>
                  <span className="font-medium">{formatCurrency(result.principalAmount)}</span>
                </div>
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[1] }} />
                    <span className="text-sm">Total Interest</span>
                  </div>
                  <span className="font-medium">{formatCurrency(result.totalInterest)}</span>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Enter loan details to see the breakdown
              </div>
            )}
          </div>

          {/* Pie Chart Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 z-10">
            {result ? (
              <div className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={getPieChartData()}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {getPieChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => formatCurrency(value)}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Enter loan details to see the chart
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

