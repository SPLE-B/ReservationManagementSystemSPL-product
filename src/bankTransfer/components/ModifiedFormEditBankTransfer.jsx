
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
import updateBankTransfer from '../services/updateBankTransfer'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormEditBankTransfer = ({ 
	bankTransferData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({defaultValues: bankTransferData})
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateBankTransfer({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/banktransfer`)
  	notifySuccess(`Update BankTransfer berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit BankTransfer" 
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
	          defaultValue={bankTransferData?.amount}
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
	          defaultValue={bankTransferData?.statusPayment}
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
	          defaultValue={bankTransferData?.metodePayment}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="namaBankAsal"
	        name="namaBankAsal"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Nama Bank Asal"
	          placeholder="Masukkan nama bank asal"
	          defaultValue={bankTransferData?.namaBankAsal}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="noRekAsal"
	        name="noRekAsal"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Nomor Rekening Asal"
	          placeholder="Masukkan nomor rekening asal"
	          defaultValue={bankTransferData?.noRekAsal}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_hp9a6V2FEfGjCoBCLIsS7g" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormEditBankTransfer
