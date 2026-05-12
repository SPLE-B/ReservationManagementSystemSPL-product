
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import updatePricing from '../services/updatePricing'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdatePricingForm = ({ 
	pricingData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: pricingData })
  
  
  
  
  const navigate = useNavigate()
  
  const update = (data) => {
    const cleanData = cleanFormData(data)
    updatePricing({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/pricing`)
  	notifySuccess(`Update Pricing berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Pricing Form" 
		  onSubmit={handleSubmit(update)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="idResource"
	        name="idResource"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Id Resource"
	          placeholder="Masukkan id resource"
	          type="number"
	          defaultValue={pricingData.idResource}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="basePrice"
	        name="basePrice"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Base Price"
	          placeholder="Masukkan base price"
	          type="number"
	          defaultValue={pricingData.basePrice}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_MD-fAExwEfGmhuROO-RZsA" key="Update" type="submit" variant="primary">Update</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdatePricingForm
