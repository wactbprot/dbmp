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
                        "TaskName": "Mp-get_calib_select",
                        "Replace": {
                            "_standard": "CE3"
                        }
                    }
                ]
            ],
            "Title": "Container 0"
        },
        {
            "Element": [
                "Stime",
                "target_fill",
                "CUCO-*-ind_offset",
                "CUCO-*-ind"
            ],
            "Description": "testdescr container 1",
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "Mp-pressure_element",
                        "Replace": {
                            "_elemtype": "fill_offset",
                            "_docpath": "Calibration.Measurement.AuxValues.Pressure",
                            "_caption": "offset of filling pressure"
                        }
                    },
                    {
                        "TaskName": "Mp-pressure_element",
                        "Replace": {
                            "_elemtype": "fill",
                            "_docpath": "Calibration.Measurement.Values.Pressure",
                            "_caption": "filling pressure"
                        }
                    },
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "_elemtype": "ind_offset",
                            "_docpath": "Calibration.Measurement.Values.Pressure",
                            "_caption": "offset of indicated pressure"
                        }
                    },
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "_elemtype": "ind",
                            "_docpath": "Calibration.Measurement.Values.Pressure",
                            "_caption": "indicated pressure"
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
            "Element": [
                "Stime",
                "target_fill"
            ],
            "Description": "testdescr container 2",
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Definition": [
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
            "Description": "testdescr container 3",
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Definition": [
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
            "Description": "testdescr container 4",
            "Ctrl": "unformed",
            "NoOfRepeats": 1,
            "Definition": [
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
            "Torr",
            "mmHg"
        ],
        "_recipeclass": "range_init"
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
        },
        "target_p_fill": {
            "Unit": {
                "required": false,
                "value": "mbar"
            },
            "Value": {
                "required": false,
                "value": 0
            }
        }
    },
    "Name": "Mp",
    "Recipes": [
        {
            "Conditions": [
                {
                    "ExchangePath": "target_fill.Value",
                    "Methode": "lt",
                    "Value": 0.13
                },
                {
                    "ExchangePath": "target_fill.Value",
                    "Methode": "gt",
                    "Value": 0.01
                },
                {
                    "ExchangePath": "target_fill.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "FM3_1T-range_init",
                        "Replace": {
                            "_range": "X0.01"
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
            "RecipeClass": "range_init",
            "ShortDescr": "Sets the Range depending on pfill\n"
        },
        {
            "Conditions": [
                {
                    "ExchangePath": "target_fill.Value",
                    "Methode": "lt",
                    "Value": 1.3
                },
                {
                    "ExchangePath": "target_fill.Value",
                    "Methode": "gt",
                    "Value": 0.1
                },
                {
                    "ExchangePath": "target_fill.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
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
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "_waittime": 1000
                        }
                    }
                ]
            ],
            "RecipeClass": "range_init",
            "ShortDescr": "Sets the Range depending on pfill\n"
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
            "Action": "wait",
            "Comment": "_waitfor  _waittime ms",
            "TaskName": "cond_wait",
            "FromExchange": "wait_time.Value",
            "RunIf": "got_time.Value",
            "Value": {
                "WaitTime": "wait_time.Value"
            }
        },
        {
            "Action": "select",
            "Comment": "selects recipes",
            "TaskName": "select_recipe",
            "Value": {
                "RecipeClass": "_recipeclass"
            }
        },
        {
            "Action": "addElement",
            "Comment": "Add an element to the Container _container Exchange api",
            "TaskName": "pressure_element",
            "Key": "_devicename-_elemtype",
            "Value": {
                "DisplayAs": "section",
                "Caption": {
                    "required": false,
                    "value": "_caption",
                    "type": "string"
                },
                "DocPath": {
                    "required": true,
                    "value": "_docpath",
                    "type": "string"
                },
                "Type": {
                    "required": true,
                    "value": "_elemtype",
                    "type": "string"
                },
                "Unit": {
                    "required": true,
                    "value": "mbar",
                    "options": "_pressureunits",
                    "type": "string"
                },
                "Value": {
                    "required": true,
                    "type": "number"
                },
                "Comment": {
                    "required": false,
                    "type": "string"
                }
            }
        },
        {
            "Action": "rmElement",
            "Comment": "Remove an Element from Elements and Exchange",
            "TaskName": "remove_element",
            "Key": "_devicename-_elemtype"
        },
        {
            "Action": "getList",
            "Comment": "Remove an Element from Elements and Exchange",
            "TaskName": "get_calib_select",
            "ViewName": "calibrations",
            "ListName": "select",
            "Params": {
                "key": "_standard-_year"
            },
            "ExchangePath": "Documents"
        }
    ],
    "Description": "ssmp test definition",
    "Standard": "CE3"
}