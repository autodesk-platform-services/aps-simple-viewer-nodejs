/// import * as Autodesk from "@types/forge-viewer";
/// import * as Chart from "@types/chart.js";

import { BaseExtension } from './BaseExtension.js';
import { HistogramPanel } from './HistogramPanel.js';

class HistogramExtension extends BaseExtension {
    constructor(viewer, options) {
        super(viewer, options);
        this._barChartButton = null;
        this._pieChartButton = null;
        this._barChartPanel = null;
        this._pieChartPanel = null;
    }

    async load() {
        super.load();
        await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js', 'Chart');
        Chart.defaults.plugins.legend.display = false;
        console.log('HistogramExtension loaded.');
        return true;
    }

    unload() {
        super.unload();
        for (const button of [this._barChartButton, this._pieChartButton]) {
            this.removeToolbarButton(button);
        }
        this._barChartButton = this._pieChartButton = null;
        for (const panel of [this._barChartPanel, this._pieChartPanel]) {
            panel.setVisible(false);
            panel.uninitialize();
        }
        this._barChartPanel = this._pieChartPanel = null;
        console.log('HistogramExtension unloaded.');
        return true;
    }

    onToolbarCreated() {
        this._barChartPanel = new HistogramPanel(this, 'dashboard-barchart-panel', 'Property Histogram', { x: 10, y: 10, chartType: 'bar' });
        this._pieChartPanel = new HistogramPanel(this, 'dashboard-piechart-panel', 'Property Histogram', { x: 10, y: 420, chartType: 'doughnut' });
        this._barChartButton = this.createToolbarButton('dashboard-barchart-button', 'https://img.icons8.com/small/32/bar-chart.png', 'Show Property Histogram (Bar Chart)');
        this._barChartButton.onClick = () => {
            this._barChartPanel.setVisible(!this._barChartPanel.isVisible());
            this._barChartButton.setState(this._barChartPanel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);
            if (this._barChartPanel.isVisible() && this.viewer.model) {
                this._barChartPanel.setModel(this.viewer.model);
            }
        };
        this._pieChartButton = this.createToolbarButton('dashboard-piechart-button', 'https://img.icons8.com/small/32/pie-chart.png', 'Show Property Histogram (Pie Chart)');
        this._pieChartButton.onClick = () => {
            this._pieChartPanel.setVisible(!this._pieChartPanel.isVisible());
            this._pieChartButton.setState(this._pieChartPanel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);
            if (this._pieChartPanel.isVisible() && this.viewer.model) {
                this._pieChartPanel.setModel(this.viewer.model);
            }
        };
    }

    onModelLoaded(model) {
        super.onModelLoaded(model);
        if (this._barChartPanel && this._barChartPanel.isVisible()) {
            this._barChartPanel.setModel(model);
        }
        if (this._pieChartPanel && this._pieChartPanel.isVisible()) {
            this._pieChartPanel.setModel(model);
        }
    }

    async findPropertyValueOccurrences(model, propertyName) {
        const dbids = await this.findLeafNodes(model);
        return new Promise(function (resolve, reject) {
            model.getBulkProperties(dbids, { propFilter: [propertyName] }, function (results) {
                let histogram = new Map();
                for (const result of results) {
                    if (result.properties.length > 0) {
                        const key = result.properties[0].displayValue;
                        if (histogram.has(key)) {
                            histogram.get(key).push(result.dbId);
                        } else {
                            histogram.set(key, [result.dbId]);
                        }
                    }
                }
                resolve(histogram);
            }, reject);
        });
    }
}

Autodesk.Viewing.theExtensionManager.registerExtension('HistogramExtension', HistogramExtension);
