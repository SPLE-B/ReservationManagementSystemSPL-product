
import React from 'react';
import TableResourcePage from './containers/TableResourcePage'
import DetailResourcePage from './containers/DetailResourcePage'
import AddResourcePage from './containers/AddResourcePage'
import EditResourcePage from './containers/EditResourcePage'

const resourceRoutes = [
{ 
    path: "/resource",
    element: <TableResourcePage />,
  }	
,
{ 
    path: "/resource/add",
    element: <AddResourcePage />,
  }	
,
{ 
    path: "/resource/edit/:idResource",
    element: <EditResourcePage />,
  }	
,
{ 
    path: "/resource/:idResource",
    element: <DetailResourcePage />,
  }	

]

export default resourceRoutes
