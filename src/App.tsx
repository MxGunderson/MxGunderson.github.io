import { Grid } from '@mui/material';
import { textAlign } from '@mui/system';
import './App.css';
import Landing from './Componets/Views/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h3 style={{ textAlignLast: 'center' }}>Worship Song Select</h3>
          <Landing />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>

    

    </div>
  );
}

export default App;
