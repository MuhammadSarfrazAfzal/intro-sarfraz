import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    appBar:{
      backgroundColor:"black"
    },
    task:{
      padding:"10px",
      color:"white",
      textDecoration:'none'
    }
    
  }));
export default useStyles