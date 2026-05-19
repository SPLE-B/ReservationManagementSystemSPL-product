
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const PaymentTable = ({ 
    paymentListData}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (paymentItem) => {
    isMobile() && navigate(`/payment/:idPayment`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[paymentListData]}
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
  ]}
        itemsEvents={(paymentItem) => [
          <Link to={`/payment/:idPayment`}>
            <Button
              id="_HzNg4EzSEfGZ4ZceE57zww"
              size="sm"
              variant=
                  "primary"
            >
              Detail Payment
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default PaymentTable;
