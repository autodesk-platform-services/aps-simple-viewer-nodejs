import { ModelViewsDataMetadata } from './model-views-data-metadata';
/**
 * An envelope that contains the return data.
 * @export
 * @interface ModelViewsData
 */
export interface ModelViewsData {
    /**
     * The type of data that is returned.
     * @type {string}
     * @memberof ModelViewsData
     */
    'type': string;
    /**
     * Ann array of objects, where each object represents a Model View.
     * @type {Set<ModelViewsDataMetadata>}
     * @memberof ModelViewsData
     */
    'metadata': Set<ModelViewsDataMetadata>;
}
