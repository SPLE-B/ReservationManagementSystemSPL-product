
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteDaily from '../services/deleteDaily'
import * as Layouts from "@/commons/layouts";

const DetailDaily = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusDaily, setShowModalKonfirmasiHapusDaily] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteDaily({
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
                  id: "jumlahHari",
                  condition: "",
                  label: "Jumlah Hari",
                  featureName: "jumlahHari",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_hu3JBl2FEfGjCoBCLIsS7g"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusDaily(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusDaily}
           title={"Konfirmasi Hapus Daily"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusDaily(false)}>Batal</Button></Link>
          <Button
            id="_hu3JDV2FEfGjCoBCLIsS7g"
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

export default DetailDaily;
