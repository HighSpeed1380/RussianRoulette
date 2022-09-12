import React, { useEffect, useState } from 'react';
import {
    Divider,
    Stack,
    Typography,
    Checkbox as MuiCheckbox,
    styled,
    Box,
    Select,
    Tab as MuiTab,
    TableContainer,
    Table,
    TableHead as MuiTableHead,
    TableRow,
    TableCell as MuiTableCell,
    FormControl,
    TableBody as MuiTableBody,
    InputLabel,
    MenuItem,
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
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
    },
    {
        username: 'ipsumLorem',
        registered: '02/01/2028',
        deposits: '26,703',
        last_deposit: '10 Minutes Ago',
        last_seen: '2 Minutes Ago',
        wagered: '725,000.00',
        commission: '100.00'
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
    fontFamily: 'Montserrat',
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 12,
}));

const TableBody = styled(MuiTableBody)(({ theme }) => ({
    backgroundColor: '#2c3137',
}));



/* ----------------------------------------------------------------------------------------------------- */

export default function ReferralsTabPanel() {
    return (
        <Stack spacing={2}>
            <Divider />
            <FormControl fullWidth>
                <InputLabel id="select-label">CAMPAIGN NAME</InputLabel>
                <Select label="CAMPAIGN NAME" labelId='select-label'>
                </Select>
            </FormControl>

            <Divider />

            <Stack>
                <TabContext>
                    <TableContainer sx={{ mt: 3 }} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ borderRadius: '5px 0 0 5px', width: '16%', color: '#000000' }}>USERNAME</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }} >REGISTERED</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }} >DEPOSITS</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }}>LAST DEPOSIT</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }}>LAST SEEN</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }} >WAGERED</TableCell>
                                    <TableCell sx={{ width: '12%', color: '#000000' }}>COMMISSION</TableCell>
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
                                            <TableCell sx={{ width: '16%' }} >{dataItem.username}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.registered}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.deposits}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.last_deposit}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.last_seen}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.wagered}</TableCell>
                                            <TableCell sx={{ width: '12%' }} >{dataItem.commission}</TableCell>
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
                    >
                        stake commission
                    </Typography>
                </Button>
            </Box>
        </Stack>
    );
}