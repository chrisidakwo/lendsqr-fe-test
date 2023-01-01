import Box from '@mui/material/Box';
import React from 'react';

export interface ErrorPageProps
{
    error?: Error;
}

const ErrorPage = ({error}: ErrorPageProps): JSX.Element => (
    <Box sx={{width: '100%'}}>
        <Box sx={{marginTop: '3rem'}}>
            <h1>Oops! Something went wrong when loading the page.</h1>
            <p>{error?.message}</p>
        </Box>
    </Box>
);

export default ErrorPage;
