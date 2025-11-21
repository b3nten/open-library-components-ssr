import '../components/ol-button.js';
import '../components/ol-button-group.js';
import '../components/ol-dropdown-button.js';
import '../components/ol-heading.js';
import '../components/ol-theme-toggle.js';
import '../components/ol-input.js';
import '../components/ol-field.js';
import '../components/ol-section.js';
import '../components/ol-main-nav.js';
import '../components/ol-card.js';
import '../components/ol-star-rating.js';
// import '../components/ol-demo-pane.js' not compatible with SSR due to template usage
import { pageShell } from "./shell";
import { getPage } from "../../pages";
import { createRouter, createRoutes } from "@remix-run/fetch-router";
import { render } from "@lit-labs/ssr";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';

const renderHtml = async (h) => {
	return new Response(await collectResult(render(html`${unsafeHTML(h)}`)), {
		headers: {
			"Content-Type": "text/html"
		}
	})
}

const routes = createRoutes({
	home: "/(index.html)",
	components: "/components(.html)",
	forms: "/forms(.html)",
	dropdownTest: "/dropdown-test(.html)",
	signup: "/signup(.html)"
})

const router = createRouter()

router.get(routes.home, async () => renderHtml(pageShell(await getPage("index"))))
router.get(routes.components, async () => renderHtml(pageShell(await getPage("components"))))
router.get(routes.forms, async () => renderHtml(pageShell(await getPage("forms"))))
router.get(routes.signup, async () => renderHtml(pageShell(await getPage("signup"))))
router.get(routes.dropdownTest, async () => renderHtml(pageShell(await getPage("dropdown-test"))))

export default router.fetch.bind(router)
