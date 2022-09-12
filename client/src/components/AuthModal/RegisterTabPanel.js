import React from 'react';
import {
  Button as MuiButton,
  Stack,
  TextField as MuiTextField,
  styled,
  Typography,
  Grid,
  Box
} from '@mui/material';
import { Icon } from '@iconify/react';
import * as yup from 'yup';
import { useFormik } from "formik";
import useAuth from '../../hooks/useAuth';
import api from '../../utils/api';
import { useDispatch, useSelector } from '../../redux/store';
import { getAddress } from '../../redux/slices/getAddress';
import { formatTimeDelta } from 'react-countdown';

/* ---------------------------------------------------------------------------------------- */

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
    borderWidth: '1px'
  },
  '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 100px #191e24 inset'
  },
  '& .css-xzkq1u-MuiFormHelperText-root': {
    marginLeft: 0,
    marginRight: 0
  }
}));

const LoginButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#a3a09b',
  boxShadow: '0 6px 0 #6a6a6a',
  color: '#000000',
  minWidth: 114,
  '&:hover': {
    backgroundColor: '#777674',
    boxShadow: '0 6px 0 #424040'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

const SocialButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: '0 6px 0 #a0a2a5',
  color: '#000000',
  paddingTop: 0,
  paddingBottom: 0,
  minWidth: 114,
  '&:hover': {
    backgroundColor: '#c3c0c0',
    boxShadow: '0 6px 0 #76787a'
  },
  fontFamily: 'Montserrat',
  fontWeight: 700
}));

const validSchema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  email: yup.string().email('Invalid email format.').required('Email is required.'),
  password: yup.string().min(3, 'Password should be 3 characters at minimum').required('Password is required.'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});
/* ---------------------------------------------------------------------------------------- */

export default function RegisterTabPanel() {
  const { signin, signup } = useAuth();
  const dispatch = useDispatch();
  const { generatedAddress } = useSelector((state) => state.getAddress);
  const handleSubmit = (values) => {
    const { username, email, password, role, level, balance } = values;
    signup({ username, email, password, role, level, balance });
  };

  const Register = async (values) => {
    await dispatch(getAddress());
    console.log("sign up save :::", generatedAddress);
    const { username, email, password, role, level, balance } = values;
    await signup({ username, email, password, role, level, balance, generatedAddress });
    // await signin({ username, password });
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      level: '1',
      balance: '10000',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      return Register(values);
    }
  });

  return (
    <Stack spacing={2}>
      <TextField
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={
          formik.touched.username && formik.errors.username ? (
            <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
              <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
              {formik.touched.username && formik.errors.username}
            </Typography>) : (<></>)
        }
        fullWidth
      />

      <TextField
        type="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={
          formik.touched.email && formik.errors.email ? (
            <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
              <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
              {formik.touched.email && formik.errors.email}
            </Typography>) : (<></>)
        }
        fullWidth
      />

      <Box>
        <Grid container columns={2} spacing={1}>
          <Grid item md={1}>
            <TextField
              type="password"
              name="password"
              label="Password"
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
          </Grid>
          <Grid item md={1}>
            <TextField
              type="password"
              name="confirmPassword"
              label="Confirm password"
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
          </Grid>
        </Grid>
      </Box>

      <LoginButton onClick={formik.handleSubmit}>
        PLAY NOW
      </LoginButton>

      <Typography fontFamily="'Montserrat', sans-serif" textAlign="center" fontSize={14} fontWeight={700}>OR</Typography>

      <Stack direction="row" spacing={0.5} justifyContent="space-between">
        {/* <SocialButton sx={{ fontSize: 42, width: '33%' }}>
          <Icon icon="foundation:social-steam" />
        </SocialButton> */}
        <SocialButton sx={{ fontSize: 24, width: '50%' }}>
          <Icon icon="brandico:facebook" />
        </SocialButton>
        <SocialButton sx={{ fontSize: 28, width: '50%' }}>
          <Icon icon="akar-icons:google-fill" />
        </SocialButton>
      </Stack>

      <Stack
        sx={{
          flexFlow: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: "24px!important"
        }}
      >
        <Typography fontFamily="'Montserrat', sans-serif" textAlign="center" color="#f8bf60" fontSize={14} fontWeight={700}>
          Forgot Password?
        </Typography>
        <Typography fontFamily="'Montserrat', sans-serif" textAlign="center" color="#f8bf60" fontSize={14} fontWeight={700}>
          Create an Account?
        </Typography>
      </Stack>
    </Stack >
  );
}