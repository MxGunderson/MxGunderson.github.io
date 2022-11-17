import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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

        </div>
    );
}