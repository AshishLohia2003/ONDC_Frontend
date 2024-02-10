import { Box, useTheme } from '@mui/material';
import Image from "./../assets/NoData.svg";
import { tokens } from "../theme";


export default function NoData() {
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
