import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  Box,
  Typography,
  IconButton,
  FormControl
} from '@mui/material';
import { CustomButton, CustomInput } from './Customs';
import Tags from './Tags';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth: number = 340;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    border: 'none',
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxShadow: '12px 2px 37px -21px rgba(0, 0, 0, 0.15)',
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(0)
      }
    })
  }
}));

interface Props {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: Props) {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 1600
        }}
      >
        <IconButton
          aria-label="Menu"
          component="span"
          onClick={onToggle}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        variant="permanent"
        PaperProps={{ variant: 'elevation' }}
        open={open}
      >
        <Box
          sx={{
            m: '1rem 1rem 0.5rem 4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 38
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 600 }}
            component="div"
            align="left"
          >
            Audience
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#b8c3d5' }}
            component="div"
            align="right"
          >
            100 Contacts
          </Typography>
        </Box>
        <Box
          sx={{
            m: '1rem',
            mt: '0.5rem',
            height: '100%',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
          className="scrollbar"
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            <b>Include Tags:</b>
          </Typography>
          <Tags />
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            <b>Exclude Tags:</b>
          </Typography>
          <Tags />
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            <b>Message Sent:</b>
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              my: '1rem',
              display: 'grid',
              gridTemplateColumns: { sm: '1fr 1fr' },
              gap: 2
            }}
          >
            <FormControl variant="standard">
              <CustomInput placeholder="Min" />
            </FormControl>
            <FormControl variant="standard">
              <CustomInput placeholder="Max" />
            </FormControl>
          </Box>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            <b>Message Received:</b>
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              my: '1rem',
              display: 'grid',
              gridTemplateColumns: { sm: '1fr 1fr' },
              gap: 2
            }}
          >
            <FormControl variant="standard">
              <CustomInput placeholder="Min" />
            </FormControl>
            <FormControl variant="standard">
              <CustomInput placeholder="Max" />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: 'grid',
              alignItems: 'flex-end',
              height: '100%',
              width: '100%'
            }}
          >
            <CustomButton
              variant="contained"
              sx={{ width: '100%', borderRadius: '8px' }}
            >
              Save Filter
            </CustomButton>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
