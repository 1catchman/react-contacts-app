import * as React from 'react';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControlLabel
} from '@mui/material';
import { CustomButton, CustomCheckbox } from './Customs';
import TableRows from './TableRows';
import { AppContext } from '../context';
import { Types } from '../reducers';

export default function EnhancedTable() {
  const { state, dispatch } = React.useContext(AppContext);

  const handleSelectAllClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      dispatch({
        type: Types.SelectAll,
        payload: state.users
          .map((user) => user.login.uuid)
          .filter((userId) => !state.selectedUsers.includes(userId))
      });
      return;
    }
    dispatch({ type: Types.RemoveAll, payload: null });
  };

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ overflowX: 'hidden' }}
    >
      <Table sx={{ minWidth: 480 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              padding="checkbox"
              sx={{ width: '50%', border: 0 }}
            >
              <FormControlLabel
                sx={{
                  m: 1,
                  fontSize: '12px',
                  '& .MuiFormControlLabel-label': {
                    fontSize: 14,
                    fontWeight: 500
                  }
                }}
                control={
                  <CustomCheckbox
                    sx={{ mr: 1 }}
                    color="primary"
                    indeterminate={
                      state.selectedUsers.length > 0 &&
                      state.selectedUsers.length < state.users.length
                    }
                    checked={
                      state.users.length > 0 &&
                      state.selectedUsers.length ===
                        state.users.length
                    }
                    onChange={handleSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts'
                    }}
                  />
                }
                label="Select All"
              />
            </TableCell>
            <TableCell align="right" sx={{ width: '50%', border: 0 }}>
              <CustomButton
                size="small"
                variant="contained"
                sx={{ borderRadius: '8px' }}
              >
                Export All
              </CustomButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableRows />
      </Table>
    </TableContainer>
  );
}
