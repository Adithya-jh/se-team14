import React from 'react'
import { Link,Typography } from '@material-ui/core';

function Copyright (){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/" target="blank">
                SE@TEAM14 
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright
