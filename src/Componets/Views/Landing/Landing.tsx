import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Songs } from '../../../DataBase/Songs';
import SongTemplate from '../SongTemplate/SongTemplate';

export default function Landing() {
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={Songs.sort()}
                getOptionLabel={(option) => option.songName}
                onChange={(e, value) => console.log("song name", e.target, value?.songName, value?.id)}
                renderInput={(params) => (
                    <TextField {...params} label="Select song" variant="outlined" />
                )}
            />
        </div>
    );
}