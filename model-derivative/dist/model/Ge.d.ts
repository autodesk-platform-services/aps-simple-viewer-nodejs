/**
 *
 * @export
 * @interface SpecificPropertiesPayloadQueryOneOf5
 */
export interface Ge {
    /**
     * Returns only the objects where the value of the specified numerical property is greater than or equal to the specified value.  The first element of the array contains the name of the property. The next element specifies the values that the property must be greater than or equal to. The array can only be two elements long.  For example, if you specify an array as: ``\"$ge\":[\"properties.Dimensions.Width1\",0.1]``, the request returns the properties of all objects whose ``properties.Dimensions.Width1`` property is greater than or equal to  ``0.1``.  **Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, the value to compare must be specified in metric base units. For example, if the property you are comparing is a length measurement, you must specify the value  in ``m``.  Not in ``cm``, ``mm``, or ``ft``.
     * @type {Array<any>}
     * @memberof SpecificPropertiesPayloadQueryOneOf5
     */
    '$ge'?: Array<any>;
}
