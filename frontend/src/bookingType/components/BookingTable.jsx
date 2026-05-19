
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const BookingTable = ({ 
    bookingListData}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (bookingItem) => {
    isMobile() && navigate(`/booking/${bookingItem.idBooking}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[bookingListData]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "bookingId",
            condition: "",
            label: "Booking Id",
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
            id: "bookingStatus",
            condition: "",
            label: "Booking Status",
            featureName: "statusBooking",
            editable: false
          }
  ]}
        itemsEvents={(bookingItem) => [
          <Link to={`/booking/${bookingItem.idBooking}`}>
            <Button
              id="_Huj1YExZEfGt54WqW4PGnA"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default BookingTable;
