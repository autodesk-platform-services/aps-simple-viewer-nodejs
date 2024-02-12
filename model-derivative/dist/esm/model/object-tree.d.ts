import { ObjectTreeData } from './object-tree-data';
/**
 *
 * @export
 * @interface ObjectTree
 */
export declare class ObjectTree {
    private _isProcessing;
    constructor(isProcessing: boolean);
    get isProcessing(): boolean;
    set isProcessing(value: boolean);
    /**
     *
     * @type {ObjectTreeData}
     * @memberof ObjectTree
     */
    'data': ObjectTreeData;
}
