
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const ResourceTable = ({ 
    listResource}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (resourceItem) => {
    isMobile() && navigate(`/resource/${resourceItem.idResource}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listResource]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "idresource",
            condition: "",
            label: "Idresource",
            featureName: "idResource",
            editable: false
          }
  ,        {
            id: "name",
            condition: "",
            label: "Name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "typeresource",
            condition: "",
            label: "Typeresource",
            featureName: "typeResource",
            editable: false
          }
  ]}
        itemsEvents={(resourceItem) => [
          <Link to={`/resource/${resourceItem.idResource}`}>
            <Button
              id="_NlP4-V2REfGjCoBCLIsS7g"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
  ,
          <Link to={`/resource/edit/${resourceItem.idResource}`}>
    <Button
      id="_NlP5GV2REfGjCoBCLIsS7g"
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

export default ResourceTable;
