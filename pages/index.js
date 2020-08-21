import getData from "./getData";
// import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from "../components/simpleCard";
import FolderList from "../components/FolderList";
import MainLink from "../components/MainLink";
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import { render } from "react-dom";



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
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: amber[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex">
        <SimpleCard header="Michigan Data" linkStyles="">
          <FolderList
            primary00={props.miStats.hospitalizedCurrently}
            primary01={props.miStats.inIcuCurrently}
            primary02={props.miStats.death}
            primary03={props.miStats.recovered}
            primary04={props.miStats.date}
            primary05={props.miStats.dataQualityGrade}
          ></FolderList>
         
          <MainLink
            btnText="Michigan .Gov"
            href={props.miInfo.covid19Site}
            btnColor="secondary"
            endIcon={<OpenInBrowserIcon />}
          />
          <MainLink
            btnText='Michigan HHS'
            href="https://twitter.com/michiganhhs"
            btnColor="secondary"
            endIcon={<TwitterIcon />}
          />
          
        </SimpleCard>
      </Box>
    </ThemeProvider>
  );
}

export default Index;
