import React, { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Typography,
    styled,
    Divider,
    Slider as MuiSlider,
    InputAdornment,
    Icon as MuiIcon,
    TextField as MuiTextField
} from '@mui/material';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import Button from '@mui/material/Button';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from '../../redux/store';
import useAuth from '../../hooks/useAuth';
import { addTip } from '../../redux/slices/tip';
import useWallet from '../../hooks/useWallet';


/* ---------------------------------------------------------------------------------------------------- */
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#1c2127',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#f8bf60' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
    fontFamily: 'Montserrat',
    borderRadius: '5px',
    '& .MuiOutlinedInput-input': {
        padding: '1px 1px',
        fontSize: 18,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
    }
}));


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

/* ---------------------------------------------------------------------------------------------------- */

export default function Tip() {
    const dispatch = useDispatch();
    const { currentUser } = useAuth();
    const [selectPrivate, setSelectPrivate] = useState(true);
    const { balance } = useSelector((state) => state.game);
    const [ amount, setAmount ] = useState(0);
    const [ userBalance, setUserBalance ] = useState(currentUser?.balance || 1);
    const { modalIsOpened, closeWalletModal } = useWallet();
    const [ receiveUsername, setReceiveUsername ] = useState('');
    const selectedPrivatePublic = (event) => {
        setSelectPrivate(event.target.checked);
    }
    const type = "tip";
    const handleSendTip = () => {
        closeWalletModal();
        if(currentUser){
            dispatch(addTip(currentUser.username, type, Number(amount), receiveUsername, currentUser._id, currentUser.balance));
        }
    }

    useEffect(() => {
        if(balance){
          setUserBalance(balance);
        }
      }, [balance]);

    return (
        <Stack spacing={3}>
            <Box>
                <Box
                    mt={2}
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
                    sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography
                        width="10%"
                        fontSize={12}
                        fontWeight={800}
                    >
                        Username
                    </Typography>
                    <TextField
                        sx={{ backgroundColor: '#191e24' }}
                        value={receiveUsername}
                        onChange={(e) => setReceiveUsername(e.target.value)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <Stack direction="row" alignItems="center" spacingnpm={1}>
                                    <MuiIcon className="text-yellow" sx={{ fontSize: { lg: 20, md: 18, sm: 16, xs: 14 } }}></MuiIcon>
                                </Stack>
                            </InputAdornment>
                        }}
                    />
                </Box>
                <Box
                    mt={1}
                    mb={1}
                    backgroundColor="#191e24"
                    p={2}
                    borderRadius={1}
                    sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography
                        width="10%"
                        fontSize={12}
                        fontWeight={800}
                    >
                        Amount
                    </Typography>
                    <TextField
                        type="number"
                        sx={{ backgroundColor: '#191e24' }}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <Stack direction="row" alignItems="center" spacingnpm={1}>
                                    <MuiIcon className="text-yellow" sx={{ fontSize: { lg: 20, md: 18, sm: 16, xs: 14 } }}></MuiIcon>
                                </Stack>
                            </InputAdornment>
                        }}
                    />
                </Box>
                <Box>
                    <Stack direction="row" justifyContent="center" mb={2}>
                        <Slider
                            value={amount}
                            valueLabelDisplay="auto"
                            step={userBalance / 4}
                            marks
                            min={0}
                            max={userBalance}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </Stack>
                </Box>
                <Box
                    sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}
                >
                    <Typography
                        fontSize={13}
                        fontWeight={700}
                        color={selectPrivate ? 'gray' : '#ffffff'}
                    >
                        Private
                    </Typography>
                    <IOSSwitch sx={{ m: 1 }} defaultChecked onClick={selectedPrivatePublic} />
                    <Typography
                        fontSize={13}
                        fontWeight={700}
                        color={selectPrivate ? '#ffffff' : 'gray'}
                    >
                        Public
                    </Typography>
                </Box>
                <Box
                    className='bg-yellow'
                    textAlign="center"
                    borderRadius={1.5}
                    border="2px solid #f8bf60"
                    p={1}
                    mt={2}
                >
                    <Button
                        onClick={handleSendTip}
                    >
                        <Typography
                            fontSize={13}
                            fontWeight={800}
                            textTransform="uppercase"
                            color="#000000"
                        >
                            send tip
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
}