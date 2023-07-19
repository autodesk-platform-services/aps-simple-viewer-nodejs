import { initViewer, loadModel } from './viewer.js';

const viewer = await initViewer(document.getElementById('preview'));
await setupModelSelection(viewer);

async function setupModelSelection(viewer) {
    const dropdown = document.getElementById('models');
    dropdown.innerHTML = '';
    try {
        const resp = await fetch('/api/models');
        if (!resp.ok) {
            throw new Error(await resp.text());
        }
        const models = await resp.json();
        dropdown.innerHTML = models.map(model => `<option value=${model.urn}>${model.name}</option>`).join('\n');
        dropdown.onchange = () => loadModel(viewer, dropdown.value);
        if (dropdown.value) {
            dropdown.onchange();
        }
    } catch (err) {
        alert('Could not list models. See the console for more details.');
        console.error(err);
    }
}
