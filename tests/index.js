import { deepEqual } from 'assert';
import getModules from '../index';

test('#getModules', (done) => {
	getModules(__dirname, ( err, files ) => {
		deepEqual(files, ['bar.js', 'foo.js']);
		done();
	})
});
