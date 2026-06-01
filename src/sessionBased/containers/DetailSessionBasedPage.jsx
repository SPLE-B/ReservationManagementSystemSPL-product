
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailSessionBased from '../components/DetailSessionBased'
import getDetailSessionBased from '../services/getDetailSessionBased'

const DetailSessionBasedPage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailSessionBased: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail SessionBased Page")
  }, []);


const [detailSessionBased, setDetailSessionBased] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailSessionBased: true}))
				const { data: detailSessionBased } = await getDetailSessionBased({ idBooking })
				setDetailSessionBased(detailSessionBased.data)
			} finally {
				setIsLoading(prev => ({...prev, detailSessionBased: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/booking
			  	`}>
			  		<Button id="_h0TCoV2FEfGjCoBCLIsS7g" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail SessionBased"}
	singularName={"SessionBased"}
	items={{...detailSessionBased}}
	isLoading={isLoading.detailSessionBased}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailSessionBased {...{ data : { ...detailSessionBased }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailSessionBasedPage

