import ExpectStatic = Chai.ExpectStatic;

declare let expect: ExpectStatic;
declare let sinon: any;

declare namespace NodeJS {
    import ExpectStatic = Chai.ExpectStatic;

    export interface Global {
        expect: ExpectStatic;
        sinon: any;
    }
}
