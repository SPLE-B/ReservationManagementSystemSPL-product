
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const BankTransferTable = ({ 
    banktransfer}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (bankTransferItem) => {
    isMobile() && navigate(`/banktransfer/${bankTransferItem.idPayment}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[banktransfer]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "idPayment",
            condition: "",
            label: "Id Payment",
            featureName: "idPayment",
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
            id: "statusPayment",
            condition: "",
            label: "Status Payment",
            featureName: "statusPayment",
            editable: false
          }
  ,        {
            id: "metodePayment",
            condition: "",
            label: "Metode Payment",
            featureName: "metodePayment",
            editable: false
          }
  ]}
        itemsEvents={(bankTransferItem) => [
          <Link to={`/banktransfer/${bankTransferItem.idPayment}`}>
            <Button
              id="_hp2GJF2FEfGjCoBCLIsS7g"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/banktransfer/edit/${bankTransferItem.idPayment}`}>
    <Button
      id="_hp2GK12FEfGjCoBCLIsS7g"
      size="sm"
      variant=
          "primary"
    >
      Edit
    </Button>
  </Link>
        ]}
  	/>
  </>
  )
};

export default BankTransferTable;
