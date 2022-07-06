import React, { useState, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import {
  Box,
  TableBody,
  TableCell,
  TableRow,
  Avatar,
  Typography,
  CircularProgress
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AppContext } from '../context';
import { Types } from '../reducers';
import { CustomCheckbox, CustomButton } from './Customs';
import { useInView } from 'react-intersection-observer';

const maxUsers = 100; //step 10

export default function TableRows() {
  const { state, dispatch } = useContext(AppContext);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error } = useFetch(query, page);
  const { ref } = useInView({
    rootMargin: '100px',
    threshold: 1,
    onChange(inView, entry) {
      if (inView && state.users.length < maxUsers) {
        setPage((prev) => prev + 1);
      }
    }
  });

  const handleClick = (userId: string) => {
    const selectedIndex = state.selectedUsers.indexOf(userId);

    if (selectedIndex === -1) {
      dispatch({ type: Types.Select, payload: userId });
    } else {
      dispatch({ type: Types.Remove, payload: userId });
    }
  };

  const isSelected = (id: string) =>
    state.selectedUsers.indexOf(id) !== -1;

  const isLast = (index: number) => state.users.length - 1 === index;

  return (
    <React.Fragment>
      <TableBody>
        {state.users.map((user, index) => {
          const isItemSelected = isSelected(user.login.uuid);
          const isLastRow = isLast(index);
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <React.Fragment key={`${index}-user-${user.login.uuid}`}>
              {isLastRow ? <tr ref={ref} /> : null}
              <TableRow
                hover
                onClick={() => handleClick(user.login.uuid)}
                role="checkbox"
                aria-checked={isItemSelected}
                selected={isItemSelected}
                sx={{
                  '&:nth-child(1n)': {
                    width: '50%',
                    '&:hover': { backgroundColor: '#dcecee' }
                  },
                  '&:last-child td, &:last-child th': { border: 0 }
                }}
              >
                <TableCell padding="checkbox" sx={{ border: 0 }}>
                  <Box sx={{ display: 'flex', gap: 1, px: 1 }}>
                    <CustomCheckbox
                      color="primary"
                      sx={{ width: 42 }}
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        width: '100%',
                        height: '100%',
                        borderBottom: '1px solid #f5f6fb',
                        py: 1
                      }}
                    >
                      <Avatar
                        alt={`${user.name.first} ${user.name.last} Thumbnail`}
                        src={user.picture.thumbnail}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          component="div"
                        >
                          <b>
                            {user.name.first} {user.name.last}
                          </b>
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: '#b8c3d5' }}
                          component="div"
                        >
                          <b>+{user.phone.split('.').join('')}</b>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ border: 0 }}
                  component="th"
                  scope="row"
                  align="right"
                >
                  <CustomButton
                    size="small"
                    variant="contained"
                    sx={{
                      borderRadius: 8,
                      py: '2px',
                      fontSize: 11,
                      fontWeight: 400,
                      mr: 2
                    }}
                  >
                    Tags
                  </CustomButton>
                  <CustomButton
                    aria-label="Add"
                    size="small"
                    variant="contained"
                    sx={{
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 24,
                      height: 24
                    }}
                  >
                    <AddIcon fontSize="inherit" />
                  </CustomButton>
                </TableCell>
              </TableRow>
            </React.Fragment>
          );
        })}
      </TableBody>
      {state.users.length < maxUsers || loading ? (
        <caption
          style={{
            width: '100%',
            textAlign: 'center'
          }}
        >
          <CircularProgress />
        </caption>
      ) : null}
    </React.Fragment>
  );
}
