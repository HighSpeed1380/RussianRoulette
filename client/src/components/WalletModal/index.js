import React, { useState } from 'react';
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
  TextField as MuiTextField,
  Icon as MuiIcon,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import CloseIcon from '@mui/icons-material/Close';
import useWallet from '../../hooks/useWallet';
import Cashier from './Cashier';
import Gems from './Gems';
import Yield from './Yield';
import Tip from './Tip';

/* ---------------------------------------------------------------------------------------- */

const TextField = styled(MuiTextField)(({ theme }) => ({
  background: '#2c3137',
  borderRadius: 4,
  '& .MuiOutlinedInput-input': {
    padding: '8px 8px',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'right'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'contents'
  }
}));

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: '#2c3137'
  }
}));

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

export default function WalletModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { modalIsOpened, closeWalletModal } = useWallet();
  const [cryptoType, setCryptoType] = useState('btc');
  const [cashier, setCashier] = useState(true);
  const [gems, setGems] = useState(false);
  const [_yield, setYield] = useState(false);
  const [tip, setTip] = useState(false);

  const openCashierPanel = () => {
    setCashier(true);
    setGems(false);
    setYield(false);
    setTip(false);
  }
  const openGemsPanel = () => {
    setGems(true);
    setCashier(false);
    setYield(false);
    setTip(false);
  }
  const openYieldPanel = () => {
    setYield(true);
    setCashier(false);
    setGems(false);
    setTip(false);
  }
  const openTipPanel = () => {
    setTip(true);
    setCashier(false);
    setGems(false);
    setYield(false);
  }
  const closeAndSetDefault = () => {
    closeWalletModal();
    setCashier(true);
    setGems(false);
    setTip(false);
    setYield(false);
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={closeAndSetDefault}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle id="responsive-dialog-title" onClose={closeAndSetDefault}>
        <Typography fontSize={18} fontWeight={600} fontFamily="'Montserrat', sans-serif" textTransform="uppercase" >
          Wallet
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box>
          <Box sx={{ marginBottom: '10px' }}>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab onClick={openCashierPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>cashier</Tab>
                <Tab onClick={openGemsPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>gems</Tab>
                <Tab onClick={openYieldPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>yield</Tab>
                <Tab onClick={openTipPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>tip</Tab>
              </TabsList>
            </TabsUnstyled>
          </Box>
          {
            cashier ?
              <Cashier />
              :
              gems ?
                <Gems />
                :
                _yield ?
                  <Yield />
                  :
                  tip ?
                    <Tip />
                    :
                    ''
          }
        </Box>
      </DialogContent>
    </Dialog>
  );
}