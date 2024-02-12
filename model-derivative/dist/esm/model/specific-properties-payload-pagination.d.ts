/**
 * Specifies how to split the response into multiple pages, and return the response one page at a time.
 * @export
 * @interface SpecificPropertiesPayloadPagination
 */
export interface SpecificPropertiesPayloadPagination {
    /**
     * The number of properties to skip. Use this attribute with the ``limit`` attribute to split the properties into multiple pages. To fetch the first page, specify ``offset`` =0 (do not skip any properties). To fetch the second page, specify ``offset`` = value of ``limit`` you specified for the first page. So, the server skips the properties returned on the first page. In general, ``offset`` = ``previous_offset`` + ``previous_limit``. This attribute is 0 by default. The minimum value is 0.
     * @type {number}
     * @memberof SpecificPropertiesPayloadPagination
     */
    'offset': number;
    /**
     * The maximum number of properties to return in a single page. Use this attribute with the ``offset`` attribute to split the properties into multiple pages. To fetch the first page, specify ``offset`` =0 (do not skip any properties). To fetch the second page, specify ``offset`` = value of ``limit`` you specified for the first page. So, the server skips the search results returned on the first page. In general, ``offset`` = ``previous_offset`` + ``previous_limit``. This attribute is 20 by default. The minimum value is 1 and the maximum is 1000.
     * @type {number}
     * @memberof SpecificPropertiesPayloadPagination
     */
    'limit': number;
}
