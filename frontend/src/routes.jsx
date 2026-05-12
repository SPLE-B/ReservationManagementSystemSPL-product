import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import ratingRoutes from "@/rating/routes";
import bookingTypeRoutes from "@/bookingType/routes";
import pricingRoutes from "@/pricing/routes";
import paymentRoutes from "@/payment/routes";
import notificationRoutes from "@/notification/routes";
import cancellationRoutes from "@/cancellation/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...ratingRoutes, 
	...bookingTypeRoutes, 
	...pricingRoutes, 
	...paymentRoutes, 
	...notificationRoutes, 
	...cancellationRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
