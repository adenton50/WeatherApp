import Current from "./Current";
import Header from "./Header";
import { useState } from "react";
import Daily from "./Daily";
import "boxicons";
import Hourly from "./Hourly";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  return (
    <div>
      <Header setData={setData} setInput={setInput} input={input} data={data} />
      <Current data={data} />
      <Hourly data={data} />
      <Daily data={data} />
    </div>
  );
}

export default App;
