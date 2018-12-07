import {Array} from "../../../source/main/Array/Array";
import {SinonSpy} from "sinon";

UnitUnderTest(`Array.mapAsync()`, function(): void {
    Given(`the Array.mapAsync() function`, function(): void {
        When(`executed with a function that returns a promise`, function(): void {
            const myArray = new Array<any>(1, 2, 3, 4);
            Then(`it should apply the function to each element in the array sequentially` +
                `awaiting promise resolution on each element and returning the resolution value`, async function() {
                const expectedArray = [2, 3, 4, 5];

                const resolutionSpies: SinonSpy[] = [];

                const asyncFuncSpy = sinon.spy(async (arg: number) => {
                    return new Promise((resolve) => {
                        let resolveSpy = sinon.spy(resolve);
                        resolutionSpies.push(resolveSpy);
                        setTimeout(() => {
                            resolveSpy(arg + 1)
                        }, Math.random() * 50);
                    })
                });

                const resultArray = await myArray.mapAsync(asyncFuncSpy);

                myArray.forEach((item, index) => {
                    expect(asyncFuncSpy.getCalls().length).to.be.at.least(myArray.length);
                    expect(asyncFuncSpy.getCalls()[index].calledWith(item)).to.equal(true);
                    expect(asyncFuncSpy.getCalls()[index].calledBefore(resolutionSpies[index].firstCall)).to.equal(true);
                    expect(resultArray).to.deep.equal(expectedArray)
                })
            })
        });
    });
});