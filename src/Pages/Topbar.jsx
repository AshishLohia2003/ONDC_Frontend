import { useState, useContext } from 'react';
import { TextField, Box, InputLabel, MenuItem, FormControl, Select, IconButton, useTheme, Tooltip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { ColorModeContext, tokens } from "../theme";
import logo from "../assets/logo.png"


export default function Topbar({ handleChange, selectedOption, inputValue, setInputValue }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            display="flex"
            p="10px"
            width="100%"
            borderBottom="2px solid"
            borderColor={colors.text[200]}
            alignItems="center"
            justifyContent="space-between"
            sx={{background:`${colors.text[900]}`}}
        >
            <Box
                display="flex"
                alignItems="center"
            >
                <IconButton sx={{ width: "40px", height: "40px" }}>
                    <img width="40px" src={logo} alt="logo" />
                </IconButton>
                {/* <Typography variant="h4" color="initial">Team Bootcamp</Typography> */}
            </Box>
            <Box
                display="flex"
                alignItems="center"
                gap="10px"
                pl="10px"
            >
                <FormControl sx={{ width: '200px' }}>
                    <InputLabel>Select</InputLabel>
                    <Select
                        value={selectedOption}
                        label="Select"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Merchant Name</MenuItem>
                        <MenuItem value={20}>Pin Code</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label={selectedOption === '' ? '' : selectedOption === 10 ? 'Merchant Name' : 'Pin Code'}
                    variant="standard"
                    disabled={!selectedOption}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <IconButton sx={{ width: "40px", height: "40px" }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box>
                <Tooltip title="Mode Toggle" arrow>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                </Tooltip>
                <Link to="/">
                    <Tooltip title="Exit" arrow>
                        <IconButton sx={{ width: "40px", height: "40px" }}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </Box>
        </Box>

    );
}
