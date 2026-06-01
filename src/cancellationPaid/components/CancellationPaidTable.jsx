
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const CancellationPaidTable = ({ 
    cancellationpaid}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[cancellationpaid]}
  	  itemsAttrs={[
          {
            id: "idcancellation",
            condition: "",
            label: "Id Cancellation",
            featureName: "idCancellation",
            editable: false
          }
  ,        {
            id: "idbooking",
            condition: "",
            label: "Id Booking",
            featureName: "idBooking",
            editable: false
          }
  ,        {
            id: "reason",
            condition: "",
            label: "Reason",
            featureName: "reason",
            editable: false
          }
  ,        {
            id: "cancelledat",
            condition: "",
            label: "Cancelled At",
            featureName: "cancelledAt",
            editable: false
          }
  ,        {
            id: "refundamount",
            condition: "",
            label: "Refund Amount",
            featureName: "refundAmount",
            editable: false
          }
  ,        {
            id: "penaltyfee",
            condition: "",
            label: "Penalty Fee",
            featureName: "penaltyFee",
            editable: false
          }
  ]}
        itemsEvents={(cancellationPaidItem) => [
          
        ]}
  	/>
  </>
  )
};

export default CancellationPaidTable;
