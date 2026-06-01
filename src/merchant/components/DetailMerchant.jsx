
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteMerchant from '../services/deleteMerchant'
import * as Layouts from "@/commons/layouts";

const DetailMerchant = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusMerchant, setShowModalKonfirmasiHapusMerchant] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteMerchant({
        idPayment: data.idPayment,
        idPayment: data.idPayment,
      });
      navigate('/merchant');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "idpayment",
                  condition: "",
                  label: "Idpayment",
                  featureName: "idPayment",
                }
        ,        {
                  id: "idbooking",
                  condition: "",
                  label: "Idbooking",
                  featureName: "idBooking",
                }
        ,        {
                  id: "amount",
                  condition: "",
                  label: "Amount",
                  featureName: "amount",
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
                  id: "namaMerchant",
                  condition: "",
                  label: "Nama Merchant",
                  featureName: "namaMerchant",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_hk9mJl2FEfGjCoBCLIsS7g"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusMerchant(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusMerchant}
           title={"Konfirmasi Hapus Merchant"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusMerchant(false)}>Batal</Button></Link>
          <Button
            id="_hk9mLV2FEfGjCoBCLIsS7g"
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

export default DetailMerchant;
