import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditDaily from '../components/ModifiedFormEditDaily'
import getDailyData from '../services/getDailyData'

const EditDailyPage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
    editDaily: false,
  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Daily Page")
  }, []);


  const [dailyData, setDailyData] = useState()

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(prev => ({...prev, editDaily: true}))
        // FIX: pass idBooking ke service, sebelumnya kosong {}
        const response = await getDailyData({ idBooking })
        if (response && response.data) {
          setDailyData(response.data.data)
        }
      } catch (err) {
        console.error("Gagal fetch detail daily:", err)
      } finally {
        setIsLoading(prev => ({...prev, editDaily: false}))
      }
    }
    fetch()
  }, [idBooking])

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to="/booking">
              <Button className="p-4 w-full" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>
        </>
      }
    >
      <Layouts.FormContainerLayout
        singularName={"Daily"}
        isLoading={isLoading.editDaily}
      >
        {dailyData ?
          (<>
            <ModifiedFormEditDaily
              {...{
                dailyData,
                idBooking
              }}
            />
          </>) : (<></>)}
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  )
}
export default EditDailyPage
