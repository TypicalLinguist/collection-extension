import {Map} from "../../../source/main/Map/Map";
import {initializeStartMap} from "../../helpers/helpers";

UnitUnderTest("Map.mapToArray()", function(): void {
    Given("the Map.mapToArray() function", function(): void {
        const startMap: Map<string, number> = initializeStartMap();
        const expectedArray: string[] = initializeExpectedArray();
        let actualArray: string[];

        When("executed with a mapper function", function(): void {
            Then("it should produce a new Array according the mapping function", function(): void {
                actualArray = startMap.mapToArray<string>(combineKeyValueIntoString);
                expect(actualArray).to.deep.equal(expectedArray);
            });
        });
    });
});

function initializeExpectedArray(): string[] {
    return [
        `The number 1 can be written as one in english`,
        `The number 2 can be written as two in english`,
        `The number 3 can be written as three in english`,
        `The number 4 can be written as four in english`,
        `The number 5 can be written as five in english`,
        `The number 6 can be written as six in english`,
    ];
}

function combineKeyValueIntoString(value: number, key: string): string {
    return `The number ${value} can be written as ${key} in english`;
}
