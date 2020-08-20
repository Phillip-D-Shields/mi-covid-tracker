import getData from "./getData";

export async function getStaticProps(context) {
  const miStats = await getData(
    "https://api.covidtracking.com/v1/states/mi/current.json"
  );
  const usStats = await getData(
    "https://api.covidtracking.com/v1/us/current.json"
  );
  const miInfo = await getData(
    "https://api.covidtracking.com/v1/states/mi/info.json"
  );

  return {
    props: {
      miStats,
      usStats,
      miInfo,
    },
  };
}

function Index(props) {
  return (
    <>
      <main className="w-full h-full m-auto flex flex-wrap justify-around">
        {/* Michigan Data Card */}
        <section className="card md:w-6/12 flex flex-column justify-around border-l-4 border-blue-700 hover:bg-black">
          <h1 className="mi-card-header"> Michigan Data</h1>

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
            <span className="text-green-400 pl-2">
              {props.miStats.recovered}
            </span>
          </h3>
          <h3 className="card-title">
            Data last updated: {props.miStats.date}{" "}
            <span className="text-gray-700 pl-2"> YYYYMMDD </span>
          </h3>
          <h3 className="card-title">
            Data Quality Grade: {props.miStats.dataQualityGrade}
          </h3>
          <h3 className="card-title"> </h3>

          <h2 className="mi-card-header justify-end">State Links</h2>

          <a
            className="mi-card-link hover:bg-blue-800 hover:text-gray-400 duration-300"
            href={props.miInfo.covid19Site}
            target="_blank"
            rel="noreferrer noopener"
          >
            Michigan state website
          </a>
          <a
            className="mi-card-link hover:bg-blue-800 hover:text-gray-400 duration-300"
            href={props.miInfo.twitter}
            target="_blank"
            rel="noreferrer noopener"
          >
            Michigan state twitter
          </a>
        </section>

        {/* us data card */}
        <section className="card md:w-6/12 border-l-4 border-red-700 hover:bg-black">
          <h1 className="us-card-header">US Data</h1>

          <h3 className="card-title">
            Currently hospitalized:{" "}
            <span className="text-orange-400 pl-2">
              {props.usStats[0].hospitalizedCurrently}{" "}
            </span>
          </h3>
          <h3 className="card-title">
            Currently in ICU:{" "}
            <span className="text-indigo-400 pl-2">
              {props.usStats[0].inIcuCurrently}
            </span>
          </h3>
          <h3 className="card-title">
            Deaths:{" "}
            <span className=" text-purple-400 pl-2">
              {props.usStats[0].death}
            </span>
          </h3>
          <h3 className="card-title">
            Recovered:{" "}
            <span className="text-green-400 pl-2">
              {props.usStats[0].recovered}
            </span>
          </h3>
          <h3 className="card-title">
            Data last updated: {props.usStats[0].date}{" "}
            <span className="text-gray-700 pl-2"> YYYYMMDD </span>
          </h3>
          <h3 className="text-gray-900 my-1 pl-4">nothing to see here, yet!</h3>

          <h2 className="us-card-header">US Links</h2>
          <a
            className="us-card-link hover:bg-red-800 hover:text-gray-400 duration-300"
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            CDC
            <figure className="inline-block w-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </figure>
          </a>
          <a
            className="us-card-link hover:bg-red-800 hover:text-gray-400 duration-300"
            href="https://twitter.com/CDCgov"
            target="_blank"
            rel="noreferrer noopener"
          >
            CDC Twitter
          </a>
        </section>
        <section className="card md:w-8/12 border-l-4 border-gray-300 hover:bg-black">
          <h2 className="int-card-header ">INT Links</h2>
          <a
            className="int-card-link hover:bg-gray-300 hover:text-gray-900 duration-300"
            href="https://covid19.who.int/"
            target="_blank"
            rel="noreferrer noopener"
          >
            WHO COVID-19 Dashboard
          </a>
          <a
            className="int-card-link hover:bg-gray-300 hover:text-gray-900 duration-300"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            target="_blank"
            rel="noreferrer noopener"
          >
            WHO COVID-19 Public Advice
          </a>
          <a
            className="int-card-link hover:bg-gray-300 hover:text-gray-900 duration-300"
            href="https://2oqz471sa19h3vbwa53m33yj-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/DeadliestPandemics-Infographic-78-17August.jpg"
            target="_blank"
            rel="noreferrer noopener"
          >
            Pandemics History Infographic
          </a>
          <a
            className="int-card-link hover:bg-gray-300 hover:text-gray-900 duration-300"
            href="https://ourworldindata.org/coronavirus"
            target="_blank"
            rel="noreferrer noopener"
          >
            Our World in Data: Coronavirus
          </a>
        </section>
        <section className="card md:w-4/12 border-l-4 border-green-700 hover:bg-black">
          <h2 className="src-card-header ">Other Links</h2>
          <a
            className="src-card-link hover:bg-gray-300 hover:text-gray-900 duration-300"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            target="_blank"
            rel="noreferrer noopener"
          >
            Data Source
          </a>
          <a
            className="src-card-link hover:bg-gray-300 hover:text-gray-900 duration-300"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            target="_blank"
            rel="noreferrer noopener"
          >
            Data Source Api
          </a>
          <a
            className="src-card-link hover:bg-gray-300 hover:text-gray-900 duration-300"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            target="_blank"
            rel="noreferrer noopener"
          >
            Data Source Api
          </a>
        </section>
      </main>
    </>
  );
}

export default Index;
