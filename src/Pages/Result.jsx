import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useDataContext } from '../Context/Context2';
import { tokens } from '../theme';

const Result = ({ value, selectedOption }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { fetchDataByMerchant, fetchDataByPincode, merchant, pincode } = useDataContext();
    const [list, setList] = useState(null);

    useEffect(() => {
        if (selectedOption === 10) {
            fetchDataByMerchant(value);
            // console.log(pincode);
        } else if (selectedOption === 20) {
            fetchDataByPincode(value);
            // console.log(merchant);
        }
    }, [value, selectedOption, fetchDataByMerchant, fetchDataByPincode]);

    useEffect(() => {
        if (pincode && selectedOption === 10) {
            setList(pincode.pincodes);
        } else if (merchant && selectedOption === 20) {
            setList(merchant.merchants);
        }
    }, [merchant, pincode, selectedOption]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="100%"
            height="100%"
            gap="20px"
        >
            <Typography textAlign="center" variant="h2" color={colors.text[500]}>
                {selectedOption === 10 ? (`Pincodes served by the merchent ${value}`) :
                    ((selectedOption === 20) ? (`Merchents serving pincode ${value}`) : null)}
            </Typography>
            <Box
                color={colors.text[600]}
            >
                {list ? (
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) :
                    (<Typography variant="h3" color={colors.secondary[800]}>
                        Requested {selectedOption === 10 ? (`Merchent`) :
                            ((selectedOption === 20) ? (`Pincode`) : null)} is not in the database
                    </Typography>)
                }
            </Box>
        </Box>
    );
};

export default Result;
