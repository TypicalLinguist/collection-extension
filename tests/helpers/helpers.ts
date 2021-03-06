import {Map} from "../../source/main/Map/Map";

export {initializeStartMap};

function initializeStartMap(): Map<string, number> {
    const starMap = new Map<string, number>();
    starMap.set("one", 1);
    starMap.set("two", 2);
    starMap.set("three", 3);
    starMap.set("four", 4);
    starMap.set("five", 5);
    starMap.set("six", 6);
    return starMap;
}
