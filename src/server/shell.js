import manifest from "virtual:vite-manifest"

/** @param props { import("./types.d.ts").PageShell } */
export function pageShell(props) {
	const css = manifest['src/client/main.js'].css ?? []
	const js = manifest['src/client/main.js'].file

	return `<!DOCTYPE html>
<html lang="en">
<head>
	${import.meta.env.DEV ? "<script type='module' src='/@vite/client'></script>" : ""}
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	${css?.map((css) => `<link rel="stylesheet" href="${css}">`).join('') ?? ""}
	<script type="module" src="${js}"></script>
	${props.head ?? ""}
</head>
<body>
	${props.body ?? ""}
</body>
</html>
`
}
