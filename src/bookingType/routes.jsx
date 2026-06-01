
import React from 'react';
import TableBookingTypePage from './containers/TableBookingTypePage'
import DetailBookingTypePage from './containers/DetailBookingTypePage'
import AddBookingTypePage from './containers/AddBookingTypePage'
import EditBookingTypePage from './containers/EditBookingTypePage'

const bookingTypeRoutes = [
{ 
    path: "/booking",
    element: <TableBookingTypePage />,
  }	
,
{ 
    path: "/booking/add",
    element: <AddBookingTypePage />,
  }	
,
{ 
    path: "/booking/edit/:idBooking",
    element: <EditBookingTypePage />,
  }	
,
{ 
    path: "/booking/:idBooking",
    element: <DetailBookingTypePage />,
  }	

]

export default bookingTypeRoutes
