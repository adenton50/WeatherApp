import Search from "./Search";

export default function Header({ setData, setInput, input, data }) {
  return (
    <div className="flex shadow p-12 justify-between">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        Adam's{" "}
        <span className="text-blue-600 dark:text-blue-500">
          Weather Forecast
        </span>
      </h1>

      <Search setData={setData} setInput={setInput} input={input} data={data} />
    </div>
  );
}
