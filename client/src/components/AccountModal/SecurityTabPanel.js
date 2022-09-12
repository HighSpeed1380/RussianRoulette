import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField as MuiTextField,
  styled,
  Button as MuiButton,
  Divider
} from '@mui/material';
import * as yup from 'yup';
import { useFormik } from "formik";
import { Icon } from '@iconify/react';

/* ------------------------------------------------------------------------------------------------- */

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

const passwordValidSchema = yup.object().shape({
  currentPassword: yup.string().required('Current password is required.'),
  newPassword: yup.string().min(3, 'New password should be 3 characters at minimum').required('New password is required.'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match')
});

const emailValidSchema = yup.object().shape({
  currentEmail: yup.string().required('Current email is required.'),
  newEmail: yup.string().email('Invalid email format.').required('New email is required.'),
  confirmEmail: yup.string().oneOf([yup.ref('newEmail'), null], 'Emails must match')
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

/* ------------------------------------------------------------------------------------------------- */

export default function SecurityTabPanel() {

  const passwordFormik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: passwordValidSchema,
    onSubmit: (values) => {
    }
  });

  const emailFormik = useFormik({
    initialValues: {
      currentEmail: '',
      newEmail: '',
      confirmEmail: ''
    },
    validationSchema: emailValidSchema,
    onSubmit: (values) => {
    }
  });

  return (
    <Stack spacing={3}>
      <Box>
        <Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif">Password</Typography>
        <Grid container spacing={1} mt={1}>
          <Grid item md={12}>
            <TextField
              type="password"
              name="currentPassword"
              label="Enter Current Password"
              value={passwordFormik.values.currentPassword}
              onChange={passwordFormik.handleChange}
              error={passwordFormik.touched.currentPassword && Boolean(passwordFormik.errors.currentPassword)}
              helperText={
                passwordFormik.touched.currentPassword && passwordFormik.errors.currentPassword ? (
                  <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                    <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                    {passwordFormik.touched.currentPassword && passwordFormik.errors.currentPassword}
                  </Typography>) : (<></>)
              }
              fullWidth
            />
          </Grid>
          <Grid item md={3}>
            <TextField
              type="password"
              name="newPassword"
              label="Enter New Password"
              value={passwordFormik.values.newPassword}
              onChange={passwordFormik.handleChange}
              error={passwordFormik.touched.newPassword && Boolean(passwordFormik.errors.newPassword)}
              helperText={
                passwordFormik.touched.newPassword && passwordFormik.errors.newPassword ? (
                  <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                    <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                    {passwordFormik.touched.newPassword && passwordFormik.errors.newPassword}
                  </Typography>) : (<></>)
              }
              fullWidth
            />
          </Grid>
          <Grid item md={3}>
            <TextField
              type="password"
              name="confirmPassword"
              label="Re-enter Password"
              value={passwordFormik.values.confirmPassword}
              onChange={passwordFormik.handleChange}
              error={passwordFormik.touched.confirmPassword && Boolean(passwordFormik.errors.confirmPassword)}
              helperText={
                passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword ? (
                  <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                    <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                    {passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword}
                  </Typography>) : (<></>)
              }
              fullWidth
            />
          </Grid>
        </Grid>

        <Stack mt={2}>
          <Button>Set new password</Button>
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif">Email</Typography>
        <Grid container spacing={1} mt={1}>
          <Grid item md={12}>
            <TextField
              type="email"
              name="currentEmail"
              label="Enter Current Email (**********23@*****l.com)"
              value={emailFormik.values.currentEmail}
              onChange={emailFormik.handleChange}
              error={emailFormik.touched.currentEmail && Boolean(emailFormik.errors.currentEmail)}
              helperText={
                emailFormik.touched.currentEmail && emailFormik.errors.currentEmail ? (
                  <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                    <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                    {emailFormik.touched.currentEmail && emailFormik.errors.currentEmail}
                  </Typography>) : (<></>)
              }
              fullWidth
            />
          </Grid>
          <Grid item md={3}>
            <TextField
              type="email"
              name="newEmail"
              label="Enter New Email"
              value={emailFormik.values.newEmail}
              onChange={emailFormik.handleChange}
              error={emailFormik.touched.newEmail && Boolean(emailFormik.errors.newEmail)}
              helperText={
                emailFormik.touched.newEmail && emailFormik.errors.newEmail ? (
                  <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                    <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                    {emailFormik.touched.newEmail && emailFormik.errors.newEmail}
                  </Typography>) : (<></>)
              }
              fullWidth
            />
          </Grid>
          <Grid item md={3}>
            <TextField
              type="email"
              name="confirmEmail"
              label="Re-enter New Email"
              value={emailFormik.values.confirmEmail}
              onChange={emailFormik.handleChange}
              error={emailFormik.touched.confirmEmail && Boolean(emailFormik.errors.confirmEmail)}
              helperText={
                emailFormik.touched.confirmEmail && emailFormik.errors.confirmEmail ? (
                  <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                    <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                    {emailFormik.touched.confirmEmail && emailFormik.errors.confirmEmail}
                  </Typography>) : (<></>)
              }
              fullWidth
            />
          </Grid>
        </Grid>

        <Stack mt={2}>
          <Button>Set new email</Button>
        </Stack>
      </Box>
    </Stack>
  );
}