
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const DetailPayment = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const updatePayment = async () => {
      navigate(
        '/payment/update?'
        + `idPayment=${data.idPayment}`
        
      );
    };
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "idPayment",
                  condition: "",
                  label: "Id Payment",
                  featureName: "idPayment",
                }
        ,        {
                  id: "idBooking",
                  condition: "",
                  label: "Id Booking",
                  featureName: "idBooking",
                }
        ,        {
                  id: "statusPayment",
                  condition: "",
                  label: "Status Payment",
                  featureName: "statusPayment",
                }
        ,        {
                  id: "metodePayment",
                  condition: "",
                  label: "Metode Payment",
                  featureName: "metodePayment",
                }
        ,        {
                  id: "amount",
                  condition: "isCurrency",
                  label: "Amount",
                  featureName: "amount",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_SixlcEzTEfGZ4ZceE57zww"
            variant="secondary"
            onClick={() => updatePayment()}
          >
            Update Payment
          </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailPayment;
