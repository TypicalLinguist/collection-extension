import "behavioural-describe-mocha";
import chai = require("chai");
import sinon = require("sinon");
import sinonChai = require("sinon-chai");

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
