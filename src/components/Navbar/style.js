import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    appBar:{
      backgroundColor:"black"
    },
    task:{
      padding:"10px",
      color:"red",
      textDecoration:'none'
    },
    toggleButton:{
      position:'relative',
      left:'400px',
      bottom:'8px' 
    }
  }));
export default useStyles