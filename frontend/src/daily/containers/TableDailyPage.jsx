
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DailyTable from "../components/DailyTable";
import getdaily from '../services/getdaily'

const TableDailyPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableDaily: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Daily Page")
  }, []);


const [daily, setdaily] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableDaily: true}))
				const { data: daily } = await getdaily()
				setdaily(daily.data)
			} finally {
				setIsLoading(prev => ({...prev, tableDaily: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/booking/add
			  	`}>
			  		<Button id="_huxpeF2FEfGjCoBCLIsS7g" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Daily"}
	singularName={"Daily"}
	items={[daily]}
	isLoading={isLoading.tableDaily}
>
	<DailyTable
		daily={daily}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableDailyPage

