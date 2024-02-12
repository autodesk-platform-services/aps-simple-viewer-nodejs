/* tslint:disable */
/* eslint-disable */


/**
 * Possible values are `bounded`, `trimmed` and `wireframe`. By default it is set to bounded surface.
 * @export
 * @enum {string}
 */

export const SurfaceType = {
    Bounded: 'bounded',
    Trimmed: 'trimmed',
    Wireframe: 'wireframe'
} as const;

export type SurfaceType = typeof SurfaceType[keyof typeof SurfaceType];



