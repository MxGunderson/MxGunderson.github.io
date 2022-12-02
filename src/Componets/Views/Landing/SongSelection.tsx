import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import db from '../../../db.json'
import { Songs } from '../../../DataBase/Songs';
import SongTemplate from '../SongTemplate/SongOptions';
import { useState } from 'react';

export default function Landing() {

    const [songSelect, setSongSelect] = useState('');

    const lyrics = (e: any, option: any) => {

        setSongSelect(option)
        // console.log("songSelect ", songSelect)
        console.log("option: ", option, e)
    }


    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={db.sort()}
                getOptionLabel={(option) => option.songName}
                onChange={(e: any, option) => lyrics(e.target.value, option?.verseOne)}
                renderInput={(params) => (
                    <TextField {...params} label="Select song" variant="outlined" />
                )}
            />

            {/* <SongTemplate lyrics={option} /> */}
            <SongTemplate />

            
        </div>
    );
}