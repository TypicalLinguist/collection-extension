import {Map} from "../../../source/main/Map/Map";
import {initializeStartMap} from "../../helpers/helpers";

UnitUnderTest("Map.getReverse()", function(): void {
    Given("the Map.getReverse() function", function(): void {
        const startMap: Map<string, number> = initializeStartMap();
        const expectedKey = "five";

        When("executed with a value that exists in the Map", function(): void {
            Then("it should return the corresponding key", function(): void {
                const returnedKey = startMap.getReverse(5);
                expect(returnedKey).to.equal(expectedKey);
            });
        });
    });
});