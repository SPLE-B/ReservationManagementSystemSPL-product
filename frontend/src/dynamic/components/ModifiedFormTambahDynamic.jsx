
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
import saveDynamic from '../services/saveDynamic'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahDynamic = ({ 
	resourceListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveDynamic({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/dynamic`)
  	notifySuccess(`Save Dynamic berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Dynamic" 
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
	        key="peakPercentage"
	        name="peakPercentage"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Peak Percentage"
	          placeholder="Masukkan peak percentage"
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
		    <Button id="_lo4A8FOUEfGjHoMHANB8Xw" key="Tambah" type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormTambahDynamic
