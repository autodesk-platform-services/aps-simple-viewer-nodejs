import { createServer, plugins } from 'restify';
import { getAccessToken, listObjects, uploadObject, translateObject, urnify } from './aps.js';
import { PORT } from './config.js';

const server = createServer();
server.use(plugins.bodyParser({ mapParams: true, mapFiles: true, maxBodySize: 0 }));
server.get('/*', plugins.serveStaticFiles('./wwwroot'));

server.get('/token', async (req, res) => {
    res.send(await getAccessToken());
});

server.get('/models', async (req, res) => {
    const objects = await listObjects();
    res.send(objects.map(o => ({ name: o.objectKey, urn: urnify(o.objectId) })));
});

server.post('/models', async (req, res) => {
    const { model, entrypoint } = req.params;
    const filename = req.files['model'].name;
    const obj = await uploadObject(filename, model);
    const job = await translateObject(urnify(obj.objectId), entrypoint);
    res.send({ urn: job.urn });
});

server.listen(PORT, () => console.log('Server listening at', server.url));