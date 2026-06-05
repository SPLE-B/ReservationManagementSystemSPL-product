
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const PricingTable = ({ 
    listPricing}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listPricing]}
  	  itemsAttrs={[
          {
            id: "idpricing",
            condition: "",
            label: "Idpricing",
            featureName: "idPricing",
            editable: false
          }
  ,        {
            id: "baseprice",
            condition: "isCurrency",
            label: "Baseprice",
            featureName: "basePrice",
            editable: false
          }
  ,        {
            id: "idresource",
            condition: "",
            label: "Idresource",
            featureName: "idResource",
            editable: false
          }
  ,        {
            id: "peakpercentage",
            condition: "",
            label: "Peakpercentage",
            featureName: "peakPercentage",
            editable: false
          }
  ]}
        itemsEvents={(pricingItem) => [
          <Link to={`/pricing/edit/${pricingItem.idPricing}`}>
            <Button
              id="_DvlAOV2sEfGvmuzulXFRIA"
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

export default PricingTable;
