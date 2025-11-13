import http from 'node:http';

import * as util from './util/util.js'

const PORT = 8000;

const server = http.createServer((req, res) => {
	const method = req.method;
	const urlQuery = req.url

	console.log(method, urlQuery)

	if (urlQuery === '/live') {
		util.livePrice(res)
	}
	else {
		util.serveStatic(res, urlQuery)
	}
})

server.listen(PORT, console.log(`Connection established at port: http://localHost:${PORT}`));
