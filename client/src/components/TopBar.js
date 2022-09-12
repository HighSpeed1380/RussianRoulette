import React, { useState, useEffect } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button as MuiButton,
  styled,
  TextField as MuiTextField,
  InputAdornment,
  Icon as MuiIcon,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Icon } from "@iconify/react";
import AuthModal from "./AuthModal";
import useAuth from "../hooks/useAuth";
import { LOGIN, REGISTER } from "../utils/constants";
import WalletModal from "./WalletModal";
import useWallet from "../hooks/useWallet";
import useAccount from "../hooks/useAccount";
import useAffiliate from "../hooks/useAffiliate";
import useFairness from "../hooks/useFairness";
import AffiliateModal from "./AffiliateModal";
import AccountModal from "./AccountModal";
import FairnessModal from "./FairnessModal";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import "./topbar.css";
/* ---------------------------------------------------------------------------------------------------- */

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: "#1c2127",
  backgroundImage: "none",
}));

const LoginButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#f8bf60",
  boxShadow: "0 6px 0 #997a49",
  color: "#000000",
  padding: 0,
  minWidth: 84,
  "&:hover": {
    backgroundColor: "#ab884d",
    boxShadow: "0 6px 0 #725c38",
  },
  fontFamily: "Montserrat",
  fontWeight: 700,
}));

const RegisterButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0 6px 0 #a0a2a5",
  color: "#000000",
  padding: 0,
  minWidth: 114,
  "&:hover": {
    backgroundColor: "#c3c0c0",
    boxShadow: "0 6px 0 #76787a",
  },
  fontFamily: "Montserrat",
  fontWeight: 700,
}));

const WalletButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#f8bf60",
  boxShadow: { md: "0 6px 0 #997a49", xs: "none" },
  color: "#000000",
  padding: 0,
  minWidth: { lg: 84, md: 75, sm: 60, xs: 45 },
  borderRadius: "0px 8px 8px 0px",
  "&:hover": {
    backgroundColor: "#ab884d",
    boxShadow: "0 6px 0 #725c38",
  },
  fontFamily: "Montserrat",
  fontWeight: 700,
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  background: "#2c3137",
  boxShadow: "0 6px 0 #171c22",
  borderRadius: "8px 0px 0px 8px",
  "& .MuiOutlinedInput-input": {
    padding: "8px 8px",
    fontFamily: "Montserrat",
    fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
    fontWeight: 700,
    textAlign: "right",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    display: "none",
  },
}));

/* ---------------------------------------------------------------------------------------------------- */

const TopBar = ({ chat, setChat }) => {
  const { openAuthModal, currentUser, signout } = useAuth();
  const { openWalletModal } = useWallet();
  const { openAccountModal } = useAccount();
  const { openAffiliateModal } = useAffiliate();
  const { openFairnessModal } = useFairness();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.game);
  const [userBalance, setUserBalance] = useState(currentUser?.balance);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignIn = () => {
    handleCloseNavMenu();
    openAuthModal(LOGIN);
  };

  const handleRegister = () => {
    handleCloseNavMenu();
    openAuthModal(REGISTER);
  };

  const handleAccountModal = () => {
    openAccountModal();
    handleClose();
    handleCloseNavMenu();
  };

  const handleAffiliateModal = () => {
    openAffiliateModal();
    handleClose();
    handleCloseNavMenu();
  };

  const handleFairnessModal = () => {
    openFairnessModal();
    handleClose();
    handleCloseNavMenu();
  };

  const handleLogout = () => {
    handleCloseNavMenu();
    signout();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (balance) {
      setUserBalance(balance);
    }
  }, [balance]);

  useEffect(() => {
    if (currentUser) {
      setUserBalance(currentUser.balance);
    }
  }, [currentUser?.balance]);

  return (
    <AppBar position="static" className="one-edge-box-2">
      <Box maxWidth="2xl" mx={1}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" width="100%">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Box
                component="img"
                alt="logo"
                src="/assets/images/logo.png"
                sx={{ width: "90%", height: "90%" }}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {currentUser ? (
                <>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Log out</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <MenuItem onClick={handleSignIn}>
                      <Typography>Sign in</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleRegister}>
                      <Typography>Register</Typography>
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
            {currentUser && (
              <Stack
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "center",
                  flexGrow: 1,
                }}
              >
                <Box>
                  <Stack direction="row" sx={{ mt: { xs: 1 } }}>
                    {/* Please input the select here */}
                    <TextField
                      value={currentUser ? userBalance : 0}
                      sx={{ width: { xs: 130, sm: 150, md: 180, lg: 200 } }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Stack
                              direction="row"
                              alignItems="center"
                              display="flex"
                              spacingnpm={1}
                            >
                              <MuiIcon
                                className="text-yellow"
                                sx={{
                                  display: "flex",
                                  fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                                  paddingRight: "5px",
                                }}
                              >
                                <FontAwesomeIcon icon={faGem} />
                              </MuiIcon>
                              <MuiIcon
                                sx={{
                                  fontSize: {
                                    display: "flex",
                                    xs: 12,
                                    sm: 12,
                                    md: 14,
                                    lg: 16,
                                  },
                                }}
                              >
                                <Icon icon="iwwa:arrow-down" />
                              </MuiIcon>
                            </Stack>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <WalletButton onClick={openWalletModal}>
                      <Typography sx={{ display: { xs: "flex", md: "none" } }}>
                        <Icon icon="fa-solid:wallet" width="12" color="#000" />
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
                          display: { xs: "none", md: "flex" },
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight={700}
                      >
                        Wallet
                      </Typography>
                    </WalletButton>
                  </Stack>
                </Box>
              </Stack>
            )}

            {currentUser ? (
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <LoginButton onClick={signout}>Logout</LoginButton>
              </Stack>
            ) : (
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <LoginButton onClick={() => openAuthModal(LOGIN)}>
                  Login
                </LoginButton>
                <RegisterButton onClick={() => openAuthModal(REGISTER)}>
                  Register
                </RegisterButton>
              </Stack>
            )}
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            {/* {currentUser ? ( */}
            {currentUser ? (
              <Box
                ml={2}
                sx={{ flexGrow: 0, mr: { xs: 1, sm: 1, md: 3, lg: 3 } }}
              >
                <IconButton
                  onClick={handleClick}
                  sx={{ p: 0, fontSize: { xs: 20, sm: 20, md: 25, lg: 30 } }}
                >
                  <Icon icon="mdi:account" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleAccountModal}>Account</MenuItem>
                  <MenuItem onClick={handleAffiliateModal}>Affiliate</MenuItem>
                  <MenuItem onClick={handleFairnessModal}> Fairness </MenuItem>
                </Menu>
              </Box>
            ) : (
              ""
            )}

            {chat ? (
              ""
            ) : (
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <span onClick={setChat}>
                  <IconButton sx={{ p: 0, fontSize: 25, color: "gray" }}>
                    <Icon icon="dashicons:arrow-left-alt2"></Icon>
                  </IconButton>
                </span>
              </Box>
            )}
          </Stack>
        </Toolbar>
      </Box>
      <AuthModal />
      <WalletModal />
      <AccountModal />
      <AffiliateModal />
      <FairnessModal />
    </AppBar>
  );
};

export default TopBar;
