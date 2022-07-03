import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Dashboard from './components/Dashboard';
import { CssBaseline } from '@mui/material';
import { AppProvider } from './context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#09a391'
    },
    background: {
      default: grey[100]
    }
  },
  typography: {
    fontSize: 13
  }
});

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
