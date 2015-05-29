import { join } from 'path';
import { readdir } from 'fs';

export default (root, cb) => readdir(join(root, 'module'), (err, files) => cb(err, files));
