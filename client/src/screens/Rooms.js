// src/components/HotelList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import {styled} from '@mui/system';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import DateRange from '../components/DateRange';
import BookRoom from './BookRoom';

const useStyles = styled('div')({
  largeImage: {
    height: '300px', // Adjust the height as needed
    objectFit: 'cover',
  },
});

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const classes = useStyles;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/rooms/all');
  //       console.log('Response data:', response.data);
  //       setRooms(prevRooms => {
  //         console.log('Previous rooms:', prevRooms);
  //         return response.data.rooms;
  //       }); 
  //       console.log('Rooms after setRooms:', rooms);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rooms/all');
        console.log('Response data:', response.data);
  
        // Filter out rooms with clashes
        const filteredRooms = response.data.rooms.filter((room) => {
          // Assuming the structure of currentBookings is an array of objects with 'startDate' and 'endDate' properties
          return (
            !room.currentBookings.some((booking) => {
              const bookingStartDate = moment(booking.from_date);
              const bookingEndDate = moment(booking.to_date);
              return (
                (bookingStartDate.isSameOrBefore(fromDate) && bookingEndDate.isSameOrAfter(fromDate)) ||
                (bookingStartDate.isSameOrBefore(toDate) && bookingEndDate.isSameOrAfter(toDate)) ||
                (bookingStartDate.isAfter(fromDate) && bookingEndDate.isBefore(toDate))
              );
            })
          );
        });
  
        setRooms(filteredRooms);
  
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [fromDate, toDate]);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    console.log(room);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDateRangeChange = (dates) => {
    setFromDate(moment(dates[0]).format('YYYY-MM-DD'));
    setToDate(moment(dates[1]).format('YYYY-MM-DD'));
    localStorage.setItem('fromDate', moment(dates[0]).format('YYYY-MM-DD'));
    localStorage.setItem('toDate', moment(dates[1]).format('YYYY-MM-DD'));
    console.log(localStorage.getItem('fromDate'));
    console.log(localStorage.getItem('toDate'));
  }

  useEffect(() => {
    // This useEffect runs whenever 'rooms' is updated
    console.log(rooms.length);
  }, [rooms]); // Dependency array ensures it only runs when 'rooms' changes

  return (
    <div>
      <h1 style={{ textAlign:"center"}}>Rooms</h1>
      <DateRange onDateChange={handleDateRangeChange}/>
      <Grid container spacing={3} style={{marginTop:"1%"}}>
        {Array.isArray(rooms) && rooms.map((room, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea onClick={() => handleRoomClick(room)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={room.imageUrls[0]} // Assuming there is an imageUrl property in your room object
                    alt={room.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {room.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {room.type} - Max Count: {room.maxCount}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        {selectedRoom && (
          <>
            {/* Use CardMedia for the larger image */}
            <CardMedia
              component="img"
              alt={selectedRoom.name}
              className={classes.largeImage}
              height="140"
              image={selectedRoom.imageUrls[0]} // Assuming there is an imageUrl property in your room object
            />

            {/* Room details */}
            <DialogTitle>{selectedRoom.name}</DialogTitle>
            <DialogContent>
              <Typography>
                Type: {selectedRoom.type}
              </Typography>
              <Typography>
                Max Count: {selectedRoom.maxCount}
              </Typography>
              <Typography>
                Phone Number: {selectedRoom.phoneNumber}
              </Typography>
              <Typography>
                Rent Per Day: {selectedRoom.rentPerDay}
              </Typography>
              {/* Add more details as needed */}
            </DialogContent>

            {/* Dialog actions */}
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
              <a href={`http://localhost:3000/rooms/${selectedRoom._id}`}><Button color="primary">
                Book Now 
              </Button></a>
            </DialogActions>
          </>
        )}
      </Dialog>

    </div>
  );
};

export default RoomsList;
