
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

const FormEditBookingType = ({ 
	bookingTypeData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateBookingType({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/booking`)
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
		  title="Edit BookingType" 
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
			  defaultValue={bookingTypeData.bookingDate}
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
			  defaultValue={bookingTypeData.statusBooking}
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
			  defaultValue={bookingTypeData.totalPrice}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="jumlahHari"
	        name="jumlahHari"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Jumlah Hari"
	          placeholder="Masukkan jumlah hari"
			  defaultValue={bookingTypeData.jumlahHari}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_hZ9QMF2FEfGjCoBCLIsS7g" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditBookingType
