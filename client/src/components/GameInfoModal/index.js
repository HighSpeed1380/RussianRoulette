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
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useGameInfo from '../../hooks/useGameInfo';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Icon } from '@iconify/react';
import useBetInfo from '../../hooks/useBetInfo';
import BetInfoModal from '../BetInfoModal';
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
        player: 'troyr3750',
        bet: '50,000',
        payout: '7.50',
        win: '375,000',
        link: 'BET #75,405',
    },
    // {
    //     player: 'troyr3750',
    //     bet: '50,000',
    //     payout: '7.50',
    //     win: '375,000',
    //     link: 'BET #75,405',
    // },
    // {
    //     player: 'troyr3750',
    //     bet: '50,000',
    //     payout: '7.50',
    //     win: '375,000',
    //     link: 'BET #75,405',
    // },
    // {
    //     player: 'troyr3750',
    //     bet: '50,000',
    //     payout: '7.50',
    //     win: '375,000',
    //     link: 'BET #75,405',
    // }
];

const TableHead = styled(MuiTableHead)(({ theme }) => ({
    backgroundColor: '#2c3137',
}));

const TableCell = styled(MuiTableCell)(({ theme }) => ({
    textAlign: 'center',
    fontFamily: "'Montserrat', sans-serif",
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

export default function GameInfoModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [gameInfoDetails, setGameInfoDetails] = useState(false);
    const { modalIsOpened, currentTab, closeGameInfoModal, handleCurrentTab } = useGameInfo();
    const { openBetInfoModal } = useBetInfo();

    const openGameInfoDetails = () => {
        setGameInfoDetails(true);
    }

    const closeGameInfoDetails = () => {
        setGameInfoDetails(false);
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={modalIsOpened}
            onClose={closeGameInfoModal}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth="sm"
            backgroundColor="#2c3137"
        >
            <DialogTitle id="responsive-dialog-title" onClose={closeGameInfoModal}>
                <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase">
                    game information
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
                                Russian Roulette - Group | #5,939,096 <Icon icon="fluent:document-copy-20-filled" />
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
                        <Box
                            mt={2}
                            padding={2}
                            borderRadius={2}
                            className='bg-black'
                        >
                            <Typography
                                className='text-white'
                                fontSize={16}
                                fontWeight={700}
                                fontFamily="'Montserrat', sans-serif"
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Result
                            </Typography>
                            <Typography
                                className='text-yellow'
                                fontSize={16}
                                fontWeight={900}
                                fontFamily="'Montserrat', sans-serif"
                                sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                            >
                                750.00x
                            </Typography>
                        </Box>
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
                        <Box
                            mt={4}
                            sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {
                                gameInfoDetails ?
                                    <Button
                                        onClick={closeGameInfoDetails}
                                    >
                                        <Typography
                                            fontSize={14}
                                            fontWeight={700}
                                            color="#ffffff"
                                            fontFamily="'Montserrat', sans-serif"
                                        >
                                            Less Details
                                        </Typography>
                                        <ArrowDropUpIcon sx={{ color: "#ffffff" }} />
                                    </Button> :
                                    <Button
                                        onClick={openGameInfoDetails}
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
                            }

                        </Box>
                    </Box>
                    {
                        gameInfoDetails ?
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
                                            Previous Game
                                        </Typography>
                                    </Button>
                                    <Button>
                                        <Typography
                                            fontSize={13}
                                            fontWeight={700}
                                            color="#ffffff"
                                            className='bg-black'
                                            pl={9.5}
                                            pr={9.5}
                                            pt={1}
                                            pb={1}
                                            borderRadius="0px 5px 5px 0px"
                                            fontFamily="'Montserrat', sans-serif"
                                        >
                                            Next Game
                                        </Typography>
                                    </Button>
                                </Box>
                                <TableContainer sx={{ mt: 1, backgroundColor: '#2c3137', p: 1, borderRadius: 1, width: 'auto' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow className='bg-yellow'>
                                                <TableCell sx={{ borderRadius: '10px 0px 0px 0px', color: "#000000", fontWeight: 800, width: '10%', textTransform: 'uppercase' }}>player</TableCell>
                                                <TableCell sx={{ width: '20%', color: "#000000", fontWeight: 800, textTransform: 'uppercase' }} >bet</TableCell>
                                                <TableCell sx={{ width: '10%', color: "#000000", fontWeight: 800, textTransform: 'uppercase' }} >payout</TableCell>
                                                <TableCell sx={{ width: '20%', color: "#000000", fontWeight: 800, textTransform: 'uppercase' }}>win</TableCell>
                                                <TableCell sx={{ borderRadius: '0px 10px 0px 0px', fontWeight: 800, color: "#000000", width: '25%', textTransform: 'uppercase' }} ><Icon icon="mdi:link-variant" /></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                tableData.map((dataItem, index) => (
                                                    <TableRow
                                                        key={index}
                                                        className="bg-black"
                                                    >
                                                        <TableCell>{dataItem.player}</TableCell>
                                                        <TableCell><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ paddingRight: '1px' }} />{dataItem.bet}</TableCell>
                                                        <TableCell>{dataItem.payout}x</TableCell>
                                                        <TableCell><FontAwesomeIcon icon={faGem} className="text-yellow" style={{ paddingRight: '1px' }} />{dataItem.win}</TableCell>
                                                        <TableCell><Button onClick={ openBetInfoModal } sx={{ fontSize: 12, color: '#f8bf60' }}>{dataItem.link}</Button></TableCell>
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
                                    >
                                        GAME HASH: 3fc58b69428e4d586f2f7fca3e7277de49d321c1227096c03a690a9440407755
                                    </Typography>
                                </Box>
                            </> :
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