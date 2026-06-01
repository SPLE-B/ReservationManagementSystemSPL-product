
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
import updateCancellation from '../services/updateCancellation'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditCancellation = ({ 
	cancellationData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateCancellation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/cancellation`)
  	notifySuccess(`Update Cancellation berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Cancellation" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="reason"
	        name="reason"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Reason"
	          placeholder="Masukkan reason"          defaultValue={cancellationData?.reason}	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="cancelledAt"
	        name="cancelledAt"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Cancelledat"
	          placeholder="Masukkan cancelledat"          defaultValue={cancellationData?.cancelledAt}	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_D-Lc7l2sEfGvmuzulXFRIA" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditCancellation
