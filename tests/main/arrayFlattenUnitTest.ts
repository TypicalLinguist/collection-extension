import {Array} from '../../source/main/Array';

const lodash = Array.lodash;

UnitUnderTest(`Array`, function () {
    Given(`NativeArray`, function () {
        const nativeArray = new Array<number | string | object>(1, 2, 4, [5, [6, 7, [{car: 'things'}]]], 3, 'string', {});

        When(`native-collection-extension is imported`, function () {
            And(`nativeArray.flatten is executed`, function () {
                const flattenedArray = [1, 2, 4, 5, [6, 7, [{car: 'things'}]], 3, 'string', {}];
                let returnedArray: Array<any>;

                beforeEach(function () {
                    const oldFlatten = lodash.flatten;
                    lodash.flatten = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten()
                });

                Then(`it should execute the lodash flatten method`, function () {
                    expect(lodash.flatten).to.have.been.calledWith(nativeArray)
                });

                Then(`it should execute the lodash flatten method`, function () {
                    expect(returnedArray).to.deep.equal(flattenedArray);
                })
            });

            And(`nativeArray.flatten is executed with a depth`, function () {
                const depth = 2;
                const flattenedArray = [1, 2, 4, 5, 6, 7, [{car: 'things'}], 3, 'string', {}];
                let returnedArray: Array<any>;

                beforeEach(function () {
                    const oldFlatten = lodash.flattenDepth;
                    lodash.flattenDepth = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten({depth: depth})
                });

                Then(`it should execute the lodash flattenDepth method`, function () {
                    expect(lodash.flattenDepth).to.have.been.calledWith(nativeArray, depth)
                });

                Then(`it should execute the lodash flatten method`, function () {
                    expect(returnedArray).to.deep.equal(flattenedArray);
                })
            });

            And(`nativeArray.flatten is executed with deep = true`, function () {
                const flattenedArray = [1, 2, 4, 5, 6, 7, {car: 'things'}, 3, 'string', {}];
                let returnedArray: Array<any>;

                beforeEach(function () {
                    const oldFlatten = lodash.flattenDeep;
                    lodash.flattenDeep = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten({deep: true})
                });

                Then(`it should execute the lodash flatten method`, function () {
                    expect(lodash.flattenDeep).to.have.been.calledWith(nativeArray)
                });

                Then(`it should execute the lodash flatten method`, function () {
                    expect(returnedArray).to.deep.equal(flattenedArray);
                })
            });

            And(`nativeArray.flatten is executed with deep = false`, function () {
                const flattenedArray = [1, 2, 4, 5, 6, 7, {car: 'things'}, 3, 'string', {}];
                let returnedArray: Array<any>;

                beforeEach(function () {
                    const oldFlatten = lodash.flattenDeep;
                    lodash.flattenDeep = sinon.spy(oldFlatten);

                    returnedArray = nativeArray.flatten({deep: false})
                });

                Then(`it should execute the lodash flatten method`, function () {
                    expect(lodash.flatten).to.have.been.calledWith(nativeArray)
                });

                Then(`it should execute the lodash flatten method`, function () {
                    expect(returnedArray).to.not.deep.equal(flattenedArray);
                })
            })
        })
    })
});