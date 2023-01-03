export const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

export const sleep = (time: number) =>
	new Promise<void>((resolve) =>
		setTimeout(() => {
			resolve()
		}, time)
	)
