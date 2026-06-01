
import React from 'react';
import TableEmailPage from './containers/TableEmailPage'
import AddEmailPage from './containers/AddEmailPage'

const emailRoutes = [
{ 
    path: "/notification",
    element: <TableEmailPage />,
  }	
,
{ 
    path: "/notification/add",
    element: <AddEmailPage />,
  }	

]

export default emailRoutes
