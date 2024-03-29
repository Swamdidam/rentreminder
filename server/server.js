'use strict';

/*********************************************************
 Author:                Swam Didam Bobby 
 Year:                  2018
 File Discription:      Server creation
/********************************************************/

//=============================================================================
/**
 * module dependencies
 */
//=============================================================================
const
    http    = require('http'),
    app     = require('./app'),
    log     = require('./utils/logger').getLogger('APP');

//=============================================================================
/**
 * HTTP server instance
 */
//=============================================================================
const server = http.createServer(app);
//=============================================================================
/**
 * Module variables
 */
//=============================================================================
const
    port = app.get('port'),
    env = app.get('env');
//=============================================================================
/**
 * Bind to port
 */
//=============================================================================
server.listen(port, () => {
    log.info(`Server up on port ${port} and in ${env} mode  `);
});
//=============================================================================
/**
 * Conditionally export module
 */
//=============================================================================
if(require.main != module) {
    module.exports = server;
}
//=============================================================================
