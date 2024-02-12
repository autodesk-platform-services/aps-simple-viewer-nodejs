/**
 * Envelope that contains pagination information.
 * @export
 * @interface SpecificPropertiesPagination
 */
export interface SpecificPropertiesPagination {
    /**
     * The maximum number of properties you requested for this page.
     * @type {number}
     * @memberof SpecificPropertiesPagination
     */
    'limit': number;
    /**
     * The number of items skipped (because they were returned in previous pages) when returning this page.
     * @type {number}
     * @memberof SpecificPropertiesPagination
     */
    'offset': number;
    /**
     * The total number of properties to be returned.
     * @type {number}
     * @memberof SpecificPropertiesPagination
     */
    'totalResults': number;
}
