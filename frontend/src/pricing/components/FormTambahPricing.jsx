
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
import savePricing from '../services/savePricing'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahPricing = ({ 
	resourceListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    savePricing({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/pricing`)
  	notifySuccess(`Save Pricing berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Pricing" 
		  onSubmit={handleSubmit(tambah)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="basePrice"
	        name="basePrice"
	        control={control}
	        rules={{ required: "Harap masukkan base price" }} 
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Base Price"
	          placeholder="Masukkan base price"
	          type="number"
	          fieldState={fieldState}
	          {...field}
	          isRequired={true}
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
		    <Button id="_QXLdwExpEfGmhuROO-RZsA" key="Tambah" type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormTambahPricing
