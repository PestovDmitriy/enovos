function getDbData() {
    return require('csv-database')(
        "events.csv", ['id', 'process','group', 'kind', 'task', 'msg', 'target_date', 'time_limit', 'ts', 'status']
    );
}

module.exports = {
    getDbData
}