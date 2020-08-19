export async function getStaticProps(context) {
  const miRes = await fetch(
    "https://api.covidtracking.com/v1/states/mi/current.json"
  );
  const usRes = await fetch("https://api.covidtracking.com/v1/us/current.json");

  const miStats = await miRes.json();
  const usStats = await usRes.json();

  console.log(usStats);
  return {
    props: {
      miStats,
      usStats
    },
  };
}

function Index(props) {
  return (
    <>
      <section>
        <h1> Current Michigan Data</h1>
        <h2>Data Quality Grade: {props.miStats.dataQualityGrade}</h2>
        <h2>
          Data last updated: {props.miStats.date}
        </h2>
        <h2>Currently hospitalized: {props.miStats.hospitalizedCurrently} </h2>
        <h2>Currently in ICU: {props.miStats.inIcuCurrently}</h2>
        <h2>Deaths: {props.miStats.death}</h2>
        <h2>Recovered: {props.miStats.recovered}</h2>
      </section>
      <section>
        <h1> Current US Data</h1>
        <h2>
          Data last updated: {props.usStats.date}
        </h2>
        <h2>Currently hospitalized: {props.usStats.hospitalizedCurrently} </h2>
        <h2>Currently in ICU: {props.usStats.inIcuCurrently}</h2>
        <h2>Deaths: {props.usStats.death}</h2>
        <h2>Recovered: {props.usStats.recovered}</h2>
      </section>
    </>
  );
}

export default Index;
