export default function Hourly({ data }) {
  const hours = [
    "1 HR",
    "2 HR",
    "3 HR",
    "4 HR",
    "5 HR",
    "6 HR",
    "7 HR",
    "8 HR",
    "9 HR",
    "10 HR",
    "11 HR",
    "12 HR",
  ];
  if (data.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="flex md:items-center md:justify-center mb-16 overflow-x-auto px-8">
        <div className="flex flex-row gap-4">
          {data.timelines.hourly.slice(0, 12).map((hour, index) => {
            let weatherCode = hour.values.weatherCode;
            if (weatherCode === 1000) {
              weatherCode = "Clear";
            } else if (weatherCode > 1000 && weatherCode < 4000) {
              weatherCode = "Cloudy";
            } else if (weatherCode >= 4000 && weatherCode < 5000) {
              weatherCode = "Rain";
            } else if (weatherCode >= 5000 && weatherCode < 8000) {
              weatherCode = "Snow";
            } else if (weatherCode >= 8000) {
              weatherCode = "Storms";
            }
            return (
              <div
                key={index}
                className="border-2 p-8 rounded border-black text-center whitespace-nowrap"
              >
                <p>{hours[index]}</p>
                <h1>
                  {Math.round(hour.values.temperatureApparent * (9 / 5) + 32) +
                    "°"}
                </h1>
                <p>{weatherCode}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
