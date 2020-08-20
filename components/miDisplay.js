export default function MiDisplay(props) {
  return (
    <section className="card">
      <h1 className="miCardHeader"> Current Michigan Data</h1>
      <h3 className="micard-title">
        Data Quality Grade: {props.miStats.dataQualityGrade}
      </h3>
      <h3 className="card-title">
        Data last updated: {props.miStats.date}{" "}
        <span className="text-gray-700 pl-2"> YYYYMMDD </span>
      </h3>
      <h3 className="card-title">
        Currently hospitalized:{" "}
        <span className="text-orange-400 pl-2">
          {" "}
          {props.miStats.hospitalizedCurrently}{" "}
        </span>
      </h3>
      <h3 className="card-title">
        Currently in ICU:{" "}
        <span className="text-indigo-400 pl-2">
          {props.miStats.inIcuCurrently}
        </span>
      </h3>
      <h3 className="card-title">
        Deaths:{" "}
        <span className=" text-purple-400 pl-2">{props.miStats.death}</span>
      </h3>
      <h3 className="card-title">
        Recovered:{" "}
        <span className="text-green-400 pl-2">{props.miStats.recovered}</span>
      </h3>

      <h2 className="mi-card-header">State Links</h2>

      <a
        className="mi-card-link hover:bg-blue-800 hover:text-gray-400"
        href={props.miInfo.covid19Site}
        target="_blank"
        rel="noreferrer noopener"
      >
        Michigan state website
      </a>
      <a
        className="mi-card-link hover:bg-blue-800 hover:text-gray-400"
        href={props.miInfo.twitter}
        target="_blank"
        rel="noreferrer noopener"
      >
        Michigan state twitter
      </a>
    </section>
  );
}
