import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import db from '../db.json'
import SongOptions from './SongOptions';
import { useEffect, useState } from 'react';

export interface SongDB {
    id?: number;
    songName?: string;
    artist?: string;
    defaultKey?: string;
    intro?: string;
    verseOne?: string;
    verseTwo?: string;
    verseThree?: string;
    verseFour?: string;
    chorus?: string;
    preChorus?: string;
    bridge?: string;
    verseOneNotes?: string;
    preChorusNotes?: string;
    bridgeNotes?: string;
    chorusNotes?: string;
}

export default function Landing() {

    const [songSelect, setSongSelect] = useState('');

    const lyrics = (e: any, option: any) => {

        setSongSelect(option)
        // console.log("songSelect ", songSelect)
        console.log("option: ", option, e)
    }
    
    //useEffect()
    useEffect(() => {
      fetch('../db.json')
        .then(response => response.json())
        //console logging data pulled from db.json,
        .then((json) => console.log(json))
     }, [])

     
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
            <hr />
            <h3>Above is landing, below are song options</h3>
            <hr />

            {/* we need to pass the data to the songOptions component, so that songOptions can use the data. */}
            {/* <SongOptions lyrics={option} /> */}
            <SongOptions songSelect={songSelect} />


        </div>
    );
}