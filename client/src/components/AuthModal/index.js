import React, { useState } from 'react';
import {
  Box,
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle as MuiDialogTitle,
  useMediaQuery,
  styled,
  IconButton,
  Stack,
  Tab as MuiTab
} from '@mui/material';
import { TabContext, TabList as MuiTabList, TabPanel } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../hooks/useAuth';
import LoginTabPanel from './LoginTabPanel';
import RegisterTabPanel from './RegisterTabPanel';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';


const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: #191e24;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 3px;
  display: flex;
  margin: 1px;
  justify-content: center;

  &:focus {
    color: #black;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #f8bf60;
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const TabsList = styled(TabsListUnstyled)`
  min-width: 120px;
  background-color: #2c3137;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: '#191e24'
  }
}));

const DialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <MuiDialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};
/* ---------------------------------------------------------------------------------------- */

export default function AuthModal() {
  const { modalIsOpened, closeAuthModal } = useAuth();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [ login, setLogin ] = useState(true);
  const [ register, setRegister ] = useState(false);

  const openloginPanel = () => {
    setLogin(true);
    setRegister(false);
  }

  const openregisterPanel = () => {
    setRegister(true);
    setLogin(false);
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={closeAuthModal}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeAuthModal}>
        <Stack direction="row">
          <Box component="img" src="/assets/images/logo.png" alt="logo" width="30%" />
        </Stack>
      </DialogTitle>
      <DialogContent>
      <Box>
          <Box sx={{ marginBottom: '10px' }}>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab onClick={openloginPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>sign in</Tab>
                <Tab onClick={openregisterPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>creat an account</Tab>
              </TabsList>
            </TabsUnstyled>
          </Box>
          {
            login ?
              <LoginTabPanel />
              :
              register ?
                <RegisterTabPanel />
                :
                ''
          }
        </Box>
      </DialogContent>
    </Dialog>
  );
}