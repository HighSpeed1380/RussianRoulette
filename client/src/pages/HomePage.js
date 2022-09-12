import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import PlayerSidebar from "./PlayersSidebar";
import Main from "./Main";
import TopWinnersSidebar from "./TopWinnersSidebar";
import ChatBox from "./ChatBox";

export default function HomePage() {
  const [chat, setChat] = useState(false);
  const [gameMode, setGameMode] = useState("group");
  const [gameType, setGameType] = useState("normal");

  return (
    <Box sx={{ minHeight: "103vh", bgcolor: "#1c2127" }}>
      <Grid container sx={{ flexGrow: 1 }} columns={6}>
        <Grid item xs={6} md={chat ? 5 : 6}>
          <TopBar chat={chat} setChat={() => setChat(!chat)} />
          <Box maxWidth="2xl">
            <Stack>
              <Header />
              <Grid container sx={{ flexGrow: 1 }} spacing={0.5} columns={6}>
                <Grid item xs={6} md={1}>
                  <PlayerSidebar
                    gameType={gameType}
                    setGameType={setGameType}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Main gameType={gameType} gameMode={gameMode} />
                </Grid>
                <Grid item xs={6} md={1}>
                  <TopWinnersSidebar
                    gameMode={gameMode}
                    setGameMode={setGameMode}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Grid>
        {chat ? (
          <Grid item xs={5} md={1}>
            <ChatBox setChat={setChat} />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Box>
  );
}
