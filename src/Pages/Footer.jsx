import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            width="100%"
            textAlign="center"
            borderTop="2px solid"
            borderColor={colors.text[200]}
            py="5px"
            sx={{background:`${colors.text[900]}`}}
        >
            <Typography display="flex" alignItems="center" justifyContent="center" variant="h5" color={colors.text[600]}>
                Made with &nbsp; <FavoriteIcon /> &nbsp; by Team Bootcamp
            </Typography>
        </Box>
    )
}

export default Footer
