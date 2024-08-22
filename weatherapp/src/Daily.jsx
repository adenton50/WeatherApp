export default function Daily({ data }) {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center mt-16">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mx-8">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Search for your city!
          </h5>
          <p className="font-normal text-gray-700">
            Whether you're planning a weekend getaway or checking the daily
            forecast, my app delivers up-to-date conditions, including
            temperature, humidity, and precipitation. Stay informed with hourly
            and daily forecasts.
          </p>
        </div>
      </div>
    );
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
