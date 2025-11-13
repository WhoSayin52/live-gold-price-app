import fs from 'node:fs/promises'
import path from 'node:path'

const rootDir = path.join(import.meta.dirname, '..');
const publicDir = path.join(rootDir, 'public')

const extensions = {
	".css": "text/css",
	".png": "image/png",
	".json": "application/json",
	".js": "text/javascript"
}

export async function serveStatic(res, queryPath) {
	if (queryPath === '/') {
		queryPath = 'index.html'
	}

	let staticFilePath = path.join(publicDir, queryPath);
	console.log(`staticFilePath: ${staticFilePath}`)

	if (!path.extname(staticFilePath)) {
		staticFilePath += '.html'
	}

	const extension = extensions[path.extname(staticFilePath)] || 'text/html'
	const contentType = extension;
	console.log(`contentType: ${contentType}`)

	try {
		const content = await fs.readFile(staticFilePath);
		res.status = 200;
		res.setHeader('Content-Type', contentType)
		res.end(content)
	}
	catch (err) {
		console.error(err)
		res.setHeader('Content-Type', 'text/html')
		try {
			if (err.code === 'ENOENT') {
				const errContent = await fs.readFile(path.join(publicDir, '404.html'));
				res.status = 404
				res.end(errContent)
			}
			else {
				const errContent = await fs.readFile(path.join(publicDir, 'index.html'));
				res.status = 500
				res.end(errContent)
			}
		}
		catch (innerErr) {
			console.error(`ERROR: error serving error page: ${innerErr}`)
			res.status = 500;
			res.end('<h1>Internal Server Error</h1><p>Something went wrong while handling your request.</p>');
		}
	}
}

export let goldVal = 4198.32

function getRandomGoldValue() {
	goldVal += (Math.random() * 10 - Math.random() * 10);
	goldVal = parseFloat(goldVal.toFixed(2))
	return goldVal;
}

export function livePrice(res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/event-stream')
	res.setHeader('Cache-Control', 'no-cache')
	res.setHeader('Connection', 'keep-alive')

	setInterval(() => {
		const price = getRandomGoldValue();
		res.write(
			`data: ${price.toString()}\n\n`
		)
	}, 5000)
}



