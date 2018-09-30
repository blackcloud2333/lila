import app from './app';
import * as lila from './lila';
import { registerTask } from './tasks';
import { registerConfigGenerator } from './make-config';
import entry from './entry';
import {
  correctHtml,
  replaceHtml,
  insertHtml,
  convertHtml,
  renameHtml,
  syncAll,
  syncHtml,
} from './built-in-tasks';

registerTask('@lila/correct-html', correctHtml);
registerTask('@lila/replace-html', replaceHtml);
registerTask('@lila/insert-html', insertHtml);
registerTask('@lila/convert-html', convertHtml);
registerTask('@lila/rename-html', renameHtml);
registerTask('@lila/sync-all', syncAll);
registerTask('@lila/sync-html', syncHtml);

app.lila = lila;

// below code should be executed after register built-in tasks
const configGenerator = entry(lila);

if (typeof configGenerator !== 'function')
  throw new Error('lila.js exported function should return a another function');

registerConfigGenerator(entry);

export default lila;