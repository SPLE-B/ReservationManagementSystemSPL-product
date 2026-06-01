
import React from 'react';
import TableMerchantPage from './containers/TableMerchantPage'
import DetailMerchantPage from './containers/DetailMerchantPage'
import AddMerchantPage from './containers/AddMerchantPage'
import EditMerchantPage from './containers/EditMerchantPage'

const merchantRoutes = [
{ 
    path: "/merchant",
    element: <TableMerchantPage />,
  }	
,
{ 
    path: "/merchant/:idPayment",
    element: <DetailMerchantPage />,
  }	
,
{ 
    path: "/merchant/add",
    element: <AddMerchantPage />,
  }	
,
{ 
    path: "/merchant/edit/:idPayment",
    element: <EditMerchantPage />,
  }	

]

export default merchantRoutes
