
import React from 'react';
import CancellationPage from './containers/CancellationPage'
import AddCancellationPage from './containers/AddCancellationPage'

const cancellationRoutes = [
{ 
    path: "/cancellation",
    element: <CancellationPage />,
  }	
,
{ 
    path: "/cancellation/add",
    element: <AddCancellationPage />,
  }	

]

export default cancellationRoutes
