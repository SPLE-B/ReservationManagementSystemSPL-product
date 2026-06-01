
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
import updateMerchant from '../services/updateMerchant'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormEditMerchant = ({ 
	merchantData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({defaultValues: merchantData})
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateMerchant({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/merchant`)
  	notifySuccess(`Update Merchant berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Merchant" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="amount"
	        name="amount"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Amount"
	          placeholder="Masukkan amount"
	          defaultValue={merchantData?.amount}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="statusPayment"
	        name="statusPayment"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Status Payment"
	          placeholder="Masukkan status payment"
	          defaultValue={merchantData?.statusPayment}
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
	          defaultValue={merchantData?.metodePayment}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="namaMerchant"
	        name="namaMerchant"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Nama Merchant"
	          placeholder="Masukkan nama merchant"
	          defaultValue={merchantData?.namaMerchant}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_hlDsxF2FEfGjCoBCLIsS7g" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormEditMerchant
