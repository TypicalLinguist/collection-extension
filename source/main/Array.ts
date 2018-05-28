import * as lodash from 'lodash'

export class FlattenDepthOptions {
    depth: number = 0
}

export class FlattenDeepOptions {
    deep: boolean = false
}

export type FlattenOptions = FlattenDepthOptions | FlattenDeepOptions;

export class Array<T> extends global.Array<T | Array<T>> {
    static readonly lodash = lodash;

    flatten(options?: FlattenOptions): Array<T> {
        if (options) {
            if (options.hasOwnProperty('depth')) {
                const flattenDepthOptions = options as FlattenDepthOptions;
                return Array.lodash.flattenDepth(this, flattenDepthOptions.depth) as Array<T>
            }
            else if (options.hasOwnProperty('deep')) {
                const flattenDeepOptions = options as FlattenDeepOptions;
                return flattenDeepOptions.deep ? Array.lodash.flattenDeep(this) as Array<T> : Array.lodash.flatten(this) as Array<T>
            }
        }
        return Array.lodash.flatten(this) as Array<T>;
    }
}