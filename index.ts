/**
 * @privateRemarks This is a `.ts` file so we can re-export types from other
 * files; otherwise we would need to copy `@typedef`s around.
 * @module
 */

import {install} from 'source-map-support';
install();

import {ADB} from './build/lib/adb';

export * from './build/lib/adb';
export type * from './build/lib/mixins';
export type * from './build/lib/tools';
export type * from './build/lib/logcat';
export type * from './build/lib/options';
export default ADB;
