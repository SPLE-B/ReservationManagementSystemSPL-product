
import React from 'react';
import TableBankTransferPage from './containers/TableBankTransferPage'
import DetailBankTransferPage from './containers/DetailBankTransferPage'
import AddBankTransferPage from './containers/AddBankTransferPage'
import EditBankTransferPage from './containers/EditBankTransferPage'

const bankTransferRoutes = [
{ 
    path: "/banktransfer",
    element: <TableBankTransferPage />,
  }	
,
{ 
    path: "/banktransfer/:idPayment",
    element: <DetailBankTransferPage />,
  }	
,
{ 
    path: "/banktransfer/add",
    element: <AddBankTransferPage />,
  }	
,
{ 
    path: "/banktransfer/edit/:idPayment",
    element: <EditBankTransferPage />,
  }	

]

export default bankTransferRoutes
