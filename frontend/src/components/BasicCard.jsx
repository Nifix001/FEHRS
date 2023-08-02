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
    <Card className='w-151 h-160.5'>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
                <header><img src={logo} alt="" /></header>
        <Form>
            <header>FUTA Electronic Health Record System</header>
            <input type="text" name='uniqueId' placeholder='Unique ID' />
            <input type="text" name='password' placeholder='Password' />
            {/* <button type='submit' className='bg-primary'>Login</button> */}
        </Form>
      </CardContent>
      <CardActions>
        <Button size="small" className='bg-primary' >Login</Button>
      </CardActions>
    </Card>
  );
}