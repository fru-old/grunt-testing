var istanbul = require('istanbul');

var coverage = {
    "C:\\Users\\DKX88AX\\Desktop\\grunt-testing\\prototypes\\istanbul-instrument\\input.js": {
        "path": "C:\\Users\\DKX88AX\\Desktop\\grunt-testing\\prototypes\\istanbul-instrument\\input.js",
        "s": {
            "1": 1,
            "2": 1,
            "3": 0
        },
        "b": {},
        "f": {
            "1": 1
        },
        "fnMap": {
            "1": {
                "name": "test",
                "line": 10,
                "loc": {
                    "start": {
                        "line": 10,
                        "column": 0
                    },
                    "end": {
                        "line": 10,
                        "column": 15
                    }
                }
            }
        },
        "statementMap": {
            "1": {
                "start": {
                    "line": 10,
                    "column": 0
                },
                "end": {
                    "line": 14,
                    "column": 1
                }
            },
            "2": {
                "start": {
                    "line": 13,
                    "column": 1
                },
                "end": {
                    "line": 13,
                    "column": 13
                }
            },
            "3": {
                "start": {
                    "line": 16,
                    "column": 0
                },
                "end": {
                    "line": 16,
                    "column": 7
                }
            }
        },
        "branchMap": {}
    }
}

var coverage2 = {
    "C:\\Users\\DKX88AX\\Desktop\\grunt-testing\\prototypes\\istanbul-instrument\\input.js": {
        "path": "C:\\Users\\DKX88AX\\Desktop\\grunt-testing\\prototypes\\istanbul-instrument\\input.js",
        "s": {
            "1": 1,
            "2": 0,
            "3": 1
        },
        "b": {},
        "f": {
            "1": 1
        },
        "fnMap": {
            "1": {
                "name": "test",
                "line": 10,
                "loc": {
                    "start": {
                        "line": 10,
                        "column": 0
                    },
                    "end": {
                        "line": 10,
                        "column": 15
                    }
                }
            }
        },
        "statementMap": {
            "1": {
                "start": {
                    "line": 10,
                    "column": 0
                },
                "end": {
                    "line": 14,
                    "column": 1
                }
            },
            "2": {
                "start": {
                    "line": 13,
                    "column": 1
                },
                "end": {
                    "line": 13,
                    "column": 13
                }
            },
            "3": {
                "start": {
                    "line": 16,
                    "column": 0
                },
                "end": {
                    "line": 16,
                    "column": 7
                }
            }
        },
        "branchMap": {}
    }
}

var collector = new istanbul.Collector();
collector.add(coverage);
collector.add(coverage2);

console.log(istanbul.Report.getReportList());
istanbul.Report.create('html', {
	dir: './test'
}).writeReport(collector, true);

istanbul.Report.create('lcovonly', {
	dir: './lcov'
}).writeReport(collector, true);
