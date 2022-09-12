import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    styled,
    TextField as MuiTextField,
    Button as MuiButton,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ChatButton = styled(MuiButton)(({ theme }) => ({
    backgroundColor: '#f8bf60',
    boxShadow: '0 6px 0 #997a49',
    color: '#000000',
    padding: 0,
    minWidth: 50,
    borderRadius: '6px',
    '&:hover': {
        backgroundColor: '#ab884d',
        boxShadow: '0 6px 0 #725c38'
    },
    fontFamily: 'Montserrat',
    fontWeight: 650
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
    width: '97%',
    margin: '20px 3px 20px 3px',
    background: '#2c3137',
    borderRadius: '5px',
    '& .MuiOutlinedInput-input': {
        padding: '10px 8px',
        fontSize: 16,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
    }
}));


export default function MessageInput({ socket }) {

    const [value, setValue] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        socket.emit('message', value);
        setValue('');
    };

    return (
        <Stack>
            <form onSubmit={submitForm}>
                <TextField
                    fontFamily="'Montserrat', sans-serif"
                    autoFocus
                    value={value}
                    label="Send a message"
                    onChange={(e) => {
                        setValue(e.currentTarget.value);
                    }}
                />
                <Box
                    sx={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pl: 1 }}>
                        <CircleIcon sx={{ color: '#f8bf60', fontSize: 18 }} />
                        <Typography sx={{ color: 'white', fontSize: 14, fontWeight: 550 }}>12,750</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <InstagramIcon sx={{ color: '#f8bf60', fontSize: 20, mr: 0.3 }} />
                        <TwitterIcon sx={{ color: '#f8bf60', fontSize: 20, mr: 0.3 }} />
                        <FacebookIcon sx={{ color: '#f8bf60', fontSize: 20, mr: 0.3 }} />
                        <YouTubeIcon sx={{ color: '#f8bf60', fontSize: 20, mr: 1.3 }} />
                        <ChatButton type="submit" sx={{ mr: 0.5 }} > Chat </ChatButton>
                    </Box>
                </Box>
            </form>

        </Stack>
    );
}