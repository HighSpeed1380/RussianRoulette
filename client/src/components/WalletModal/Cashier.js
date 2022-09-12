import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Typography,
    styled,
    Button as MuiButton,
    Divider,
    Slider as MuiSlider,
    InputAdornment,
    Icon as MuiIcon,
    TextField as MuiTextField
} from '@mui/material';
import { Icon } from '@iconify/react';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import Button from '@mui/material/Button';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { useDispatch, useSelector } from '../../redux/store';
import useAuth from '../../hooks/useAuth';
import useWallet from '../../hooks/useWallet';
/* ---------------------------------------------------------------------------------------------------- */
const Slider = styled(MuiSlider)(({ theme }) => ({
    width: '94%',
    marginRight: '25px',
    '& .MuiSlider-rail': {
        color: '#000000',
        height: '6px',
    },
    '& .MuiSlider-track': {
        height: '4px',
        color: '#f8bf60',
    },
    '& .MuiSlider-thumbColorPrimary': {
        border: 'none',
        outline: 'none',
        background: '#f8bf60',
        borderRadius: '2px',
        width: '44px',
        height: '22px',
    },
    '& .MuiSlider-mark': {
        border: 'none',
        outline: 'none',
        background: '#000000',
        opacity: 0.6,
        width: '6.5%',
        height: '15px',
        borderTop: '1px solid #2c3137',
        borderBottom: '1px solid #2c3137',
        borderLeft: '3px solid #2c3137',
        borderRight: '3px solid #2c3137',
    },
    '& .MuiSlider-markActive': {
        border: 'none',
        opacity: 1,
        outline: 'none',
        width: '6.5%',
        height: '15px',
        background: '#f8bf60',
        borderTop: '1px solid #2c3137',
        borderBottom: '1px solid #2c3137',
        borderLeft: '3px solid #2c3137',
        borderRight: '3px solid #2c3137',
    }
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
    backgroundColor: '#191e24',
    display: 'flex',
    marginBottom: '10px',
    borderColor: '#191e24',
    textAlign: 'center',
    '& .css-14t01uy-MuiInputBase-root-MuiOutlinedInput-root': {
        fontSize: '14px',
        fontFamily: 'Montserrat',
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        borderColor: '#191e24',
    },
    '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '15px 15px',
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        borderColor: '#191e24',
    },
    '& .css-1yl10x9-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '14px',
        lineHeight: 2,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
        borderColor: '#191e24',
    },
    '& .css-rb5gc9-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '14px',
        fontWeight: '700',
        fontFamily: 'Montserrat',
        textAlign: 'center',
        color: '#ffffff',
        borderColor: '#191e24',
    },
    '&, .css-1yl10x9-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
        color: '#ffffff',
        fontWeight: '700',
        borderColor: '#191e24',
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
    },
    '& .css-1s1h6d-MuiTypography-root': {
        fontSize: '1rem',
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

/* ---------------------------------------------------------------------------------------------------- */

export default function Cashier() {
    const dispatch = useDispatch();
    const { currentUser } = useAuth();
    const { balance } = useSelector((state) => state.game);
    const [userBalance, setUserBalance] = useState(currentUser?.balance || 1);
    const [depositPanel, setDepositPanel] = useState(true);
    const [withdrawPanel, setWithdrawPanel] = useState(false);
    const [btcAddress, setBtcAddress] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState(0);

    const openDepositPanel = () => {
        setDepositPanel(true);
        setWithdrawPanel(false);
    }

    const openWithdrawPanel = () => {
        setDepositPanel(false);
        setWithdrawPanel(true);
    }

    useEffect(() => {
        if (balance) {
            setUserBalance(balance);
        }
    }, [balance]);

    return (
        <Stack spacing={3}>
            <Box
                pt={2}
                pb={2}
                borderTop="1px solid #191e24"
                borderBottom="1px solid #191e24"
            >
                <TabsUnstyled defaultValue={0}>
                    <TabsList>
                        <Tab onClick={openDepositPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>deposit</Tab>
                        <Tab onClick={openWithdrawPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>withdraw</Tab>
                    </TabsList>
                </TabsUnstyled>
            </Box>

            {
                depositPanel ?
                    <Box>
                        <Box
                            mb={1}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}
                        >
                            <Button>
                                <Typography
                                    backgroundColor="#191e24"
                                    fontSize={14}
                                    fontWeight={700}
                                    color="#ffffff"
                                    p={1}
                                    pl={4}
                                    pr={3}
                                    borderRadius={1}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}
                                >
                                    btc <ArrowDropDownIcon sx={{ color: '#ffffff' }} />
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            backgroundColor="#191e24"
                            p={1.5}
                            borderRadius={1}
                            sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Typography
                                fontSize={12}
                                fontWeight={800}
                                textTransform="uppercase"
                                width="100%"
                                sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}
                            >
                                st5uh5coun5vmf3yhzijkz2jovaf4m71
                            </Typography>
                            <Button>
                                <Icon icon="fluent:document-copy-20-filled" color="#ffffff" width={16} sx={{ display: 'flex', direction: 'row' }} />
                            </Button>
                        </Box>
                        <Box
                            mt={2}
                            mb={2}
                        >
                            <Stack direction="row" justifyContent="center">
                                <Box component="img" src="/assets/images/qr.png" alt="qr" width="35%" />
                            </Stack>
                        </Box>
                        <Box>
                            <Typography
                                fontSize={12}
                                color="#96989b"
                                fontWeight={800}
                                sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}
                            >
                                Only send Bitcoin to this address, credits after one confirmation.
                            </Typography>
                        </Box>
                    </Box>
                    :
                    <Box>
                        <Box
                            mb={1}
                            sx={{ display: ' flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Button>
                                <Typography
                                    p={2}
                                    borderRadius={1}
                                    backgroundColor="#191e24"
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <CurrencyBitcoinIcon sx={{ fontSize: 15, fontWeight: 700 }} className='text-yellow' />
                                    <Typography
                                        fontSize={14}
                                        fontWeight={700}
                                        color="#ffffff"
                                    >
                                        103,262.00
                                    </Typography>
                                    <ArrowDropDownIcon sx={{ color: '#ffffff' }} />
                                </Typography>
                            </Button>
                        </Box>
                        <TextField
                            name="btcAddress"
                            // label="BTC Address"
                            label={
                                <Typography
                                    fontFamily="'Montserrat', sans-serif"
                                    fontWeight={700}
                                    sx={{ display: 'flex', alignItems: 'center', direction: 'row' }}
                                >
                                    <CurrencyBitcoinIcon sx={{ fontSize: 20, fontWeight: 700 }} className='text-yellow' />
                                    BTC Address
                                </Typography>
                            }
                            value={btcAddress}
                            onChange={(e) => setBtcAddress(e.target.value)}
                            fullWidth
                            fontWeight={700}
                            fontFamily="'Montserrat', sans-serif"
                        />
                        <TextField
                            name="withdrawAmount"
                            label={
                                <Typography
                                    fontFamily="'Montserrat', sans-serif"
                                    fontWeight={700}
                                    sx={{ display: 'flex', alignItems: 'center', direction: 'row' }}
                                >
                                    <CurrencyBitcoinIcon sx={{ fontSize: 20, fontWeight: 700 }} className='text-yellow' />
                                    Amount
                                </Typography>
                            }
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            fullWidth
                            fontFamily="'Montserrat', sans-serif"
                            fontWeight={700}
                        />
                        <Box>
                            <Stack direction="row" justifyContent="center" mb={2}>
                                <Slider
                                    value={withdrawAmount}
                                    valueLabelDisplay="auto"
                                    step={userBalance / 4}
                                    marks
                                    min={0}
                                    max={userBalance}
                                    onChange={(e) => setWithdrawAmount(e.target.value)}
                                />
                            </Stack>
                        </Box>
                        <Box
                            className='bg-black'
                            textAlign="center"
                            borderRadius={1.5}
                            border="2px solid #f8bf60"
                            p={1}
                        >
                            <Button>
                                <Typography
                                    fontSize={15}
                                    fontWeight={700}
                                    textTransform="uppercase"
                                    color="#ffffff"
                                >
                                    withdraw
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            mt={1}
                            mb={2}
                        >
                            <Typography
                                fontSize={12}
                                color="#8f9295"
                                fontWeight={800}
                                textAlign="center"
                            >
                                Minimum withdrawal is 0.00050000. Your withdrawal will have 0.00007000
                                subtracted from your remaining balance to cover the fee required to
                                process the transaction.
                            </Typography>
                        </Box>
                    </Box>
            }
        </Stack>
    );
}