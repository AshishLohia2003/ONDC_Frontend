import { useState, useRef } from 'react';
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "./../assets/logo.png";
import {  toast } from 'react-toastify';

function Home({ }) {
    const fileInputRef = useRef(null);
    const [uploadedFileURL, setUploadedFileURL] = useState(null);
    const [error, setError] = useState();


    function handleFileInputChange(event) {
        const selectedFile = event.target.files[0];
        uploadFile(selectedFile);
    }

    function uploadFile(file) {
        const url = 'https://calm-bliss-413606.as.r.appspot.com/upload-csv/';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config)
            .then((response) => {
                setUploadedFileURL(response.data.fileUrl);
                toast.success('Uploaded Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            })
            .catch((error) => {
                setError(error);
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            });
    }


    function handleUploadButtonClick() {
        fileInputRef.current.click();
    }

    return (
        <Box
            height="95vh"
            display="grid"
            alignItems="center"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <img width="20%" src={logo} alt="" />
            </Box>
            <Typography variant="h1" textAlign="center" color="initial">
                {/* {data && data.message ? data.message : "No data"} */}
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="20px"
                flexWrap='wrap'
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                />
                <Button
                    onClick={handleUploadButtonClick}
                    sx={{
                        height: '70px',
                        fontSize: '20px'
                    }}
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                </Button>
                <Link to="/dashboard/result">
                    <Button
                        sx={{
                            height: '70px',
                            fontSize: '20px'
                        }}
                        component="label"
                        color="secondary"
                        variant="contained"
                    >
                        Go with the Mock file
                    </Button>
                </Link>
                {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content" />}
            </Box>
        </Box>

    );
}

export default Home;
