import {Array} from "../../source/main/Array/Array";

const lodash = Array.lodash;

UnitUnderTest(`Array`, function(): void {
    Given(`NativeArray`, function(): void {
        const nativeArray =
            new Array<number | string | object>(1, 2, 4, [5, [6, 7, [{car: "things"}]]], 3, "string", {});

        When(`native-collection-extension is imported`, function(): void {
            And(`nativeArray.flatten is executed`, function(): void {
                const flattenedArray = [1, 2, 4, 5, [6, 7, [{car: "things"}]], 3, "string", {}];
                let returnedArray: any[];

                beforeEach(function(): void {
                    const oldFlatten = lodash.flatten;
                    lodash.flatten = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten();
                });

                Then(`it should execute the lodash flatten method`, function(): void {
                    expect(lodash.flatten).to.have.been.calledWith(nativeArray);
                });

                Then(`it should execute the lodash flatten method`, function(): void {
                    expect(returnedArray).to.deep.equal(flattenedArray);
                });
            });

            And(`nativeArray.flatten is executed with a depth`, function(): void {
                const depth = 2;
                const flattenedArray = [1, 2, 4, 5, 6, 7, [{car: "things"}], 3, "string", {}];
                let returnedArray: any[];

                beforeEach(function(): void {
                    const oldFlatten = lodash.flattenDepth;
                    lodash.flattenDepth = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten({depth});
                });

                Then(`it should execute the lodash flattenDepth method`, function(): void {
                    expect(lodash.flattenDepth).to.have.been.calledWith(nativeArray, depth);
                });

                Then(`it should execute the lodash flatten method`, function(): void {
                    expect(returnedArray).to.deep.equal(flattenedArray);
                });
            });

            And(`nativeArray.flatten is executed with deep = true`, function(): void {
                const flattenedArray = [1, 2, 4, 5, 6, 7, {car: "things"}, 3, "string", {}];
                let returnedArray: any[];

                beforeEach(function(): void {
                    const oldFlatten = lodash.flattenDeep;
                    lodash.flattenDeep = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten({deep: true});
                });

                Then(`it should execute the lodash flatten method`, function(): void {
                    expect(lodash.flattenDeep).to.have.been.calledWith(nativeArray);
                });

                Then(`it should execute the lodash flatten method`, function(): void {
                    expect(returnedArray).to.deep.equal(flattenedArray);
                });
            });

            And(`nativeArray.flatten is executed with deep = false`, function(): void {
                const flattenedArray = [1, 2, 4, 5, 6, 7, {car: "things"}, 3, "string", {}];
                let returnedArray: any[];

                beforeEach(function(): void {
                    const oldFlatten = lodash.flattenDeep;
                    lodash.flattenDeep = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten({deep: false});
                });

                Then(`it should execute the lodash flatten method`, function(): void {
                    expect(lodash.flatten).to.have.been.calledWith(nativeArray);
                });

                Then(`it should execute the lodash flatten method`, function(): void {
                    expect(returnedArray).to.not.deep.equal(flattenedArray);
                });
            });
        });
    });
});
