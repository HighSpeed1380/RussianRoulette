import React from 'react';
import {
  Stack,
  Box as MuiBox,
  Grid,
  Typography,
  Slider as MuiSlider,
  styled,
  Tooltip,
  InputAdornment,
  TextField as MuiTextField
} from '@mui/material';
import { grey } from '@mui/material/colors';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 3px;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: center;

  &:focus {
    color: #black;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #f8bf60;
    box-shadow: 0 4px 0 #997a49;
    color: black;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #1c2127;
  box-shadow: 0 4px 0 #22272d;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
const Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: '#1c2127',
  borderRadius: '4px'
}));
const Slider = styled(MuiSlider)(({ theme }) => ({
  width: '90%',
  paddingTop: '3px',
  '& .MuiSlider-rail': {
    color: '#000000',
    height: '6px',
    top: '55%',
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
    background: '#1b2026',
    borderRadius: '2px',
    width: '5%',
    height: '8px',
    borderLeft: '2px solid #2c3137',
    borderRight: '2px solid #2c3137',
  },
  '& .MuiSlider-markActive': {
    border: 'none',
    outline: 'none',
    width: '5%',
    height: '8px',
    background: '#f8bf60',
    borderLeft: '2px solid #a6824a',
    borderRight: '2px solid #a6824a'
  }
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  background: '#1c2127',
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

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function RightSlider({ payout, setPayout }) {
  return (
    <Stack px={0.5} py={1} borderRadius={1} spacing={0.5} className="bg-dark">
      <TabsUnstyled defaultValue={0}>
        <TabsList sx={{ marginBottom: '8px' }}>
          <Tab sx={{ fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>Base</Tab>
          <Tab sx={{ fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>Bonus</Tab>
        </TabsList>
      </TabsUnstyled>

      <Box width="100%">
        <Grid container columns={9} spacing={0.5}>
          <Grid item xs={7} md={7}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                  color="white"
                  sx={{ display: 'flex', alignItems: 'center', fontSize: {lg:14, md:12, sm:10, xs:10} }}
                  fontWeight={700}
                  pl={1}
                  fontFamily="'Montserrat', sans-serif"
                >
                  Payout <ArrowDropDownIcon sx={{ fontSize: 16 }} />
                </Typography>

                <TextField
                  type="number"
                  value={payout}
                  onChange={(e) => setPayout(e.target.value)}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <Stack direction="row" alignItems="center" spacingnpm={1}>
                        <Typography
                          color="#f8bf60"
                          fontWeight={700}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ fontSize: { lg:14, md:12, sm: 10, xs:10 } }}
                        >
                          X
                        </Typography>
                      </Stack>
                    </InputAdornment>
                  }}
                />

              </Stack>
            </Box>
          </Grid>

          <Grid item md={1} xs={1} sx={{ borderLeft: '2px solid #2c3137' }}>
            <Box bgcolor="black" borderRadius={1} p={1}>
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontWeight={800}
                  fontFamily="'Montserrat', sans-serif"
                  textAlign="center"
                ><Typography variant="span" sx={{ fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}>1/2</Typography></Typography>
              </Stack>
            </Box>
          </Grid>

          <Grid item md={1} xs={1} sx={{ borderLeft: '2px solid #2c3137' }}>
            <Box bgcolor="black" borderRadius={1} p={1} >
              <Stack justifyContent="center">
                <Typography
                  color="white"
                  fontWeight={800}
                  fontFamily="'Montserrat', sans-serif"
                  textAlign="center"
                >
                  <Typography variant="span" sx={{ fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}>
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
          valueLabelDisplay="auto"
          components={{
            ValueLabel: ValueLabelComponent,
          }}
          aria-label="custom thumb label"
          value={payout}
          min={0}
          max={100000}
          onChange={(e) => setPayout(e.target.value)}
        />
      </Stack>
    </Stack>
  );
}