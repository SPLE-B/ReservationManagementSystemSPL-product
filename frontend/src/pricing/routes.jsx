
import React from 'react';
import TablePricingPage from './containers/TablePricingPage'
import TambahPricingPage from './containers/TambahPricingPage'
import UpdatePricingPage from './containers/UpdatePricingPage'

const pricingRoutes = [
{ 
    path: "/pricing",
    element: <TablePricingPage />,
  }	
,
{ 
    path: "/pricing/tambah",
    element: <TambahPricingPage />,
  }	
,
{ 
    path: "/pricing/update/:idPricing",
    element: <UpdatePricingPage />,
  }	

]

export default pricingRoutes
