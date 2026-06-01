
import React from 'react';
import TableNotificationPage from './containers/TableNotificationPage'
import AddNotificationPage from './containers/AddNotificationPage'
import EditNotificationPage from './containers/EditNotificationPage'

const notificationRoutes = [
{ 
    path: "/notification",
    element: <TableNotificationPage />,
  }	
,
{ 
    path: "/notification/add",
    element: <AddNotificationPage />,
  }	
,
{ 
    path: "/notification/edit/:idNotification",
    element: <EditNotificationPage />,
  }	

]

export default notificationRoutes
