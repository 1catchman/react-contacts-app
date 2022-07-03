import {
  Box,
  FormGroup,
  FormControlLabel,
  FormControlLabelProps,
  Checkbox,
  CheckboxProps
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckedIcon, Icon } from './Customs';

function CustomCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
        p: 0
      }}
      disableRipple
      color="default"
      checkedIcon={
        <CheckedIcon
          sx={{
            width: 20,
            height: 20,
            '&:before': { width: 12, height: 12 }
          }}
        />
      }
      icon={
        <Icon
          sx={{
            width: 20,
            height: 20,
            '&:before': { width: 12, height: 12 }
          }}
        />
      }
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

function CustomLabel(props: FormControlLabelProps) {
  return (
    <FormControlLabel
      value="start"
      labelPlacement="start"
      sx={{
        justifyContent: 'space-between',
        m: 0,
        px: '1rem',
        py: '4px',
        transition: 'all .3s',
        '& .MuiSvgIcon-root': {
          visibility: 'hidden',
          transition: 'all .1s'
        },
        '&:hover': {
          backgroundColor: '#dcecee',
          '& .MuiSvgIcon-root': {
            visibility: 'visible'
          }
        }
      }}
      {...props}
    />
  );
}

export default function Tags() {
  return (
    <FormGroup
      sx={{
        my: '1rem',
        borderRadius: '8px',
        backgroundColor: '#f3f5f9',
        '&>*:nth-child(2n)': {
          backgroundColor: 'white'
        },
        '&>*:first-child': {
          borderRadius: '8px 8px 0 0'
        },
        pb: '1rem'
      }}
    >
      {[...new Array(4)].map((_, index) => {
        return (
          <CustomLabel
            key={`${index}tag-${Math.floor(Math.random() * 100)}`}
            label="Greetings"
            control={
              <Box
                sx={{
                  display: 'flex',
                  gap: 1
                }}
              >
                <DeleteIcon color="error" />
                <CustomCheckbox />
              </Box>
            }
          />
        );
      })}
    </FormGroup>
  );
}
