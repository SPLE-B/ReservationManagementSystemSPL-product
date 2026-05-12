
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import deleteBookingType from '../services/deleteBookingType'

import * as Layouts from "@/commons/layouts";

const DetailBooking = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const remove = async () => {
      await deleteBookingType({
        idBooking: data.idBooking,
      });
  	navigate('/booking');
    }
    const detail = async () => {
      navigate(
        '/booking/update?'
        + `idBooking=${data.idBooking}`
        
      );
    };
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "bookingId",
                  condition: "",
                  label: "Booking Id",
                  featureName: "idBooking",
                }
        ,        {
                  id: "bookingStatus",
                  condition: "",
                  label: "Booking Status",
                  featureName: "statusBooking",
                }
        ,        {
                  id: "bookingDate",
                  condition: "",
                  label: "Booking Date",
                  featureName: "bookingDate",
                }
        ,        {
                  id: "totalPrice",
                  condition: "isCurrency",
                  label: "Total Price",
                  featureName: "totalPrice",
                }
        ,        {
                  id: "createdAt",
                  condition: "",
                  label: "Created At",
                  featureName: "createdAt",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_fgrKQExaEfGt54WqW4PGnA"
            variant="secondary"
            onClick={() => remove()}
          >
            Remove
          </Button>
        ,
          <Button
          id="_0rQRoExaEfGt54WqW4PGnA"
          variant="secondary"
          onClick={() => detail()}
        >
          Detail
        </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailBooking;
