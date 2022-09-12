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

/* ----------------------------------------------------------------------------------------------------- */

const synData = [
    { name: 'Bets', value: '25,000' },
    { name: 'Total Wagered', value: '25,000' },
    { name: 'Net Profit', value: '25,000' },
    { name: 'Profit (All-Time High)', value: '25,000' }
];

const tableData = [
    {
        campaign: 'Loremip',
        referrals: '777,777',
        depositors: '777,777',
        deposits: '777,777',
        commission: '10%',
        total: '777,777',
        available: '777,777'
    },
    {
        campaign: 'Loremip',
        referrals: '777,777',
        depositors: '777,777',
        deposits: '777,777',
        commission: '10%',
        total: '777,777',
        available: '777,777'
    },
    {
        campaign: 'Loremip',
        referrals: '777,777',
        depositors: '777,777',
        deposits: '777,777',
        commission: '10%',
        total: '777,777',
        available: '777,777'
    },
    {
        campaign: 'Loremip',
        referrals: '777,777',
        depositors: '777,777',
        deposits: '777,777',
        commission: '10%',
        total: '777,777',
        available: '777,777'
    },
    {
        campaign: 'Loremip',
        referrals: '777,777',
        depositors: '777,777',
        deposits: '777,777',
        commission: '10%',
        total: '777,777',
        available: '777,777'
    },
    {
        campaign: 'Loremip',
        referrals: '777,777',
        depositors: '777,777',
        deposits: '777,777',
        commission: '10%',
        total: '777,777',
        available: '777,777'
    },
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
    backgroundColor: '#f8bf60',
}));

const TableCell = styled(MuiTableCell)(({ theme }) => ({
    borderBottom: 'none',
    textAlign: 'center',
    fontFamily: "'Montserrat', sans-serif",
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 12,
}));

const TableBody = styled(MuiTableBody)(({ theme }) => ({
    backgroundColor: '#2c3137',
}));



/* ----------------------------------------------------------------------------------------------------- */

export default function CampainsTabPanel() {
    return (
        <Stack spacing={2}>
            <Stack spacing={1} px={1} backgroundColor="#2c3137" p={1} borderRadius={1}>
                <Typography
                    fontSize={14}
                    fontWeight={700}
                    color="#ffffff"
                    fontFamily="'Montserrat', sans-serif"
                >
                    Invite your friends and receive commission from every bet! You will receive commision for every user that
                    registers and plays through your links, regardless if they win or lose!
                </Typography>
            </Stack>
            <Stack
                spacing={1}
                px={1}
                backgroundColor="#2c3137"
                p={1}
                borderRadius={1}
                textTransform="uppercase"
                sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}
            >
                <Typography
                    fontSize={13}
                    fontWeight={700}
                    color="#ffffff"
                    fontFamily="'Montserrat', sans-serif"
                >
                    share your link and invite friends
                </Typography>
                <Typography
                    fontSize={13}
                    fontWeight={700}
                    color="#ffffff"
                    p={2}
                    fontFamily="'Montserrat', sans-serif"
                >
                    >
                </Typography>
                <Typography
                    fontSize={13}
                    fontWeight={700}
                    color="#ffffff"
                    fontFamily="'Montserrat', sans-serif"
                >
                    receive commission on every bet
                </Typography>
                <Typography
                    fontSize={13}
                    fontWeight={700}
                    color="#ffffff"
                    p={2}
                    fontFamily="'Montserrat', sans-serif"
                >
                    >
                </Typography>
                <Typography
                    fontSize={13}
                    fontWeight={700}
                    color="#ffffff"
                    fontFamily="'Montserrat', sans-serif"
                >
                    stake to increase rewards exponentially
                </Typography>
            </Stack>
            <Divider />

            <Stack
                sx={{
                    flexFlow: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box
                    width="14.5%"
                    className='bg-dark'
                    textAlign="center"
                    p={1}
                    borderRadius={1}
                >
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="goldenrod"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        campain hits
                    </Typography>
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="#ffffff"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        1,059,530.08
                    </Typography>
                </Box>
                <Box
                    width="14.5%"
                    className='bg-dark'
                    textAlign="center"
                    p={1}
                    borderRadius={1}
                >
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="goldenrod"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        referrals
                    </Typography>
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="#ffffff"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        1,059,530.08
                    </Typography>
                </Box>
                <Box
                    width="14.5%"
                    className='bg-dark'
                    textAlign="center"
                    p={1}
                    borderRadius={1}
                >
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="goldenrod"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        depositors
                    </Typography>
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="#ffffff"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        1,059,530.08
                    </Typography>
                </Box>
                <Box
                    width="14.5%"
                    className='bg-dark'
                    textAlign="center"
                    p={1}
                    borderRadius={1}
                >
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="goldenrod"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        deposits
                    </Typography>
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="#ffffff"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        1,059,530.08
                    </Typography>
                </Box>
                <Box
                    width="14.5%"
                    className='bg-dark'
                    textAlign="center"
                    p={1}
                    borderRadius={1}
                >
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="goldenrod"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        total
                    </Typography>
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="#ffffff"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        1,059,530.08
                    </Typography>
                </Box>
                <Box
                    width="14.5%"
                    className='bg-dark'
                    textAlign="center"
                    p={1}
                    borderRadius={1}
                >
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="goldenrod"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        available
                    </Typography>
                    <Typography
                        fontSize={11}
                        fontWeight={700}
                        textTransform="uppercase"
                        color="#ffffff"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        1,059,530.08
                    </Typography>
                </Box>
            </Stack>

            <Divider />

            <Stack>
                <TabContext>
                    <TableContainer sx={{ mt: 3 }} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ borderRadius: '5px 0 0 5px', width: '16%', color: '#000000' }}>CAMPAIN</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }} >REFERRALS</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }} >DEPOSITORS</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }}>DEPOSITS</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }}>COMMISSION</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }} >TOTAL</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }}>AVAILABLE</TableCell>
                                    <TableCell sx={{ borderRadius: '0 5px 5px 0', width: '12%', color: '#000000' }}>LINK</TableCell>
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
                                            <TableCell sx={{ width: '16%' }} >{dataItem.campaign}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.referrals}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.depositors}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.deposits}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.commission}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.total}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.available}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >
                                                <Box
                                                    className='bg-yellow'
                                                    borderRadius={1}
                                                >
                                                    <Typography
                                                        color="#000000"
                                                        fontSize={12}
                                                        fontWeight={900}
                                                        textTransform="uppercase"
                                                        fontFamily="'Montserrat', sans-serif"
                                                    >
                                                        copy
                                                    </Typography>
                                                </Box>
                                            </TableCell>

                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabContext>
            </Stack>
            <Box
                className='bg-yellow'
                textAlign="center"
                p={1}
                borderRadius={2}
            >
                <Button>
                    <Typography
                        fontSize={14}
                        fontWeight={700}
                        color="#000000"
                        fontFamily="'Montserrat', sans-serif"
                    >
                        stake commission
                    </Typography>
                </Button>
            </Box>
        </Stack>
    );
}