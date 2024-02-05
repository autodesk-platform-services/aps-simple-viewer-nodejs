import { initViewer, getModelStatus, loadModel } from './viewer.js';

const viewer = await initViewer(document.getElementById('preview'));
const urn = window.location.hash?.substring(1);
setupModelSelection(viewer, urn);
setupModelUpload(viewer);

async function setupModelSelection(viewer, selectedUrn) {
    const dropdown = document.getElementById('models');
    dropdown.innerHTML = '';
    try {
        const models = await fetch('/models').then(resp => resp.json());
        dropdown.innerHTML = models.map(model => `<option value=${model.urn} ${model.urn === selectedUrn ? 'selected' : ''}>${model.name}</option>`).join('\n');
        dropdown.onchange = async () => {
            const urn = window.location.hash = dropdown.value;
            viewer.unloadModel();
            try {
                const { status, progress, messages } = await getModelStatus(urn);
                switch (status) {
                    case 'success':
                        loadModel(viewer, urn);
                        break;
                    case 'inprogress':
                        alert(`Translation is in progress (${progress}). Try again later.`);
                        break;
                    case 'failed':
                        alert(`Translation failed.\n${messages.join('\n')}`);
                        break;
                }
            } catch (err) {
                console.error(err);
                alert('Could not get model status. See the console for more details.');
            }
        };
        if (dropdown.value) {
            dropdown.onchange();
        }
    } catch (err) {
        console.error(err);
        alert('Could not list models. See the console for more details.');
    }
}

async function setupModelUpload(viewer) {
    const upload = document.getElementById('upload');
    const input = document.getElementById('input');
    const models = document.getElementById('models');
    upload.onclick = () => input.click();
    input.onchange = async () => {
        const file = input.files[0];
        let data = new FormData();
        data.append('model', file);
        if (file.name.endsWith('.zip')) { // When uploading a zip file, ask for the main design file in the archive
            const entrypoint = window.prompt('Please enter the filename of the main design inside the archive.');
            data.append('entrypoint', entrypoint);
        }
        upload.setAttribute('disabled', 'true');
        models.setAttribute('disabled', 'true');
        try {
            const model = await fetch('/models', { method: 'POST', body: data }).then(resp => resp.json());
            setupModelSelection(viewer, model.urn);
        } catch (err) {
            console.error(err);
            alert(`Could not upload model ${file.name}. See the console for more details.`);
        } finally {
            upload.removeAttribute('disabled');
            models.removeAttribute('disabled');
            input.value = '';
        }
    };
}