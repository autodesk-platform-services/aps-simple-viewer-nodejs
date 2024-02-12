/* tslint:disable */
/* eslint-disable */


/**
 * OIDC Specification
 * @export
 * @interface OidcSpec
 */
export interface OidcSpec {
    /**
     * 
     * @type {string}
     * @memberof OidcSpec
     */
    'issuer'?: string;
    /**
     * 
     * @type {string}
     * @memberof OidcSpec
     */
    'authorization_endpoint'?: string;
    /**
     * 
     * @type {string}
     * @memberof OidcSpec
     */
    'token_endpoint'?: string;
    /**
     * 
     * @type {string}
     * @memberof OidcSpec
     */
    'userinfo_endpoint'?: string;
    /**
     * 
     * @type {string}
     * @memberof OidcSpec
     */
    'jwks_uri'?: string;
    /**
     * 
     * @type {string}
     * @memberof OidcSpec
     */
    'revocation_endpoint'?: string;
    /**
     * 
     * @type {string}
     * @memberof OidcSpec
     */
    'introspection_endpoint'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'scopes_supported'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'response_types_supported'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'response_modes_supported'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'grant_types_supported'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'subject_types_supported'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OidcSpec
     */
    'id_token_signing_alg_values_supported'?: Array<string>;
}

