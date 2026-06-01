
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
import saveDynamic from '../services/saveDynamic'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddDynamic = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveDynamic({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/pricing`)
  	notifySuccess(`Save Dynamic berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Dynamic" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="basePrice"
	        name="basePrice"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Baseprice"
	          placeholder="Masukkan baseprice"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="idResource"
	        name="idResource"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Idresource"
	          placeholder="Masukkan idresource"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="peakPercentage"
	        name="peakPercentage"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Peak Percentage"
	          placeholder="Masukkan peak percentage"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_ENC_Nl2sEfGvmuzulXFRIA" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddDynamic
