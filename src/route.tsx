import React from "react"

const DynamicHome = React.lazy(() => import("./pages/Home").then((d) => ({ default: d.Home })))
const DynamicAdd = React.lazy(() => import("./pages/Add").then((d) => ({ default: d.Add })))

export const router = [
	{
		path: "/",
		element: <DynamicHome />,
	},
	{
		path: "/add",
		element: <DynamicAdd />,
	},
]
