import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Songs } from '../../../DataBase/Songs';
import SongTemplate from '../SongTemplate/SongTemplate';

export default function Landing() {
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={Songs}
                getOptionLabel={(option) => option.songName}
                style={{ width: 300 }}
                onChange={(e, value) => console.log("song name", e.target, value?.songName)}
                renderInput={(params) => (
                    <TextField {...params} label="Combo box" variant="outlined" />
                )}
            />

            <SongTemplate />
        </div>
    );
}