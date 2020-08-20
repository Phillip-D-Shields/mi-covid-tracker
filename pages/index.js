import getData from "./getData";

export async function getStaticProps(context) {
  const miStats = await getData(
    "https://api.covidtracking.com/v1/states/mi/current.json"
  );
  const usStats = await getData(
    "https://api.covidtracking.com/v1/us/current.json"
  );

  return {
    props: {
      miStats,
      usStats,
    },
  };
}

function Index(props) {
  
  return (
    <>
      <section className="bg-gray-900 p-6 rounded m-1">
        <h1 className="text-blue-700"> Current Michigan Data</h1>
        <h2 className="my-1 text-gray-400 pl-4">Data Quality Grade: {props.miStats.dataQualityGrade}</h2>
        <h2 className="my-1 text-gray-400 pl-4">Data last updated: {props.miStats.date} <span className="text-gray-700 pl-2"> YYYYMMDD </span></h2>
        <h2 className="my-1 text-gray-400 pl-4">Currently hospitalized: <span className="text-orange-400 pl-2"> {props.miStats.hospitalizedCurrently} </span></h2>
        <h2 className="my-1 text-gray-400 pl-4">Currently in ICU: <span className="text-indigo-400 pl-2">{props.miStats.inIcuCurrently}</span></h2>
        <h2 className="my-1 text-gray-400 pl-4">Deaths: <span className=" text-purple-400 pl-2">{props.miStats.death}</span></h2>
        <h2 className="my-1 text-gray-400 pl-4">Recovered: <span className="text-green-400 pl-2">{props.miStats.recovered}</span></h2>
      </section>
      <section  className="bg-gray-900 p-6 rounded m-1">
        <h1 className="text-red-700"> Current US Data</h1>
        {/* <h2>Data last updated: {props.usStats[0].death}</h2> */}
        <h2 className="my-1 text-gray-400 pl-4">Currently hospitalized: <span className="text-orange-400 pl-2">{props.usStats[0].hospitalizedCurrently} </span></h2>
        <h2 className="my-1 text-gray-400 pl-4">Currently in ICU: <span className="text-indigo-400 pl-2">{props.usStats[0].inIcuCurrently}</span></h2>
        <h2 className="my-1 text-gray-400 pl-4">Deaths: <span className=" text-purple-400 pl-2">{props.usStats[0].death}</span></h2>
        <h2 className="my-1 text-gray-400 pl-4">Recovered: <span className="text-green-400 pl-2">{props.usStats[0].recovered}</span></h2>
      </section>
    </>
  );
}

export default Index;
