import { initViewer, loadModel } from './viewer.js';

initViewer(document.getElementById('preview')).then(viewer => {
    const urn = window.location.hash ? window.location.hash.substr(1) : null;
    setupModelSelection(viewer, urn);
    setupModelUpload(viewer);
});

async function setupModelSelection(viewer, selectedUrn) {
    const models = document.getElementById('models');
    models.innerHTML = '';
    const resp = await fetch('/api/models');
    if (resp.ok) {
        for (const model of await resp.json()) {
            const option = document.createElement('option');
            option.innerText = model.name;
            option.setAttribute('value', model.urn);
            if (model.urn === selectedUrn) {
                option.setAttribute('selected', 'true');
            }
            models.appendChild(option);
        }
    } else {
        alert('Could not list models. See the console for more details.');
        console.error(await resp.text());
    }
    models.onchange = () => {
        window.location.hash = models.value;
        loadModel(viewer, models.value);
    }
    if (!viewer.model && models.value) {
        models.onchange();
    }
}

async function setupModelUpload(viewer) {
    const button = document.getElementById('upload');
    const input = document.getElementById('input');
    button.addEventListener('click', async function () {
        input.click();
    });
    input.addEventListener('change', async function () {
        if (input.files.length !== 1) {
            return;
        }
        const file = input.files[0];
        let data = new FormData();
        data.append('model-file', file);
        // When uploading a zip file, ask for the main design file in the archive
        if (file.name.endsWith('.zip')) {
            const entrypoint = window.prompt('Please enter the filename of the main design inside the archive.');
            data.append('model-zip-entrypoint', entrypoint);
        }
        const resp = await fetch('/api/models', { method: 'POST', body: data });
        if (resp.ok) {
            input.value = '';
            setupModelSelection(viewer);
        } else {
            alert('Could not upload model. See the console for more details.');
            console.error(await resp.text());
        }
    });
}
