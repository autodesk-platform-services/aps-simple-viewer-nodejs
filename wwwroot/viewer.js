async function getAccessToken(callback) {
    try {
        const resp = await fetch('/token');
        if (!resp.ok) {
            throw new Error(await resp.text());
        }
        const { access_token, expires_in } = await resp.json();
        callback(access_token, expires_in);
    } catch (err) {
        console.error(err);
        alert('Could not obtain access token. See the console for more details.');
    }
}

export function initViewer(container) {
    return new Promise(function (resolve, reject) {
        Autodesk.Viewing.Initializer({ env: 'AutodeskProduction', getAccessToken }, function () {
            const config = { extensions: ['Autodesk.DocumentBrowser'] };
            const viewer = new Autodesk.Viewing.GuiViewer3D(container, config);
            viewer.start();
            resolve(viewer);
        });
    });
}

export function getModelStatus(urn) {
    return new Promise(function (resolve, reject) {
        Autodesk.Viewing.Document.load('urn:' + urn, function onSuccess(doc) {
            const { status, progress } = doc.myData;
            const messages = [];
            doc.getRoot().traverse((node) => {
                if (node.data.messages) {
                    for (const message of node.data.messages) {
                        messages.push(message.message);
                    }
                }
            });
            resolve({ status, progress, messages });
        }, function onError(code, message) {
            reject(message);
        });
    });
}

export function loadModel(viewer, urn) {
    return new Promise(function (resolve, reject) {
        Autodesk.Viewing.Document.load('urn:' + urn, function onSuccess(doc) {
            resolve(viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()));
        }, function onError(err) {
            reject(message);
        });
    });
}