import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CountrySelect = ({ options, countrySelected, handleChange, providers }) => {

	return (
		<Autocomplete
		sx={{ width: 200}}
		size={"small"}
		options={options}
		autoHighlight
		onClick={(event, value) => {handleChange(value.value)}}
		onChange={(event, value) => {handleChange(value.value)}} 
		value={countrySelected}
		getOptionLabel={(option) => option.label}
		disableClearable
		renderOption={(props, option) => (
			<Box component="li" sx={{ '& > img': { mr: 2 } }} {...props}>
			<img
				loading="lazy"
				width="20"
				src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
				alt=""
			/>
			{option.label}
			</Box>
		)}
		renderInput={(params) => (
			<TextField
			{...params}
			// label="Choose a country"
			inputProps={{
				...params.inputProps,
			}}
			/>
		)}
		/>
	);
}

export default CountrySelect;