{
    "Name": "Mp",
    "Title": "ssmp",
    "Exchange": {
        "ctrl_client": {
            "Name": "",
            "Password": "",
            "Atime": ""
        }
    },
    "Container": [
        {
            "Element": {
                "ctrl_client": {
                    "Name": {
                        "type": "text",
                        "required": true
                    },
                    "Atime": {
                        "type": "integer"
                    }
                }
            },
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Recipe": [
                [
                    {
                        "TaskName": "Mp-pressure_element",
                        "Replace": {
                            "_elemtype": "fill_offset",
                            "_docpath": "Calibration.Measurement.AuxValues.Pressure",
                            "_container": 0
                        }
                    },
                    {
                        "TaskName": "Mp-pressure_element",
                        "Replace": {
                            "_elemtype": "fill",
                            "_docpath": "Calibration.Measurement.Values.Pressure",
                            "_container": 0
                        }
                    },
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "_elemtype": "ind_offset",
                            "_docpath": "Calibration.Measurement.Values.Pressure",
                            "_container": 0
                        }
                    },
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "_elemtype": "ind",
                            "_docpath": "Calibration.Measurement.Values.Pressure",
                            "_container": 0
                        }
                    },
                    {
                        "TaskName": "FM3_1T-device_init"
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-range_init",
                        "Replace": {
                            "_range": "X1"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-slope_exec",
                        "Replace": {
                            "_prefix": "lw",
                            "_docpath": "Calibration.Measurement.AuxValues.Conductance"
                        }
                    }
                ]
            ],
            "Title": "Container 1"
        },
        {
            "Element": {
                "ctrl_client": {
                    "Name": {
                        "type": "text",
                        "required": true
                    },
                    "Atime": {
                        "type": "integer"
                    }
                }
            },
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Recipe": [
                [
                    {
                        "TaskName": "FM3_1T-slope_exec",
                        "Replace": {
                            "_prefix": "lw",
                            "_docpath": "Calibration.Measurement.AuxValues.Conductance"
                        }
                    }
                ]
            ],
            "Title": "Container 2"
        }
    ],
    "Date": [
        {
            "Type": "created",
            "Value": "2014-04-04"
        }
    ],
    "Defaults": {
        "_waittime": 1000,
        "_waitfor": "Ready in",
        "_waitunit": "ms",
        "_docpath": "",
        "_pressureunits": [
            "mbar",
            "Pa",
            "kPa",
            "Torr"
        ]
    },
    "Recipes": [
        {
            "Conditions": [
                {
                    "ReadFrom": "token_1",
                    "Methode": "LT",
                    "Params": [
                        "value_1",
                        0.0001
                    ]
                },
                {
                    "ReadFrom": "token_1",
                    "Methode": "GT",
                    "Params": [
                        "value_1",
                        1e-11
                    ]
                }
            ],
            "Recipe": [
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waittime": 1000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waittime": 1000
                        }
                    }
                ]
            ],
            "RecipeClass": "choose",
            "ShortDescr": "Warten\n"
        }
    ],
    "Tasks": [
        {
            "Action": "wait",
            "Comment": "_waitfor  _waittime ms",
            "TaskName": "wait",
            "Value": {
                "WaitTime": "_waittime"
            }
        },
        {
            "Action": "addElement",
            "Comment": "Add an element to the Container _container Exchange api",
            "TaskName": "pressure_element",
            "Container": "_container",
            "Key": "_devicename-_elemtype",
            "Value": {
                "Caption": {
                    "exchange": false,
                    "required": false,
                    "value": "_caption"
                },
                "DocPath": {
                    "exchange": true,
                    "required": true,
                    "value": "_docpath"
                },
                "Type": {
                    "exchange": true,
                    "required": true,
                    "value": "_elemtype",
                    "type": "text"
                },
                "Unit": {
                    "exchange": true,
                    "required": true,
                    "value": "mbar",
                    "options": "_pressureunits"
                },
                "Value": {
                    "exchange": true,
                    "required": true,
                    "type": "number"
                },
                "Comment": {
                    "exchange": true,
                    "required": false,
                    "type": "text"
                }
            }
        }
    ]
}