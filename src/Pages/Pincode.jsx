import { Box, useTheme } from '@mui/material';
import Image from "./../assets/pincode.svg";
import { tokens } from "../theme";


export default function Pincode() {
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
                <img width="59%" src={Image} alt="" />
            </Box>
        </Box>

    );
}
