import { ChangeEvent, FC, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
	  color: '#22c55E',
	},
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: '#7DDBDE',
	  },
	  '&.Mui-focused fieldset': {
		borderColor: '#E1E1E1',
	  },
	},
});

/**
 * details page countries dropdown
 * @param {array} options countries code array 
 * @param {object} countrySelected country code and name for the country selected 
 * @param {(arg0: string) => void} handleChange country code and name for the country selected   
 */

type Options = {
	code: string | undefined;
	label: string;
} 

type DropdownProps = {
	options: Options[];
	countrySelected: string;
	handleChange: (arg0: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, countrySelected, handleChange }) => {
	
	const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
    );

	const defaultValues = () => {
		const code = countrySelected;
		const label = regionNames.of(countrySelected);
		return {code, label}
	}

	return (
		<Autocomplete
			sx={{ width: 200 }}
			size={"small"}
			color={"white"}
			options={options}
			autoHighlight={true}
			value={defaultValues()}
			onChange={(event: SyntheticEvent<Element, Event>, option: NonNullable<Options>) => {
				handleChange(option.code) 
			}} 
			getOptionLabel={(option: Options) => option.label || ""}
			disableClearable
			isOptionEqualToValue={(option, value) => 
				option.code === value.code
			}
			renderOption={(props, option) => (
				<Box component="li" sx={{ '& > img': { mr: 2 }}} {...props}>
					<img
						loading="lazy"
						width="20"
						src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
						alt=""
					/>
					{regionNames.of(option.code)}
				</Box>
			)}
			renderInput={(params) => (
				<CssTextField
					{...params}
					label="Choose a country"
					InputLabelProps={{style : {color : '#7DDBDE'} }}
					inputProps={{
						...params.inputProps,
						style:{color: 'white', fontSize: 14}
					}}
				/>
			)}
		/>	
	);
};

export default Dropdown;
