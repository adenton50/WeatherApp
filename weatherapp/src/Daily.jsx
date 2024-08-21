export default function Daily({ data }) {
  if (data.length === 0) {
    return <h1 className="text-3xl text-center m-32">Search for your city!</h1>;
  } else {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return (
      <div className="border-2 md:w-2/5 p-4 md:p-8 rounded-xl md:m-auto mx-8 mb-16">
        <p className="border-b-2">📅 10-Day Forecast</p>
        {data.timelines.daily.map((day, index) => {
          const dateObj = new Date(day.time.slice(0, 10));
          const dayOfWeek = daysOfWeek[dateObj.getUTCDay()];
          let weatherCode = day.values.weatherCodeMax;
          if (weatherCode === 1000) {
            weatherCode = <box-icon name="sun" type="solid"></box-icon>;
          } else if (weatherCode > 1000 && weatherCode < 4000) {
            weatherCode = <box-icon name="cloud" type="solid"></box-icon>;
          } else if (weatherCode >= 4000 && weatherCode < 5000) {
            weatherCode = <box-icon type="solid" name="cloud-rain"></box-icon>;
          } else if (weatherCode >= 5000 && weatherCode < 8000) {
            weatherCode = <box-icon name="cloud-snow"></box-icon>;
          } else if (weatherCode >= 8000) {
            weatherCode = <box-icon name="cloud-lightning"></box-icon>;
          }

          return (
            <div
              key={index}
              className="flex flex-row border-b-2 m-2 p-1 text-sm md:text-base"
            >
              <p className="w-24 md:w-96">{dayOfWeek}</p>
              <p className="mx-4">{weatherCode}</p>
              <div className="flex flex-row gap-4">
                <p>
                  Low:{" "}
                  {Math.round(day.values.temperatureApparentMin * (9 / 5) + 32)}
                </p>
                <p>
                  Avg:{" "}
                  {Math.round(day.values.temperatureApparentAvg * (9 / 5) + 32)}
                </p>
                <p>
                  High:{" "}
                  {Math.round(day.values.temperatureApparentMax * (9 / 5) + 32)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
