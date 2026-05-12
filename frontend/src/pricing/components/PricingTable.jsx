
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const PricingTable = ({ listPricing,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listPricing]}
  	  itemsAttrs={[
          {
            id: "idResource",
            condition: "",
            label: "Id Resource",
            featureName: "idResource",
            editable: false
          }
  ,        {
            id: "basePrice",
            condition: "",
            label: "Base Price",
            featureName: "basePrice",
            editable: false
          }
  ,        {
            id: "idPricing",
            condition: "",
            label: "Id Pricing",
            featureName: "idPricing",
            editable: false
          }
  ]}
        itemsEvents={(pricingItem) => [
          <Link to={`/pricing/update/${pricingItem.idPricing}`}>
            <Button
              id="_FRmeMExuEfGmhuROO-RZsA"
              size="sm"
              variant=
                  "primary"
            >
              Update Pricing
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default PricingTable;
