
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteResource from '../services/deleteResource'
import * as Layouts from "@/commons/layouts";

const DetailResource = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusResource, setShowModalKonfirmasiHapusResource] = React.useState(false); 
  
    const konfirmasi = async () => {
      await deleteResource({
        idResource: data.idResource,
      });
      navigate('/resource');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "idresource",
                  condition: "",
                  label: "Id Resource",
                  featureName: "idResource",
                }
        ,        {
                  id: "name",
                  condition: "",
                  label: "Name",
                  featureName: "name",
                }
        ,        {
                  id: "typeresource",
                  condition: "",
                  label: "Type Resource",
                  featureName: "typeResource",
                }
        ,        {
                  id: "location",
                  condition: "",
                  label: "Location",
                  featureName: "location",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_NlP4_V2REfGjCoBCLIsS7g"
            variant="secondary"
            onClick={() => setShowModalKonfirmasiHapusResource(true)}
          >
            Delete
          </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusResource}
           title={"Konfirmasi Hapus Resource"}
        >
           <Link to=''><Button id="batal" variant="tertiary" onClick={() => setShowModalKonfirmasiHapusResource(false)}>Batal</Button></Link>
          <Button
            id="_NlP5Al2REfGjCoBCLIsS7g"
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

export default DetailResource;
