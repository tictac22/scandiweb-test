import { z } from "zod"
import { Switchers } from "./Switcher"

export const schema = z
	.object({
		name: z.string().min(1, { message: "Name is required" }).trim(),
		sku: z.string().min(1, { message: "Sku is required" }).trim(),
		price: z.string().min(1, { message: "Price is required" }),
		typeSwitcher: z.string().refine((value) => value !== Switchers.Default, { message: "Select the switcher" }),
		size: z.string().optional(),
		weight: z.string().optional(),
		height: z.string().optional(),
		width: z.string().optional(),
		length: z.string().optional(),
	})
	.superRefine((schema, ctx) => {
		if (schema.typeSwitcher === Switchers.Dvd && !schema.size) {
			ctx.addIssue({
				code: "custom",
				message: "Size is Required",
				path: ["size"],
			})
		}
		if (schema.typeSwitcher === Switchers.Book && !schema.weight) {
			ctx.addIssue({
				code: "custom",
				message: "Size is Required",
				path: ["weight"],
			})
		}
		console.log(schema)
		if (schema.typeSwitcher === Switchers.Furniture) {
			const fields = ["Width", "Length", "Height"]
			fields.forEach((item) => {
				if (!schema[item.toLowerCase()]) {
					ctx.addIssue({
						code: "custom",
						message: `${item} ` + "is Required",
						path: [item.toLowerCase()],
					})
				}
			})
		}
		return z.NEVER
	})
