/// import * as Autodesk from "@types/forge-viewer";

export class SummaryPanel extends Autodesk.Viewing.UI.PropertyPanel {
    constructor(extension, id, title) {
        super(extension.viewer.container, id, title);
        this.extension = extension;
    }

    async update(model, dbids, propNames) {
        this.removeAllProperties();
        for (const propName of propNames) {
            const initialValue = { sum: 0, count: 0, min: Infinity, max: -Infinity };
            const aggregateFunc = (aggregate, value, property) => {
                return {
                    count: aggregate.count + 1,
                    sum: aggregate.sum + value,
                    min: Math.min(aggregate.min, value),
                    max: Math.max(aggregate.max, value)
                };
            };
            const { sum, count, min, max } = await this.aggregatePropertyValues(model, dbids, propName, aggregateFunc, initialValue);
            if (count > 0) {
                const category = propName;
                this.addProperty('Count', count, category);
                this.addProperty('Sum', sum.toFixed(2), category);
                this.addProperty('Avg', (sum / count).toFixed(2), category);
                this.addProperty('Min', min.toFixed(2), category);
                this.addProperty('Max', max.toFixed(2), category);
            }
        }
    }

     async aggregatePropertyValues(model, dbids, propertyName, aggregateFunc, initialValue = 0) {
        return new Promise(function (resolve, reject) {
            let aggregatedValue = initialValue;
            model.getBulkProperties(dbids, { propFilter: [propertyName] }, function (results) {
                for (const result of results) {
                    if (result.properties.length > 0) {
                        const prop = result.properties[0];
                        aggregatedValue = aggregateFunc(aggregatedValue, prop.displayValue, prop);
                    }
                }
                resolve(aggregatedValue);
            }, reject);
        });
    }
}
