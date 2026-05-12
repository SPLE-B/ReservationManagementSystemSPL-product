
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

const FormForm = ({ 
	bookingListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
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
		  title="Form" 
		  onSubmit={handleSubmit(save)}
	
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
	          label="CancelledAt"
	          placeholder="Masukkan cancelledat"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
	
	      <Controller
	        key="idBooking"
	        name="idBooking"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Booking"
	          options={bookingListData}
	          optionKey="idBooking"
	          optionLabel="idBooking"
	          placeholder="Masukkan booking"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_KnwA4EzZEfGZ4ZceE57zww" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormForm
