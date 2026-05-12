
import React from 'react';
import PaymentPage from './containers/PaymentPage'
import AddPaymentPage from './containers/AddPaymentPage'
import DetailPaymentPage from './containers/DetailPaymentPage'
import UpdatePaymentPage from './containers/UpdatePaymentPage'

const paymentRoutes = [
{ 
    path: "/payment",
    element: <PaymentPage />,
  }	
,
{ 
    path: "/payment/add",
    element: <AddPaymentPage />,
  }	
,
{ 
    path: "/payment/update",
    element: <UpdatePaymentPage />,
  }	
,
{ 
    path: "/payment/:idPayment",
    element: <DetailPaymentPage />,
  }	

]

export default paymentRoutes
