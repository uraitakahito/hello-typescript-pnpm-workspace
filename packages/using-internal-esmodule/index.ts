// MEMO:
// When importing ES modules without using a bundler or transpiler, file extensions are required:
//   https://nodejs.org/api/esm.html#esm_mandatory_file_extensions

//
// Named import without `default export`:
//
// Good:
import { named1 } from 'named-exports-no-default';
import * as namespaceObject1 from 'named-exports-no-default';
// Bad: SyntaxError
// import defaultExport1 from './named-exports-no-default.esm.js';

// Named import without `default export`:
console.log(named1);
console.log(namespaceObject1.named1, namespaceObject1.named2);
