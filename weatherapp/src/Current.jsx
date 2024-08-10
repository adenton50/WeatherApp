export default function Current({ data }) {
  if (data.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="flex flex-col justify-center items-center m-16 gap-4">
        {<h1 className="text-4xl">{data.location.name.split(",")[0]}</h1>}
        <h1 className="text-8xl font-light">
          {Math.round(
            data.timelines.minutely[0].values.temperatureApparent * (9 / 5) + 32
          ) + "°"}
        </h1>
        <div className="flex flex-row gap-4 text-xl">
          <p>
            H:{" "}
            {Math.round(
              data.timelines.daily[0].values.temperatureApparentMax * (9 / 5) +
                32
            )}
          </p>
          <p>
            L:{" "}
            {Math.round(
              data.timelines.daily[0].values.temperatureApparentMin * (9 / 5) +
                32
            )}
          </p>
        </div>
      </div>
    );
  }
}
