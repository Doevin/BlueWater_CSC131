
import React from 'react'
import { Container, Typography,Box, Button } from '@mui/material';

import { Stack } from '@mui/system';
const patients = [{name: "john"}, {name: "jill"} , {name: "Tom"}, {name: "Justin"}, {name: "Daigo"}];
const FinalComponent=() => (
    (
        <Stack direction='column'>
            
            <Box sx={{
            mb: 0,
            ml:8}}>
            <Button variant='text'>Homepage</Button>
            </Box>
            <Box
    sx={{
      display:'flex',
      justifyContent:"center",
       alignItems:"center",
      backgroundColor: 'Black',
      color: 'white',
      height: '100px',
      width: '800px',
      mt:5,
      ml:8,
      border:3,
      borderColor:'black',
      '&:hover':{
        backgroundColor: 'primary.light',
      },

    }}>
    <Stack direction = 'row'>
    <Button variant='text' ml={2} mr={2} backgroundColor= "#C0C0C0">Home</Button>
    <Button variant='text'>Add Patients</Button>
    <Button variant='text'>View Study</Button>
    </Stack>

  
    </Box>
       <Stack direction='row'>
     <Box
     sx={{
       display:'flex',
       justifyContent:"center",
        alignItems:"center",
       backgroundColor: 'primary.main',
       color: 'white',
       height: '500px',
       width: '200px',
       mt:5,
       ml:8,
       border:3,
       borderColor:'black',
       '&:hover':{
         backgroundColor: 'primary.light',
       },
 
     }}>
       <Typography align='center'>
       Doctor Info. 
       This is to test out this page
       </Typography>
   
     </Box>
     <Box sx={{
            border: 3,
            backgroundColor: 'primary.main',
            color: 'white',
            height: '500px',
            width: '500px',
            mt:5,
            ml:8,
            border:3,
            borderColor:'black',
            
            }}>
            <Stack direction="column">
            {patients.map(({ name }) => (
        <p key={name}>Name: {name}</p>
      ))}
            </Stack>
            <Stack direction="column">

            </Stack>
            </Box>
     </Stack>
     </Stack>
   )
 );
export default FinalComponent;