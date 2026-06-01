
import React from 'react';
import TablePricingPage from './containers/TablePricingPage'
import AddPricingPage from './containers/AddPricingPage'
import EditPricingPage from './containers/EditPricingPage'

const pricingRoutes = [
{ 
    path: "/pricing",
    element: <TablePricingPage />,
  }	
,
{ 
    path: "/pricing/add",
    element: <AddPricingPage />,
  }	
,
{ 
    path: "/pricing/edit/:idPricing",
    element: <EditPricingPage />,
  }	

]

export default pricingRoutes
