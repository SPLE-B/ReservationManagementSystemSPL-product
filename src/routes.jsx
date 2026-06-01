import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import ratingRoutes from "@/rating/routes";
import bookingTypeRoutes from "@/bookingType/routes";
import pricingRoutes from "@/pricing/routes";
import merchantRoutes from "@/merchant/routes";
import bankTransferRoutes from "@/bankTransfer/routes";
import notificationRoutes from "@/notification/routes";
import resourceRoutes from "@/resource/routes";
import dailyRoutes from "./daily/routes";
import ratingWithCommentRoutes from "./ratingWithComment/routes";
import emailRoutes from "./email/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...ratingWithCommentRoutes, 
	...dailyRoutes, 
	...pricingRoutes, 
	...merchantRoutes, 
	...bankTransferRoutes, 
	...emailRoutes, 
	...resourceRoutes, 
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
