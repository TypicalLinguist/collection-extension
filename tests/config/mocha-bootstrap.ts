import sinon = require('sinon');
import sinonChai = require('sinon-chai');
import chai = require('chai');
import 'behavioural-describe-mocha'

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
