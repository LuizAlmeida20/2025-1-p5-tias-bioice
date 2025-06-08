export default class API {
	baseUrl: string | null = null
	token: string | null = null

	async genericFetch(url: string, method: string = "GET", body: BodyInit | null = null, token: string | null = null) {
		const config: RequestInit = {
			method: "GET"
		}
		if (method == "POST" && body)
			config.body = body

		config.headers = new Headers()
		config.headers.append("Content-Type", "application/json")

		if (token)
			config.headers.append("Authentication", token)
		return fetch(url, config).then(r => r.json())
	}

	genericGET(url: string) {
		return this.genericFetch(url, "GET", null, this.token)
	}

	genericPOST(url: string, body: ReadableStream) {
		return this.genericFetch(url, "POST", body, this.token)
	}

	genericPUT(url: string, body: ReadableStream) {
		return this.genericFetch(url, "PUT", body, this.token)
	}

	genericPATCH(url: string, body: ReadableStream) {
		return this.genericFetch(url, "PATCH", body, this.token)
	}

	genericDELETE(url: string) {
		return this.genericFetch(url, "DELETE", null, this.token)
	}
}