// import { useState } from 'react'

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl p-5">Tailwind test </h1>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://www.pexels.com/photo/person-on-truck-s-roof-2449600/" />
  </div>
  <div class="flex items-center md:items-start">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>

</div>
    </>

  );
}

export default App;
