import { Box, useTheme } from '@mui/material';
import Image from "./../assets/merchant.svg";
import { tokens } from "../theme";


export default function Merchant() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <img width="39%" src={Image} alt="" />
            </Box>
        </Box>

    );
}
