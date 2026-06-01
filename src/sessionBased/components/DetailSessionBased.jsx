
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteSessionBased from '../services/deleteSessionBased'
import * as Layouts from "@/commons/layouts";

const DetailSessionBased = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusSessionBased, setShowModalKonfirmasiHapusSessionBased] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteSessionBased({
        idBooking: data.idBooking,
        idBooking: data.idBooking,
      });
      navigate('/booking');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "idBooking",
                  condition: "",
                  label: "Id Booking",
                  featureName: "idBooking",
                }
        ,        {
                  id: "bookingDate",
                  condition: "",
                  label: "Booking Date",
                  featureName: "bookingDate",
                }
        ,        {
                  id: "statusBooking",
                  condition: "",
                  label: "Status Booking",
                  featureName: "statusBooking",
                }
        ,        {
                  id: "totalPrice",
                  condition: "",
                  label: "Total Price",
                  featureName: "totalPrice",
                }
        ,        {
                  id: "createdat",
                  condition: "",
                  label: "Createdat",
                  featureName: "createdAt",
                }
        ,        {
                  id: "idResource",
                  condition: "",
                  label: "Id Resource",
                  featureName: "idResource",
                }
        ,        {
                  id: "jamMulai",
                  condition: "",
                  label: "Jam Mulai",
                  featureName: "jamMulai",
                }
        ,        {
                  id: "jamSelesai",
                  condition: "",
                  label: "Jam Selesai",
                  featureName: "jamSelesai",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_h0TCpl2FEfGjCoBCLIsS7g"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusSessionBased(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusSessionBased}
           title={"Konfirmasi Hapus SessionBased"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusSessionBased(false)}>Batal</Button></Link>
          <Button
            id="_h0TCrV2FEfGjCoBCLIsS7g"
            variant="secondary"
            onClick={() => konfirmasi()}
          >
            Konfirmasi
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailSessionBased;
