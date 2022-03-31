/// import * as Autodesk from "@types/forge-viewer";

import { BaseExtension } from './BaseExtension.js';
import { SummaryPanel } from './SummaryPanel.js';

// For now, the names of properties we want to compute the aggregates for are hard-coded.
// In future these could be retrieved via the extension `options`, or perhaps set in the UI.
const SUMMARY_PROPS = ['Length', 'Area', 'Volume', 'Density', 'Mass', 'Price'];

class SummaryExtension extends BaseExtension {
    constructor(viewer, options) {
        super(viewer, options);
        this._button = null;
        this._panel = null;
    }

    load() {
        super.load();
        console.log('SummaryExtension loaded.');
        return true;
    }

    unload() {
        super.unload();
        if (this._button) {
            this.removeToolbarButton(this._button);
            this._button = null;
        }
        if (this._panel) {
            this._panel.setVisible(false);
            this._panel.uninitialize();
            this._panel = null;
        }
        console.log('SummaryExtension unloaded.');
        return true;
    }

    onToolbarCreated() {
        this._panel = new SummaryPanel(this, 'model-summary-panel', 'Model Summary');
        this._button = this.createToolbarButton('summary-button', 'https://img.icons8.com/small/32/brief.png', 'Show Model Summary');
        this._button.onClick = () => {
            this._panel.setVisible(!this._panel.isVisible());
            this._button.setState(this._panel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);
            if (this._panel.isVisible()) {
                this.update();
            }
        };
    }

    onModelLoaded(model) {
        super.onModelLoaded(model);
        this.update();
    }

    onSelectionChanged(model, dbids) {
        super.onSelectionChanged(model, dbids);
        this.update();
    }

    onIsolationChanged(model, dbids) {
        super.onIsolationChanged(model, dbids);
        this.update();
    }

    async update() {
        if (this._panel) {
            const selectedIds = this.viewer.getSelection();
            const isolatedIds = this.viewer.getIsolatedNodes();
            if (selectedIds.length > 0) { // If any nodes are selected, compute the aggregates for them
                this._panel.update(this.viewer.model, selectedIds, SUMMARY_PROPS);
            } else if (isolatedIds.length > 0) { // Or, if any nodes are isolated, compute the aggregates for those
                this._panel.update(this.viewer.model, isolatedIds, SUMMARY_PROPS);
            } else { // Otherwise compute the aggregates for all nodes
                const dbids = await this.findLeafNodes(this.viewer.model);
                this._panel.update(this.viewer.model, dbids, SUMMARY_PROPS);
            }
        }
    }
}

Autodesk.Viewing.theExtensionManager.registerExtension('SummaryExtension', SummaryExtension);
