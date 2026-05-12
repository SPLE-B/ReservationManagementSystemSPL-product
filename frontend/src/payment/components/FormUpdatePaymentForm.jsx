
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
import updatePayment from '../services/updatePayment'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdatePaymentForm = ({ 
	paymentDetailData
, 	bookingListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: paymentDetailData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updatePayment({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/payment/${paymentDetailData.idPayment}`)
  	notifySuccess(`Update Payment berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Payment Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
	,	  ]}
	
		  formFields={[
	
	      <Controller
	        key="statusPayment"
	        name="statusPayment"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Status Payment"
	          placeholder="Masukkan status payment"
	          defaultValue={paymentDetailData.statusPayment}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="metodePayment"
	        name="metodePayment"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Metode Payment"
	          placeholder="Masukkan metode payment"
	          defaultValue={paymentDetailData.metodePayment}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="amount"
	        name="amount"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Amount"
	          placeholder="Masukkan amount"
	          defaultValue={paymentDetailData.amount}
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
	          defaultValue={paymentDetailData.idBooking}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_4ywHgEzTEfGZ4ZceE57zww" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdatePaymentForm
