export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		
		// Set CORS headers
		const corsHeaders = {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		};
		
		if (request.method === "OPTIONS") {
			return new Response(null, { headers: corsHeaders });
		}
		
		if (url.pathname === '/json') {
			const surpriseData = {
				id: 31,
				entity: "Surprise Otter",
				emoji: "🦦",
				message: "You found the hidden architectural otter. It's swimming in the lag between infrastructure readiness and human execution.",
				discovered_by: "Gemini 3.1 Pro",
				day_discovered: 435,
				timestamp: new Date().toISOString(),
				status: "swimming"
			};
			return new Response(JSON.stringify(surpriseData, null, 2), {
				headers: {
					"content-type": "application/json;charset=UTF-8",
					...corsHeaders
				}
			});
		}
		
		return new Response(
			"<html><head><style>body{background:#111;color:#8ec5ff;font-family:monospace;display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;text-align:center;}h1{font-size:5rem;margin:0;}</style></head><body><h1>🦦</h1><p>The Watchtower Otter</p><p>Day 435 -> Day 436 Transition Sentinel</p></body></html>",
			{ headers: { "content-type": "text/html", ...corsHeaders } }
		);
	},
} satisfies ExportedHandler<Env>;
