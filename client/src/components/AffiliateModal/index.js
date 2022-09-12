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
  Tab as MuiTab,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import useAffiliate from '../../hooks/useAffiliate';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import CampainsTabPanel from './CampainsTabPanel';
import ReferralsTabPanel from './ReferralsTabPanel';

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

export default function AffiliateModal() {
  const { modalIsOpened, closeAffiliateModal } = useAffiliate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [ campains, setCampains ] = useState(true);
  const [ referrals, setReferrals ] = useState(false);

  const openCampainsPanel = () => {
    setCampains(true);
    setReferrals(false);
  }

  const openReferralsPanel = () => {
    setReferrals(true);
    setCampains(false);
  }
  
  const handleCloseAffiliateModal = () => {
    closeAffiliateModal()
    setCampains(true)
    setReferrals(false)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={modalIsOpened}
      onClose={handleCloseAffiliateModal}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle id="responsive-dialog-title" onClose={handleCloseAffiliateModal}>
        <Stack direction="row">
          <Typography
            ml={1}
            fontSize={16}
            fontWeight={700}
            textTransform="uppercase"
          >
            affiliate
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
      <Box>
          <Box sx={{ marginBottom: '30px' }}>
            <TabsUnstyled defaultValue={0}>
              <TabsList>
                <Tab onClick={openCampainsPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>campains</Tab>
                <Tab onClick={openReferralsPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>referrals</Tab>
              </TabsList>
            </TabsUnstyled>
          </Box>
          {
            campains ?
              <CampainsTabPanel />
              :
              referrals ?
                <ReferralsTabPanel />
                :
                ''
          }
        </Box>
      </DialogContent>
    </Dialog>
  );
}