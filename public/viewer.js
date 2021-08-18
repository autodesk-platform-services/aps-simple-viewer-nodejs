/// import * as Autodesk from "@types/forge-viewer";

export async function initViewer(container) {
    async function getAccessToken(callback) {
        const resp = await fetch('/api/auth/token');
        if (resp.ok) {
            const { access_token, expires_in } = await resp.json();
            callback(access_token, expires_in);
        } else {
            alert('Could not obtain access token. See the console for more details.');
            console.error(await resp.text());
        }
    }
    return new Promise(function (resolve, reject) {
        Autodesk.Viewing.Initializer({ getAccessToken }, async function () {
            const viewer = new Autodesk.Viewing.GuiViewer3D(container);
            viewer.start();
            viewer.setTheme('light-theme');
            resolve(viewer);
        });
    });
}

export function loadModel(viewer, urn) {
    function onDocumentLoadSuccess(doc) {
        viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry());
    }
    function onDocumentLoadFailure(code, message) {
        alert('Could not load model. See the console for more details.');
        console.error(message);
    }
    Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);
}
