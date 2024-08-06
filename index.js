const fs = require('fs');

function writeLog(message) {
    fs.appendFile('./logs/app.log', message + '\n', (err) => {
        if (err) {
            console.error('Failed to write log:', err);
        }
    });
}

function logInfo(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} | INFO | ${message}`;
    writeLog(logMessage);
}

function logWarning(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} | WARNING | ${message}`;
    writeLog(logMessage);
}

function logError(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} | ERROR | ${message}`;
    writeLog(logMessage);
}

logInfo('This is an info message');
logWarning('This is a warning message');
logError('This is an error message');

module.exports = {
  logInfo,
  logWarning,
  logError,
};