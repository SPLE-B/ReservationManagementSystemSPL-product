
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
import updateSessionBased from '../services/updateSessionBased'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormEditSessionBased = ({ 
	sessionBasedData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm( { defaultValues: sessionBasedData } )
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateSessionBased({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/booking`)
  	notifySuccess(`Update SessionBased berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit SessionBased" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="bookingDate"
	        name="bookingDate"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Booking Date"
	          placeholder="Masukkan booking date"          
			  defaultValue={sessionBasedData?.bookingDate}	          
			  fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="statusBooking"
	        name="statusBooking"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Status Booking"
	          placeholder="Masukkan status booking"          
			  defaultValue={sessionBasedData?.statusBooking}	          
			  fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="totalPrice"
	        name="totalPrice"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Total Price"
	          placeholder="Masukkan total price"          
			  defaultValue={sessionBasedData?.totalPrice}	          
			  fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="jamMulai"
	        name="jamMulai"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Jam Mulai"
	          placeholder="Masukkan jam mulai"          
			  defaultValue={sessionBasedData?.jamMulai}	          
			  fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="jamSelesai"
	        name="jamSelesai"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Jam Selesai"
	          placeholder="Masukkan jam selesai"          
			  defaultValue={sessionBasedData?.jamSelesai}	          
			  fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_h0U3112FEfGjCoBCLIsS7g" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormEditSessionBased
