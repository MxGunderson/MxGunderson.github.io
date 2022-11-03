import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Songs } from '../../../DataBase/Songs';

export default function Landing() {
    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={Songs.map((option: any) => option.songName)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                />
            )}
        />
    );
}