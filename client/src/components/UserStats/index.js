import React, { useState } from 'react';
import {
    Stack,
    Box,
    Card,
    CardHeader,
    CardContent,
    Dialog as MuiDialog,
    DialogContent,
    DialogTitle as MuiDialogTitle,
    useMediaQuery,
    Grid,
    styled,
    Button,
    IconButton,
    Typography,
    TableContainer,
    Table,
    TableHead as MuiTableHead,
    TableRow,
    TableCell as MuiTableCell,
    TableBody as MuiTableBody,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TabContext, TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Icon } from '@iconify/react';
import useUserStats from '../../hooks/useUserStats';
import StarIcon from '@mui/icons-material/Star';
import BlockIcon from '@mui/icons-material/Block';
import { ChartLine } from '../charts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        background: '#2c3137'
    }
}));

const tableData = [
    {
        games: '777,777',
        bets: 'troyr3750',
        wagered: '777,777.77',
        profit: '777,777.77',
        profitath: '777,777.77',
        balance: '777,777.77',
        balanceath: '777,777.77'
    }
];

const TableHead = styled(MuiTableHead)(({ theme }) => ({
    backgroundColor: '#2c3137',
}));

const TableCell = styled(MuiTableCell)(({ theme }) => ({
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 12,
    border: '2px solid #2c3137',
    paddingTop: 5,
    paddingBottom: 5
}));

const TableBody = styled(MuiTableBody)(({ theme }) => ({
    backgroundColor: '#2c3137',
}));

const DialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
        <MuiDialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

/* ---------------------------------------------------------------------------------------- */

export default function UserStatsModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { modalIsOpened, currentTab, closeUserStatsModal, handleCurrentTab } = useUserStats();

    return (
        <Dialog
            fullScreen={fullScreen}
            open={modalIsOpened}
            onClose={closeUserStatsModal}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth="md"
            backgroundColor="#2c3137"
        >
            <DialogTitle id="responsive-dialog-title" onClose={closeUserStatsModal}>
                <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase">
                    user stats
                </Typography>
            </DialogTitle>

            <DialogContent>
                <Stack>
                    <Box
                        width="55%"
                        margin="auto"
                    >
                        <Box>
                            <Typography
                                fontSize={14}
                                fontWeight={700}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <StarIcon sx={{ fontSize: 16 }} className="text-yellow" /><span className='text-yellow' > 70 </span> Username12345
                            </Typography>
                            <Typography
                                fontWeight={700}
                                fontSize={14}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Joined on September 1, 2021 (2Weeks Ago)
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        width="70%"
                        margin="auto"
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2 }}>
                            <Typography
                                align="center"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    width: '7%',
                                    fontFamily: 'Montserrat'
                                }}
                                className="text-yellow"
                            >
                                <StarIcon />175
                            </Typography>

                            <Grid container columns={10} sx={{ height: '15px', flexGrow: 1, pr: 2, width: '80%' }} >
                                {
                                    [0, 1, 2, 3, 4, 5, 6, 7].map(itemIndex => (
                                        <Grid key={itemIndex} item md={1} sx={{ px: 1 }}>
                                            <div className="bar-segment filled">
                                                <div className="fill"></div>
                                            </div>
                                        </Grid>
                                    ))
                                }
                                {
                                    [0, 1].map(itemIndex => (
                                        <Grid key={itemIndex} item md={1} sx={{ px: 1 }}>
                                            <div className="bar-segment bg-black">
                                                <div className="fill"></div>
                                            </div>
                                        </Grid>
                                    ))
                                }
                            </Grid>

                            <Typography
                                align="center"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'end',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    width: '7%',
                                    fontFamily: 'Montserrat'
                                }}
                                className="text-yellow"
                            >
                                <StarIcon /> 176
                            </Typography>
                        </Stack>
                    </Box>
                    <Box
                        width="45%"
                        margin="auto"
                        sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <Button>
                            <Typography
                                fontSize={16}
                                fontWeight={600}
                                className="text-yellow"
                                sx={{ dispaly: 'flex', direction: 'row', alignItems: 'center' }}
                            >
                                <Icon icon="fa-solid:wallet" /> TIP
                            </Typography>
                        </Button>
                        <Button>
                            <Typography
                                fontSize={15}
                                fontWeight={600}
                                className="text-yellow"
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}
                            >
                                <BlockIcon sx={{ fontSize: 17 }} /> Block
                            </Typography>
                        </Button>
                    </Box>
                    <TableContainer sx={{ mt: 1, backgroundColor: '#2c3137', p: 1, borderRadius: 1, width: 'auto' }}>
                        <Table>
                            <TableHead>
                                <TableRow className='bg-yellow'>
                                    <TableCell sx={{ color: '#000000', fontWeight: 700, borderRadius: '10px 0px 0px 0px', width: '10%', textTransform: 'uppercase' }}>games</TableCell>
                                    <TableCell sx={{ color: '#000000', fontWeight: 700, width: '10%', textTransform: 'uppercase' }} >bets</TableCell>
                                    <TableCell sx={{ color: '#000000', fontWeight: 700, width: '10%', textTransform: 'uppercase' }} >wagered</TableCell>
                                    <TableCell sx={{ color: '#000000', fontWeight: 700, width: '10%', textTransform: 'uppercase' }}>profit</TableCell>
                                    <TableCell sx={{ color: '#000000', fontWeight: 700, width: '10%', textTransform: 'uppercase' }}>profit ath</TableCell>
                                    <TableCell sx={{ color: '#000000', fontWeight: 700, width: '10%', textTransform: 'uppercase' }}>balance</TableCell>
                                    <TableCell sx={{ color: '#000000', fontWeight: 700, borderRadius: '0px 10px 0px 0px', width: '15%', textTransform: 'uppercase' }} >balance ath</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    tableData.map((dataItem, index) => (
                                        <TableRow
                                            key={index}
                                            className="bg-black"
                                        >
                                            <TableCell>{dataItem.games}</TableCell>
                                            <TableCell>{dataItem.bets}</TableCell>
                                            <TableCell><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ fontSize: 10, paddingRight: '2px' }} />{dataItem.wagered}</TableCell>
                                            <TableCell sx={{ color: '#f8bf60' }} ><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ fontSize: 10, paddingRight: '2px' }} />{dataItem.profit}</TableCell>
                                            <TableCell sx={{ color: '#f8bf60' }} ><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ fontSize: 10, paddingRight: '2px' }} />{dataItem.profitath}</TableCell>
                                            <TableCell sx={{ color: '#f8bf60' }} ><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ fontSize: 10, paddingRight: '2px' }} />{dataItem.balance}</TableCell>
                                            <TableCell sx={{ color: '#f8bf60' }} ><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ fontSize: 10, paddingRight: '2px' }} />{dataItem.balanceath}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box
                        mt={2}
                        textAlign="center"
                    >
                        <Button>
                            <Typography
                                fontSize={16}
                                fontWeight={700}
                                color="#ffffff"
                                className='bg-black'
                                p={1}
                                pl={4}
                                pr={4}
                                borderRadius={2}
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}
                            >
                                profit <ArrowDropDownIcon sx={{ color: "#ffffff", paddingLeft: 2 }} />
                            </Typography>
                        </Button>
                    </Box>
                    <Grid item xs={12} md={6}>
                        <Card dir="ltr">
                            <CardHeader title="Line" />
                            <CardContent>
                                <ChartLine />
                            </CardContent>
                        </Card>
                    </Grid>
                    <TabContext value={currentTab} >
                        <TabPanel value="security" sx={{ px: 0 }}>
                        </TabPanel>
                    </TabContext>
                </Stack>
            </DialogContent>
        </Dialog>

    );
}