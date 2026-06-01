
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ResourceTable from "../components/ResourceTable";
import getListResource from '../services/getListResource'

const TableResourcePage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableResource: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Resource Page")
  }, []);


const [listResource, setListResource] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableResource: true}))
				const { data: listResource } = await getListResource()
				setListResource(listResource.data)
			} finally {
				setIsLoading(prev => ({...prev, tableResource: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/resource/add
			  	`}>
			  		<Button id="_NlP5EF2REfGjCoBCLIsS7g" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Resource"}
	singularName={"Resource"}
	items={[listResource]}
	isLoading={isLoading.tableResource}
>
	<ResourceTable
		listResource={listResource}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableResourcePage

