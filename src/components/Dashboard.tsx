import { useContext, useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  Typography
} from '@mui/material';
import Sidebar from './Sidebar';
import EnhancedTable from './Table';
import { CustomInput, CustomButton } from './Customs';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { AppContext } from '../context';

function DashboardContent() {
  const { state } = useContext(AppContext);
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          position: 'relative'
        }}
      >
        <Sidebar open={open} onToggle={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.common.white
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
          className="scrollbar"
        >
          <Box
            sx={{
              m: `1rem 1rem 0.5rem ${open ? '1rem' : '4rem'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: 38,
              transition: 'all .5s'
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600 }}
              component="div"
              align="left"
            >
              All Contacts ({state.users.length})
            </Typography>
            <CustomButton
              aria-label="Add"
              size="small"
              variant="contained"
              sx={{
                borderRadius: '50%',
                p: 0,
                minWidth: 28,
                height: 28
              }}
            >
              <AddIcon fontSize="small" />
            </CustomButton>
          </Box>
          <Box
            component="form"
            noValidate
            sx={{ position: 'relative', width: '100%', px: '1rem' }}
          >
            <FormControl
              sx={{ m: 0, width: '100%', position: 'relative' }}
            >
              <CustomInput
                sx={{
                  '& .MuiInputBase-input': {
                    pl: 5,
                    borderRadius: 8
                  }
                }}
                placeholder="Search contacts"
                startAdornment={
                  <SearchIcon
                    sx={{
                      position: 'absolute',
                      left: 0,
                      zIndex: 1000,
                      ml: 1,
                      color: '#b4c0d3'
                    }}
                  />
                }
              />
            </FormControl>
          </Box>
          <EnhancedTable />
        </Box>
      </Box>
    </Container>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
