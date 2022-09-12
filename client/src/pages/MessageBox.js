import React, { useEffect, useState } from 'react';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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

export default function MessageBox({ socket }) {

    const [messages, setMessages] = useState({});

    useEffect(() => {
        const messageListener = (message) => {
            setMessages((prevMessages) => {
                const newMessages = { ...prevMessages };
                newMessages[message.id] = message;
                return newMessages;
            });
        };

        const deleteMessageListener = (messageID) => {
            setMessages((prevMessages) => {
                const newMessages = { ...prevMessages };
                delete newMessages[messageID];
                return newMessages;
            });
        };

        socket.on('message', messageListener);
        socket.on('deleteMessage', deleteMessageListener);
        socket.emit('getMessages');

        return () => {
            socket.off('message', messageListener);
            socket.off('deleteMessage', deleteMessageListener);
        };
    }, [socket]);

    return (
        <Stack>
            <Box>
                <TableContainer sx={{ height: 762, overflow: 'auto' }}>
                    <Table>
                        <TableBody>
                            {
                                [...Object.values(messages)]
                                    .sort((a, b) => a.time - b.time)
                                    .map((message) => (
                                        <TableRow
                                            key={message.id}
                                            fontFamily='Montserrat'
                                            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
                                        >
                                            <TableCell
                                                sx={{
                                                    p: 1,
                                                    width: '100%',
                                                    fontFamily: 'Montserrat',
                                                    fontWeight: 800,
                                                    fontSize: 14,
                                                    borderBottom: 'none'
                                                }}
                                            >
                                                <Stack>
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            fontFamily: 'inherit',
                                                            color: 'gold'
                                                        }}
                                                    >
                                                        <StarIcon sx={{ color: "red", fontSize: 'inherit' }} />
                                                        {message.user.name}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            display: 'flex',
                                                            fontSize: 'inherit',
                                                            fontFamily: 'inherit'
                                                        }}
                                                    >
                                                        {message.value}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            fontFamily: 'inherit',
                                                            color: 'gray',
                                                            display: 'flex',
                                                            justifyContent: 'end'
                                                        }}
                                                    >
                                                        {new Date(message.time).toLocaleTimeString()}
                                                    </Typography>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Stack>
    );
}