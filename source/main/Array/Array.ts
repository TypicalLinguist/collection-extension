import * as lodash from "lodash";
import {FlattenDeepOptions} from "./FlattenDeepOptions";
import {FlattenDepthOptions} from "./FlattenDepthOptions";

export {FlattenOptions, Array};

type FlattenOptions = FlattenDepthOptions | FlattenDeepOptions;

class Array<T> extends global.Array<T | T[]> {
    public static readonly lodash = lodash;

    constructor(...items: T[]) {
        super(...items)
    }

    //TODO: Deal with returned type appropriately, should be concatenation of types at the appropriate level
    public flatten(options?: FlattenOptions): any[] {
        if (options) {
            if (options.hasOwnProperty("depth")) {
                const flattenDepthOptions = options as FlattenDepthOptions;
                return Array.lodash.flattenDepth(this, flattenDepthOptions.depth);
            } else if (options.hasOwnProperty("deep")) {
                const flattenDeepOptions = options as FlattenDeepOptions;
                if (flattenDeepOptions.deep) {
                    return Array.lodash.flattenDeep(this);
                } else {
                    return Array.lodash.flatten(this);
                }
            }
        }
        return Array.lodash.flatten(this) as T[];
    }

    public isEmpty(): boolean {
        return this.length <= 0;
    }

    public last(): T | T[] {
        return this[this.length - 1];
    }

    public lastIndex(): number {
        return this.length - 1;
    }
}
