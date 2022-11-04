import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';

export default function SongTemplate() {

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

    return (
        //implement some grid functionality here
        <div style={{textAlignLast: "center"}}>
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
                            <MenuItem value={10}>A</MenuItem>

                            <MenuItem value={10}>A#</MenuItem>
                            <MenuItem value={10}>Bb</MenuItem>

                            <MenuItem value={20}>B</MenuItem>
                            <MenuItem value={30}>C</MenuItem>

                            <MenuItem value={10}>C#</MenuItem>
                            <MenuItem value={10}>Db</MenuItem>

                            <MenuItem value={10}>D#</MenuItem>
                            <MenuItem value={10}>Eb</MenuItem>

                            <MenuItem value={10}>E</MenuItem>
                            <MenuItem value={10}>F</MenuItem>

                            <MenuItem value={10}>F#</MenuItem>
                            <MenuItem value={10}>Gb</MenuItem>

                            <MenuItem value={10}>G</MenuItem>

                            <MenuItem value={10}>G#</MenuItem>
                            <MenuItem value={10}>Ab</MenuItem>
                        </Select>

                        <div>
                            Shows selected song lyrics plus the correct corresponding chords
                        </div>
                    </FormControl>
            }
        </div>
    );
};