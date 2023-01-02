import { capitalizeFirstLetter } from "@utils/functions"
import { z } from "zod"
import { Switchers } from "./Switcher"

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
	let pathtoError = issue.path.length - 2
	if (pathtoError < 0) pathtoError = 0
	if (issue.code === z.ZodIssueCode.invalid_type) {
		if (issue.expected === "number") {
			return { message: capitalizeFirstLetter(issue.path[pathtoError] as string) + " is required" }
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
		size: z
			.object({
				id: z.number(),
				value: customNumber.positive({ message: "Size has to be more than 0" }),
			})
			.optional(),
		weight: z
			.object({
				id: z.number(),
				value: customNumber.positive({ message: "Weight has to be more than 0" }),
			})
			.optional(),
		height: z
			.object({
				id: z.number(),
				value: customNumber.positive({ message: "Height has to be more than 0" }),
			})
			.optional(),
		width: z
			.object({
				id: z.number(),
				value: customNumber.positive({ message: "Width has to be more than 0" }),
			})
			.optional(),
		length: z
			.object({
				id: z.number(),
				value: customNumber.positive({ message: "length has to be more than 0" }),
			})
			.optional(),
	}),
})
