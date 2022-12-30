import React from "react"
import { RoutePaths } from "./utils/paths"

const DynamicHome = React.lazy(() => import("./pages/Home").then((d) => ({ default: d.Home })))
const DynamicAdd = React.lazy(() => import("./pages/AddProduct").then((d) => ({ default: d.AddProduct })))

export const router = [
	{
		path: RoutePaths.Home,
		element: <DynamicHome />,
	},
	{
		path: RoutePaths.AddProduct,
		element: <DynamicAdd />,
	},
]
