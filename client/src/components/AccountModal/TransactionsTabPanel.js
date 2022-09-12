import React, { useEffect, useState } from 'react';
import {
  Divider,
  Stack,
  Typography,
  Checkbox as MuiCheckbox,
  styled,
  Box,
  Tab as MuiTab,
  TableContainer,
  Table,
  TableHead as MuiTableHead,
  TableRow,
  TableCell as MuiTableCell,
  TableBody as MuiTableBody,
} from '@mui/material';
import { TabContext, TabList as MuiTabList, TabPanel } from '@mui/lab';
import DiamondIcon from '@mui/icons-material/Diamond';
import Button from '@mui/material/Button';
import useAccount from '../../hooks/useAccount';

/* ----------------------------------------------------------------------------------------------------- */

const synData = [
  { name: 'Bets', value: '25,000' },
  { name: 'Total Wagered', value: '25,000' },
  { name: 'Net Profit', value: '25,000' },
  { name: 'Profit (All-Time High)', value: '25,000' }
];

const tableData = [
  {
    date: 'Mon, 09 Nov 2020 23:40:04 GMT (2 minutes ago)',
    gameId: 'GAME #10292357',
    betId: 'BET #10292357',
    bet: 1000,
    x: 15,
    win: 15000
  },
  {
    date: 'Mon, 09 Nov 2020 23:40:04 GMT (2 minutes ago)',
    gameId: 'GAME #10292357',
    betId: 'BET #10292357',
    bet: 1000,
    x: 15,
    win: 15000
  },
  {
    date: 'Mon, 09 Nov 2020 23:40:04 GMT (2 minutes ago)',
    gameId: 'GAME #10292357',
    betId: 'BET #10292357',
    bet: 1000,
    x: 15,
    win: 15000
  },
  {
    date: 'Mon, 09 Nov 2020 23:40:04 GMT (2 minutes ago)',
    gameId: 'GAME #10292357',
    betId: 'BET #10292357',
    bet: 1000,
    x: 15,
    win: 15000
  },
  {
    date: 'Mon, 09 Nov 2020 23:40:04 GMT (2 minutes ago)',
    gameId: 'GAME #10292357',
    betId: 'BET #10292357',
    bet: 1000,
    x: 15,
    win: 15000
  }
];

const Checkbox = styled(MuiCheckbox)(({ theme }) => ({
  padding: 0,
  '&.Mui-checked': {
    color: '#f8bf60'
  }
}));

const Tab = styled(MuiTab)(({ theme }) => ({
  fontFamily: 'Montserrat',
  textTransform: 'capitalize',
  fontWeight: 700,
  '&.Mui-selected': {
    color: '#f8bf60'
  }
}));

const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#f8bf60'
  }
}));

const TableHead = styled(MuiTableHead)(({ theme }) => ({
  backgroundColor: '#2c3137',
}));

const TableCell = styled(MuiTableCell)(({ theme }) => ({
  borderBottom: 'none',
  textAlign: 'center',
  fontFamily: 'Montserrat',
  paddingTop: 4,
  paddingBottom: 4,
  fontSize: 12,
}));

const TableBody = styled(MuiTableBody)(({ theme }) => ({
  backgroundColor: '#2c3137',
}));



/* ----------------------------------------------------------------------------------------------------- */

export default function TransactionsTabPanel() {
  const [currentTab, setCurrentTab] = useState('bets');
  const { userInfos, userInfo, getAllUserInfos, getUserInfoById } = useAccount();

  useEffect(() => {
    (async () => {
      await getAllUserInfos();
      await getUserInfoById('62a718793b1cda39cf819054');
    })();
  }, []);

  return (
    <Stack spacing={2}>
      <Stack spacing={1} px={1}>
        {
          synData.map(dataItem => (
            <Stack key={dataItem.name} direction="row" justifyContent="space-between" alignItems="center">
              <Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif">
                {dataItem.name}
              </Typography>
              <Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif">
                {dataItem.value} <DiamondIcon sx={{ fontSize: 13 }} className="text-yellow" />
              </Typography>
            </Stack>
          ))
        }
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-between" alignItems="center" px={1}>
        <Typography fontSize={12} fontWeight={700} fontFamily="'Montserrat', sans-serif">
          Hide stats from public
        </Typography>

        <Checkbox size="12px" />
      </Stack>

      <Divider />

      <Stack>
        <TabContext value={currentTab}>
          <Box>
            <TabList onChange={(e, newValue) => setCurrentTab(newValue)} centered>
              <Tab label="Bets" value="bets" />
              <Tab label="Transactions" value="transactions" />
            </TabList>
          </Box>
          <TableContainer sx={{ mt: 3 }} >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderRadius: '5px 0 0 5px', width: '25%' }}>Date</TableCell>
                  <TableCell sx={{ width: '20%' }} >Game ID</TableCell>
                  <TableCell sx={{ width: '15%' }} >Bet ID</TableCell>
                  <TableCell sx={{ width: '15%' }}>Bet</TableCell>
                  <TableCell sx={{ width: '5%' }} >x</TableCell>
                  <TableCell sx={{ borderRadius: '0 5px 5px 0', width: '15%' }}>Win</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <TableContainer sx={{ mt: 1, backgroundColor: '#2c3137', p: 1, borderRadius: 1, width: 'auto' }}>
            <Table>
              <TableBody>
                {
                  tableData.map((dataItem, index) => (
                    <TableRow
                      key={index}
                      className="bg-black"
                      sx={{ borderBottom: '10px solid #2c3137', borderRadius: "10px" }}
                    >
                      <TableCell sx={{ width: '30%' }} >{dataItem.date}</TableCell>
                      <TableCell sx={{ width: '20%', color: '#f8bf60' }} >{dataItem.gameId}</TableCell>
                      <TableCell sx={{ width: '15%', color: '#f8bf60' }} >{dataItem.betId}</TableCell>
                      <TableCell sx={{ width: '15%' }} >{dataItem.bet}</TableCell>
                      <TableCell sx={{ width: '10%' }} >{dataItem.x}</TableCell>
                      <TableCell sx={{ width: '10%' }} >{dataItem.win}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TabPanel value="bets" sx={{ p: 0 }}></TabPanel>
        </TabContext>
      </Stack>

    </Stack>
  );
}