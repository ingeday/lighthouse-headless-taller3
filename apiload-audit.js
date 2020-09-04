'use strict';

const Audit = require('lighthouse').Audit;


const MAX_CALL_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id: 'firstapicall-audit',
            title: 'First Api audit',
            category: 'MyPerformance',
            name: 'firstapicall-audit',
            description: 'The First Api Called and ready ',
            failureDescription: 'The First Api slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the First call API is ended',
            requiredArtifacts: ['TimeToFirstApiCall']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToFirstApiCall;

        const belowThreshold = loadedTime <= MAX_CALL_TIME;

        return {
            displayValue: loadedTime,
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;