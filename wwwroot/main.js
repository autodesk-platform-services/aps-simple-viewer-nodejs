import { initViewer, loadModel } from './viewer.js';

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
    } catch (err) {
        alert('Could not list models. See the console for more details.');
        console.error(err);
    }
}

async function onModelSelected(viewer, urn) {
    window.location.hash = urn;
    await loadModel(viewer, urn);

    const potreeExtension = viewer.getExtension('PotreeExtension');
    let position = new THREE.Vector3(0, 0, -25);
    let scale = new THREE.Vector3(5, 5, 5);
    const pointcloud = await potreeExtension.loadPointCloud('my-pointcloud', '/PotreeExtension/data/lion_takanawa/cloud.js', position, scale);
    const bbox = pointcloud.boundingBox.clone().expandByVector(scale);
    viewer.navigation.fitBounds(false, bbox);
}
