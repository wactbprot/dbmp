{
    "Container": [
        {
            "Element": [
                "Documents"
            ],
            "Description": "testdescr container 0",
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 2000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 800
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 800
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 800
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 200
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 500
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 800
                        }
                    }
                ]
            ],
            "Title": "Container 0"
        },
        {
            "Element": [
                "Stime"
            ],
            "Description": "testdescr container 1",
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    },
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waitfor": "nothing",
                            "_waittime": 1000
                        }
                    }
                ]
            ],
            "Title": "Container 1"
        }
    ],
    "Date": [
        {
            "Type": "created",
            "Value": "2014-07-14"
        }
    ],
    "Defaults": {
        "_waittime": 1000
    },
    "Exchange": {
        "Stime": {
            "Unit": {
                "required": false,
                "value": "ms"
            },
            "Value": {
                "required": false,
                "value": 0
            }
        },
        "Rtime": {
            "Unit": {
                "required": false,
                "value": "ms"
            },
            "Value": {
                "required": false,
                "value": 0
            }
        }
    },
    "Name": "Mp",
    "Tasks": [
        {
            "Action": "wait",
            "Comment": "_waitfor  _waittime ms",
            "TaskName": "wait",
            "Value": {
                "WaitTime": "_waittime"
            }
        }
    ],
    "Description": "ssmp test definition",
    "Standard": "CE3"
}