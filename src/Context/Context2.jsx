import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [merchant, setMerchant] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);
    const [merchantFetched, setMerchantFetched] = useState(false);
    const [pincodeFetched, setPincodeFetched] = useState(false);
    const [lastFetchTimestamp, setLastFetchTimestamp] = useState(0);
    const minIntervalBetweenRequests = 5000;

    useEffect(() => {
        if (!data) {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        if (!dataFetched) {
            setLoading(true);
            try {
                const currentTime = Date.now();
                if (currentTime - lastFetchTimestamp >= minIntervalBetweenRequests) {
                    const response = await axios.get('https://calm-bliss-413606.as.r.appspot.com//take_sample_graph');
                    setData(response.data);
                    setDataFetched(true);
                    setLastFetchTimestamp(currentTime);
                } else {
                    console.log("Too many requests. Please wait before making another request.");
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
    };

    const fetchDataByPincode = async (pincodeValue) => {
        setLoading(true);
        try {
            const currentTime = Date.now();
            if (currentTime - lastFetchTimestamp >= minIntervalBetweenRequests) {
                const response = await axios.get(`https://calm-bliss-413606.as.r.appspot.com/search/?pincode=${pincodeValue}`);
                setPincode(pincodeValue);
                setMerchant(response.data);
                setPincodeFetched(true);
                setLastFetchTimestamp(currentTime);
            } else {
                console.log("Too many requests. Please wait before making another request.");
            }
        } catch (err) {
            setError(err);
            setMerchant("0"); 
            setPincode("0");
            setPincodeFetched(false);
        } finally {
            setLoading(false);
        }
    };

    const fetchDataByMerchant = async (merchantValue) => {
        setLoading(true);
        try {
            const currentTime = Date.now();
            if (currentTime - lastFetchTimestamp >= minIntervalBetweenRequests) {
                const response = await axios.get(`https://calm-bliss-413606.as.r.appspot.com/search/?merchant_id=${merchantValue}`);
                setMerchant(merchantValue);
                setPincode(response.data);
                setMerchantFetched(true);
                setLastFetchTimestamp(currentTime);
            } else {
                console.log("Too many requests. Please wait before making another request.");
            }
        } catch (err) {
            setError(err);
            setMerchant("0");
            setPincode("0");
            setMerchantFetched(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DataContext.Provider value={{ data, loading, error, fetchData, fetchDataByMerchant, fetchDataByPincode, merchant, pincode }}>
            {children}
        </DataContext.Provider>
    );
};
