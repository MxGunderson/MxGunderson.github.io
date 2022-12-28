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
    const [songDetails, setSongDetails] = useState([])

    const songList = [
        {
            id: 0,
            details: {
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
        },
        {
            id: 1,
            details: {
                songName: "One thing remains",
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
        }
    ];

    //list of console logs to view HOW the data is being displayed
    console.log('songlist array of objects', songList)
    console.log('songlist mapping with id', songList.map(x => x.id))
    console.log(songSelect)

    //handclick is called when user selects a song
    const handleClick = (value: any) => {
        //assigning the 'value' variable (which comes from line 113) to the songSelect state
        value = songSelect

        //set state
        setSongSelect(songSelect)

        //map through data in state then display it
        const returnSelectedSong = songList.map(s => {
            return (
                <div key={s.id}>
                    <li>{s.details.artist}</li>
                    <li>{s.details.songName}</li>
                    <li>{s.details.defaultKey}</li>
                </div>
            )
        })

        //continuing to prove that the stat in songSelect is being populated correctly.
        console.log('This is handleclick, song name: ', songSelect)
        console.log(songSelect)

        //return selected song (returnSong) in JSX
        //im not sure how to do this
        console.log(returnSelectedSong)
        return <div>{returnSelectedSong}</div>
    }

    return (
        <div>
            <Autocomplete
                onInputChange={(e, songSelect) => { //sets state when song is clicked
                    setSongSelect(songSelect);
                }}
                id="controllable-states-demo"
                options={songList.map(x => x.details.songName)} //used in the search bar
                onChange={(e, value) => handleClick(value)} //calls handleClick
                renderInput={(params) => <TextField {...params} label="Select Song" />} //need this
            />

            <hr />
            <h3>Above is landing, below are song options</h3>
            <hr />

            {/* -------------------------------------------- */}

            {/* can be ignored for now, we aren't wanting to pass any data anywhere. Wnat to keep in 'in house' */}

            {/* we need to pass the data to the songOptions component, so that songOptions can use the data. */}
            {/* <SongOptions lyrics={option} /> */}
            {/* <SongOptions songSelect={songSelect} /> */}
            {/* -------------------------------------------- */}

            {/* this is where im wanting to return the selected song data found between line 89 - 97 */}
            {/* display the return song here, but not sure how to do this */}
            {/* <div>{handleClick()}</div> */}
        </div>
    );
}