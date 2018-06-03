import {Map} from "../../../source/main/Map/Map";
import {initializeStartMap} from "../../helpers/helpers";

UnitUnderTest("Map.map()", function(): void {
    Given("the Map.map() function", function(): void {
        const startMap: Map<string, number> = initializeStartMap();
        const expectedMap: Map<number, string> = initializeExpectedMap();
        let actualMap: Map<number, string>;

        When("executed with a mapper function", function(): void {
            Then("it should produce a new Map according the mapping function", function(): void {
                actualMap = startMap.map<number, string>(swapKeyAndValue);
                expect(actualMap).to.deep.equal(expectedMap);
            });
        });
    });
});

function initializeExpectedMap(): Map<number, string> {
    const expectedMap = new Map<number, string>();
    expectedMap.set(1, "one");
    expectedMap.set(2, "two");
    expectedMap.set(3, "three");
    expectedMap.set(4, "four");
    expectedMap.set(5, "five");
    expectedMap.set(6, "six");
    return expectedMap;
}

function swapKeyAndValue(value: number, key: string): { value: string, key: number } {
    return {
        key: value,
        value: key,
    };
}
