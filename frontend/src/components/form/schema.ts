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
	price: customNumber.positive({ message: "Price has to be more than 0" }),
	typeSwitcher: z.string().refine((value) => value !== Switchers.Default, { message: "Select the switcher" }),
	swithcerParam: z.object({
		size: customNumber.positive({ message: "Size has to be more than 0" }).optional(),
		weight: customNumber.positive({ message: "Weight has to be more than 0" }).optional(),
		height: customNumber.positive({ message: "Height has to be more than 0" }).optional(),
		width: customNumber.positive({ message: "Width has to be more than 0" }).optional(),
		length: customNumber.positive({ message: "Length has to be more than 0" }).optional(),
	}),
})

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
