import React, { useState, useEffect } from 'react';
import {
  Stack,
  Box as MuiBox,
  Typography,
  Grid,
  Slider as MuiSlider,
  styled,
  InputAdornment,
  Icon as MuiIcon,
  TextField as MuiTextField
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from '../../redux/store';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: '#1c2127',
  borderRadius: '4px'
}));
const Slider = styled(MuiSlider)(({ theme }) => ({
  width: '90%',
  marginRight: '10px',
  paddingTop: '3px !important',
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
  fontFamily: 'Montserrat',
  borderRadius: '5px',
  '& .MuiOutlinedInput-input': {
    padding: '1px 1px',
    fontSize: 18,
    textAlign: 'right',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    display: 'none'
  }
}));

export default function LeftSlider({ wagered, setWagered }) {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.game);
  const [userBalance, setUserBalance] = useState(currentUser?.balance || 1);
  useEffect(() => {
    if (balance) {
      setUserBalance(balance);
    }
  }, [balance]);

  useEffect(() => {
    if (currentUser) {
      setUserBalance(currentUser.balance);
    }
  }, [currentUser?.balance]);

  return (
    <Stack className="bg-dark" px={0.5} py={1} borderRadius={1} spacing={0.5}>
      <Box bgcolor="black" borderRadius={1} mb={0.6}>
        <Typography
          className="text-yellow"
          sx={{ display: 'flex', paddingTop: '1px', paddingBottom: '1px', alignItems: 'center', justifyContent: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 8 } }}
          fontWeight={700}
          fontFamily="'Montserrat', sans-serif"
          textTransform="uppercase"
        >
          <FontAwesomeIcon icon={faGem} className="text-yellow" style={{ paddingRight: '5px' }} /> 5.00 Profile on win
        </Typography>
      </Box>

      <Box width="100%">
        <Grid container columns={9} spacing={0.5}>
          <Grid item xs={7} md={7}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                  color="white"
                  sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                  fontWeight={700}
                  fontFamily="'Montserrat', sans-serif"
                  pl={1}
                >Bet <ArrowDropDownIcon sx={{ fontSize: 16 }} /></Typography>
                <TextField
                  type="number"
                  sx={{ backgroundColor: '#1c2127' }}
                  value={wagered}
                  onChange={(e) => setWagered(e.target.value)}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <Stack direction="row" alignItems="center" spacingnpm={1}>
                        <MuiIcon className="text-yellow" sx={{ display: 'flex', paddingRight: '2px', fontSize: { lg: 14, md: 12, sm: 10, xs: 8 } }}>
                          <FontAwesomeIcon icon={faGem} className="text-yellow" />
                        </MuiIcon>
                      </Stack>
                    </InputAdornment>
                  }}
                />
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={1} md={1} sx={{ borderLeft: '2px solid #2c3137' }}>
            <Box bgcolor="black" borderRadius={1} pt={1} pb={1}>
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontWeight={800}
                  textAlign="center"
                >
                  <Typography variant="span" sx={{ fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }} fontFamily="'Montserrat', sans-serif">
                    1/2
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={1} md={1} sx={{ borderLeft: '2px solid #2c3137' }}>
            <Box bgcolor="black" borderRadius={1} pt={1} pb={1}>
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontWeight={800}
                  textAlign="center"
                >
                  <Typography variant="span" sx={{ fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }} fontFamily="'Montserrat', sans-serif">
                    x2
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Stack direction="row" justifyContent="center">
        <Slider
          value={wagered}
          valueLabelDisplay="auto"
          step={userBalance / 4}
          marks
          min={0}
          max={userBalance}
          onChange={(e) => setWagered(e.target.value)}
        />
      </Stack>
    </Stack>
  );
}