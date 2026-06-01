
import React from 'react';
import TableSessionBasedPage from './containers/TableSessionBasedPage'
import DetailSessionBasedPage from './containers/DetailSessionBasedPage'
import AddSessionBasedPage from './containers/AddSessionBasedPage'
import EditSessionBasedPage from './containers/EditSessionBasedPage'

const sessionBasedRoutes = [
{ 
    path: "/booking",
    element: <TableSessionBasedPage />,
  }	
,
{ 
    path: "/booking/:idBooking",
    element: <DetailSessionBasedPage />,
  }	
,
{ 
    path: "/booking/add",
    element: <AddSessionBasedPage />,
  }	
,
{ 
    path: "/booking/edit/:idBooking",
    element: <EditSessionBasedPage />,
  }	

]

export default sessionBasedRoutes
