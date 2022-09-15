import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = (props)  => {
    return (
      <>
      {
        props.comType == "news"?
        <>
          <Skeleton animation="wave" /><Skeleton sx={{ marginBottom: "5px"}}/><Skeleton variant="rectangular" height={118} />
          <Skeleton animation="wave" /><Skeleton sx={{ marginBottom: "5px"}}/><Skeleton variant="rectangular" height={118} />
          <Skeleton animation="wave" /><Skeleton sx={{ marginBottom: "5px"}}/><Skeleton variant="rectangular" height={118} />
          <Skeleton animation="wave" /><Skeleton sx={{ marginBottom: "5px"}}/><Skeleton variant="rectangular" height={118} />
          <Skeleton animation="wave" /><Skeleton sx={{ marginBottom: "5px"}}/><Skeleton variant="rectangular" height={118} />
        </>
        : props.comType == "cload"?
          <>
              <Box sx={{ display: 'flex', padding:"24px" }}>
                <CircularProgress />
              </Box>
          </>
        : <TableRow> 
          <TableCell sx={{ borderBottom: "0px"}} colSpan={4}>
            <Box sx={{ width: "98%" }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />      
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
                                                  
            </Box>
          </TableCell>
        </TableRow>         
      }
      </>
      );
};

export default (Loading);