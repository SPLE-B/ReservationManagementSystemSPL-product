
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const BookingTypeTable = ({ 
    listBookingType}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (bookingTypeItem) => {
    isMobile() && navigate(`/booking/${bookingTypeItem.idBooking}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listBookingType]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "idBooking",
            condition: "",
            label: "Id Booking",
            featureName: "idBooking",
            editable: false
          }
  ,        {
            id: "bookingDate",
            condition: "",
            label: "Booking Date",
            featureName: "bookingDate",
            editable: false
          }
  ,        {
            id: "statusBooking",
            condition: "",
            label: "Status Booking",
            featureName: "statusBooking",
            editable: false
          }
  ,        {
            id: "idResource",
            condition: "",
            label: "Id Resource",
            featureName: "idResource",
            editable: false
          }
  ]}
        itemsEvents={(bookingTypeItem) => [
          <Link to={`/booking/${bookingTypeItem.idBooking}`}>
            <Button
              id="_hZ9QCF2FEfGjCoBCLIsS7g"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/booking/edit/${bookingTypeItem.idBooking}`}>
    <Button
      id="_hZ9QKF2FEfGjCoBCLIsS7g"
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

export default BookingTypeTable;
