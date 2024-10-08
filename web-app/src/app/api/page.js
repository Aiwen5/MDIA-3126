"use client"
//API PAGE
import { useState } from "react";

export default function Page() {

  const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(DATA_URL);
    console.log(response);
    const data = await response.json();
    setData(data);
  }


  const DisplayProducts = () => {
    if (data) {
      let productsList = [];

      data.forEach((product, index) => {
        productsList.push(
          <li key={index}>{product.name}</li>
        );
      });
      return (
        <div className="border-4 border-slate-900 p-4 mb-4">
          <ul>
            {productsList}
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="p-4 bg-blue-300">
      <header className="border-4 border-slate-900 p-4 mb-4">
        <h1>Welcome to my product page</h1>
        <button 
        className="bg-slate-300 px-6"
        onClick={fetchData}
        
        >
          Fetch products!
        </button>
      </header>
      <DisplayProducts />
    </div>
  );
}
