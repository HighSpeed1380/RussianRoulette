import React, { useEffect, useState } from 'react';
import {
    Divider,
    Stack,
    Typography,
    Box as MuiBox,
    Grid,
    styled,
    TextField as MuiTextField,
    Select as MuiSelect,
} from '@mui/material';
import { Icon } from '@iconify/react';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

/* ----------------------------------------------------------------------------------------------------- */

const Box = styled(MuiBox)(({ theme }) => ({
    backgroundColor: '#171c22',
    borderRadius: '4px'
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
    width: '70%',
    fontFamily: 'Montserrat',
    backgroundColor: '#171c22',
    borderRadius: '5px',
    '& .MuiOutlinedInput-input': {
        padding: '1px 1px',
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: 16,
        backgroundColor: '#171c22'
    },
    '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
    }
}));

const Select = styled(MuiSelect)(({ theme }) => ({
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },

}))

/* ----------------------------------------------------------------------------------------------------- */

export default function VerifyTabPanel() {
    const [clientSeed, setClientSeed] = useState('E35cxnKmjw')
    const [serverSeed, setServerSeed] = useState('634ce34f0084f69e80fc3be8gk')
    const [nonce, setNonce] = useState(1);
    const [gameMode, setGameMode] = useState(1)

    const handleChange = (event) => {
        setGameMode(event.target.value);
    };

    return (
        <Stack spacing={3}>

            <Divider />

            <Stack
                className="bg-black"
                py={4}
                borderRadius={1.5}
            >
                <Stack
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', direction: 'row' }}
                >
                    <Typography
                        fontSize={22}
                        fontFamily="Montserrat"
                        fontWeight={700}
                        color="#000000"
                        className="bg-yellow"
                        px={3}
                        py={1}
                        borderRadius={3}
                    >
                        750.00x
                    </Typography>
                </Stack>
            </Stack>

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={9} md={9}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        Game
                                    </Typography>
                                    <FormControl>
                                        <Select
                                            value={gameMode}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value={1} > Russian Roulette Solo (Bonus-Only) </MenuItem>
                                            <MenuItem value={2} > Russian Roulette Solo (Normal) </MenuItem>
                                            <MenuItem value={3} > Russian Roulette Group (Bonus-Only) </MenuItem>
                                            <MenuItem value={4} > Russian Roulette Group (Normal) </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Box>
                        </Grid>

                        {/* <Grid item xs={1} md={1} sx={{ borderLeft: '2px solid #2c3137' }}> 
                            <Box bgcolor="black" borderRadius={1} pt={1} pb={1}>
                                <Stack justifyContent="center">
                                    <Typography
                                        color="white"
                                        fontWeight={800}
                                        textAlign="center"
                                    >
                                        <Typography variant="span" sx={{ fontSize: { lg: 14, md: 12, sm: 10, xs: 10 }, cursor: 'pointer' }} fontFamily="'Montserrat', sans-serif">
                                            <Icon icon="fa6-solid:copy" />
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid> */}
                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={9} md={9}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        width="30%"
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        Client Seed
                                    </Typography>
                                    <TextField
                                        width="70%"
                                        sx={{ backgroundColor: '#1c2127', display: 'flex' }}
                                        value={clientSeed}
                                        onChange={(e) => setClientSeed(e.target.value)}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={9} md={9}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        Server Seed
                                    </Typography>
                                    <TextField
                                        sx={{ backgroundColor: '#1c2127' }}
                                        value={serverSeed}
                                        onChange={(e) => setServerSeed(e.target.value)}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={7} md={7}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        width="45%"
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        Nonce
                                    </Typography>
                                    <TextField
                                        sx={{ backgroundColor: '#1c2127' }}
                                        value={nonce}
                                        onChange={(e) => setNonce(e.target.value)}
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
                                        <Typography variant="span" sx={{ fontSize: { lg: 14, md: 12, sm: 10, xs: 10 }, cursor: 'pointer' }} fontFamily="'Montserrat', sans-serif">
                                            <Icon icon="ep:arrow-down-bold" />
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
                                        <Typography variant="span" sx={{ fontSize: { lg: 14, md: 12, sm: 10, xs: 10 }, cursor: 'pointer' }} fontFamily="'Montserrat', sans-serif" fontWeight={750}>
                                            <Icon icon="ep:arrow-up-bold" />
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Stack>
        </Stack>
    );
}