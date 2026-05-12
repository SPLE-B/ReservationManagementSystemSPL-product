
import React from 'react';
import NotificationPage from './containers/NotificationPage'
import AddNotificationPage from './containers/AddNotificationPage'

const notificationRoutes = [
{ 
    path: "/notification",
    element: <NotificationPage />,
  }	
,
{ 
    path: "/notification/add",
    element: <AddNotificationPage />,
  }	

]

export default notificationRoutes
