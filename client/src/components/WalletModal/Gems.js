import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Typography,
    styled,
    Divider,
    Slider as MuiSlider,
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
import DiamondIcon from '@mui/icons-material/Diamond';
import { useDispatch, useSelector } from '../../redux/store';
import useAuth from '../../hooks/useAuth';
import { addStaking } from '../../redux/slices/staking';
import useWallet from '../../hooks/useWallet';

/* ---------------------------------------------------------------------------------------------------- */
const Slider = styled(MuiSlider)(({ theme }) => ({
    width: '94%',
    marginRight: '25px',
    '& .MuiSlider-rail': {
        // color: '#1b2026',
        color: '#000000',
        // boxShadow: '0 5px 0 #21262c',
        height: '6px',
    },
    '& .MuiSlider-track': {
        height: '4px',
        color: '#f8bf60',
        // boxShadow: '0 4px 0 #a6824a',
    },
    '& .MuiSlider-thumbColorPrimary': {
        border: 'none',
        outline: 'none',
        background: '#f8bf60',
        borderRadius: '2px',
        width: '44px',
        height: '22px',
        // boxShadow: '0 4px 0 #a6824a'
    },
    '& .MuiSlider-mark': {
        border: 'none',
        outline: 'none',
        // background: '#1b2026',
        background: '#000000',
        opacity: 0.6,
        // borderRadius: '2px',
        width: '6.5%',
        height: '15px',
        // boxShadow: '0 4px 0 #22272d',
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
        // boxShadow: '0 4px 0 #a6824a',
        // borderLeft: '2px solid #a6824a',
        // borderRight: '2px solid #a6824a'
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

const TextField = styled(MuiTextField)(({ theme }) => ({
    background: '#1b2026',
    fontFamily: 'Montserrat',
    borderRadius: '5px',
    '& .MuiOutlinedInput-input': {
      padding: '1px 1px',
      fontSize: 16,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none'
    }
  }));
/* ---------------------------------------------------------------------------------------------------- */

export default function Gems() {
    const { currentUser } = useAuth();
    const dispatch = useDispatch();
    const [bond, setBond] = useState(true);
    const [swap, setSwap] = useState(false);
    const [ stake, setStake ] = useState(0);
    const [ receiveAmount, setReceiveAmount ] = useState(0);
    const [ type, setType ] = useState("Staking");
    const { closeWalletModal } = useWallet();
    const { balance } = useSelector((state) => state.game);
    const [ userBalance, setUserBalance ] = useState(currentUser?.balance || 1);

    const openBondPanel = () => {
        setBond(true);
        setSwap(false);
    }

    const openSwapPanel = () => {
        setBond(false);
        setSwap(true);
    }

    const settingStaking = (e) => {
        setStake(e.target.value);
        setReceiveAmount(e.target.value / 10);
    }

    const startStaking = () => {
        closeWalletModal();
        if(currentUser){
            dispatch(addStaking(currentUser.username, stake, receiveAmount, type, currentUser._id, currentUser.balance));
        }
    }

    useEffect(() => {
        if(balance){
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
                        <Tab onClick={openBondPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>bond</Tab>
                        <Tab onClick={openSwapPanel} sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase' }}>swap</Tab>
                    </TabsList>
                </TabsUnstyled>
            </Box>

            {
                bond ?
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
                                BTC Amount
                            </Typography>

                            <TextField type="number" value={stake} onChange={settingStaking} />

                            <Typography
                                fontSize={12}
                                fontWeight={700}
                                sx={{ display: 'flex', direction: 'row', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <CurrencyBitcoinIcon sx={{ fontSize: 15, fontWeight: 900 }} className='text-yellow' />
                                BTC
                                <ArrowDropDownIcon />
                            </Typography>
                        </Box>
                        <Box>
                            <Stack direction="row" justifyContent="center" mb={2}>
                                <Slider
                                    value={stake}
                                    valueLabelDisplay="auto"
                                    step={userBalance / 4}
                                    marks
                                    min={0}
                                    max={userBalance}
                                    onChange={(e) => setStake(e.target.value)}
                                />
                            </Stack>
                        </Box>
                        <Box>
                            <Box
                                mt={1}
                                mb={1}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    You will Receive
                                </Typography>
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    {receiveAmount} <span className='text-yellow' >GEMS</span>
                                </Typography>
                            </Box>
                            <Box
                                mt={1}
                                mb={1}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    Max You Can Buy
                                </Typography>
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    50,000 <span className='text-yellow' >GEMS</span>
                                </Typography>
                            </Box>
                            <Box
                                mt={1}
                                mb={1}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    ROI
                                </Typography>
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    8.25 <span className='text-yellow' >%</span>
                                </Typography>
                            </Box>
                            <Box
                                mt={1}
                                mb={1}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    Debt Ratio
                                </Typography>
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    74.05 <span className='text-yellow' >%</span>
                                </Typography>
                            </Box>
                            <Box
                                mt={1}
                                mb={1}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                            >
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    Vesting Term
                                </Typography>
                                <Typography
                                    fontSize={12}
                                    fontWeight={700}
                                >
                                    5 <span className='text-yellow' >DAYS</span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            className='bg-yellow'
                            textAlign="center"
                            borderRadius={1.5}
                            border="2px solid #f8bf60"
                            p={1}
                            mt={2}
                        >
                            <Button onClick={startStaking}>
                                <Typography
                                    fontSize={13}
                                    fontWeight={800}
                                    textTransform="uppercase"
                                    color="#000000"
                                >
                                    bond (+5.65%)
                                </Typography>
                            </Button>
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
                                    <Typography color="#ffffff" pr={0.5} pl={0.5}> | </Typography>
                                    <DiamondIcon sx={{ fontSize: 15, fontWeight: 700 }} className="text-yellow" />
                                    <Typography
                                        fontSize={14}
                                        fontWeight={700}
                                        color="#ffffff"
                                    >
                                        10,854.49
                                    </Typography>
                                    <ArrowDropDownIcon sx={{ color: '#ffffff' }} />
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            backgroundColor="#191e24"
                            p={2}
                            borderRadius={1}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                fontSize={12}
                                fontWeight={700}
                            >
                                BTC
                            </Typography>
                            <Typography
                                fontSize={13}
                                fontWeight={900}
                                textTransform="uppercase"
                            >
                                25,000.00
                            </Typography>
                            <Typography
                                fontSize={14}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <CurrencyBitcoinIcon sx={{ fontSize: 15, fontWeight: 900 }} className='text-yellow' />
                                BTC
                                <ArrowDropDownIcon />
                            </Typography>
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
                            textAlign="center"
                            mb={2}
                        >
                            <Button>
                                <Typography
                                    p={1}
                                    pl={4}
                                    pr={4}
                                    borderRadius={5}
                                    className='bg-black'
                                >
                                    <Icon icon="fa:exchange" color="white" rotate={1} />
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            backgroundColor="#191e24"
                            p={2}
                            borderRadius={1}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                fontSize={12}
                                fontWeight={700}
                            >
                                GEMS
                            </Typography>
                            <Typography
                                fontSize={13}
                                fontWeight={900}
                                textTransform="uppercase"
                            >
                                170.00
                            </Typography>
                            <DiamondIcon sx={{ fontSize: 16 }} className='text-yellow' />
                        </Box>
                        <Box
                            mt={2}
                            mb={2}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                fontSize={12}
                                fontWeight={700}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}
                            >
                                <DiamondIcon sx={{ fontSize: 16 }} className='text-yellow' /> 1 = <CurrencyBitcoinIcon sx={{ fontSize: 16 }} className='text-yellow' /> 147.05 (<span>$</span>4,443,851.16)
                            </Typography>
                            <Typography
                                fontSize={12}
                                fontWeight={700}
                            >
                                Price Impact <span style={{ color: '#db431f' }} >-26.52%</span>
                            </Typography>
                        </Box>
                        <Box
                            className='bg-yellow'
                            textAlign="center"
                            borderRadius={1.5}
                            border="2px solid #f8bf60"
                            p={1}
                        >
                            <Button>
                                <Typography
                                    fontSize={15}
                                    fontWeight={800}
                                    textTransform="uppercase"
                                    color="#000000"
                                >
                                    swap
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
            }
        </Stack>
    );
}