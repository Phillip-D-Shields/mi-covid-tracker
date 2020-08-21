import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalHospital from '@material-ui/icons/LocalHospital';
import HotelIcon from '@material-ui/icons/Hotel';
import ReportIcon from '@material-ui/icons/Report';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';

import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { amber, red, green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  
}));

export default function FolderList(props) {
  const classes = useStyles();

  return (
    <List >
      <ListItem >
        <ListItemAvatar>
          <Avatar style={{backgroundColor: amber[500]}}>
            <LocalHospital />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color: amber[600]}} primary={props.primary00} secondary="Currently Hospitalized" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: red[600]}} >
            <HotelIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color: red[600]}} primary={props.primary01} secondary="Currently in ICU" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar  style={{backgroundColor: purple[600]}}>
            <ReportIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color: purple[600]}} primary={props.primary02} secondary="Deaths" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: green[600]}}>
            <LocalPharmacyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color: green[600]}} primary={props.primary03} secondary="Recovered" />
      </ListItem>
      <ListItem>
        
        <ListItemText style={{color: green[600]}} primary={props.primary04} secondary="YYYYMMDD Data updated" />
      </ListItem>
      <ListItem>
        
        <ListItemText style={{color: green[600]}} primary={props.primary05} secondary="Current Data Quality Grade" />
      </ListItem>
    </List>
  );
}