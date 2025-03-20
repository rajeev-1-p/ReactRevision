import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed bottom-4 left-4 flex gap-2">
        <button className="p-2 bg-blue-500 text-white rounded" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="p-2 bg-red-500 text-white rounded" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="p-2 bg-green-500 text-white rounded" onClick={() => setColor("green")}>
          Green
        </button> 
      </div>
    </div>
  );
}

export default App;
