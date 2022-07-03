import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button, { ButtonProps } from '@mui/material/Button';
import { Checkbox, CheckboxProps } from '@mui/material';

export const CustomInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor:
      theme.palette.mode === 'light' ? '#f3f5f9' : '#2b2b2b',
    fontSize: 14,
    fontWeight: 600,
    width: '100%',
    padding: '10px 12px',
    border: '1px solid transparent',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
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
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`
    }
  }
}));

export const CustomButton = styled(Button)<ButtonProps>({
  boxShadow: 'none',
  border: 'none',
  textTransform: 'none',
  '&:hover': {
    boxShadow: 'none'
  }
});

export const Icon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  transition: 'all .2s',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? '#30404d'
        : 'rgba(8,162,144,0.4)'
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)'
  },
  '&:before': {
    display: 'block',
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""'
  }
}));

export const CheckedIcon = styled(Icon)({
  position: 'relative',
  backgroundColor: '#09a391',
  transition: 'all .2s',
  '&:before': {
    display: 'block',
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: '#0ECDB7'
  }
});

export function CustomCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        p: 0
      }}
      disableRipple
      color="default"
      checkedIcon={
        <CheckedIcon
          sx={{
            width: 24,
            height: 24,
            '&:before': { width: 14, height: 14 }
          }}
        />
      }
      icon={
        <Icon
          sx={{
            width: 24,
            height: 24,
            backgroundColor: '#b4c0d3',
            '&:before': { width: 14, height: 14 }
          }}
        />
      }
      indeterminateIcon={
        <CheckedIcon
          sx={{
            width: 24,
            height: 24,
            '&:before': { width: 14, height: 14 }
          }}
        />
      }
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}
