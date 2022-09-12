import React from 'react';
import {
    Stack,
    Box,
    Dialog as MuiDialog,
    DialogContent,
    DialogTitle as MuiDialogTitle,
    useMediaQuery,
    styled,
    IconButton,
    Typography,
    Slider as MuiSlider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import useBetList from '../../hooks/useBetList';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey } from '@mui/material/colors';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        background: '#2c3137'
    }
}));

const Slider = styled(MuiSlider)(({ theme }) => ({
    width: '94%',
    marginRight: '25px',
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

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 15px;
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
  min-width: 120px;
  background-color: #1c2127;
  box-shadow: 0 4px 0 #22272d;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;


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

export default function BetListModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { modalIsOpened, closeBetListModal } = useBetList();

    return (
        <Dialog
            fullScreen={fullScreen}
            open={modalIsOpened}
            onClose={closeBetListModal}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth="sm"
            backgroundColor="#2c3137"
        >
            <DialogTitle id="responsive-dialog-title" onClose={closeBetListModal}>
                <Typography fontSize={18} fontWeight={700} fontFamily="'Montserrat', sans-serif" textTransform="uppercase">
                    betlist
                </Typography>
            </DialogTitle>

            <DialogContent>
                <Stack>
                    <Box
                        borderTop="1px solid #1c2127"
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between', alignItems: 'center', pb: 3, pt: 3 }}
                    >
                        <Box
                            width="60%"
                            className='bg-black'
                            borderRadius="10px 0px 0px 10px"
                            sx={{ display: 'flex', flexDirection: 'row', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Typography
                                fontSize={16}
                                fontWeight={700}
                                fontFamily="'Montserrat', sans-serif"
                                padding={2}
                                pl={4}
                                sx={{ display: 'flex', flexDirection: 'row', direction: 'row', alignItems: 'center' }}
                            >
                                My Betlist (5.00 <FontAwesomeIcon icon={faGem} className="text-yellow" style={{ paddingLeft: '1px' }} /> )
                            </Typography>
                            <ArrowDropDownIcon
                                sx={{ fontSize: 30, paddingRight: 3 }}
                            />
                        </Box>
                        <Box
                            widht="20%"
                            className='bg-black'
                        >
                            <Typography
                                fontSize={16}
                                padding={2}
                                textTransform="uppercase"
                                fontFamily="'Montserrat', sans-serif"
                                fontWeight={700}
                            >
                                import
                            </Typography>
                        </Box>
                        <Box
                            widht="20%"
                            className='bg-black'
                            borderRadius="0px 10px 10px 0px"
                        >
                            <Typography
                                fontSize={16}
                                padding={2}
                                textTransform="uppercase"
                                fontFamily="'Montserrat', sans-serif"
                                fontWeight={700}
                            >
                                export
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        borderTop="1px solid #1c2127"
                        width="100%"
                        sx={{ pt: 3, pb: 3 }}
                    >
                        <Typography
                            fontSize={16}
                            textTransform="uppercase"
                            fontWeight={700}
                            borderRadius="5px"
                            padding={0.5}
                            className="bg-black"
                            sx={{ display: 'flex', flexDirection: 'row', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            total bet : <span className='text-yellow' style={{ fontWeight: 600 }} > $ </span> 100.00 <CreateOutlinedIcon />
                        </Typography>
                        <Box
                            mt={3}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 10,000.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 10.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span>  <span className='text-yellow'> 30.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 9,000.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 500.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow'> 25.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 500.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 100.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow'> 50.00 </span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            mt={0.5}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 4.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow'> 100.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 3.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow'> 150.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="31%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 2.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow'> 50.00 </span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            mt={0.5}
                            sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                        >
                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 100.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 1.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow'> 5.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 25.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 3.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow'> 2.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 25.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 2.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow' > 1.00 </span>
                                </Typography>
                            </Box>

                            <Box
                                width="23%"
                                padding={0.5}
                                fontSize={16}
                                fontWeight={700}
                                borderRadius="5px"
                                className='bg-black'
                            >
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className='text-yellow' > $ </span> 25.00
                                </Typography>
                                <Typography
                                    fontWeight={600}
                                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> 1.00 | <span className="text-yellow" style={{ fontSize: 16, fontFamily: "'Montserrat', sans-serif", paddingLeft: '3px', paddingRight: '4px' }} >x</span> <span className='text-yellow' > 7.00 </span>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        borderTop="1px solid #1c2127"
                        pt={3}
                        pb={3}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}
                    >
                        <Typography
                            fontSize={16}
                            fontWeight={600}
                            fontFamily= "'Montserrat', sans-serif"
                        >
                            Add New Bet
                        </Typography>
                    </Box>
                    <Box
                        mb={1}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                    >
                        <Box
                            width="65%"
                            fontSize={16}
                            fontWeight={700}
                            className='bg-black'
                            borderRadius="5px 0px 0px 5px"
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                padding={2}
                                fontSize={14}
                                fontWeight={700}
                                fontFamily= "'Montserrat', sans-serif"
                                width="60%"
                            >
                                Bet
                            </Typography>
                            <Typography
                                width="40%"
                                fontSize={14}
                                fontWeight={700}
                                fontFamily= "'Montserrat', sans-serif"
                            >
                                <span className='text-yellow' style={{ fontFamily: "'Montserrat', sans-serif" }} > $ </span> 0.10
                            </Typography>
                        </Box>

                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            fontFamily= "'Montserrat', sans-serif"
                        >
                            <Typography 
                                fontFamily= "'Montserrat', sans-serif"
                                fontSize={14}
                                fontWeight={700}
                            >
                                1/2
                            </Typography>
                        </Box>
                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            borderRadius="0px 5px 5px 0px"
                            fontFamily= "'Montserrat', sans-serif"
                        >
                            <Typography
                                fontFamily= "'Montserrat', sans-serif"
                                fontSize={14}
                                fontWeight={700}
                            >
                                x2
                            </Typography>
                        </Box>
                    </Box>
                    <Stack direction="row" justifyContent="center" mb={1}>
                        <Slider
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25}
                            marks
                            min={0}
                            max={100}
                        />
                    </Stack>
                    <Box
                        mb={1}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                    >
                        <Box
                            width="65%"
                            fontSize={16}
                            fontWeight={700}
                            fontFamily= "'Montserrat', sans-serif"
                            className='bg-black'
                            borderRadius="5px 0px 0px 5px"
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                padding={2}
                                width="60%"
                                fontSize={14}
                                fontWeight={700}
                                fontFamily= "'Montserrat', sans-serif"
                            >
                                Payout (<span className='text-yellow' >Bonus</span>)
                            </Typography>
                            <Typography
                                width="40%"
                                fontSize={14}
                                fontWeight={700}
                                fontFamily= "'Montserrat', sans-serif"
                            >
                                <span className='text-yellow' style={{ fontFamily: "'Montserrat', sans-serif" }} > x 30.00 </span>
                            </Typography>
                        </Box>

                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            fontFamily= "'Montserrat', sans-serif"
                        >
                            <Typography
                                fontFamily= "'Montserrat', sans-serif"
                                fontSize={14}
                                fontWeight={700}
                            >
                                1/2
                            </Typography>
                        </Box>
                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            fontFamily= "'Montserrat', sans-serif"
                            borderRadius="0px 5px 5px 0px"
                        >
                            <Typography
                                fontFamily= "'Montserrat', sans-serif"
                                fontSize={14}
                                fontWeight={700}
                            >
                                x2
                            </Typography>
                        </Box>
                    </Box>
                    <Stack direction="row" justifyContent="center" mb={1}>
                        <Slider
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25}
                            marks
                            min={0}
                            max={100}
                        />
                    </Stack>
                    <Box
                        mb={1}
                        sx={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}
                    >
                        <Box
                            width="65%"
                            fontSize={16}
                            fontWeight={700}
                            className='bg-black'
                            borderRadius="5px 0px 0px 5px"
                            fontFamily= "'Montserrat', sans-serif"
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography
                                padding={2}
                                width="60%"
                                fontSize={14}
                                fontWeight={700}
                                fontFamily= "'Montserrat', sans-serif"
                            >
                                Payout (Base)
                            </Typography>
                            <Typography
                                width="40%"
                                fontSize={14}
                                fontWeight={700}
                                fontFamily= "'Montserrat', sans-serif"
                            >
                                <span className='text-yellow' > x </span> 1.50
                            </Typography>
                        </Box>

                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            fontFamily= "'Montserrat', sans-serif"
                        >
                            <Typography
                                fontFamily= "'Montserrat', sans-serif"
                                fontSize={14}
                                fontWeight={700}
                            >
                                1/2
                            </Typography>
                        </Box>
                        <Box
                            width="10%"
                            fontSize={16}
                            fontWeight={700}
                            padding={2}
                            className="bg-black"
                            textAlign="center"
                            borderRadius="0px 5px 5px 0px"
                            fontFamily= "'Montserrat', sans-serif"
                        >
                            <Typography
                                fontFamily= "'Montserrat', sans-serif"
                                fontSize={14}
                                fontWeight={700}
                            >
                                x2
                            </Typography>
                        </Box>
                    </Box>
                    <Stack direction="row" justifyContent="center" mb={2}>
                        <Slider
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            step={25}
                            marks
                            min={0}
                            max={100}
                        />
                    </Stack>
                    <Box>
                        <TabsUnstyled defaultValue={1}>
                            <TabsList>
                                <Tab sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16 }}> Clear Betlist </Tab>
                                <Tab sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16 }}> Add to Betlist </Tab>
                            </TabsList>
                        </TabsUnstyled>
                    </Box>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}