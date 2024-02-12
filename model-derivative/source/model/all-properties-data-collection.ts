/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @interface AllPropertiesDataCollection
 */
export interface AllPropertiesDataCollection {
    /**
     * Unique identifier of the object.  **Note:** The ``objectid`` is a non-persistent ID assigned to an object when a design file is translated to SVF or SVF2. So:  - The ``objectid`` of an object can change if the design is translated to SVF or SVF2 again. - If you require a persistent ID to reference an object, use ``externalId``. 
     * @type {number}
     * @memberof AllPropertiesDataCollection
     */
    'objectid': number;
    /**
     * Name of the object.
     * @type {string}
     * @memberof AllPropertiesDataCollection
     */
    'name': string;
    /**
     * A unique identifier of the object as defined in the source design. For example, ``UniqueID`` in Revit files.
     * @type {string}
     * @memberof AllPropertiesDataCollection
     */
    'externalId': string;
    /**
     * A JSON object containing dictionary objects (key value pairs), where the key is the property name and the value is the value of the property.
     * @type {object}
     * @memberof AllPropertiesDataCollection
     */
    'properties'?: object;
}

