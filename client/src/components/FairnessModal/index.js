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
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import useFairness from '../../hooks/useFairness';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import SeedsTabPanel from './SeedsTabPanel';
import VerifyTabPanel from './VerifyTabPanel';

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
    // background: '#191e24'
    background: '#2c3137'
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

export default function FairnessModal() {
  const { modalIsOpened, closeFairnessModal } = useFairness();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [ seeds, setSeeds ] = useState(true);
  const [ verify, setVerify ] = useState(false);

  const openSeedsPanel = () => {
    setSeeds(true);
    setVerify(false);
  }

  const openVerifyPanel = () => {
    setVerify(true);
    setSeeds(false);
  }

  const handleCloseFairnessModal = () => {
    closeFairnessModal();
    setSeeds(true);
    setVerify(false);
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={handleCloseFairnessModal}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle id="responsive-dialog-title" onClose={handleCloseFairnessModal}>
        <Stack direction="row">
          <Typography
            ml={1}
            fontSize={16}
            fontWeight={700}
            textTransform="uppercase"
            fontFamily="Montserrat"
          >
            fairness
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
      <Box>
          <Box sx={{ marginBottom: '30px' }}>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab onClick={openSeedsPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>seeds</Tab>
                <Tab onClick={openVerifyPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>verify</Tab>
              </TabsList>
            </TabsUnstyled>
          </Box>
          {
            seeds ?
              <SeedsTabPanel />
              :
              verify ?
                <VerifyTabPanel />
                :
                ''
          }
        </Box>
      </DialogContent>
    </Dialog>
  );
}