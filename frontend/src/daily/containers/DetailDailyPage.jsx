import React, { useEffect, useState, useContext } from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailDaily from '../components/DetailDaily'
import getDetailDaily from '../services/getDetailDaily'

const DetailDailyPage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
    detailDaily: false,
  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Daily Page")
  }, []);


  const [detailDaily, setDetailDaily] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({...prev, detailDaily: true}))
        const response = await getDetailDaily({ idBooking })
        if (response && response.data) {
          setDetailDaily(response.data.data)
        }
      } catch (err) {
        console.error("Gagal fetch detail daily:", err)
      } finally {
        setIsLoading(prev => ({...prev, detailDaily: false}))
      }
    }
    fetchData()
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
      <Layouts.DetailContainerLayout
        title={"Detail Daily"}
        singularName={"Daily"}
        items={{...detailDaily}}
        isLoading={isLoading.detailDaily}
        isCorrelatedWithAnotherComponent={false}
      >
        <DetailDaily {...{ data: { ...detailDaily } }} />
      </Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  )
}
export default DetailDailyPage
