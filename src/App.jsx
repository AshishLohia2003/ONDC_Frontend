import { useState } from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Dashboard2 from './Pages/Dashboard2';
import Content from './Pages/Content';
import Merchant from './Pages/Merchant';
import Pincode from './Pages/Pincode';
import Result from './Pages/Result';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, colorMode] = useMode();
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');


  
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setInputValue('');
  };

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard2 inputValue={inputValue} setInputValue={setInputValue} selectedOption={selectedOption} handleChange={handleChange} />} >
              {
                inputValue === '' ?
                  (selectedOption === '' ? (
                    <Route path="result" element={<Content />} />
                  ) : selectedOption === 10 ? (
                    <Route path="result" element={<Merchant />} />
                  ) : selectedOption === 20 ? (
                    <Route path="result" element={<Pincode />} />
                  ) : null)
                  : (<Route path="result" element={<Result value={inputValue} selectedOption={selectedOption} />} />)
              }
            </Route>
          </Routes>
          <ToastContainer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
