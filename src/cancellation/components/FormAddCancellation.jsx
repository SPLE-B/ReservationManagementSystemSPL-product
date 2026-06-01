
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
import saveCancellation from '../services/saveCancellation'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddCancellation = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveCancellation({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/cancellation`)
  	notifySuccess(`Save Cancellation berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Cancellation" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="idBooking"
	        name="idBooking"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Idbooking"
	          placeholder="Masukkan idbooking"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="reason"
	        name="reason"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Reason"
	          placeholder="Masukkan reason"
	          fieldState={fieldState}
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
	          placeholder="Masukkan cancelledat"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="refundAmount"
	        name="refundAmount"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Refundamount"
	          placeholder="Masukkan refundamount"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="penaltyFee"
	        name="penaltyFee"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Penaltyfee"
	          placeholder="Masukkan penaltyfee"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_D-Lc4V2sEfGvmuzulXFRIA" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddCancellation
