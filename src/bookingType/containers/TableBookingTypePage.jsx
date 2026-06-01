
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import BookingTypeTable from "../components/BookingTypeTable";
import getListBookingType from '../services/getListBookingType'

const TableBookingTypePage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableBookingType: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table BookingType Page")
  }, []);


const [listBookingType, setListBookingType] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableBookingType: true}))
				const { data: listBookingType } = await getListBookingType()
				setListBookingType(listBookingType.data)
			} finally {
				setIsLoading(prev => ({...prev, tableBookingType: false}))
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
			  		<Button id="_hZ9QH12FEfGjCoBCLIsS7g" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table BookingType"}
	singularName={"BookingType"}
	items={[listBookingType]}
	isLoading={isLoading.tableBookingType}
>
	<BookingTypeTable
		listBookingType={listBookingType}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableBookingTypePage

