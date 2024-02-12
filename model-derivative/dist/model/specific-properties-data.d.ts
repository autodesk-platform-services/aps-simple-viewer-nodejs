import { AllPropertiesDataCollection } from './all-properties-data-collection';
/**
 * Envelope that contains the return data.
 * @export
 * @interface SpecificPropertiesData
 */
export interface SpecificPropertiesData {
    /**
     * The type of data that is returned. Always ``properties``.
     * @type {string}
     * @memberof SpecificPropertiesData
     */
    'type': string;
    /**
     * Array of objects with their \"properties\" as a non-hierarchical list.
     * @type {Set<AllPropertiesDataCollection>}
     * @memberof SpecificPropertiesData
     */
    'collection': Set<AllPropertiesDataCollection>;
}
