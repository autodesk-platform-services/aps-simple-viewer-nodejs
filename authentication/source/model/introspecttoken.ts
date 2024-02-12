/* tslint:disable */
/* eslint-disable */


/**
 * The response body for the introspection of access token.
 * @export
 * @interface Introspecttoken
 */
export interface IntrospectToken {
    /**
     * 
     * @type {boolean}
     * @memberof Introspecttoken
     */
    'active': boolean;
    /**
     * 
     * @type {string}
     * @memberof Introspecttoken
     */
    'scope': string;
    /**
     * 
     * @type {string}
     * @memberof Introspecttoken
     */
    'client_id': string;
    /**
     * 
     * @type {number}
     * @memberof Introspecttoken
     */
    'exp': number;
    /**
     * 
     * @type {string}
     * @memberof Introspecttoken
     */
    'userid'?: string;
}

