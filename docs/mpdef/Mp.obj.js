{
    "Container": [
        {
            "Element": [
                "Documents"
            ],
            "Description": "testdescr container 0",
            "Ctrl": "load;run",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "Mp-get_calib_select",
                        "Replace": {
                            "@standard": "CE3"
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
            "Ctrl": "ready",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "@elemtype": "ind_offset",
                            "@caption": "offset of indicated pressure",
                            "@docpath": "Calibration.Measurement.AuxValues.Conductance"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "CUCO-pressure_element",
                        "Replace": {
                            "@elemtype": "ind",
                            "@caption": "indicated pressure",
                            "@docpath": "Calibration.Measurement.AuxValues.Conductance"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "CUCO-read_element",
                        "Replace": {
                            "@elemtype": "ind_offset",
                            "@docpath": "Calibration.Measurement.Values.Pressure"
                        }
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
            "Ctrl": "ready",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "Mp-remove_element",
                        "Replace": {
                            "@container": 0,
                            "@devicename": "Mp",
                            "@elemtype": "fill"
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
            "Ctrl": "ready",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "Mp-select_recipe",
                        "Replace": {
                            "@recipeclass": "range_init"
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
            "Ctrl": "ready",
            "NoOfRepeats": 1,
            "Definition": [
                [
                    {
                        "TaskName": "Mp-cond_wait",
                        "Replace": {
                            "@waittime": 1000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-slope_exec",
                        "Replace": {
                            "@prefix": "lw",
                            "@docpath": "Calibration.Measurement.AuxValues.Conductance"
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
        "@waittime": 1000,
        "@waitfor": "Ready in",
        "@waitunit": "ms",
        "@docpath": "",
        "@pressureunits": [
            "mbar",
            "Pa",
            "kPa",
            "Torr",
            "mmHg"
        ],
        "@recipeclass": "range_init"
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
                        "TaskName": "FM3_1T-set_range",
                        "Replace": {
                            "@range": "X0.01"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "@waittime": 1000
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
                        "TaskName": "FM3_1T-set_range",
                        "Replace": {
                            "@range": "X1"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Mp-wait",
                        "Replace": {
                            "@waittime": 1000
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
            "Comment": "@waitfor  @waittime ms",
            "TaskName": "wait",
            "Value": {
                "WaitTime": "@waittime"
            }
        },
        {
            "Action": "wait",
            "Comment": "@waitfor  @waittime ms",
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
                "RecipeClass": "@recipeclass"
            }
        },
        {
            "Action": "readElement",
            "Comment": "Reads values under the given exchange point.",
            "TaskName": "read_element",
            "DocPath": "@docpath",
            "Key": "@devicename-@elemtype"
        },
        {
            "Action": "addElement",
            "Comment": "Add an element to the Exchange api",
            "TaskName": "pressure_element",
            "Key": "@devicename-@elemtype",
            "Value": {
                "DisplayAs": "section",
                "Ready": false,
                "Caption": {
                    "required": false,
                    "value": "@caption",
                    "type": "string"
                },
                "Type": {
                    "required": true,
                    "value": "@elemtype",
                    "type": "string",
                    "save": true
                },
                "Unit": {
                    "required": true,
                    "value": "mbar",
                    "options": "@pressureunits",
                    "type": "string",
                    "save": true
                },
                "Value": {
                    "required": true,
                    "type": "number",
                    "save": true
                },
                "Comment": {
                    "required": false,
                    "type": "string",
                    "save": true
                }
            }
        },
        {
            "Action": "getList",
            "Comment": "Remove an Element from Elements and Exchange",
            "TaskName": "get_calib_select",
            "ViewName": "calibrations",
            "ListName": "select",
            "Params": {
                "key": "@standard-@year"
            },
            "ExchangePath": "Documents"
        }
    ],
    "Description": "ssmp test definition",
    "Standard": "CE3"
}