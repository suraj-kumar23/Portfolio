globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/azure-ai-fundamentals-challenge-DEHXGlUj.jpg": {
		"type": "image/jpeg",
		"etag": "\"47394-rw4mKPy3GwrpXayLO3Taj6cUNgw\"",
		"mtime": "2026-09-08T18:23:51.374Z",
		"size": 291732,
		"path": "../public/assets/azure-ai-fundamentals-challenge-DEHXGlUj.jpg"
	},
	"/assets/Generative AI Prompt Engineering Basics-6cBxMvg-.jpeg": {
		"type": "image/jpeg",
		"etag": "\"55fcc-kef8TKjkPTCwCR7UTVSWznBdapI\"",
		"mtime": "2026-09-08T18:23:51.373Z",
		"size": 352204,
		"path": "../public/assets/Generative AI Prompt Engineering Basics-6cBxMvg-.jpeg"
	},
	"/assets/ibm-python-data-science-_RcQ4GBU.jpg": {
		"type": "image/jpeg",
		"etag": "\"56588-D7IDmFdpkDGQumztwyd3hZvBWfI\"",
		"mtime": "2026-09-08T18:23:51.379Z",
		"size": 353672,
		"path": "../public/assets/ibm-python-data-science-_RcQ4GBU.jpg"
	},
	"/assets/index-DRECjxhx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53ade-Xth9if7mppCPVAm1AnGVYSh/2NE\"",
		"mtime": "2026-09-08T18:23:51.371Z",
		"size": 342750,
		"path": "../public/assets/index-DRECjxhx.js"
	},
	"/assets/project-agrinova-BHbOBckR.jpg": {
		"type": "image/jpeg",
		"etag": "\"1710b-JhavyJX2C2VKSnjjF2zKccK95rc\"",
		"mtime": "2026-09-08T18:23:51.385Z",
		"size": 94475,
		"path": "../public/assets/project-agrinova-BHbOBckR.jpg"
	},
	"/assets/project-gesturetalk-DYngRn6N.jpg": {
		"type": "image/jpeg",
		"etag": "\"8cd8-/fv9SA5aOcqoGPw3ww4ez4Mnix0\"",
		"mtime": "2026-09-08T18:23:51.385Z",
		"size": 36056,
		"path": "../public/assets/project-gesturetalk-DYngRn6N.jpg"
	},
	"/assets/project-sagechain-DLXV-80E.jpg": {
		"type": "image/jpeg",
		"etag": "\"e0c4-uX0FsLOs8G8TmVq9X3XdJ4AvRAM\"",
		"mtime": "2026-09-08T18:23:51.386Z",
		"size": 57540,
		"path": "../public/assets/project-sagechain-DLXV-80E.jpg"
	},
	"/assets/routes-DGWOKYpw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b747-8VIuACCpJ/avtIVNGmkqLRfxWPw\"",
		"mtime": "2026-09-08T18:23:51.371Z",
		"size": 112455,
		"path": "../public/assets/routes-DGWOKYpw.js"
	},
	"/assets/styles-B0xFkBsz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19b6c-K8/rcoCm95hyU3tU6a6nYQusa0s\"",
		"mtime": "2026-09-08T18:23:51.388Z",
		"size": 105324,
		"path": "../public/assets/styles-B0xFkBsz.css"
	},
	"/assets/Successful Career Development-BuxOzHL7.jpeg": {
		"type": "image/jpeg",
		"etag": "\"55620-XjBtFtAjS2Wd/ypVyTqkJDZEJYA\"",
		"mtime": "2026-09-08T18:23:51.373Z",
		"size": 349728,
		"path": "../public/assets/Successful Career Development-BuxOzHL7.jpeg"
	},
	"/assets/gfg-160-B8oOzXTl.jpg": {
		"type": "image/jpeg",
		"etag": "\"88e2e-GB+IfbLTTxXwB9Hq4yDeEsObQXU\"",
		"mtime": "2026-09-08T18:23:51.376Z",
		"size": 560686,
		"path": "../public/assets/gfg-160-B8oOzXTl.jpg"
	},
	"/assets/hackerrank-frontend-react-CkcQ7SEz.jpg": {
		"type": "image/jpeg",
		"etag": "\"acbab-V6MkE1KMnhv+K2tXh78D2cBRBac\"",
		"mtime": "2026-09-08T18:23:51.376Z",
		"size": 707499,
		"path": "../public/assets/hackerrank-frontend-react-CkcQ7SEz.jpg"
	},
	"/assets/duke-java-programming-DyJJ-aav.jpg": {
		"type": "image/jpeg",
		"etag": "\"c6ff5-7wGTjlSddeqgvtRSam2fWtvQ7b8\"",
		"mtime": "2026-09-08T18:23:51.375Z",
		"size": 815093,
		"path": "../public/assets/duke-java-programming-DyJJ-aav.jpg"
	},
	"/assets/hackerrank-sql-advanced-DpmY7eBA.jpg": {
		"type": "image/jpeg",
		"etag": "\"9e84e-o9dj3eaTIvnXykNIPSeiRPurDEg\"",
		"mtime": "2026-09-08T18:23:51.379Z",
		"size": 649294,
		"path": "../public/assets/hackerrank-sql-advanced-DpmY7eBA.jpg"
	},
	"/assets/oracle-foundations-associate-PR2hEhqU.jpg": {
		"type": "image/jpeg",
		"etag": "\"d6e59-GZvGQa9NyTWe9Mwll23PvecpHJc\"",
		"mtime": "2026-09-08T18:23:51.383Z",
		"size": 880217,
		"path": "../public/assets/oracle-foundations-associate-PR2hEhqU.jpg"
	},
	"/assets/software-engineer-certificate-Doc0c7ek.jpg": {
		"type": "image/jpeg",
		"etag": "\"9eb0e-itxUJ0uDpn4fv4WPo3GvTmZmp8Q\"",
		"mtime": "2026-09-08T18:23:51.387Z",
		"size": 649998,
		"path": "../public/assets/software-engineer-certificate-Doc0c7ek.jpg"
	},
	"/assets/project-vistalex-BlZ14Ici.png": {
		"type": "image/png",
		"etag": "\"15b0c3-QzfkTtfpB3tIyYI8UxVCkyV1aJk\"",
		"mtime": "2026-09-08T18:23:51.387Z",
		"size": 1421507,
		"path": "../public/assets/project-vistalex-BlZ14Ici.png"
	},
	"/assets/portrait-CLYw65Lw.png": {
		"type": "image/png",
		"etag": "\"17d99c-Ue9DK7VYsUzNCSwci/SBYaGWDuQ\"",
		"mtime": "2026-09-08T18:23:51.384Z",
		"size": 1563036,
		"path": "../public/assets/portrait-CLYw65Lw.png"
	},
	"/assets/isro-remote-sensing-digital-image-analysis-CK12lnpC.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bb0b8-+tphndRdqE5XMUTUmnhmWGTAafY\"",
		"mtime": "2026-09-08T18:23:51.381Z",
		"size": 2863288,
		"path": "../public/assets/isro-remote-sensing-digital-image-analysis-CK12lnpC.jpg"
	},
	"/assets/hackerrank-python-basic-BW8KDJEC.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b88b5-+JJod69CPbO92iq7kQIyzX4lQnI\"",
		"mtime": "2026-09-08T18:23:51.378Z",
		"size": 2853045,
		"path": "../public/assets/hackerrank-python-basic-BW8KDJEC.jpg"
	},
	"/assets/isro-remote-sensing-gis-gnss-Kj4n-qxX.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bef89-af1hP/H8sHqTtQWyg1ctGLt0KMw\"",
		"mtime": "2026-09-08T18:23:51.382Z",
		"size": 2879369,
		"path": "../public/assets/isro-remote-sensing-gis-gnss-Kj4n-qxX.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_FThjgI = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_FThjgI
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
