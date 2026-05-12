
import React from 'react';
import BookingPage from './containers/BookingPage'
import AddBookingPage from './containers/AddBookingPage'
import DetailBookingPage from './containers/DetailBookingPage'
import UpdateBookingPage from './containers/UpdateBookingPage'

const bookingTypeRoutes = [
{ 
    path: "/booking",
    element: <BookingPage />,
  }	
,
{ 
    path: "/booking/add",
    element: <AddBookingPage />,
  }	
,
{ 
    path: "/booking/update",
    element: <UpdateBookingPage />,
  }	
,
{ 
    path: "/booking/:idBooking",
    element: <DetailBookingPage />,
  }	

]

export default bookingTypeRoutes
