import * as lodash from "lodash";
import {FlattenDeepOptions} from "./FlattenDeepOptions";
import {FlattenDepthOptions} from "./FlattenDepthOptions";

export {FlattenOptions, Array};

type FlattenOptions = FlattenDepthOptions | FlattenDeepOptions;

class Array<T> extends global.Array<T> {
    public static readonly lodash = lodash;

    constructor(...items: T[]) {
        super(...items)
    }

    public flatten(options?: FlattenOptions): Array<any> {
        if (options) {
            if (options.hasOwnProperty("depth")) {
                const flattenDepthOptions = options as FlattenDepthOptions;
                return new Array(...Array.lodash.flattenDepth(this, flattenDepthOptions.depth));
            } else if (options.hasOwnProperty("deep")) {
                const flattenDeepOptions = options as FlattenDeepOptions;
                if (flattenDeepOptions.deep) {
                    return new Array(...Array.lodash.flattenDeep(this));
                } else {
                    return new Array(...Array.lodash.flatten(this));
                }
            }
        }
        return new Array(...Array.lodash.flatten(this));
    }

    public isEmpty(): boolean {
        return this.length <= 0;
    }

    public last(): T {
        return this[this.length - 1];
    }

    public lastIndex(): number {
        return this.length - 1;
    }

    public async mapAsync<R>(mapFunc: (item: T) => Promise<R>): Promise<Array<R>> {
        const newArray: Array<R> = new Array<R>();

        await this.forEachAsync(async (item) => {
            const result = await mapFunc(item);
            newArray.push(result);
        });

        return newArray;
    }

    public async forEachAsync(doFunc: (item: T) => Promise<void>): Promise<void> {
        for (const item of this) {
            await doFunc(item);
        }
    }
}