import React from 'react';
import {
  Box,
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle as MuiDialogTitle,
  useMediaQuery,
  styled,
  IconButton,
  Tab as MuiTab,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TabContext, TabList as MuiTabList, TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import useAccount from '../../hooks/useAccount';
import SecurityTabPanel from './SecurityTabPanel';
import TransactionsTabPanel from './TransactionsTabPanel';
import _2FATabPanel from './_2FATabPanel';


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

const Tab = styled(MuiTab)(({ theme }) => ({
  fontFamily: 'Montserrat',
  textTransform: 'capitalize',
  fontWeight: 700,
  '&.Mui-selected': {
    color: '#f8bf60'
  }
}));

const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#f8bf60'
  }
}));

/* ---------------------------------------------------------------------------------------- */

export default function AccountModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { modalIsOpened, currentTab, closeAccountModal, handleCurrentTab } = useAccount();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={closeAccountModal}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeAccountModal}>
        <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase" textAlign="center">
          Account
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box>
          <TabContext value={currentTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={(e, newValue) => handleCurrentTab(newValue)} centered>
                <Tab label="Security" value="security" />
                <Tab label="Transactions" value="transactions" />
                <Tab label="2FA" value="2fa" />
              </TabList>
            </Box>
            <TabPanel value="security" sx={{ px: 0 }}>
              <SecurityTabPanel />
            </TabPanel>
            <TabPanel value="transactions" sx={{ px: 0 }}>
              <TransactionsTabPanel />
            </TabPanel>
            <TabPanel value="2fa" sx={{ px: 0 }}>
              <_2FATabPanel />
            </TabPanel>
          </TabContext>
        </Box>
      </DialogContent>
    </Dialog>
  );
}