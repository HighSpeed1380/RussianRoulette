import React from 'react';
import {
  Button as MuiButton,
  Stack,
  TextField as MuiTextField,
  Typography,
  styled,
  Icon as MuiIcon,
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
  btcAddress: yup.string().required('BTC Address is required.'),
  amount: yup.string().required('Amount is required.')
});

const WithdrawButton = styled(MuiButton)(({ theme }) => ({
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

export default function WithdrawTabPanel() {
  const formik = useFormik({
    initialValues: {
      btcAddress: '',
      amount: '',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
    }
  });
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <TextField
          name="btcAddress"
          label="BTC Address"
          value={formik.values.btcAddress}
          onChange={formik.handleChange}
          error={formik.touched.btcAddress && Boolean(formik.errors.btcAddress)}
          helperText={
            formik.touched.btcAddress && formik.errors.btcAddress ? (
              <Typography component="span" fontFamily="'Montserrat', sans-serif" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                {formik.touched.btcAddress && formik.errors.btcAddress}
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

        <WithdrawButton>Withdraw</WithdrawButton>
      </Stack>

      <Stack spacing={2}>
        <Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif" textAlign="center">
          Minimum withdrawal is 0.00050000
          <MuiIcon className="text-yellow" sx={{ fontSize: 14 }}><Icon icon="bi:currency-bitcoin" /></MuiIcon>. 
          Your withdrawal will have 0.00007000
          <MuiIcon className="text-yellow" sx={{ fontSize: 14 }}><Icon icon="bi:currency-bitcoin" /></MuiIcon>  
          subtracted from your remaining balance to cover the fee required to process the transaction.
        </Typography>
        <Divider />
        <Stack px={3} spacing={2}>
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