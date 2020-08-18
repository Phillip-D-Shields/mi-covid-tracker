//! getStaticProps => static generation(fetch data at build)
export async function getStaticProps() {
  //! consider an addition for loading and error
  const res = await fetch(
    "https://api.covidtracking.com/v1/states/mi/current.json"
  );

  const data = await res.json();

  //! passes the data to the page as props
  return {
    props: { data },
  };
}






function Index({ data }) {
  return <h1>{data.state}</h1>;
}






export default Index;
