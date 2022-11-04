import './App.css';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import Landing from './Componets/Views/Landing/SongSelection';
import SongTemplate from './Componets/Views/SongTemplate/SongOptions';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Landing />
          </Grid>
        </Grid>
      </Box>

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SongTemplate />
          </Grid>
        </Grid>
      </Box> */}

    </div >
  );
}

export default App;
