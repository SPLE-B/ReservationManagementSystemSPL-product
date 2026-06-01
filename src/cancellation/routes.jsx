
import React from 'react';
import TableCancellationPage from './containers/TableCancellationPage'
import AddCancellationPage from './containers/AddCancellationPage'
import EditCancellationPage from './containers/EditCancellationPage'

const cancellationRoutes = [
{ 
    path: "/cancellation",
    element: <TableCancellationPage />,
  }	
,
{ 
    path: "/cancellation/add",
    element: <AddCancellationPage />,
  }	
,
{ 
    path: "/cancellation/edit/:idCancellation",
    element: <EditCancellationPage />,
  }	

]

export default cancellationRoutes
