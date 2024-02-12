/**
 * @interface SpecificPropertiesPayloadQuery
 * @export
 */
export interface SpecificPropertiesPayloadQuery {
    /**
      * Returns only the objects with their ``objectid`` or ``externalId`` attribute exactly matching one of the values specified in the array.  The first element of the array contains the name of the attribute to match (``objectid`` or ``externalId``). Subsequent elements contain the values to match.  For example, if you specify an array as: ``\"$in\":[\"objectid\",1,2]``, the request will only return the properties of the objects with ``objectid`` 1 and 2. If you specify an array as ``\"$in\":[\"externalId\",\"doc_982afc8a\",\"doc_afd75233\" ]`` the request will only return the properties of the objects with ``extermnalId`` doc_982afc8a and doc_afd75233.
      * @type {Array<any>}
      * @memberof SpecificPropertiesPayloadQueryOneOf
      */
    '$in'?: Array<any>;
    /**
  * Returns only the objects where the value of the specified numerical property is greater than or equal to the specified value.  The first element of the array contains the name of the property. The next element specifies the values that the property must be greater than or equal to. The array can only be two elements long.  For example, if you specify an array as: ``\"$ge\":[\"properties.Dimensions.Width1\",0.1]``, the request returns the properties of all objects whose ``properties.Dimensions.Width1`` property is greater than or equal to  ``0.1``.  **Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, the value to compare must be specified in metric base units. For example, if the property you are comparing is a length measurement, you must specify the value  in ``m``.  Not in ``cm``, ``mm``, or ``ft``.
  * @type {Array<any>}
  * @memberof SpecificPropertiesPayloadQueryOneOf5
  */
    '$ge'?: Array<any>;
    /**
* Returns only the objects where the value of the specified numerical property is less than or equal to the specified value.  The first element of the array contains the name of the property. The next element specifies the values that the property must be less than or equal to. The array can only be two elements long.  For example, if you specify an array as: ``\"$le\":[\"properties.Dimensions.Width1\",10]``, the request returns the properties of all objects whose ``properties.Dimensions.Width1`` property is less than or equal to ``10``.  **Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, the value to compare must be specified in metric base units. For example, if the property you are comparing is a length measurement, you must specify the value  in ``m``.  Not in ``cm``, ``mm``, or ``ft``.
* @type {Array<any>}
* @memberof SpecificPropertiesPayloadQueryOneOf4
*/
    '$le'?: Array<any>;
    /**
     * Returns only the objects with their ``name`` attribute beginning with the specified string.  The first element of the array contains the name of the attribute to match (``name``). The second element contains the string to match. The array can have only two elements. Only the objects whose name begin with the specified string are returned.
     * @type {Array<any>}
     * @memberof SpecificPropertiesPayloadQueryOneOf1
     */
    '$prefix'?: Array<any>;
    /**
 * Returns only the objects where the value of the specified attribute (``name`` attribute or any numerical property) is exactly equal to the specified value.  The first element of the array contains the name of the attribute. This can be the ``name`` attribute or the name of a numerical property. The second element of the array must be the value to match. If the first element is ``name``, must be a string value. If the first element is a numerical property, must be a numeric. The array can only be two elements long.  For example, if you specify an array as: ``\"$eq\":[\"name\",\"Rectangular\"]``, the request will only return the properties of the object named ``Rectangular``. if you specify an array as: ``\"$eq\":[\"properties.Dimensions.Width1\",0.6]``, the request will return the properties of all objects whose ``properties.Dimensions.Width1`` property is exactly equal to ``0.6``.  **Note:** We recommend that you  use ``$between``  instead of ``$eq`` when testing non-integer numeric values for equality. Using ``between`` mitigates floating-point errors.
 * @type {Array<any>}
 * @memberof SpecificPropertiesPayloadQueryOneOf2
 */
    '$eq'?: Array<any>;
    /**
* Returns only the objects where the value of the specified property contains the words specified in a string.  The first element of the array contains the name of the property. The second element contains a string containing the words to match. The array can only be two elements long.  For example, if you specify an array as: ``\"$contains\":[\"properties.Materials and Finishes.Structural Material\",\"Concrete Situ\"]``, the request returns the properties of all objects whose ``properties.Materials and Finishes.Structural Material`` property contains the words  ``Concrete`` and ``Situ``. You can specify up to 50 words.
* @type {Array<any>}
* @memberof SpecificPropertiesPayloadQueryOneOf6
*/
    '$contains'?: Array<any>;
    /**
  * Returns only the objects where the value of the specified numerical property lies between the specified values.  The first element of the array contains the name of the property. The next two elements specify the values that the property must lie between. The array can only be three elements long.  For example, if you specify an array as: ``\"$between\":[\"properties.Dimensions.Width1\",1,10]``, the request returns the properties of all objects whose ``properties.Dimensions.Width1`` property is between ``1`` and ``10``.  **Note:** The Model Derivative service converts numeric values from their native units to metric base units for comparison. So, you must specify the values to compare in metric base units. For example, if the property you are comparing is a length measurement, you must specify the values  in ``m``.  Not in ``cm``, ``mm``, or ``ft``.
  * @type {Array<any>}
  * @memberof SpecificPropertiesPayloadQueryOneOf3
  */
    '$between'?: Array<any>;
}
