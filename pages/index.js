const headImports = import.meta.glob("./**/head.html", { query: "?raw" })
const bodyImports = import.meta.glob("./**/body.html", { query: "?raw" })

export async function getPage(page) {
	const head = (await headImports[`./${page}/head.html`]?.())?.default ?? ""
	const body = (await bodyImports[`./${page}/body.html`]?.())?.default ?? ""
	return { head, body }
}
