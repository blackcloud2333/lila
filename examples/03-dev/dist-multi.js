
require('../../util/change_cwd_to')(__dirname + '/demo');

require('../../util/exec')('lila dist test/*,test-2/*');
