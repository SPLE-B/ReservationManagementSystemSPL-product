
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
import updateBookingType from '../services/updateBookingType'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateBookingTypeForm = ({ 
	bookingDetailData
, 	resourceListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: bookingDetailData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateBookingType({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/booking/${bookingDetailData.idBooking}`)
  	notifySuccess(`Update BookingType berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update BookingType Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
	,	  ]}
	
		  formFields={[
	
	      <Controller
	        key="totalPrice"
	        name="totalPrice"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Total Price"
	          placeholder="Masukkan total price"
	          defaultValue={bookingDetailData.totalPrice}
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
	          label="Booking Status"
	          placeholder="Masukkan booking status"
	          defaultValue={bookingDetailData.statusBooking}
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
	          defaultValue={bookingDetailData.bookingDate}
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
	          
	          label="Resource"
	          options={resourceListData}
	          optionKey="idBooking"
	          optionLabel="name"
	          placeholder="Masukkan resource"
	          fieldState={fieldState}
	          defaultValue={bookingDetailData.idBooking}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_HbCKgExbEfGt54WqW4PGnA" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdateBookingTypeForm
