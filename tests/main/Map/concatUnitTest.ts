import {Map} from "../../../source/main/Map/Map";

UnitUnderTest("Map.concat()", function(): void {
    Given("the Map.concat() function", function(): void {
        const map1: Map<string, number> = new Map<string, number>([["one", 1], ["two", 2], ["three", 3]]);
        const map2: Map<string, number> = new Map<string, number>([["four", 4], ["five", 5], ["six", 6]]);
        const expectedMap: Map<string, number> = initializeExpectedMap();
        let actualMap: Map<string, number>;

        When("executed with another map", function(): void {
            Then("it should produce a new Map that is a merge of the two maps", function(): void {
                actualMap = map1.concat(map2);
                expect(actualMap).to.deep.equal(expectedMap);
            });
        });
    });
});

function initializeExpectedMap(): Map<string, number> {
    const expectedMap = new Map<string, number>();
    expectedMap.set("one", 1);
    expectedMap.set("two", 2);
    expectedMap.set("three", 3);
    expectedMap.set("four", 4);
    expectedMap.set("five", 5);
    expectedMap.set("six", 6);
    return expectedMap;
}

