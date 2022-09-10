import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
        :
        <TableRow> 
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