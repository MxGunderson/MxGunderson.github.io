import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import db from '../db.json'
import SongOptions from './SongOptions';
import { SetStateAction, useEffect, useState } from 'react';

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

    const songDb = [
        {
            id: 0,
            songName: "You Are My Rock",
            artist: "Tim Cone",
            defaultKey: "B",
            intro: "",
            verseOne: "You are my rock and there is no other, You are my rock",
            verseTwo: "",
            verseThree: "",
            verseFour: "",
            chorus: "You are my refuge, you are my tower of strength. You are my shelter, I'll run into your Name (for there I am saved)",
            preChorus: "You alone are my strength, You alone are my strength. (You are my rock and there is no other, you are my rock)",
            bridge: "The Lord is my rock, He's become my salvation. Whom shall I fear, whom shall I fear, whom shall I fear?",
            verseOneNotes: "|:B  |B E:|",
            preChorusNotes: "|G#m |E |:B :|",
            bridgeNotes: "|:E G#m |F# B :|",
            chorusNotes: "|:E G#m | F# B :| }"
        }
    ];

    const lyrics = (e: any) => {

        // setSongSelect(option)
        // console.log("songSelect ", songSelect)
        console.log("onchange call: ", e)
    }

    return (
        <div>
            <Autocomplete
                onInputChange={(e, songSelect) => {
                    setSongSelect(songSelect);
                    { console.log('this is a song', songSelect) }
                }}
                id="controllable-states-demo"
                options={songDb.map(x => x.songName)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select Song" />}
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