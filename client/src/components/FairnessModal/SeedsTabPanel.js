import React, { useEffect, useState } from 'react';
import {
    Divider,
    Stack,
    Typography,
    Box as MuiBox,
    Grid,
    styled,
    TextField as MuiTextField
} from '@mui/material';
import { Icon } from '@iconify/react';

/* ----------------------------------------------------------------------------------------------------- */

const Box = styled(MuiBox)(({ theme }) => ({
    backgroundColor: '#171c22',
    borderRadius: '4px'
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
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

/* ----------------------------------------------------------------------------------------------------- */

export default function SeedsTabPanel() {
    const [ clientSeed, setClientSeed ] = useState('E35cxnKmjw')
    const [ serverSeed, setServerSeed ] = useState('634ce34f0084f69e80fc3be8gk')
    const [ totalBets, setTotalBets ] = useState('6262')
    const [ newClientSeed, setNewClientSeed ] = useState('M-cMDjyFou')
    const [ nextServerSeed, setNextServerSeed ] = useState('634ce34f0084f69e80fc3be8gk')

    return (
        <Stack spacing={3}>
            <Divider />

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={8} md={8}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        Active Client Seed
                                    </Typography>
                                    <TextField
                                        sx={{ backgroundColor: '#1c2127' }}
                                        value={clientSeed}
                                        onChange={(e) => setClientSeed(e.target.value)}
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
                                            <Icon icon="fa6-solid:copy" />
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={8} md={8}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        Active Server Seed (Hashed)
                                    </Typography>
                                    <TextField
                                        sx={{ backgroundColor: '#1c2127' }}
                                        value={serverSeed}
                                        onChange={(e) => setServerSeed(e.target.value)}
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
                                            <Icon icon="fa6-solid:copy" />
                                        </Typography>
                                    </Typography>
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
                                        Total Bets made with pair
                                    </Typography>
                                    <TextField
                                        sx={{ backgroundColor: '#1c2127' }}
                                        value={totalBets}
                                        onChange={(e) => setTotalBets(e.target.value)}
                                    />
                                </Stack>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Typography
                    fontSize={16}
                    fontFamily="Montserrat"
                    fontWeight={700}
                    textAlign="center"
                >
                    Rotate Seed Pair
                </Typography>
            </Stack>

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={8} md={8}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        New Client Seed
                                    </Typography>
                                    <TextField
                                        sx={{ backgroundColor: '#1c2127' }}
                                        value={newClientSeed}
                                        onChange={(e) => setNewClientSeed(e.target.value)}
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
                                            <Icon icon="fa6-solid:copy" />
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Box width="100%">
                    <Grid container columns={9} spacing={0.5}>
                        <Grid item xs={8} md={8}>
                            <Box bgcolor="black" borderRadius={1} p={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        color="white"
                                        sx={{ display: 'flex', alignItems: 'center', fontSize: { lg: 14, md: 12, sm: 10, xs: 10 } }}
                                        fontWeight={700}
                                        fontFamily="'Montserrat', sans-serif"
                                        pl={1}
                                    >
                                        Next Server Seed (Hashed)
                                    </Typography>
                                    <TextField
                                        sx={{ backgroundColor: '#1c2127' }}
                                        value={nextServerSeed}
                                        onChange={(e) => setNextServerSeed(e.target.value)}
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
                                            <Icon icon="fa6-solid:copy" />
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