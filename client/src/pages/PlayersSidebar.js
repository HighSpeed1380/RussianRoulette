import React from 'react';
import { Box, Grid, Stack, Typography, styled, IconButton, Icon as MuiIcon } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import CloseIcon from '@mui/icons-material/Close';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 10px;
  border: none;
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
  min-width: 120px;
  background-color: #1c2127;
  box-shadow: 0 4px 0 #22272d;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const allBetsData = [
  { id: 1, name: 'tiger', bettingAmount: 658, win: 37.56 },
  { id: 2, name: 'tiger', bettingAmount: 7895, win: 97.35 },
  { id: 3, name: 'tiger', bettingAmount: 658, win: 30.56 },
  { id: 4, name: 'tiger', bettingAmount: 500, win: 14.25 },
  { id: 5, name: 'tiger', bettingAmount: 5096, win: 10.56 },
  { id: 6, name: 'tiger', bettingAmount: 7895, win: 97.57 },
  { id: 7, name: 'tiger', bettingAmount: 6.58, win: 37.56 },
];

const tableData = [
  { id: 1, name: 'tiger', bettingAmount: 658.56, win: 37.56 },
  { id: 2, name: 'tiger', bettingAmount: 7895, win: 987.35 },
  { id: 3, name: 'tiger', bettingAmount: 658.56, win: 370.56 },
  { id: 4, name: 'tiger', bettingAmount: 500, win: 14.25 },
  { id: 5, name: 'tiger', bettingAmount: 5096, win: 10.56 },
  { id: 6, name: 'tiger', bettingAmount: 7895, win: 987.35 },
];

const bettingData = [
  { id: 1, name: 'tiger', bettingAmount: 1000, win: 9001.32 },
  { id: 2, name: 'tiger', bettingAmount: 6950.50, win: 47.05 },
  { id: 3, name: 'tiger', bettingAmount: 10000, win: 5.36 },
  { id: 4, name: 'tiger', bettingAmount: 6900, win: 2.36 },
  { id: 5, name: 'tiger', bettingAmount: 2500.50, win: 312.21 },
  { id: 6, name: 'tiger', bettingAmount: 300, win: 1.05 },
  { id: 7, name: 'tiger', bettingAmount: 4000, win: 98.12 },
  { id: 8, name: 'tiger', bettingAmount: 2700, win: 97.45 },
];

const betInfoData = [
  { id: 1, name: 'tiger', bettingAmount: 4100, win: 1.25 },
  { id: 2, name: 'tiger', bettingAmount: 6950.50, win: 47.05 },
];

const bettingFirstListData = [
  { id: 1, name: 'tiger', bettingAmount: 1000, win: 9001.32 },
  { id: 2, name: 'tiger', bettingAmount: 6950.50, win: 47.05 },
  { id: 3, name: 'tiger', bettingAmount: 10000, win: 5.36 },
];

const bettingSecondListData = [
  { id: 1, name: 'tiger', bettingAmount: 4000, win: 98.12 },
  { id: 2, name: 'tiger', bettingAmount: 2700, win: 97.45 },
];

export default function PlayerSidebar(props) {

  const enableScrolling = () => {

  }

  return (
    <Stack spacing={0.5} sx={{ display:{xs:'none', md:'flex'}, height: '82vh' }} >
      {/* Title */}
      <Box className="bg-dark" borderRadius={1} p={2}>
        <Typography textTransform="uppercase" align="center" color="white" fontWeight={800}>
          Players
        </Typography>
      </Box>

      <Stack sx={{ height: 591, overflow: 'hidden' }} spacing={0.5}>
        {/* Highest bet */}
        <Stack spacing={0.5}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              Highest bet
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            <Grid container spacing={0.5} columns={3} alignItems="center">
              <Grid item xs={3} md={2}>
                <Box p={1.75} className="bg-black" borderRadius={1}>
                  <Typography
                    className="text-pink"
                    fontWeight={800}
                    fontSize={12}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <StarIcon sx={{ fontSize: 16 }} /> tiger
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={3} md={1}>
                <Stack p={0.5} className="bg-black" direction="row" justifyContent="end" borderRadius={1}>
                  <Stack>
                    <Typography
                      align="right"
                      color="white"
                      fontWeight={700}
                      fontSize={12}
                      fontFamily="'Montserrat', sans-serif"
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                    >
                      658.56 <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                    </Typography>
                    <Typography
                      align="right"
                      color="white"
                      fontWeight={700}
                      fontSize={12}
                      fontFamily="'Montserrat', sans-serif"
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                    >
                      37.56 <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>

        {/* Your bets */}
        <Stack spacing={0.5}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              Your bets
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            <Grid container columns={3} spacing={0.5}>
              {
                tableData.map((data, itemIndex) => (
                  <Grid key={itemIndex} item xs={3} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.bettingAmount}  <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.win} <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Grid container columns={4} spacing={0.5} mt={0.1}>
              {
                bettingData.map((data, itemIndex) => (
                  <Grid key={itemIndex} item xs={4} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.bettingAmount} <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.win} <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Grid container columns={2} spacing={0.5} mt={0.1}>
              {
                betInfoData.map((data, itemIndex) => (
                  <Grid key={itemIndex} item xs={2} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.bettingAmount} <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.win} <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1} mt={0.5}>
              <Stack>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={700}
                  fontSize={12}
                  fontFamily="'Montserrat', sans-serif"
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  7895  <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                </Typography>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={700}
                  fontSize={12}
                  fontFamily="'Montserrat', sans-serif"
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  987.35 <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Your bet list */}
        <Stack spacing={0.5}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              Your bet list
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            <Grid container columns={3} spacing={0.5}>
              {
                bettingFirstListData.map((data, itemIndex) => (
                  <Grid key={itemIndex} item xs={3} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.bettingAmount} <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.win} <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Grid container columns={2} spacing={0.5} mt={0.1}>
              {
                bettingSecondListData.map((data, itemIndex) => (
                  <Grid key={itemIndex} item xs={2} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1}>
                      <Stack>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.bettingAmount}  <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                        </Typography>
                        <Typography
                          textAlign="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.win} <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>

            <Stack p={0.5} className="bg-black" direction="row" justifyContent="center" borderRadius={1} mt={0.5}>
              <Stack>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={700}
                  fontSize={12}
                  fontFamily="'Montserrat', sans-serif"
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  1.78 <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                </Typography>
                <Typography
                  textAlign="right"
                  color="white"
                  fontWeight={700}
                  fontSize={12}
                  fontFamily="'Montserrat', sans-serif"
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                >
                  1000 <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* All bets */}
        <Stack spacing={0.5} pb={1}>
          <Box className="bg-dark" borderRadius={1} p={1}>
            <Typography textTransform="uppercase" color="white" fontWeight={800} fontSize={12}>
              All bets
            </Typography>
          </Box>

          <Box className="bg-dark" borderRadius={1} p={0.5}>
            {
              allBetsData.map((data, itemIndex) => (
                <Grid key={itemIndex} container spacing={0.5} columns={5} alignItems="center" mt={0.05}>
                  <Grid item xs={5} md={4}>
                    <Box p={1.75} className="bg-black" borderRadius={1}>
                      <Typography
                        color="white"
                        fontWeight={800}
                        fontSize={12}
                        fontFamily="'Montserrat', sans-serif"
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <StarIcon sx={{ fontSize: 20 }} /> tiger
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={5} md={1}>
                    <Stack p={0.5} className="bg-black" direction="row" justifyContent="end" borderRadius={1}>
                      <Stack>
                        <Typography
                          align="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.bettingAmount} <span className="text-yellow" style={{ fontSize: 13, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 
                        </Typography>
                        <Typography
                          align="right"
                          color="white"
                          fontWeight={800}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
                        >
                          {data.win} <FontAwesomeIcon icon={faGem} className="text-yellow" fontSize={14} style={{ paddingLeft: '3px' }} />
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              ))
            }

          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <IconButton sx={{ p: 0, fontSize: 20, position: 'absolute', bottom: '-5px' }}>
              <Icon icon="codicon:triangle-down" />
            </IconButton>
          </Box>      
        </Stack>
      </Stack>
      <Box borderRadius={1} className="bg-dark">
        <Typography
          align="right"
          color="white"
          fontWeight={700}
          fontSize={14}
          fontFamily="'Montserrat', sans-serif"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textTransform: 'uppercase', paddingTop: '5px', paddingBottom: '5px' }}
        >
          type
        </Typography>
        <Box
          width="85%"
          margin="auto"
          mb={5}
          mt={1}
        >
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase', borderRadius: '3px 0px 0px 3px' }} onClick={() => props.setGameType("normal")} >normal</Tab>
              <Tab sx={{ fontFamily: 'Montserrat', textTransform: 'uppercase', borderRadius: '0px 3px 3px 0px' }} onClick={() => props.setGameType("bonus")} >bonus-only</Tab>
            </TabsList>
          </TabsUnstyled>
        </Box>
      </Box>
    </Stack>
  );
}