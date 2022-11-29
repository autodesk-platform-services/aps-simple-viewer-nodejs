import { initViewer, loadModel } from './viewer.js';

function download(href, name) {
    const link = document.createElement('a');
    link.download = name;
    link.style.opacity = 0;
    document.body.append(link);
    link.href = href;
    link.click();
    link.remove();
}

function generateScreenshot(viewer) {
    const screenshot = new Image();
    screenshot.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = viewer.container.clientWidth;
        canvas.height = viewer.container.clientHeight;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(screenshot, 0, 0, canvas.width, canvas.height);
        const markupCoreExt = viewer.getExtension('Autodesk.Viewing.MarkupsCore');
        markupCoreExt.renderToCanvas(ctx, function () {
            download(canvas.toDataURL(), 'screenshot.png');
        });
    };
    viewer.getScreenShot(viewer.container.clientWidth, viewer.container.clientHeight, function (blob) {
        screenshot.src = blob;
    });
}

initViewer(document.getElementById('preview')).then(viewer => {
    const urn = window.location.hash?.substring(1);
    setupModelSelection(viewer, urn);
    document.getElementById('save-markups').addEventListener('click', function () {
        generateScreenshot(viewer);
    });
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
    loadModel(viewer, urn);
}
