import { CustomTreeViewPanel } from './CustomTreeViewPanel.js';

export class CustomTreeViewExtension extends Autodesk.Viewing.Extension {
    constructor(viewer, options) {
        super(viewer, options);
        this._button = null;
        this._panel = null;
    }

    async load() {
        console.log('CustomTreeViewExtension loaded.');
        return true;
    }

    unload() {
        if (this._button) {
            this._removeToolbarButton(this._button);
            this._button = null;
        }
        if (this._panel) {
            this._panel.setVisible(false);
            this._panel.uninitialize();
            this._panel = null;
        }
        console.log('CustomTreeViewExtension unloaded.');
        return true;
    }

    onToolbarCreated() {
        this._panel = new CustomTreeViewPanel(this.viewer, 'custom-treeview-panel', 'Custom Tree View');
        this._button = this._createToolbarButton('custom-treeview-button', 'https://img.icons8.com/material-outlined/48/stacked-organizational-chart.png', 'Custom Tree View');
        this._button.onClick = () => {
            const { ACTIVE, INACTIVE } = Autodesk.Viewing.UI.Button.State;
            this._panel.setVisible(!this._panel.isVisible());
            this._button.setState(this._panel.isVisible() ? ACTIVE : INACTIVE);
        };
    }

    _createToolbarButton(buttonId, buttonIconUrl, buttonTooltip) {
        let group = this.viewer.toolbar.getControl('my-group');
        if (!group) {
            group = new Autodesk.Viewing.UI.ControlGroup('my-group');
            this.viewer.toolbar.addControl(group);
        }
        const button = new Autodesk.Viewing.UI.Button(buttonId);
        button.setToolTip(buttonTooltip);
        group.addControl(button);
        const icon = button.container.querySelector('.adsk-button-icon');
        if (icon) {
            icon.style.backgroundImage = `url(${buttonIconUrl})`; 
            icon.style.backgroundSize = `24px`; 
            icon.style.backgroundRepeat = `no-repeat`; 
            icon.style.backgroundPosition = `center`; 
        }
        return button;
    }

    _removeToolbarButton(button) {
        const group = this.viewer.toolbar.getControl('my-group');
        group.removeControl(button);
    }
}
