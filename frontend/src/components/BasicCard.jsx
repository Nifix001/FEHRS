import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../assets/Frames.png';
import { Form } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card className='xl:w-104 2xl:w-151 xl:h-124 2xl:h-178.25 ml-auto mr-auto mt-20'>
      <CardContent>
        <header><img src={logo} alt="" /></header>
        <Form>
            <header>FUTA Electronic Health Record System</header>
            <input type="text" name='uniqueId' placeholder='Unique ID' />
            <input type="text" name='password' placeholder='Password' />
            <button type='submit' className='bg-primary'>Login</button>
        </Form>
      </CardContent>
    </Card>
  );
}