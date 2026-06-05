
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
import saveCancellationPaid from '../services/saveCancellationPaid'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddCancellationPaid = ({ 
	bookingListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveCancellationPaid({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/cancellation`)
  	notifySuccess(`Save CancellationPaid berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add CancellationPaid" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
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
	          label="Cancelled at"
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
	          label="Refund Amount"
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
	          label="Penalty Fee"
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
		    <Button id="_EvY3Ql2sEfGvmuzulXFRIA" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddCancellationPaid
