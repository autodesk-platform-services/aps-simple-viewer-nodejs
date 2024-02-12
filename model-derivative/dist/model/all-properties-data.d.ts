import { AllPropertiesDataCollection } from './all-properties-data-collection';
/**
 * An envelope that encapsulates the return data.
 * @export
 * @interface AllPropertiesData
 */
export interface AllPropertiesData {
    /**
     * The type of data that is returned. Always ``properties``.
     * @type {string}
     * @memberof AllPropertiesData
     */
    'type': string;
    /**
     * A non-hierarchical list of objects contained in the specified Model View. Each object has a ``properties`` attribute, which contains the properties of that object.
     * @type {Set<AllPropertiesDataCollection>}
     * @memberof AllPropertiesData
     */
    'collection': Set<AllPropertiesDataCollection>;
}
