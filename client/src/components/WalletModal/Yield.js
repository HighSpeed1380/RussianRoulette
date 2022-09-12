import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    styled,
    Button as MuiButton,
    Slider as MuiSlider
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
/* ---------------------------------------------------------------------------------------------------- */
const Slider = styled(MuiSlider)(({ theme }) => ({
    width: '94%',
    marginRight: '25px',
    '& .MuiSlider-rail': {
        color: '#1b2026',
        boxShadow: '0 5px 0 #21262c',
        height: '6px',
    },
    '& .MuiSlider-track': {
        height: '4px',
        color: '#f8bf60',
        boxShadow: '0 4px 0 #a6824a',
    },
    '& .MuiSlider-thumbColorPrimary': {
        border: 'none',
        outline: 'none',
        background: '#f8bf60',
        borderRadius: '2px',
        width: '30px',
        height: '10px',
        boxShadow: '0 4px 0 #a6824a'
    },
    '& .MuiSlider-mark': {
        border: 'none',
        outline: 'none',
        background: '#1b2026',
        borderRadius: '2px',
        width: '5%',
        height: '8px',
        boxShadow: '0 4px 0 #22272d',
        borderLeft: '2px solid #2c3137',
        borderRight: '2px solid #2c3137',
    },
    '& .MuiSlider-markActive': {
        border: 'none',
        outline: 'none',
        width: '5%',
        height: '8px',
        background: '#f8bf60',
        boxShadow: '0 4px 0 #a6824a',
        borderLeft: '2px solid #a6824a',
        borderRight: '2px solid #a6824a'
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

export default function Yield() {
    const [depositPanel, setDepositPanel] = useState(true);
    const [withdrawPanel, setWithdrawPanel] = useState(false);

    const openDepositPanel = () => {
        setDepositPanel(true);
        setWithdrawPanel(false);
    }

    const openWithdrawPanel = () => {
        setDepositPanel(false);
        setWithdrawPanel(true);
    }

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
                        <Box
                            backgroundColor="#191e24"
                            p={2}
                            borderRadius={1}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Typography
                                fontSize={12}
                                fontWeight={700}
                            >
                                BTC Address
                            </Typography>
                            <Typography
                                fontSize={13}
                                fontWeight={900}
                                textTransform="uppercase"
                            >
                                st5uh5coun5vmf3yhzijkz2jovaf4m71
                            </Typography>
                            <CurrencyBitcoinIcon sx={{ fontSize: 15, fontWeight: 900 }} className='text-yellow' />
                        </Box>
                        <Box
                            mt={1}
                            mb={1}
                            backgroundColor="#191e24"
                            p={2}
                            borderRadius={1}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Typography
                                fontSize={12}
                                fontWeight={700}
                            >
                                Amount
                            </Typography>
                            <Typography
                                fontSize={13}
                                fontWeight={900}
                                textTransform="uppercase"
                            >
                                17,000.00
                            </Typography>
                            <CurrencyBitcoinIcon sx={{ fontSize: 15, fontWeight: 900 }} className='text-yellow' />
                        </Box>
                        <Box>
                            <Stack direction="row" justifyContent="center" mb={2}>
                                <Slider
                                    defaultValue={0}
                                    valueLabelDisplay="auto"
                                    step={25}
                                    marks
                                    min={0}
                                    max={100}
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