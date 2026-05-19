
import React from 'react';
import TableDynamicPage from './containers/TableDynamicPage'
import ModifiedViewContainer from './containers/ModifiedViewContainer'

const dynamicRoutes = [
{ 
    path: "/dynamic",
    element: <TableDynamicPage />,
  }	
,
{ 
    path: "/dynamic/tambah",
    element: <ModifiedViewContainer />,
  }	

]

export default dynamicRoutes
