/**
 *
 * @export
 * @interface SpecificPropertiesPayloadQueryOneOf
 */
export interface SpecificPropertiesPayloadQueryOneOf {
    /**
     * Returns only the objects with their ``objectid`` or ``externalId`` attribute exactly matching one of the values specified in the array.  The first element of the array contains the name of the attribute to match (``objectid`` or ``externalId``). Subsequent elements contain the values to match.  For example, if you specify an array as: ``\"$in\":[\"objectid\",1,2]``, the request will only return the properties of the objects with ``objectid`` 1 and 2. If you specify an array as ``\"$in\":[\"externalId\",\"doc_982afc8a\",\"doc_afd75233\" ]`` the request will only return the properties of the objects with ``extermnalId`` doc_982afc8a and doc_afd75233.
     * @type {Array<any>}
     * @memberof SpecificPropertiesPayloadQueryOneOf
     */
    '$in'?: Array<any>;
}
