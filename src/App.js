import logo from './logo.svg';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';
import PatientNavbar from './components/PatientNavbar';

import DoctorInfo from './components/DoctorInfo';

import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PatientList from './pages/PatientList';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <DoctorInfo />
      <div className={classes.appMain}>
        <PatientNavbar />
        
        <PatientList />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;













  /*const {entities} = useJaneHopkins();

  const addPatient = async() => {
    
    const addPatientResponse = await entities.patient.add({
      name: "Test Person",
      dob: "January 17th, 1990",
      insuranceNumber: "123456789"
    });
    console.log(addPatientResponse);
  }

  return (
    <div className="App">
     <button onClick={() => addPatient()}>Add Patient</button>
    </div>*/



 

