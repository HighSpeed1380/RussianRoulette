import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  IconButton,
  TableRow,
  Typography,
  styled,
  Icon as MuiIcon,
} from "@mui/material";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import StarIcon from "@mui/icons-material/Star";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import DiamondIcon from "@mui/icons-material/Diamond";
import { grey } from "@mui/material/colors";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { Icon } from "@iconify/react";
import useUserStats from "../hooks/useUserStats";
import UserStatsModal from "../components/UserStats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[100]};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 10px;
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

const tableData = [
  { id: 1, name: "tiger", lose: 658.56, win: 37.56, color: "#8d52c6" },
  { id: 2, name: "tiger", lose: 7895, win: 987.35, color: "#f8bf60" },
  { id: 3, name: "tester", lose: 6984, win: 694.25, color: "#2995bd" },
  { id: 4, name: "tiger", lose: 658.56, win: 370.56, color: "#8d52c6" },
  { id: 5, name: "tiger", lose: 500, win: 14.25, color: "#f8bf60" },
  { id: 6, name: "star", lose: 965, win: 56.85, color: "#2995bd" },
  { id: 7, name: "super", lose: 658.56, win: 87.56, color: "#8d52c6" },
  { id: 8, name: "tiger", lose: 5096, win: 10.56, color: "#f8bf60" },
  { id: 9, name: "star", lose: 3694, win: 890.23, color: "#2995bd" },
  { id: 10, name: "super", lose: 3621, win: 789.56, color: "#8d52c6" },
  { id: 11, name: "tiger", lose: 1000, win: 9001.32, color: "#f8bf60" },
  { id: 12, name: "star", lose: 3000, win: 63.33, color: "#2995bd" },
  { id: 13, name: "star", lose: 5600, win: 31.98, color: "#2995bd" },
  { id: 14, name: "super", lose: 1450, win: 37.56, color: "#8d52c6" },
  { id: 15, name: "tiger", lose: 6950.5, win: 47.05, color: "#f8bf60" },
  { id: 16, name: "star", lose: 3694, win: 51.02, color: "#2995bd" },
  { id: 17, name: "super", lose: 8500, win: 12.34, color: "#8d52c6" },
  { id: 18, name: "tiger", lose: 1000000, win: 5.36, color: "#f8bf60" },
  { id: 19, name: "star", lose: 7800, win: 10.25, color: "#2995bd" },
  { id: 20, name: "super", lose: 4700, win: 1.05, color: "#8d52c6" },
  { id: 21, name: "tiger", lose: 6900, win: 2.36, color: "#f8bf60" },
  { id: 22, name: "star", lose: 6100, win: 4.58, color: "#2995bd" },
  { id: 23, name: "super", lose: 3655, win: 19.25, color: "#8d52c6" },
  { id: 24, name: "tiger", lose: 2500.5, win: 312.21, color: "#f8bf60" },
  { id: 25, name: "super", lose: 9000, win: 1.01, color: "#8d52c6" },
  { id: 26, name: "tiger", lose: 300, win: 1.05, color: "#f8bf60" },
  { id: 27, name: "star", lose: 600, win: 96.35, color: "#2995bd" },
  { id: 28, name: "super", lose: 3697.32, win: 78.54, color: "#8d52c6" },
  { id: 29, name: "tiger", lose: 4000, win: 98.12, color: "#f8bf60" },
  { id: 30, name: "star", lose: 7006, win: 14.35, color: "#2995bd" },
  { id: 31, name: "super", lose: 2800.99, win: 19.25, color: "#8d52c6" },
  { id: 32, name: "tiger", lose: 2700, win: 97.45, color: "#f8bf60" },
  { id: 33, name: "star", lose: 6500, win: 17.36, color: "#2995bd" },
  { id: 34, name: "super", lose: 8900, win: 19.01, color: "#8d52c6" },
  { id: 35, name: "tiger", lose: 4100, win: 1.25, color: "#f8bf60" },
];

export default function TopWinnersSidebar(props) {
  const { openUserStatsModal } = useUserStats();
  const [maxRows, setMaxRows] = useState(4);

  return (
    <Stack spacing={0.5} sx={{ height: "82vh" }}>
      <Box p={1} borderRadius={1} className="bg-dark">
        <Typography
          color="white"
          fontWeight={700}
          fontFamily="'Montserrat', sans-serif"
          textTransform="uppercase"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: { lg: 16, md: 14, sm: 12, xs: 12 },
          }}
        >
          Top winners(24h)
          <ArrowDropDownIcon
            sx={{ fontSize: { lg: 38, md: 35, sm: 32, xs: 29 } }}
          />
        </Typography>
      </Box>

      <Box p={2} borderRadius={1} className="bg-dark">
        <TableContainer sx={{ overflowY: "scroll" }} style={{ height: "56vh" }}>
          <Table>
            <TableBody>
              {tableData.map((dataItem) => (
                <TableRow key={dataItem.id}>
                  <TableCell
                    sx={{
                      color: "#f8bf60",
                      borderRadius: 1,
                      border: 1,
                      borderColor: "#2c3137",
                      p: 1,
                      width: "10%",
                      fontWeight: 700,
                      fontFamily: "Montserrat",
                      textAlign: "center",
                    }}
                    className="bg-black text-yellow"
                  >
                    {dataItem.id}
                  </TableCell>

                  <TableCell
                    onClick={openUserStatsModal}
                    sx={{
                      borderRadius: 1,
                      border: 1,
                      borderColor: "#2c3137",
                      p: 1,
                      width: "55%",
                      color: dataItem.color,
                      fontFamily: "Montserrat",
                      fontWeight: 800,
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                    className="bg-black"
                  >
                    <Typography
                      component="span"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        fontFamily: "inherit",
                      }}
                    >
                      <StarIcon
                        sx={{ color: dataItem.color, fontSize: "inherit" }}
                      />
                      {dataItem.name.length > 9
                        ? `${dataItem.name.slice(0, 9)}...`
                        : dataItem.name}
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      borderRadius: 1,
                      border: 1,
                      borderColor: "#2c3137",
                      px: 1,
                      py: 0.5,
                      width: "35%",
                    }}
                    className="bg-black"
                  >
                    <Stack direction="row" justifyContent="end">
                      <Stack>
                        <Typography
                          align="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                          }}
                        >
                          {dataItem.lose}{" "}
                          <span
                            className="text-yellow"
                            style={{
                              fontSize: 13,
                              fontFamily: "'Montserrat', sans-serif",
                              paddingLeft: "3px",
                              paddingRight: "4px",
                            }}
                          >
                            x
                          </span>
                        </Typography>
                        <Typography
                          align="right"
                          color="white"
                          fontWeight={700}
                          fontSize={12}
                          fontFamily="'Montserrat', sans-serif"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                          }}
                        >
                          {dataItem.win}{" "}
                          <FontAwesomeIcon
                            icon={faGem}
                            className="text-yellow"
                            fontSize={14}
                            style={{ paddingLeft: "3px" }}
                          />
                        </Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <IconButton
            sx={{ p: 0, fontSize: 20, position: "absolute", bottom: "-10px" }}
          >
            <Icon icon="codicon:triangle-down" />
          </IconButton>
        </Box>
      </Box>
      <Box borderRadius={1} className="bg-dark">
        <Typography
          align="right"
          color="white"
          fontWeight={700}
          fontSize={14}
          fontFamily="'Montserrat', sans-serif"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            paddingBottom: "5px",
            paddingTop: "5px",
          }}
        >
          mode
        </Typography>
        <Box width="85%" margin="auto" mb={5} mt={1}>
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab
                sx={{
                  fontFamily: "Montserrat",
                  textTransform: "uppercase",
                  borderRadius: "3px 0px 0px 3px",
                }}
                onClick={() => props.setGameMode("group")}
              >
                group
              </Tab>
              <Tab
                sx={{
                  fontFamily: "Montserrat",
                  textTransform: "uppercase",
                  borderRadius: "0px 3px 3px 0px",
                }}
                onClick={() => props.setGameMode("solo")}
              >
                solo
              </Tab>
            </TabsList>
          </TabsUnstyled>
        </Box>
      </Box>
      <UserStatsModal />
    </Stack>
  );
}
