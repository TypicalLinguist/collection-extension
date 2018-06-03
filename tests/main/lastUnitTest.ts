import {Array} from "../../source/main/Array/Array";

UnitUnderTest(`Array`, function(): void {
    Given(`NativeArray`, function(): void {
        When(`native-collection-extension is imported`, function(): void {
            const myArray = new Array<any>(1, 2, "string", {});

            And(`nativeArray.last is executed on an array`, function(): void {
                Then(`it should return the last item`, function(): void {
                    expect(myArray.last()).to.deep.equal(myArray[myArray.length - 1]);
                });
            });

            And(`nativeArray.lastIndex is executed on an array`, function(): void {
                Then(`it should return true`, function(): void {
                    expect(myArray.lastIndex()).to.equal(myArray.length - 1);
                });
            });
        });
    });
});
