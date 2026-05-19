
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const CancellationTable = ({ 
    cancellationListData}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[cancellationListData]}
  	  itemsAttrs={[
          {
            id: "idCancellation",
            condition: "",
            label: "Id Cancellation",
            featureName: "idCancellation",
            editable: false
          }
  ,        {
            id: "idBooking",
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
            id: "cancelledAt",
            condition: "",
            label: "CancelledAt",
            featureName: "cancelledAt",
            editable: false
          }
  ]}
        itemsEvents={(cancellationItem) => [
          
        ]}
  	/>
  </>
  )
};

export default CancellationTable;
