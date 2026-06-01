
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const MerchantTable = ({ 
    merchant}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (merchantItem) => {
    isMobile() && navigate(`/merchant/${merchantItem.idPayment}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[merchant]}
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
        itemsEvents={(merchantItem) => [
          <Link to={`/merchant/${merchantItem.idPayment}`}>
            <Button
              id="_hk4GlF2FEfGjCoBCLIsS7g"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/merchant/edit/${merchantItem.idPayment}`}>
    <Button
      id="_hk4Gm12FEfGjCoBCLIsS7g"
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

export default MerchantTable;
