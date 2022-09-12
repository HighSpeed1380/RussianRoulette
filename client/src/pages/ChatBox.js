import React, { useEffect, useState } from 'react';
import {
    Box,
    Stack,
    IconButton,
    Typography,
    styled,
    TextField as MuiTextField,
    Button as MuiButton,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { Icon } from '@iconify/react';
import io from 'socket.io-client';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';
import './chatbox.css';


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

const tableData = [
    { id: 1, name: '75 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text', color: '#2995bd' },
    { id: 2, name: '75 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text', color: '#2995bd' },
    { id: 3, name: '75 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text', color: '#2995bd' },
    { id: 4, name: '75 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text', color: '#2995bd' },
    { id: 5, name: '7 Kusti', text: 'Text chat message Text chat message Text chat message Text chat messageText chat message Text chat message Text chat message Text chat message Text chat message', color: '#a2503d' },
    { id: 6, name: '75 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text', color: '#2995bd' },
    { id: 7, name: '92 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text', color: '#8d52c6' },
    { id: 8, name: '92 Kusti', text: 'Text chat message 24', color: '#8d52c6' },
    { id: 9, name: '112 Kusti', text: 'Text chat', color: '#bd2929' },
    { id: 10, name: '120 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat', color: '#bd2929' },
    { id: 11, name: '152 Kusti', text: 'Text chat message 24 text', color: '#f8bf60' },
    { id: 12, name: '175 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat', color: '#f8bf60' },
    { id: 13, name: 'ADMIN Cat', text: 'Text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat', color: '#c7c618' },
    { id: 14, name: 'MOD Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat', color: '#28b365' },
    { id: 15, name: 'RUSSIAN ROULETTE', text: 'THERE`S BEEN NO SHOT FOR 10 ROUNDS!', color: '#f8bf60' },
    { id: 16, name: '152 Kusti', text: 'Text chat message 24 text', color: '#f8bf60' },
    { id: 17, name: '120 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat', color: '#bd2929' },
    { id: 18, name: '92 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text', color: '#8d52c6' },
    { id: 19, name: 'RUSSIAN ROULETTE', text: '120 Kusti: JUST WON 570,000 !', color: '#f8bf60' },
    { id: 20, name: '175 Kusti', text: 'Text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat message 24 text chat', color: '#f8bf60' },
    { id: 21, name: '75 Kusti', text: 'Text chat message 24 text chat', color: '#2995bd' },
    { id: 22, name: '75 Kusti', text: 'Text chat message 24 text chat', color: '#2995bd' },

];

export default function ChatBox(props) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(`http://${window.location.hostname}:3000`);
        setSocket(newSocket);
        return () => newSocket.close();
    }, [setSocket]);

    const handleOpenChatBox = () => {
        props.setChat(false);
    };

    return (
        <Stack sx={{ backgroundColor: '#20252b' }}>
            <Box className="one-edge-box" pt={0.5} pb={0.5} pl={0} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton onClick={handleOpenChatBox} sx={{ pl: 1.5, fontSize: 25, color: 'gray' }}>
                        <Icon icon="dashicons:arrow-right-alt2" />
                    </IconButton>
                </Box>
                <Typography
                    color="white"
                    fontSize={16}
                    fontWeight={700}
                    fontFamily="'Montserrat', sans-serif"
                    padding={2}
                >
                    English Chat Room
                </Typography>
                <LaunchIcon sx={{ fontSize: 25, color: 'gray' }} />
            </Box>
            {socket ? (
                <>
                    <MessageBox socket={socket} />
                    <MessageInput socket={socket} />
                </>
            ) : (
                <Typography>Not Connected</Typography>
            )}
        </Stack>
    );
}