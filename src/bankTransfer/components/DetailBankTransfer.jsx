
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteBankTransfer from '../services/deleteBankTransfer'
import * as Layouts from "@/commons/layouts";

const DetailBankTransfer = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusBankTransfer, setShowModalKonfirmasiHapusBankTransfer] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteBankTransfer({
        idPayment: data.idPayment,
        idPayment: data.idPayment,
      });
      navigate('/banktransfer');
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
                  id: "namaBankAsal",
                  condition: "",
                  label: "Nama Bank Asal",
                  featureName: "namaBankAsal",
                }
        ,        {
                  id: "nomorRekeningAsal",
                  condition: "",
                  label: "Nomor Rekening Asal",
                  featureName: "noRekAsal",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_hp8Mxl2FEfGjCoBCLIsS7g"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusBankTransfer(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusBankTransfer}
           title={"Konfirmasi Hapus BankTransfer"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusBankTransfer(false)}>Batal</Button></Link>
          <Button
            id="_hp8MzV2FEfGjCoBCLIsS7g"
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

export default DetailBankTransfer;
