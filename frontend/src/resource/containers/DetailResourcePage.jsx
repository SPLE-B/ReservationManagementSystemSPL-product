
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailResource from '../components/DetailResource'
import getDetailResource from '../services/getDetailResource'

const DetailResourcePage = props => {
  const { idResource } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailResource: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Resource Page")
  }, []);


const [detailResource, setDetailResource] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailResource: true}))
				console.log(idResource)
				const { data: detailResource } = await getDetailResource({ idResource })
				setDetailResource(detailResource.data)
			} finally {
				setIsLoading(prev => ({...prev, detailResource: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/resource
			  	`}>
			  		<Button id="_NlP5C12REfGjCoBCLIsS7g" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Resource"}
	singularName={"Resource"}
	items={{...detailResource}}
	isLoading={isLoading.detailResource}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailResource {...{ data : { ...detailResource }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailResourcePage

