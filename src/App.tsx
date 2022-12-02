import './App.css';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import db from "./db.json";

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

      {/* testing map functionality on db.json
      <div className='lyrics'>
        { db.map(lyric => {
          return(
            <div key={lyric.id}>
              <h4>{lyric.songName} - {lyric.artist}</h4>
              <h4>Key: {lyric.defaultKey}</h4>
              <p>{lyric.verseOneNotes}</p>
              <p>{lyric.verseOne}</p>
              <p>{lyric.verseTwo}</p>
              <p>{lyric.verseThree}</p>
              <p>{lyric.verseFour}</p>
              <p>{lyric.preChorusNotes}</p>
              <p>{lyric.preChorus}</p>
              <p>{lyric.chorusNotes}</p>
              <p>{lyric.chorus}</p>
              <p>{lyric.bridgeNotes}</p>
              <p>{lyric.bridge}</p>
            </div>
          )
        }) }
      </div> */}

    </div >
  );
}

export default App;
