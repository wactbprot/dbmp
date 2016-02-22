{
    "Container": [
        {
            "Description": "Choose the calibration documents belonging to the calibration devices to calibrate.",
            "Ctrl": "load",
            "Title": "select cd",
            "Element": [
                "DocumentsOk",
                "DocumentsTable"
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-write_element",
                        "ExpandPar": {
                            "ExchangePaths": [
                                "doc_table",
                                "doc_ok"
                            ],
                            "Values": [
                                "doc_table",
                                "doc_ok"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-get_list",
                        "Use": {
                            "Params": "documents"
                        },
                        "Replace": {
                            "@listname": "select",
                            "@viewname": "calibrations",
                            "@exchangepath": "DocumentsTable.Document"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-update_cd"
                    }
                ]
            ]
        },
        {
            "Description": "Initialisiert Messgeräte und Eingaben",
            "Ctrl": "void",
            "Title": "ini",
            "Element": [
                "Add_Volume-*",
                "Add_Volume_Ok",
                "SE1-Gas"
            ],
            "Definition": [
                [
                    {
                        "TaskName": "SE1-input_element",
                        "ExpandPar": {
                            "Values": [
                                "add_volume",
                                "add_volume",
                                "add_volume",
                                "add_volume"
                            ],
                            "@no": [
                                0,
                                1,
                                2,
                                3
                            ],
                            "@exchpath": [
                                "Add_Volume-0",
                                "Add_Volume-1",
                                "Add_Volume-2",
                                "Add_Volume-3"
                            ]
                        }
                    },
                    {
                        "TaskName": "SE1-input_element",
                        "Use": {
                            "Values": "add_volume_ok"
                        },
                        "Replace": {
                            "@exchpath": "Add_Volume-Ok"
                        }
                    },
                    {
                        "TaskName": "SE1-input_element",
                        "Use": {
                            "Values": "gas"
                        },
                        "Replace": {
                            "@exchpath": "SE1-Gas"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-read_element",
                        "Replace": {
                            "@devicename": "Add_Volume"
                        },
                        "ExpandPar": {
                            "@docpath": [
                                "Calibration.Measurement.AuxValues.Volume",
                                "Calibration.Measurement.AuxValues.Volume",
                                "Calibration.Measurement.AuxValues.Volume",
                                "Calibration.Measurement.AuxValues.Volume"
                            ],
                            "@elemtype": [
                                "0",
                                "1",
                                "2",
                                "3"
                            ],
                            "@runif": [
                                "Ok.Ready",
                                "Ok.Ready",
                                "Ok.Ready",
                                "Ok.Ready"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-read_element",
                        "Replace": {
                            "@devicename": "SE1",
                            "@elemtype": "Gas.Selected",
                            "@docpath": "Calibration.Measurement.AuxValues.Gas",
                            "@runif": "Gas.Ready"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS-SE1-valves_init"
                    }
                ]
            ]
        }
    ],
    "Task": [
        {
            "Action": "writeExchange",
            "Comment": "Add an element to the Exchange api",
            "TaskName": "input_element",
            "ExchangePath": "@exchpath",
            "Values": {
                "add_volume": {
                    "Type": "additional_@no",
                    "Unit": "cm^3",
                    "Value": 0,
                    "Comment": ""
                },
                "add_volume_ok": {
                    "Ready": false
                },
                "gas": {
                    "Caption": "Calibration gas",
                    "Selected": "N2",
                    "Select": [
                        {
                            "value": "N2",
                            "display": "Stickstoff"
                        },
                        {
                            "value": "Ar",
                            "display": "Argon"
                        }
                    ],
                    "Ready": false
                }
            }
        }
    ],
    "Date": [
        {
            "Type": "created",
            "Value": "2016-02-18"
        }
    ],
    "Name": "Mp",
    "Description": "mp definition for SE1 calibration",
    "Standard": "SE1"
}