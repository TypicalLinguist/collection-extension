import {Map} from "../../../source/main/Map/Map";
import {initializeStartMap} from "../../helpers/helpers";

UnitUnderTest("Map.filter()", function(): void {
    Given("the Map.filter() function", function(): void {
        const startMap: Map<string, number> = initializeStartMap();
        const expectedMap: Map<string, number> = initializeExpectedMap();
        let actualMap: Map<string, number>;

        When("executed with a predicate function", function(): void {
            Then("it should produce a Map filtered according to the predicate function", function(): void {
                actualMap = startMap.filter(filterOutEvenNumbers);
                expect(actualMap).to.deep.equal(expectedMap);
            });
        });
    });
});

function initializeExpectedMap(): Map<string, number> {
    const expectedMap = new Map<string, number>();
    expectedMap.set("one", 1);
    expectedMap.set("three", 3);
    expectedMap.set("five", 5);
    return expectedMap;
}

function filterOutEvenNumbers(value: number): boolean {
    return value % 2 !== 0;
}
