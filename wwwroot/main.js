import { initViewer, loadModel } from './viewer.js';

initServiceWorker();

initViewer(document.getElementById('preview')).then(viewer => {
    const urn = window.location.hash?.substring(1);
    setupModelSelection(viewer, urn);
});

async function setupModelSelection(viewer, selectedUrn) {
    const dropdown = document.getElementById('models');
    dropdown.innerHTML = '';
    try {
        const resp = await fetch('/api/models');
        if (!resp.ok) {
            throw new Error(await resp.text());
        }
        const models = await resp.json();
        dropdown.innerHTML = models.map(model => `<option value=${model.urn} ${model.urn === selectedUrn ? 'selected' : ''}>${model.name}</option>`).join('\n');
        dropdown.onchange = () => onModelSelected(viewer, dropdown.value);
        if (dropdown.value) {
            onModelSelected(viewer, dropdown.value);
        }
        document.getElementById('cache-model').addEventListener('click', function () { dropdown.value && cacheModel(dropdown.value); });
    } catch (err) {
        alert('Could not list models. See the console for more details.');
        console.error(err);
    }
}

async function onModelSelected(viewer, urn) {
    window.location.hash = urn;
    loadModel(viewer, urn);
}

async function cacheModel(urn) {
    const button = document.getElementById('cache-model');
    try {
        button.setAttribute('disabled', 'true');
        // Get list of URNs of all SVF assets
        const assets = await fetch(`/api/models/${urn}/assets`).then(resp => resp.json());
        // Get an access token for downloading the assets from APS
        const credentials = await fetch('/api/auth/token').then(resp => resp.json());
        // Cache assets in Service Worker
        const result = await messageServiceWorker({ type: 'CACHE_URN', payload: { urn, assets, token: credentials.access_token } });
        // Output the results
        if (result.success) {
            alert('Model was successfully cached!');
        } else {
            throw result.error;
        }
    } catch (err) {
        alert('Could not cache model. See the console for more details.');
        console.error(err);
    } finally {
        button.removeAttribute('disabled');
    }
}

/**
 * Initializes service worker.
 */
async function initServiceWorker() {
    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('Service worker registered', registration.scope);
    } catch (err) {
        console.error('Could not register service worker', err);
    }
}

/**
 * Sends a message to the service worker.
 */
function messageServiceWorker(message) {
    return navigator.serviceWorker.ready.then(function(req) {
        return new Promise(function(resolve, reject) {
            const channel = new MessageChannel();
            channel.port1.onmessage = function(event) {
                if (event.data.error) {
                    reject(event.data);
                } else {
                    resolve(event.data);
                }
            };
            req.active.postMessage(message, [channel.port2]);
        });
    });
}
