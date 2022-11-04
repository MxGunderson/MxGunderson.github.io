import './App.css';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import Landing from './Componets/Views/Landing/Landing';
import SongTemplate from './Componets/Views/SongTemplate/SongTemplate';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
          </Grid>
          <Grid item xs={6}>
            <Landing />
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
          </Grid>
          <Grid item xs={6}>
            <SongTemplate />
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      </Box>

    </div >
  );
}

export default App;
