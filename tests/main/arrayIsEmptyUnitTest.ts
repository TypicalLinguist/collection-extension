import {Array} from "../../source/main/Array/Array";

UnitUnderTest(`Array`, function(): void {
    Given(`NativeArray`, function(): void {
        When(`native-collection-extension is imported`, function(): void {
            And(`nativeArray.isEmpty is executed on an empty array`, function(): void {
                const emptyArray = new Array<any>();

                Then(`it should return true`, function(): void {
                    expect(emptyArray.isEmpty()).to.equal(true);
                });
            });

            And(`nativeArray.isEmpty is executed on an array with elements`, function(): void {
                const arrayWithElements: any = new Array<any>(1, 2, "string", {});

                Then(`it should return true`, function(): void {
                    expect(arrayWithElements.isEmpty()).to.equal(false);
                });
            });
        });
    });
});
