import { Outlet, Route } from "react-router-dom";
import { useState } from "react";
import Topbar from "./Topbar";
import { Box } from "@mui/material";
import Footer from "./Footer";
import NoData from "./NoData";
import Pincode from "./Pincode";
import Merchant from "./Merchant";
import Result from "./Result";

const Dashboard2 = ({ selectedOption, handleChange, inputValue, setInputValue }) => {



    return (
        <Box width="100%" position="relative">
            <Topbar inputValue={inputValue} setInputValue={setInputValue} selectedOption={selectedOption} handleChange={handleChange} />
            <Box width="100%" height="85vh">
                <Outlet>
                    <NoData />
                    <Pincode />
                    <Merchant />
                    <Result/>
                </Outlet>
            </Box>
            <Footer />
        </Box>
    );
};

export default Dashboard2;