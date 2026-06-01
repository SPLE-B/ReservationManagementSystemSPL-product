
import React from 'react';
import TableDailyPage from './containers/TableDailyPage'
import DetailDailyPage from './containers/DetailDailyPage'
import AddDailyPage from './containers/AddDailyPage'
import EditDailyPage from './containers/EditDailyPage'

const dailyRoutes = [
{ 
    path: "/booking",
    element: <TableDailyPage />,
  }	
,
{ 
    path: "/booking/:idBooking",
    element: <DetailDailyPage />,
  }	
,
{ 
    path: "/booking/add",
    element: <AddDailyPage />,
  }	
,
{ 
    path: "/booking/edit/:idBooking",
    element: <EditDailyPage />,
  }	

]

export default dailyRoutes
