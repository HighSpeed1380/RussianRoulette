import React, { useState } from 'react';
import {
    Stack,
    Box,
    Dialog as MuiDialog,
    DialogContent,
    DialogTitle as MuiDialogTitle,
    useMediaQuery,
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
import DiamondIcon from '@mui/icons-material/Diamond';
import { Icon } from '@iconify/react';
import useBetInfo from '../../hooks/useBetInfo';
import HelpIcon from '@mui/icons-material/Help';
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
        bet: '777,7.77',
        target: '777,7.77',
        won: '777,7.77',
        link: 'BET #77777777',
    },
    // {
    //     bet: '777,7.77',
    //     target: '777,7.77',
    //     won: '777,7.77',
    //     link: 'BET #77777777',
    // },
    // {
    //     bet: '777,7.77',
    //     target: '777,7.77',
    //     won: '777,7.77',
    //     link: 'BET #77777777',
    // },
    // {
    //     bet: '777,7.77',
    //     target: '777,7.77',
    //     won: '777,7.77',
    //     link: 'BET #77777777',
    // },
    // {
    //     bet: '777,7.77',
    //     target: '777,7.77',
    //     won: '777,7.77',
    //     link: 'BET #77777777',
    // },
    // {
    //     bet: '777,7.77',
    //     target: '777,7.77',
    //     won: '777,7.77',
    //     link: 'BET #7777777',
    // }
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

export default function BetInfoModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { modalIsOpened, currentTab, closeBetInfoModal, handleCurrentTab } = useBetInfo();
    const [betInfoDetails, setBetInfoDetails] = useState(false);

    const openBetInfoDetails = () => {
        setBetInfoDetails(true);
    }

    const closeBetInfoDetails = () => {
        setBetInfoDetails(false);
    }
    return (
        <Dialog
            fullScreen={fullScreen}
            open={modalIsOpened}
            onClose={closeBetInfoModal}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth="sm"
            backgroundColor="#2c3137"
        >
            <DialogTitle id="responsive-dialog-title" onClose={closeBetInfoModal}>
                <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase">
                    bet information
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
                                className="text-yellow"
                                fontSize={14}
                                fontWeight={700}
                                fontFamily="'Montserrat', sans-serif"
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Russian Roulette - Group | #829,525 <Icon icon="fluent:document-copy-20-filled" />
                            </Typography>
                            <Typography
                                className="text-yellow"
                                fontSize={14}
                                fontWeight={700}
                                fontFamily="'Montserrat', sans-serif"
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <span style={{ fontSize: 14, color: '#ffffff' }} > Username: </span> gvjt6400
                            </Typography>
                            <Typography
                                className="text-yellow"
                                fontWeight={700}
                                fontSize={14}
                                fontFamily="'Montserrat', sans-serif"
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Saturday 24 November 2025 at 17:02:52 GMT
                            </Typography>
                            <Typography
                                className="text-white"
                                fontWeight={700}
                                fontSize={14}
                                fontFamily="'Montserrat', sans-serif"
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                18 Hours Ago
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        width="80%"
                        margin="auto"
                        sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Box
                            sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Box
                                mt={2}
                                padding={2}
                                pl={5}
                                pr={5}
                                borderRadius="5px 0px 0px 5px"
                                className='bg-black'
                            >
                                <Typography
                                    className='text-white'
                                    fontSize={16}
                                    fontWeight={700}
                                    fontFamily="'Montserrat', sans-serif"
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    Bet
                                </Typography>
                                <Typography
                                    fontSize={16}
                                    fontWeight={900}
                                    fontFamily="'Montserrat', sans-serif"
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <FontAwesomeIcon icon={faGem} className="text-yellow" style={{ paddingRight: '3px' }} />50,000
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                padding={2}
                                pl={5}
                                pr={5}
                                className='bg-black'
                                borderLeft={1}
                                borderRight={1}
                                borderColor="#2c3137"
                            >
                                <Typography
                                    className='text-white'
                                    fontSize={16}
                                    fontWeight={700}
                                    fontFamily="'Montserrat', sans-serif"
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    Multiplier
                                </Typography>
                                <Typography
                                    className='text-yellow'
                                    fontSize={16}
                                    fontWeight={900}
                                    fontFamily="'Montserrat', sans-serif"
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    25.00x
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                padding={2}
                                pl={5}
                                pr={5}
                                borderRadius="0px 5px 5px 0px"
                                className='bg-black'
                            >
                                <Typography
                                    className='text-white'
                                    fontSize={16}
                                    fontWeight={700}
                                    fontFamily="'Montserrat', sans-serif"
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    Payout
                                </Typography>
                                <Typography
                                    className='text-yellow'
                                    fontSize={16}
                                    fontWeight={900}
                                    fontFamily="'Montserrat', sans-serif"
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <FontAwesomeIcon icon={faGem} className="text-yellow" style={{ paddingRight: '3px' }} />750,000.00
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        width="55%"
                        margin="auto"
                    >
                        <Box
                            mt={2}
                            className="bg-yellow"
                            borderRadius={2}
                        >
                            <Button
                                variant="text"
                                fullWidth
                            >
                                <Typography
                                    color="#000000"
                                    fontSize={16}
                                    padding={1}
                                    fontWeight={800}
                                    fontFamily="'Montserrat', sans-serif"
                                >
                                    play russian roulette
                                </Typography>
                            </Button>
                        </Box>
                        {
                            betInfoDetails ?
                                <Box
                                    mt={4}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Button
                                        onClick={closeBetInfoDetails}
                                    >
                                        <Typography
                                            fontSize={14}
                                            fontWeight={700}
                                            color="#ffffff"
                                            fontFamily="'Montserrat', sans-serif"
                                        >
                                            Less Details
                                        </Typography>
                                        <ArrowDropDownIcon sx={{ color: "#ffffff" }} />
                                    </Button>
                                </Box> :
                                <Box
                                    mt={4}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Button
                                        onClick={openBetInfoDetails}
                                    >
                                        <Typography
                                            fontSize={14}
                                            fontWeight={700}
                                            color="#ffffff"
                                            fontFamily="'Montserrat', sans-serif"
                                        >
                                            More Details
                                        </Typography>
                                        <ArrowDropDownIcon sx={{ color: "#ffffff" }} />
                                    </Button>
                                </Box>
                        }

                    </Box>
                    {
                        betInfoDetails ?
                            <>
                                <Box
                                    m={2}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                                >
                                    <Button>
                                        <Typography
                                            fontSize={13}
                                            fontWeight={700}
                                            fontFamily="'Montserrat', sans-serif"
                                            color="#ffffff"
                                            className='bg-black'
                                            pl={8.5}
                                            pr={8.5}
                                            pt={1}
                                            pb={1}
                                            borderRadius="5px 0px 0px 5px"
                                        >
                                            Previous Bet
                                        </Typography>
                                    </Button>
                                    <Button>
                                        <Typography
                                            fontSize={13}
                                            fontWeight={700}
                                            fontFamily="'Montserrat', sans-serif"
                                            color="#ffffff"
                                            className='bg-black'
                                            pl={9.5}
                                            pr={9.5}
                                            pt={1}
                                            pb={1}
                                            borderRadius="0px 5px 5px 0px"
                                        >
                                            Next Bet
                                        </Typography>
                                    </Button>
                                </Box>
                                <Box
                                    ml={2}
                                >
                                    <Typography
                                        fontSize={14}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                    >
                                        <span className='text-yellow'  >gvjt6400's</span> Round Results:
                                    </Typography>
                                </Box>
                                <TableContainer sx={{ mt: 1, backgroundColor: '#2c3137', p: 1, borderRadius: 1, width: 'auto' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow className='bg-yellow'>
                                                <TableCell fontFamily="'Montserrat', sans-serif" sx={{ borderRadius: '10px 0px 0px 0px', width: '20%', color: '#000000', fontWeight: 800, textTransform: 'uppercase' }}>bet</TableCell>
                                                <TableCell fontFamily="'Montserrat', sans-serif" sx={{ width: '20%', textTransform: 'uppercase', color: '#000000', fontWeight: 800 }} >Target</TableCell>
                                                <TableCell fontFamily="'Montserrat', sans-serif" sx={{ width: '20%', textTransform: 'uppercase', color: '#000000', fontWeight: 800 }}>won</TableCell>
                                                <TableCell fontFamily="'Montserrat', sans-serif" sx={{ borderRadius: '0px 10px 0px 0px', width: '35%', textTransform: 'uppercase' }} ><Icon icon="mdi:link-variant" color="#000" /></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                tableData.map((dataItem, index) => (
                                                    <TableRow
                                                        key={index}
                                                        className="bg-black"
                                                        fontFamily="'Montserrat', sans-serif"
                                                    >
                                                        <TableCell><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ fontSize: 12, paddingRight: '1px' }} />{dataItem.bet}</TableCell>
                                                        <TableCell>{dataItem.target}x</TableCell>
                                                        <TableCell><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ fontSize: 12, paddingRight: '1px' }} />{dataItem.won}</TableCell>
                                                        <TableCell><Button sx={{ fontSize: 12, color: '#f8bf60' }}>{dataItem.link}</Button></TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box
                                    mt={3}
                                >
                                    <Typography
                                        fontSize={12}
                                        fontWeight={700}
                                        color="#ffffff"
                                        textAlign="center"
                                        fontFamily="'Montserrat', sans-serif"
                                        sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        GAME HASH <HelpIcon sx={{ fontSize: 16 }} /> : 3fc58b69428e4d586f2f7fca3e7277de49d321c1227096c03a690a9440407755
                                    </Typography>
                                </Box>
                            </>
                            :
                            ''
                    }
                    <TabContext value={currentTab} >
                        <TabPanel value="security" sx={{ px: 0 }}>
                        </TabPanel>
                    </TabContext>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}