/**
 *
 * @export
 * @interface SpecificPropertiesPayloadQueryOneOf3
 */
export interface Between {
    /**
     * Returns only the objects where the value of the specified numerical property lies between the specified values.  The first element of the array contains the name of the property. The next two elements specify the values that the property must lie between. The array can only be three elements long.  For example, if you specify an array as: ``\"$between\":[\"properties.Dimensions.Width1\",1,10]``, the request returns the properties of all objects whose ``properties.Dimensions.Width1`` property is between ``1`` and ``10``.  **Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, you must specify the values to compare in metric base units. For example, if the property you are comparing is a length measurement, you must specify the values  in ``m``.  Not in ``cm``, ``mm``, or ``ft``.
     * @type {Array<any>}
     * @memberof SpecificPropertiesPayloadQueryOneOf3
     */
    '$between'?: Array<any>;
}
