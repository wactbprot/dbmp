{
    "Name": "Mp",
    "Title": "ssmp",
    "Exchange": {
        "ctrlclient": {
            "Name": "",
            "Atime": ""
        }
    },
    "Container": [
        {
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Recipe": [
                [
                    {
                        "TaskName": "Mp-pressure_element",
                        "Replace": {
                            "_elemtype": "fill_offset",
                            "_docpath": "Calibration.Measurement.AuxValues.Pressure"
                        }
                    },
                    {
                        "TaskName": "Mp-pressure_element",
                        "Replace": {
                            "_elemtype": "fill",
                            "_docpath": "Calibration.Measurement.Values.Pressure"
                        }
                    },
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "_elemtype": "ind_offset",
                            "_docpath": "Calibration.Measurement.Values.Pressure"
                        }
                    },
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "_elemtype": "ind",
                            "_docpath": "Calibration.Measurement.Values.Pressure"
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
        "_docpath": ""
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
            "Action": "toexchange",
            "Comment": "Add an element to the Exchange api",
            "TaskName": "pressure_element",
            "Value": {
                "DocPath": "_docpath",
                "Type": "_elemtype",
                "Unit": "mbar",
                "Value": "",
                "Comment": ""
            }
        }
    ]
}