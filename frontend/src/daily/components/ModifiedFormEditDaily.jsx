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
import updateDaily from '../services/updateDaily'
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormEditDaily = ({
  dailyData,
  idBooking
}) => {
  // FIX: pakai defaultValues supaya form keisi data existing
  const {
    control,
    handleSubmit,
  } = useForm({ defaultValues: dailyData })

  const navigate = useNavigate()

  const submit = (data) => {
    const cleanData = cleanFormData(data)
    updateDaily({
      ...cleanData,
      // FIX: include idBooking di payload supaya backend tau record mana yang di-update
      idBooking: String(idBooking),
    })
      .then(() => {
        navigate(`/booking`)
        notifySuccess(`Update Daily berhasil!`);
      })
      .catch((error) => {
        console.error(error);
        // notifyError udah dipanggil di service, ga perlu di sini lagi
      });
  }

  return (
    <div>
      <Layouts.FormComponentLayout
        title="Edit Daily"
        onSubmit={handleSubmit(submit)}
        vas={[]}
        formFields={[
          <Controller
            key="bookingDate"
            name="bookingDate"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Booking Date"
                placeholder="Masukkan booking date"
                defaultValue={dailyData?.bookingDate}
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          <Controller
            key="statusBooking"
            name="statusBooking"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Status Booking"
                placeholder="Masukkan status booking"
                defaultValue={dailyData?.statusBooking}
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          <Controller
            key="totalPrice"
            name="totalPrice"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Total Price"
                placeholder="Masukkan total price"
                defaultValue={dailyData?.totalPrice}
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          <Controller
            key="jumlahHari"
            name="jumlahHari"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="Jumlah Hari"
                placeholder="Masukkan jumlah hari"
                defaultValue={dailyData?.jumlahHari}
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="Submit" type="submit" variant="primary">Submit</Button>
        ]}
      />
    </div>
  )
}

export default ModifiedFormEditDaily
