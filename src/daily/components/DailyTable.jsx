
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const DailyTable = ({ 
    daily}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (dailyItem) => {
    isMobile() && navigate(`/booking/${dailyItem.idBooking}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[daily]}
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
        itemsEvents={(dailyItem) => [
          <Link to={`/booking/${dailyItem.idBooking}`}>
            <Button
              id="_huxpdF2FEfGjCoBCLIsS7g"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/booking/edit/${dailyItem.idBooking}`}>
    <Button
      id="_huxpe12FEfGjCoBCLIsS7g"
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

export default DailyTable;
