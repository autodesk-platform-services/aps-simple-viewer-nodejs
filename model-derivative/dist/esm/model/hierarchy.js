/* tslint:disable */
/* eslint-disable */
/**
 * Specifies how the hierarchy of items are determined. Classic: (Default) Uses hardcoded rules to set the hierarchy of items. SystemPath: Uses a linked XML or MDB2 properties file to set hierarchy of items. You can use this option to make the organization of items consistent with SmartPlant 3D.  Notes:   1. The functioning of the SystemPath depends on the default setting of the property SP3D_SystemPath or System Path.   2. The pathing delimiter must be \\.   3. If you want to customize further, import the VUE file to Navisworks. After that, use POST job on the resulting Navisworks (nwc/nwd) file.
 * @export
 * @enum {string}
 */
export const Hierarchy = {
    Classic: 'Classic',
    SystemPath: 'SystemPath'
};
