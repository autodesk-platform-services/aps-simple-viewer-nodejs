/**
 *
 * @export
 * @interface SpecificPropertiesPayloadQueryOneOf1
 */
export interface Prefix {
    /**
     * Returns only the objects with their ``name`` attribute beginning with the specified string.  The first element of the array contains the name of the attribute to match (``name``). The second element contains the string to match. The array can have only two elements. Only the objects whose name begin with the specified string are returned.
     * @type {Array<any>}
     * @memberof SpecificPropertiesPayloadQueryOneOf1
     */
    '$prefix'?: Array<any>;
}
