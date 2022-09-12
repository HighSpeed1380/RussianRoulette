import React from 'react';
import {
  Box,
  Stack,
  Typography,
  styled,
  Button as MuiButton,
  Divider
} from '@mui/material';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from '../../redux/store';
/* ---------------------------------------------------------------------------------------------------- */

const CopyButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#2c3137',
  color: '#fff',
  padding: 0,
  minWidth: 32,
  '&:hover': {
    backgroundColor: '#2c3137',
  },
}));

const EnableButton = styled(MuiButton)(({ theme }) => ({
  fontFamily: 'Montserrat',
  borderColor: '#f8bf60',
  color: '#fff',
  fontWeight: 700,
  '&:hover': {
    borderColor: '#f8bf60',
    backgroundColor: '#f8bf60',
    color: '#000',
  },
}));

/* ---------------------------------------------------------------------------------------------------- */

export default function DepositTabPanel() {
  const dispatch = useDispatch();
  const { generatedAddress } = useSelector((state) => state.getAddress);

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={0.5}>
        <Box width="95%" className="bg-dark" sx={{ py: 1, borderRadius: '3px 0px 0px 3px' }}>
          <Typography fontSize={12} fontWeight={600} fontFamily="'Montserrat', sans-serif" textAlign="center">
            13U9EdgSWNfto7maMzsWXit2a99CmhcyXZ
            {/* { generatedAddress } */}
          </Typography>
        </Box>
        <CopyButton variant="contained" sx={{ p: 1.25, borderRadius: '0px 3px 3px 0px' }}>
          <Icon icon="fluent:document-copy-20-filled" />
        </CopyButton>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Box component="img" src="/assets/images/qr.png" alt="qr" width="35%" />
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Typography fontSize={12} fontWeight={600} fontFamily="'Montserrat', sans-serif" textAlign="center" width="80%">
          Only send BTC to this address, 1 confirmation required.<br />
          A new deposit address is generated for each deposit for you privacy
          (all old deposit addresses will still credit to your account as normal).
        </Typography>
      </Stack>

      <Divider />

      <Typography fontSize={12} fontWeight={600} fontFamily="'Montserrat', sans-serif" textAlign="center">
        Improve your account security with Two-Factor Authentication
      </Typography>

      <EnableButton variant="outlined">
        Eanble 2FA
      </EnableButton>
    </Stack>
  );
}