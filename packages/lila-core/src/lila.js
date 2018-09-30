export { setSetting, setSettings, getSetting, getSettings } from './settings';

export { registerTask, unregisterTask, registeredTasks } from './tasks';

export { addBuildCmdOption, getBuildCmdOptions } from './build-cmd-options';

export { addSyncCmdOption, getSyncCmdOptions } from './sync-cmd-options';

export { addCommand, getCommands } from './commands';

export { default as build } from './build-cmd';

export { default as sync } from './sync-cmd';

export { default as makeConfig } from './make-config';

export { default as pureArgv } from '../../lila-cli/util/pure-argv';