
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteBookingType from '../services/deleteBookingType'
import * as Layouts from "@/commons/layouts";

const DetailBookingType = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusBookingType, setShowModalKonfirmasiHapusBookingType] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteBookingType({
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
        ,        {
                  id: "jumlahHari",
                  condition: "",
                  label: "Jumlah Hari",
                  featureName: "jumlahHari",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_hZ9QDF2FEfGjCoBCLIsS7g"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusBookingType(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusBookingType}
           title={"Konfirmasi Hapus BookingType"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusBookingType(false)}>Batal</Button></Link>
          <Button
            id="_hZ9QEV2FEfGjCoBCLIsS7g"
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

export default DetailBookingType;
