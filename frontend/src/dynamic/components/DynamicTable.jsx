
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const DynamicTable = ({ 
    listPricing,     listDynamic}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listPricing, listDynamic]}
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
            id: "peakPercentage",
            condition: "",
            label: "Peak Pecentage",
            featureName: "peakPercentage",
            editable: false
          }
  ,        {
            id: "idPricing",
            condition: "",
            label: "Id Pricing",
            featureName: "idPricing",
            editable: false
          }
  ,
  ]}
  	/>
  </>
  )
};

export default DynamicTable;
