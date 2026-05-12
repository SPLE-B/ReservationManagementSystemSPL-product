
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
import saveBookingType from '../services/saveBookingType'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddBookingTypeForm = ({ 
	resourceListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveBookingType({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/booking`)
  	notifySuccess(`Save BookingType berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add BookingType Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="totalPrice"
	        name="totalPrice"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Total Price"
	          placeholder="Masukkan total price"
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
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="bookingDate"
	        name="bookingDate"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Booking Date"
	          placeholder="Masukkan booking date"
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
	        <SelectionField
	          
	          label="Resource"
	          options={resourceListData}
	          optionKey="idResource"
	          optionLabel="name"
	          placeholder="Masukkan resource"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_wV3bMExZEfGt54WqW4PGnA" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddBookingTypeForm
