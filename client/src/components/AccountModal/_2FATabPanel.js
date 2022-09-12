import React from 'react';
import {
  Box,
  Stack,
  TextField as MuiTextField,
  Typography,
  Button as MuiButton,
  styled
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import * as yup from 'yup';
import { useFormik } from "formik";

/* ------------------------------------------------------------------------------------------------------------ */

const CopyButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#2c3137',
  color: '#fff',
  padding: 0,
  minWidth: 32,
  '&:hover': {
    backgroundColor: '#2c3137',
  },
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  '& .css-14t01uy-MuiInputBase-root-MuiOutlinedInput-root': {
    fontSize: '12px',
    fontFamily: 'Montserrat'
  },
  '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input': {
    padding: '15px 15px'
  },
  '& .css-1yl10x9-MuiFormLabel-root-MuiInputLabel-root': {
    fontSize: '12px',
    lineHeight: 2
  },
  '& .css-rb5gc9-MuiFormLabel-root-MuiInputLabel-root': {
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: 'Montserrat'
  },
  '&, .css-1yl10x9-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
    color: '#f8bf60'
  },
  '& .css-14t01uy-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#f8bf60',
    borderWidth: '2px'
  },
  '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 100px #191e24 inset'
  },
  '& .css-xzkq1u-MuiFormHelperText-root': {
    marginLeft: 0,
    marginRight: 0
  }
}));

const validSchema = yup.object().shape({
  password: yup.string().min(3, 'Password should be 3 characters at minimum').required('Password is required.'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#f8bf60',
  boxShadow: '0 6px 0 #997a49',
  color: '#000000',
  minWidth: 84,
  '&:hover': {
    backgroundColor: '#ab884d',
    boxShadow: '0 6px 0 #725c38'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

/* ------------------------------------------------------------------------------------------------------------ */

export default function _2FATabPanel() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
    }
  });
  return (
    <Stack spacing={2}>
      <Stack spacing={1.5}>
        <Typography fontSize={16} fontWeight={700} fontFamily="'Montserrat', sans-serif" textAlign="center">
          Two-Factor Authentication
        </Typography>
        <Typography color={grey[500]} fontSize={14} fontWeight={700} fontFamily="'Montserrat', sans-serif" textAlign="center">
          1. Scan the QR code or enter the 'Key manually into your authenticator app or device'
        </Typography>
        <Typography color={grey[500]} fontSize={14} fontWeight={700} fontFamily="'Montserrat', sans-serif" textAlign="center">
          2. Lastly, enter the 2FA code you receive from the authenticator app or device and your password to complete 2FA setup.
        </Typography>
        <Typography color={grey[500]} fontSize={14} fontWeight={700} fontFamily="'Montserrat', sans-serif" textAlign="center">
          Key:
        </Typography>
      </Stack>
      <Stack spacing={1.5}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={0.5}>
          <Box width="95%" className="bg-dark" sx={{ py: 1, borderRadius: '3px 0px 0px 3px' }}>
            <Typography fontSize={12} fontWeight={600} fontFamily="'Montserrat', sans-serif" textAlign="center">
              13U9EdgSWNfto7maMzsWXit2a99CmhcyXZ
            </Typography>
          </Box>
          <CopyButton variant="contained" sx={{ p: 1.25, borderRadius: '0px 3px 3px 0px' }}>
            <Icon icon="fluent:document-copy-20-filled" />
          </CopyButton>
        </Stack>

        <Stack direction="row" justifyContent="center">
          <Box component="img" src="/assets/images/qr.png" alt="qr" width="35%" />
        </Stack>

        <TextField
          type="password"
          name="currentpassword"
          label="Enter Current Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={
            formik.touched.password && formik.errors.password ? (
              <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                {formik.touched.password && formik.errors.password}
              </Typography>) : (<></>)
          }
          fullWidth
        />

        <TextField
          type="password"
          name="2facode"
          label="Enter 2FA Code"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                {formik.touched.confirmPassword && formik.errors.confirmPassword}
              </Typography>) : (<></>)
          }
          fullWidth
        />

        <Button>ENABLE 2FA</Button>
      </Stack>
    </Stack>
  );
}