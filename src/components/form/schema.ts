import { z } from "zod"
import { Switchers } from "./Switcher"

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
	console.log(issue)
	if (issue.code === z.ZodIssueCode.invalid_type) {
		if (issue.expected === "number") {
			return { message: capitalizeFirstLetter(issue.path[issue.path.length - 1] as string) + " is required" }
		}
	}

	return { message: ctx.defaultError }
}

const customNumber = z.number({ errorMap: customErrorMap })
export const schema = z.object({
	name: z.string().min(1, { message: "Name is required" }).trim(),
	sku: z.string().min(1, { message: "Sku is required" }),
	price: customNumber.min(1, { message: "price is required" }),
	typeSwitcher: z.string().refine((value) => value !== Switchers.Default, { message: "Select the switcher" }),
	swithcerParam: z.object({
		size: customNumber.min(1, { message: "size is required" }).optional(),
		weight: customNumber.min(1, { message: "weight is required" }).optional(),
		height: customNumber.min(1, { message: "height is required" }).optional(),
		width: customNumber.min(1, { message: "width is required" }).optional(),
		length: customNumber.min(1, { message: "length is required" }).optional(),
	}),
})

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
