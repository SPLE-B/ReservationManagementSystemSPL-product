
import React from 'react';
import TableCancellationPaidPage from './containers/TableCancellationPaidPage'
import AddCancellationPaidPage from './containers/AddCancellationPaidPage'

const cancellationPaidRoutes = [
{ 
    path: "/cancellation",
    element: <TableCancellationPaidPage />,
  }	
,
{ 
    path: "/cancellation/add",
    element: <AddCancellationPaidPage />,
  }	

]

export default cancellationPaidRoutes
