import React from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function Header() {
  const array = [0, 1];
  return (
    <Stack sx={{ mt: { xs: 2 } }}>
      <Stack sx={{ mx: { lg: 4, md: 3, sm: 2, xs: 1 } }}>
        {/* Upper row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pb: 2 }}
        >
          <Typography
            align="center"
            sx={{
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
              fontWeight: 600,
              width: "7%",
              fontFamily: "Montserrat",
              fontSize: { xs: "4px", sm: "8px", md: "12px", lg: "16px" },
            }}
            className="text-red"
          >
            Level 74{" "}
            <StarIcon
              sx={{
                fontSize: { xs: "4px", sm: "8px", md: "12px", lg: "16px" },
              }}
            />
          </Typography>

          <Grid
            container
            columns={10}
            sx={{
              height: { lg: "35px", md: "30px", sm: "20px", xs: "7px" },
              flexGrow: 1,
              pr: 2,
              width: "80%",
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((itemIndex) => (
              <Grid
                key={itemIndex.toString()}
                item
                md={1}
                xs={1}
                sx={{
                  px: { lg: 1, md: 1, sm: 0.5, xs: 0.3 },
                  display: { xs: "none", md: "grid" },
                }}
              >
                <div className="bar-segment filled">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))}

            {array.map((itemIndex) => (
              <Grid
                key={itemIndex.toString()}
                item
                md={1}
                xs={1}
                sx={{
                  px: { lg: 1, md: 1, sm: 0.5, xs: 0.3 },
                  display: { xs: "none", md: "grid" },
                }}
              >
                <div className="bar-segment">
                  <div className="fill"></div>
                  <div className="bottom"></div>
                </div>
              </Grid>
            ))}
          </Grid>

          <Typography
            align="center"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              textTransform: "uppercase",
              fontWeight: 600,
              width: "7%",
              fontFamily: "Montserrat",
              fontSize: { xs: "4px", sm: "8px", md: "12px", lg: "16px" },
            }}
            className="text-yellow"
          >
            <StarIcon
              sx={{
                fontSize: { xs: "4px", sm: "8px", md: "12px", lg: "16px" },
              }}
            />{" "}
            Level 75
          </Typography>
        </Stack>

        {/* Sub row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pb: 1 }}
        >
          <Stack sx={{ color: "white", width: "6%" }}>
            <Typography
              align="center"
              fontWeight={600}
              fontFamily="'Montserrat', sans-serif"
              sx={{
                lineHeight: 0.5,
                fontSize: { lg: 18, md: 14, sm: 10, xs: 6 },
              }}
            >
              200%
            </Typography>
            <Typography
              align="center"
              textTransform="uppercase"
              fontWeight={600}
              fontFamily="'Montserrat', sans-serif"
              sx={{ fontSize: { lg: 12, md: 9, sm: 6, xs: 3 } }}
            >
              Current XP
            </Typography>
          </Stack>

          <Grid
            container
            columns={10}
            sx={{
              height: { lg: "15px", md: "13px", sm: "10px", xs: "5px" },
              pr: 0.8,
              width: "40%",
            }}
          >
            {/* {[0, 1, 2, 3, 4, 5].map((itemIndex) => (
              <>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "none", md: "grid" },
                  }}
                >
                  <div className="bar-segment filled">
                    <div className="fill"></div>
                    <div className="bottom"></div>
                  </div>
                </Grid>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "grid", md: "none" },
                  }}
                >
                  <div className="bar-segment filled">
                    <div className="fill"></div>
                  </div>
                </Grid>
              </>
            ))}
            {[0, 1, 2, 3].map((itemIndex) => (
              <>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "none", md: "grid" },
                  }}
                >
                  <div className="bar-segment">
                    <div className="fill"></div>
                    <div className="bottom"></div>
                  </div>
                </Grid>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "grid", md: "none" },
                  }}
                >
                  <div className="bar-segment">
                    <div className="fill"></div>
                  </div>
                </Grid>
              </>
            ))} */}
          </Grid>

          <Stack sx={{ color: "white", width: "5%" }}>
            <Typography
              align="center"
              fontWeight={600}
              fontFamily="'Montserrat', sans-serif"
              sx={{
                lineHeight: 0.5,
                fontSize: { lg: 18, md: 14, sm: 10, xs: 6 },
              }}
            >
              250%
            </Typography>
            <Typography
              align="center"
              textTransform="uppercase"
              fontWeight={600}
              fontFamily="'Montserrat', sans-serif"
              sx={{ fontSize: { lg: 12, md: 9, sm: 6, xs: 3 } }}
            >
              Bonus XP
            </Typography>
          </Stack>

          <Grid
            container
            columns={5}
            sx={{
              height: { lg: "15px", md: "13px", sm: "10px", xs: "5px" },
              pr: 0.8,
              width: "40%",
            }}
          >
            {/* {[0, 1, 2].map((itemIndex) => (
              <>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "none", md: "grid" },
                  }}
                >
                  <div className="bar-segment filled rounded">
                    <div className="fill"></div>
                    <div className="bottom"></div>
                  </div>
                </Grid>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "grid", md: "none" },
                  }}
                >
                  <div className="bar-segment filled rounded">
                    <div className="fill"></div>
                  </div>
                </Grid>
              </>
            ))}
            {[0, 1].map((itemIndex) => (
              <>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "none", md: "grid" },
                  }}
                >
                  <div className="bar-segment rounded">
                    <div className="fill"></div>
                    <div className="bottom"></div>
                  </div>
                </Grid>
                <Grid
                  item
                  md={1}
                  xs={1}
                  sx={{
                    px: { lg: 0.5, md: 0.4, sm: 0.3, xs: 0.2 },
                    display: { xs: "grid", md: "none" },
                  }}
                >
                  <div className="bar-segment rounded">
                    <div className="fill"></div>
                  </div>
                </Grid>
              </>
            ))} */}
          </Grid>

          <Stack sx={{ color: "white", width: "6%" }}>
            <Typography
              align="center"
              fontWeight={600}
              fontFamily="'Montserrat', sans-serif"
              sx={{
                lineHeight: 0.5,
                fontSize: { lg: 18, md: 14, sm: 10, xs: 6 },
              }}
            >
              5
            </Typography>
            <Typography
              align="center"
              textTransform="uppercase"
              fontWeight={600}
              fontFamily="'Montserrat', sans-serif"
              sx={{ fontSize: { lg: 12, md: 9, sm: 6, xs: 3 } }}
            >
              Streak
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
