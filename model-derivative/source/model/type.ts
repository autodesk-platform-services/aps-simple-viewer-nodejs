/* tslint:disable */
/* eslint-disable */


/**
 * The requested output types. 
 * Possible values include `svf`, `svf2`, `thumbnail`, `stl`, `step`, `iges`, `obj`, `ifc` or `dwg`. 
 * For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
 * @export
 * @enum {string}
 */

export const Type = {
    Svf:'Svf',
    Svf2:'Svf2',
    Thumbnail:'Thumbnail',
    Stl:'Stl',
    Step:'Step',
    Iges:'Iges',
    Obj:'Obj',
    Ifc:'Ifc',
    Dwg:'Dwg',
    Fbx:'Fbx'
} as const;

export type Type = typeof Type[keyof typeof Type];


