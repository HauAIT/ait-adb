import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import * as ait_process from 'ait-process';
import events from 'events';
import Logcat from '../../lib/logcat';
import { withMocks } from './mock-utils';


chai.use(chaiAsPromised);

describe('logcat', withMocks({ait_process}, function (mocks) {
  const adb = {path: 'dummyPath', defaultArgs: []};
  const logcat = new Logcat({adb, debug: false, debugTrace: false});

  afterEach(function () {
    mocks.verify();
  });

  describe('startCapture', function () {
    it('should correctly call subprocess and should resolve promise', async function () {
      let conn = new events.EventEmitter();
      conn.start = () => { };
      mocks.ait_process.expects('SubProcess')
        .withArgs('dummyPath', ['logcat', '-v', 'brief', 'yolo2:d', '*:v'])
        .onFirstCall()
        .returns(conn);
      setTimeout(function () {
        conn.emit('lines-stdout', ['- beginning of system\r']);
      }, 0);
      await logcat.startCapture({
        format: 'brief',
        filterSpecs: ['yolo2:d', ':k', '-asd:e'],
      });
      let logs = logcat.getLogs();
      logs.should.have.length.above(0);
    });
    it('should correctly call subprocess and should reject promise', async function () {
      let conn = new events.EventEmitter();
      conn.start = () => { };
      mocks.ait_process.expects('SubProcess')
        .withArgs('dummyPath', ['logcat', '-v', 'threadtime'])
        .onFirstCall()
        .returns(conn);
      setTimeout(function () {
        conn.emit('lines-stderr', ['execvp()']);
      }, 0);
      await logcat.startCapture().should.eventually.be.rejectedWith('Logcat');
    });
    it('should correctly call subprocess and should resolve promise if it fails on startup', async function () {
      let conn = new events.EventEmitter();
      conn.start = () => { };
      mocks.ait_process.expects('SubProcess')
        .withArgs('dummyPath', ['logcat', '-v', 'threadtime'])
        .onFirstCall()
        .returns(conn);
      setTimeout(function () {
        conn.emit('lines-stderr', ['something']);
      }, 0);
      await logcat.startCapture().should.eventually.not.be.rejectedWith('Logcat');
    });
  });

  describe('clear', function () {
    it('should call logcat clear', async function () {
      mocks.ait_process.expects('exec')
        .once().withExactArgs(adb.path, adb.defaultArgs.concat(['logcat', '-c']));
      await logcat.clear();
    });
    it('should not fail if logcat clear fails', async function () {
      mocks.ait_process.expects('exec')
        .once().withExactArgs(adb.path, adb.defaultArgs.concat(['logcat', '-c']))
        .throws('Failed to clear');
      await logcat.clear().should.eventually.not.be.rejected;
    });
  });
}));
