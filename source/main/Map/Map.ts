export class Map<K, V> extends global.Map<K, V> {
    public map<NK, NV>(mapper: (value?: V, key?: K, map?: Map<K, V>) => { key: NK, value: NV }): Map<NK, NV> {
        const newMap = new Map<NK, NV>();

        this.forEach((value, key) => {
            const {key: newKey, value: newValue} = mapper(value, key);
            newMap.set(newKey, newValue);
        });

        return newMap;
    }

    public mapToArray<T>(mapper: (value?: V, key?: K, map?: Map<K, V>) => T): T[] {
        const newArray: T[] = [];

        this.forEach((value, key) => {
            newArray.push(mapper(value, key));
        });

        return newArray;
    }

    public filter(predicate: (value?: V, key?: K, map?: Map<K, V>) => boolean): Map<K, V> {
        const newMap = new Map<K, V>();
        this.forEach((value, key) => {
            if (predicate(value, key)) {
                newMap.set(key, value);
            }
        });
        return newMap;
    }

    public concat(map: Map<K, V>): Map<K, V> {
        const result = new Map<K, V>();
        this.forEach((value: V, key: K) => result.set(key, value));
        map.forEach((value: V, key: K) => result.set(key, value));
        return result;
    }
}
