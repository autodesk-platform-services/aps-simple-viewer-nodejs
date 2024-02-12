/**
 *
 * @export
 * @interface GrantAllow
 */
export interface GrantAllow {
    /**
     * The application key to grant access to
     * @type {string}
     * @memberof GrantAllow
     */
    'authId': string;
    /**
     * Acceptable values: full, read, write
     * @type {string}
     * @memberof GrantAllow
     */
    'access': string;
}
