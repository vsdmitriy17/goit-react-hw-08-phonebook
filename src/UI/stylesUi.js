import { styled, alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
// import { withTheme } from '@emotion/react';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    top: '0',
    left: '1%',
  },
  '& label ': {
    top: '-10%',
    color: 'rgb(200, 199, 202)',
  },
  '& .MuiInputBase-input': {
    height: '10px',
    color: 'white',
  },
  '&.MuiFormControl-root:not(:last-child)': {
    marginBottom: '20px',
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: 'pink',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
      color: 'white',
    },
  },
});

export const Input = styled(TextField)({
  '& label.Mui-focused': {
    top: '-6%',
  },
  '& label ': {
    top: '-10%',
    color: 'rgb(200, 199, 202)',
  },
  '& .MuiFilledInput-root': {
    maxHeight: '50px',
    color: 'white',
  },
  '&.MuiFormControl-root:not(:last-child)': {
    marginBottom: '20px',
  },
});

export const ButtonCss = styled(Button)({
  '&.MuiButton-root': {
    borderRadius: '10px',
    padding: '0px 5px 0px 5px',
    textTransform: 'none',
    marginLeft: '10px',
    border: '1px solid rgb(200, 199, 202);',
    backgroundColor: '',
    color: 'rgb(200, 199, 202)',
  },
});

export const ButtonContacts = styled(Button)({
  '&.MuiButton-root': {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
  },
});

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '1px',
  },
  '&.MuiInputBase-root:not(:last-child)': {
    marginBottom: '20px',
  },
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? 'rgb(86, 67, 196)' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '230px',
    color: 'white',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const CssLabel = styled(InputLabel)({
  '&.MuiInputLabel-root': {
    fontSize: '22px',
    color: 'white',
  },
});
