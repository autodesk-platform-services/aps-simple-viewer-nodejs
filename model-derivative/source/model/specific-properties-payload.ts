/* tslint:disable */
/* eslint-disable */

import { Payload } from './payload';
import { SpecificPropertiesPayloadPagination } from './specific-properties-payload-pagination';
import { SpecificPropertiesPayloadQuery } from './specific-properties-payload-query';

/**
 * 
 * @export
 * @interface SpecificPropertiesPayload
 */
export interface SpecificPropertiesPayload {
    /**
     * 
     * @type {SpecificPropertiesPayloadPagination}
     * @memberof SpecificPropertiesPayload
     */
    'pagination'?: SpecificPropertiesPayloadPagination;
    /**
     * 
     * @type {SpecificPropertiesPayloadQuery}
     * @memberof SpecificPropertiesPayload
     */
    'query': SpecificPropertiesPayloadQuery;
    /**
     * Specifies what properties of the objects to return. If you do not specify this attribute, the response returns all properties.  Possible values:  - ``properties`` - Return all properties. - ``properties.something``- Return the property named ``something`` and all its children. - ``properties.some*`` - Return all properties with names that begin with ``some`` and all their children. - ``properties.category.*`` - Return the property named ``category`` and all its children. - ``properties.*.property`` - Return any property named ``property`` regardless of its parent. 
     * @type {object}
     * @memberof SpecificPropertiesPayload
     */
    'fields'?: object;
    /**
     * 
     * @type {Payload}
     * @memberof SpecificPropertiesPayload
     */
    'payload'?: Payload;
}



