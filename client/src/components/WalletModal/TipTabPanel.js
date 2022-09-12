import React from 'react';
import {
  Button as MuiButton,
  Stack,
  TextField as MuiTextField,
  Typography,
  styled,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  Divider
} from '@mui/material';
import * as yup from 'yup';
import { useFormik } from "formik";
import { Icon } from '@iconify/react';

/* ------------------------------------------------------------------------------------------- */
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
  username: yup.string().required('Username is required.'),
  amount: yup.string().required('Amount is required.')
});

const TipButton = styled(MuiButton)(({ theme }) => ({
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

const Checkbox = styled(MuiCheckbox)(({ theme }) => ({
  '&.Mui-checked': {
    color: '#f8bf60'
  }
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
/* ------------------------------------------------------------------------------------------- */

export default function TipTabPanel() {
  const formik = useFormik({
    initialValues: {
      username: '',
      amount: '',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      // return handleSubmit(values);
    }
  });
  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
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
          type="amount"
          name="amount"
          label="Amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={
            formik.touched.amount && formik.errors.amount ? (
              <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                {formik.touched.amount && formik.errors.amount}
              </Typography>) : (<></>)
          }
          fullWidth
        />

        <TipButton>Tip</TipButton>
      </Stack>

      <Stack spacing={1}>
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif">Broadcast tip to the public chat</Typography>}
        />
        <Divider />
        <Stack px={3} spacing={1}>
          <Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif" textAlign="center">
            Improve your account security with Two-Factor Authentication
          </Typography>
          <EnableButton variant="outlined">
            Eanble 2FA
          </EnableButton>
        </Stack>
      </Stack>
    </Stack>
  );
}