import { useState } from "react";
import "./App.css";
import { currencyConverter } from "./api/postApi";

function App() {
  const [isloading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NPR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const handleConvertCurrency = async () => {
    setIsLoading(true);
    try {
      const data = await currencyConverter(fromCurrency, toCurrency, amount);

      console.log(data);
      setIsLoading(false);
      if (data.data && data.data.conversion_result) {
        setConvertedAmount(data.data.conversion_result);
      } else {
        setError("Invalid conversion data received");
      }
    } catch (error) {
      setError("error fetching conversion rate");
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-700 min-h-screen">
        <div className="flex flex-col gap-4 bg-amber-100 p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold">Currency Converter</h1>
          <hr className="border border-black w-full" />

          <div>
            <label htmlFor="amount" className="text-xl">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="border px-2 py-1 rounded-lg bg-white text-black w-full"
            />
          </div>

          {/* Select currencies */}
          <div className="flex gap-4">
            <div>
              <label htmlFor="from">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="border px-2 py-1 rounded-lg"
                name="from"
                id="from"
              >
                <option value="USD">USD</option>
                <option value="NPR">NPR</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </div>

            <div>
              <label htmlFor="to">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="border px-2 py-1 rounded-lg"
                name="to"
                id="to"
              >
                <option value="NPR">NPR</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>

          {/* Convert button */}
          <div>
            <button
              onClick={handleConvertCurrency}
              disabled={isloading || amount <= 0}
              className={`border rounded-lg px-4 py-2 text-xl font-medium ${
                isloading || amount <= 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-700 cursor-pointer text-white"
              }`}
            >
              {isloading ? "Converting..." : "Convert"}
            </button>
          </div>

          {/* Result display */}
          <div>
            {convertedAmount && (
              <h3 className="text-lg font-semibold">
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
              </h3>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
