import {Array} from "../../../source/main/Array/Array";
import {SinonSpy} from "sinon";

UnitUnderTest(`Array.forEachAsync()`, function(): void {
    Given(`the Array.forEachAsync() function`, function(): void {
        When(`executed with a function that returns a promise`, function(): void {
            const myArray = new Array<any>(1, 2, "string", {});
            Then(`it should apply the function to each element in the array sequentially, awaiting promise resolution on each element`, async function() {
                const resolutionSpies: SinonSpy[] = [];

                const asyncFuncSpy = sinon.spy(async () => {
                    return new Promise((resolve) => {
                        let resolveSpy = sinon.spy(resolve);
                        resolutionSpies.push(resolveSpy);
                        setTimeout(resolveSpy, Math.random() * 50);
                    })
                });

                await myArray.forEachAsync(asyncFuncSpy);

                myArray.forEach((item, index) => {
                    expect(asyncFuncSpy.getCalls().length).to.be.at.least(myArray.length);
                    expect(asyncFuncSpy.getCalls()[index].calledWith(item)).to.equal(true);
                    expect(asyncFuncSpy.getCalls()[index].calledBefore(resolutionSpies[index].firstCall)).to.equal(true);
                })
            })
        });
    });
});
