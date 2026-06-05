
import React from 'react';
import TableDynamicPage from './containers/TableDynamicPage'
import AddDynamicPage from './containers/AddDynamicPage'

const dynamicRoutes = [
{ 
    path: "/pricing",
    element: <TableDynamicPage />,
  }	
,
{ 
    path: "/pricing/add",
    element: <AddDynamicPage />,
  }	

]

export default dynamicRoutes
