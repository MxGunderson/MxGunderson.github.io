import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';

//interface used to catch the incoming data
//this is how we modal the data coming into this component
interface option {
    id: number,
    songName?: string,
    verseOne?: string,
    verseTwo?: string,
    bridge?: string,
    bridgeTwo?: string
}

export default function SongOptions() {

    const [key, setKey] = useState('');
    const [checked, setChecked] = useState(false)


    //handles switch input
    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    //handles key selection
    const handleChange = (event: SelectChangeEvent) => {
        setKey(event.target.value);
    };

    console.log("Key currently selected: ", key)

    return (
        //implement some grid functionality here
        <div style={{ textAlignLast: "center" }}>
            <Switch
                checked={checked}
                onChange={handleChecked}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            
            {
                checked
                    ?

                    <div>
                        Shows only selected song lyrics and numbers (nashville sys)
                        
                    </div>

                    :

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Key Select</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={key}
                            label="Key"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>Select a Key</em>
                            </MenuItem>
                            <MenuItem value={1}>A</MenuItem>
                            <MenuItem value={2}>A#</MenuItem>
                            <MenuItem value={3}>Bb</MenuItem>
                            <MenuItem value={4}>B</MenuItem>
                            <MenuItem value={5}>C</MenuItem>
                            <MenuItem value={6}>C#</MenuItem>
                            <MenuItem value={7}>Db</MenuItem>
                            <MenuItem value={8}>D#</MenuItem>
                            <MenuItem value={9}>Eb</MenuItem>
                            <MenuItem value={10}>E</MenuItem>
                            <MenuItem value={11}>F</MenuItem>
                            <MenuItem value={12}>F#</MenuItem>
                            <MenuItem value={13}>Gb</MenuItem>
                            <MenuItem value={14}>G</MenuItem>
                            <MenuItem value={15}>G#</MenuItem>
                            <MenuItem value={16}>Ab</MenuItem>
                        </Select>

                        <div>
                            Shows selected song lyrics plus the correct corresponding chords
                        </div>
                    </FormControl>
            }
        </div>
    );
};