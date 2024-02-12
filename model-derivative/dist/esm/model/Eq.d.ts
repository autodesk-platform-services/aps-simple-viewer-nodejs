/**
 *
 * @export
 * @interface SpecificPropertiesPayloadQueryOneOf2
 */
export interface Eq {
    /**
     * Returns only the objects where the value of the specified attribute (``name`` attribute or any numerical property) is exactly equal to the specified value.  The first element of the array contains the name of the attribute. This can be the ``name`` attribute or the name of a numerical property. The second element of the array must be the value to match. If the first element is ``name``, must be a string value. If the first element is a numerical property, must be a numeric. The array can only be two elements long.  For example, if you specify an array as: ``\"$eq\":[\"name\",\"Rectangular\"]``, the request will only return the properties of the object named ``Rectangular``. if you specify an array as: ``\"$eq\":[\"properties.Dimensions.Width1\",0.6]``, the request will return the properties of all objects whose ``properties.Dimensions.Width1`` property is exactly equal to ``0.6``.  **Note:** We recommend that you  use ``$between``  instead of ``$eq`` when testing non-integer numeric values for equality. Using ``between`` mitigates floating-point errors.
     * @type {Array<any>}
     * @memberof SpecificPropertiesPayloadQueryOneOf2
     */
    '$eq'?: Array<any>;
}
