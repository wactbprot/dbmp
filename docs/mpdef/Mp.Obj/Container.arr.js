[
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
                        "_caption": "offset of filling pressure",
                        "_container": 0
                    }
                },
                {
                    "TaskName": "Mp-pressure_element",
                    "Replace": {
                        "_elemtype": "fill",
                        "_docpath": "Calibration.Measurement.Values.Pressure",
                        "_caption": "filling pressure",
                        "_container": 0
                    }
                },
                {
                    "TaskName": "CUCO-pressure_element",
                    "Replace": {
                        "_elemtype": "ind_offset",
                        "_docpath": "Calibration.Measurement.Values.Pressure",
                        "_caption": "offset of indicated pressure",
                        "_container": 0
                    }
                },
                {
                    "TaskName": "CUCO-pressure_element",
                    "Replace": {
                        "_elemtype": "ind",
                        "_docpath": "Calibration.Measurement.Values.Pressure",
                        "_caption": "indicated pressure",
                        "_container": 0
                    }
                },
                {
                    "TaskName": "FM3_1T-device_init"
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
                    "TaskName": "Mp-remove_element",
                    "Replace": {
                        "_container": 0,
                        "_devicename": "Mp",
                        "_elemtype": "fill"
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
        "Title": "Container 2"
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
                    "TaskName": "Mp-select_recipe",
                    "Replace": {
                        "_recipeclass": "range_init"
                    }
                }
            ]
        ],
        "Title": "Container 3"
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
                    "TaskName": "Mp-cond_wait",
                    "Replace": {
                        "_waittime": 1000
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
        "Title": "Container 4"
    }
]