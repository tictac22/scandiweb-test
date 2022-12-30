import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { resolve } from "path"

export default defineConfig({
	plugins: [react()],
	server: {
		port: 5000,
	},
	resolve: {
		alias: {
			"@styles": resolve(__dirname, "src/styles"),
			"@utils": resolve(__dirname, "src/utils"),
			"@components": resolve(__dirname, "src/components"),
		},
	},
})
