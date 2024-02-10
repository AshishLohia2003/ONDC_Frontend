import { Box, useTheme } from '@mui/material';
import Image from "./../assets/Image.svg";
import { tokens } from "../theme";


export default function Content() {
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
                <img width="40%" src={Image} alt="" />
            </Box>
        </Box>

    );
}
