{
    "Name": "CE3",
    "Description": "The CE3 calibration program.",
    "Standard": "CE3",
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
            "Element": [
                "*ini_ok"
            ],
            "Description": "initializes all FM3/CE3 device",
            "Ctrl": "load",
            "Title": "device ini",
            "Definition": [
                [
                    {
                        "TaskName": "Commons-db_info",
                        "Replace": {
                            "@dbinfo": "DataBase"
                        }
                    },
                    {
                        "TaskName": "Commons-relay_info",
                        "Replace": {
                            "@dbinfo": "Relay"
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "unit_mbar",
                                "unit_mbar",
                                "unit_mbar"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "high_res",
                                "high_res",
                                "high_res"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "no_aver",
                                "no_aver",
                                "no_aver"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "high_range",
                                "high_range",
                                "high_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_CE3-DMM_Agilent-device_ini",
                            "VS_CE3-device_ini",
                            "Corvus_1-is_ready",
                            "Corvus_2-is_ready"
                        ],
                        "ExpandPar": {
                            "@exchpath": [
                                "FM3_CE3-DMM_Agilent_ini_ok.Bool",
                                "VS_CE3_ini_ok.Bool",
                                "Corvus_1_ini_ok.Bool",
                                "Corvus_2_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "MKS_Flow_Ctrl-device_ini"
                        ],
                        "ExpandSeq": {
                            "@exchpath": [
                                "MKS_Flow_Ctrl_ini_ok.Bool"
                            ],
                            "Values": [
                                "set_zero"
                            ]
                        }
                    }
                ]
            ]
        },
        {
            "Description": "Prepair measurement",
            "Ctrl": "unformed",
            "Title": "prepair",
            "Element": [
                "CE3-gas",
                "CE3-operation_kind",
                "*-cal_port"
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-get_list",
                        "Use": {
                            "Params": "todo"
                        },
                        "Replace": {
                            "@standard": "CE3",
                            "@listname": "generate_target_select",
                            "@viewname": "todos",
                            "@exchangepath": "Target_Pressure"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "std_exchange_element",
                        "Customer": true,
                        "Use": {
                            "Values": "cal_port"
                        },
                        "Replace": {
                            "@caption": "Calibration port",
                            "@elemtype": "cal_port"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "std_exchange_element",
                        "Customer": true,
                        "Use": {
                            "Values": "pressure_element"
                        },
                        "Replace": {
                            "@caption": "Offset",
                            "@elemtype": "ind_offset"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "std_exchange_element",
                        "Customer": true,
                        "Use": {
                            "Values": "pressure_element"
                        },
                        "Replace": {
                            "@caption": "Pressure",
                            "@elemtype": "ind"
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "CE3-std_exchange_element",
                            "CE3-std_exchange_element"
                        ],
                        "Replace": {
                            "@caption": "Calibration Gas",
                            "@devicename": "CE3"
                        },
                        "ExpandPar": {
                            "Values": [
                                "gas",
                                "operation_kind"
                            ],
                            "@elemtype": [
                                "gas",
                                "operation_kind"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "Common-read_element",
                            "Common-read_element"
                        ],
                        "Replace": {
                            "@devicename": "CE3"
                        },
                        "ExpandPar": {
                            "@docpath": [
                                "Calibration.Measurement.AuxValues.Gas",
                                "Calibration.Measurement.AuxValues.OperationKind"
                            ],
                            "@elemtype": [
                                "gas.Selected",
                                "operation_kind.Selected"
                            ],
                            "@runif": [
                                "gas.Ready",
                                "operation_kind.Ready"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "read_element",
                        "Customer": true,
                        "Replace": {
                            "@docpath": "Calibration.Measurement.AuxValues.CalPort",
                            "@elemtype": "cal_port.Selected",
                            "@runif": "cal_port.Ready"
                        }
                    }
                ]
            ]
        },
        {
            "Description": "Offset",
            "Ctrl": "unformed",
            "Title": "offset",
            "Element": [
                "*_offset"
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-get_date",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Date",
                            "@type": "measurement"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "CE3-std_exchange_element",
                        "Use": {
                            "Values": "pressure_element"
                        },
                        "ExpandPar": {
                            "@elemtype": [
                                "X1_offset",
                                "X01_offset",
                                "X001_offset",
                                "X1_offset",
                                "X01_offset",
                                "X001_offset",
                                "X1_offset",
                                "X01_offset",
                                "X001_offset"
                            ],
                            "@devicename": [
                                "FM3_1T",
                                "FM3_1T",
                                "FM3_1T",
                                "FM3_10T",
                                "FM3_10T",
                                "FM3_10T",
                                "FM3_1000T",
                                "FM3_1000T",
                                "FM3_1000T"
                            ],
                            "@caption": [
                                "1T Offset (Range X1)",
                                "1T Offset (Range X0.1)",
                                "1T Offset (Range X0.01)",
                                "10T Offset (Range X1)",
                                "10T Offset (Range X0.1)",
                                "10T Offset (Range X0.01)",
                                "1000T Offset (Range X1)",
                                "1000T Offset (Range X0.1)",
                                "1000T Offset (Range X0.01)"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "high_range",
                                "high_range",
                                "high_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 4000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1000T-check_V11"
                    },
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V11",
                            "RunIfs": "open_V11"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_VTMP"
                        }
                    },
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 5000
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-read_out",
                            "FM3_10T-read_out",
                            "FM3_1000T-read_out"
                        ],
                        "Replace": {
                            "@repeat": 20,
                            "@waittime": 500,
                            "@docpath": "Calibration.Measurement.AuxValues.Pressure"
                        },
                        "ExpandPar": {
                            "@exchpath": [
                                "FM3_1T-X1_offset",
                                "FM3_10T-X1_offset",
                                "FM3_1000T-X1_offset"
                            ],
                            "@token": [
                                "cdgc_x1_offset",
                                "cdga_x1_offset",
                                "cdgb_x1_offset"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "med_range",
                                "med_range",
                                "med_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 4000
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-read_out",
                            "FM3_10T-read_out",
                            "FM3_1000T-read_out"
                        ],
                        "Replace": {
                            "@repeat": 20,
                            "@waittime": 500,
                            "@docpath": "Calibration.Measurement.AuxValues.Pressure"
                        },
                        "ExpandPar": {
                            "@exchpath": [
                                "FM3_1T-X01_offset",
                                "FM3_10T-X01_offset",
                                "FM3_1000T-X01_offset"
                            ],
                            "@token": [
                                "cdgc_x0.1_offset",
                                "cdga_x0.1_offset",
                                "cdgb_x0.1_offset"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "low_range",
                                "low_range",
                                "low_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 4000
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-read_out",
                            "FM3_10T-read_out",
                            "FM3_1000T-read_out"
                        ],
                        "Replace": {
                            "@repeat": 20,
                            "@waittime": 500,
                            "@docpath": "Calibration.Measurement.AuxValues.Pressure"
                        },
                        "ExpandPar": {
                            "@exchpath": [
                                "FM3_1T-X001_offset",
                                "FM3_10T-X001_offset",
                                "FM3_1000T-X001_offset"
                            ],
                            "@token": [
                                "cdgc_x0.01_offset",
                                "cdga_x0.01_offset",
                                "cdgb_x0.01_offset"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-read_element",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.AuxValues.Pressure"
                        },
                        "ExpandSeq": {
                            "@elemtype": [
                                "X1_offset",
                                "X01_offset",
                                "X001_offset",
                                "X1_offset",
                                "X01_offset",
                                "X001_offset",
                                "X1_offset",
                                "X01_offset",
                                "X001_offset"
                            ],
                            "@devicename": [
                                "FM3_1T",
                                "FM3_1T",
                                "FM3_1T",
                                "FM3_10T",
                                "FM3_10T",
                                "FM3_10T",
                                "FM3_1000T",
                                "FM3_1000T",
                                "FM3_1000T"
                            ],
                            "@runif": [
                                "X1_offset.Ready",
                                "X01_offset.Ready",
                                "X001_offset.Ready",
                                "X1_offset.Ready",
                                "X01_offset.Ready",
                                "X001_offset.Ready",
                                "X1_offset.Ready",
                                "X01_offset.Ready",
                                "X001_offset.Ready"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandPar": {
                            "Values": [
                                "high_range",
                                "high_range",
                                "high_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool.value",
                                "FM3_10T_ini_ok.Bool.value",
                                "FM3_1000T_ini_ok.Bool.value"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_VTMP"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-get_time",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.AuxValues.Time",
                            "@type": "offset_mt"
                        }
                    }
                ]
            ]
        },
        {
            "Description": "Select Filling Pressure, Measurement",
            "Ctrl": "unformed",
            "Title": "meas",
            "Element": [
                "Target_Pressure",
                "Filling_Pressure",
                "Filling_Pressure_Dev",
              "*-ind_offset",
              "*-ind"

            ],
            "Definition": [
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "start_meas"
                        }
                    }
                ]
            ]
        }
    ],
    "Definitions": [
        {
            "DefinitionClass": "start_meas",
            "ShortDescr": "select target pressure, cal filling pressure\n",
            "Condition": [
                {
                    "ExchangePath": "run_time.Value",
                    "Methode": "gt",
                    "Value": 0
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "CE3-meas_exchange_element",
                        "ExpandSeq": {
                            "ExchangePaths": [
                                "target_pressure",
                                "target_pfill",
                                "pfill_dev"
                            ],
                            "Values": [
                                "target_pressure",
                                "target_pfill",
                                "pfill_dev"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-get_list",
                        "Use": {
                            "Params": "todo"
                        },
                        "Replace": {
                            "@standard": "CE3",
                            "@listname": "generate_target_select",
                            "@viewname": "todos",
                            "@exchangepath": "Target_Pressure"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "CE3-cal_pfill"
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "set_range"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 0.13
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 0.013
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandSeq": {
                            "Values": [
                                "low_range",
                                "low_range",
                                "med_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "set_filling_pressure"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 1.33
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 0.13
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandSeq": {
                            "Values": [
                                "med_range",
                                "med_range",
                                "med_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "set_filling_pressure"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 1.33
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandSeq": {
                            "Values": [
                                "med_range",
                                "high_range",
                                "med_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "set_filling_pressure"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 133
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandSeq": {
                            "Values": [
                                "high_range",
                                "high_range",
                                "med_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "set_filling_pressure"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 1330
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 133
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": [
                            "FM3_1T-device_ini",
                            "FM3_10T-device_ini",
                            "FM3_1000T-device_ini"
                        ],
                        "ExpandSeq": {
                            "Values": [
                                "high_range",
                                "high_range",
                                "high_range"
                            ],
                            "@exchpath": [
                                "FM3_1T_ini_ok.Bool",
                                "FM3_10T_ini_ok.Bool",
                                "FM3_1000T_ini_ok.Bool"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "set_filling_pressure"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "set_filling_pressure",
            "ShortDescr": "Sets the pfill\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 13
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 0.01
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-wait"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_VTMP"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "RunIfs": "V11_ok",
                            "Values": "open_V11"
                        }
                    },
                    {
                        "TaskName": "FM3_1000T-check_V11"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-open_dvg"
                    }
                ],
                [
                    {
                        "TaskName": "FM3_10T-ctrl_pfill"
                    },
                    {
                        "TaskName": "MKS_Flow_Ctrl-ctrl_pfill"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-close_dvg"
                    },
                    {
                        "TaskName": "MKS_Flow_Ctrl-device_ini",
                        "Use": {
                            "Values": "set_zero"
                        }
                    },
                    {
                        "TaskName": "CE3-meas_exchange_element",
                        "Use": {
                            "ExchangePaths": "reset_pfill_ok",
                            "Values": "reset_pfill_ok"
                        }
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "measure_drift"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "set_filling_pressure",
            "ShortDescr": "Sets the pfill\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 1330
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-wait"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_VTMP"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V11"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-open_dvg"
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1000T-ctrl_pfill"
                    },
                    {
                        "TaskName": "MKS_Flow_Ctrl-ctrl_pfill"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-close_dvg"
                    },
                    {
                        "TaskName": "MKS_Flow_Ctrl-device_ini",
                        "Use": {
                            "Values": "set_zero"
                        }
                    },
                    {
                        "TaskName": "CE3-meas_exchange_element",
                        "Use": {
                            "ExchangePaths": "reset_pfill_ok",
                            "Values": "reset_pfill_ok"
                        }
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "measure_drift"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 8e-10
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-get_time",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Values.Time",
                            "@type": "drift_mt"
                        }
                    },
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V21"
                        }
                    },
                    {
                        "TaskName": "Common-wait"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V22"
                        }
                    },
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 10000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-drift_exec"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V22"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "customer_offset"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 1e-9
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-get_time",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Values.Time",
                            "@type": "drift_mt"
                        }
                    },
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V21"
                        }
                    },
                    {
                        "TaskName": "Common-wait"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V22"
                        }
                    },
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 10000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-drift_exec"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V22"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "customer_offset"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.00009
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-get_time",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Values.Time",
                            "@type": "drift_mt"
                        }
                    },
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V22"
                        }
                    },
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 10000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-drift_exec"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V22"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "customer_offset"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.00009
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Common-get_time",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Values.Time",
                            "@type": "drift_mt"
                        }
                    },
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V22"
                        }
                    },
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 10000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-drift_exec"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V22"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "customer_offset"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "prepair_cond",
            "ShortDescr": "prepairs the conductance DV2 (kl. LW)\n",
            "Condition": [
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 8e-10
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-check_position"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-exec",
                        "Use": {
                            "Values": "open_klLW"
                        },
                        "Replace": {
                            "@runif": "LW_kl_startpos.Bool"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-check_position"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "test_sz"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "prepair_cond",
            "ShortDescr": "prepairs the conductance DV1 (gr. LW)\n",
            "Condition": [
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.0002
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-check_position"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-exec",
                        "Use": {
                            "Values": "open_grLW"
                        },
                        "Replace": {
                            "@runif": "LW_gr_startpos.Bool"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-check_position"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "FM3_CE3-DMM_Agilent-read_out",
                        "Replace": {
                            "@prefix": "agilentCh",
                            "@sufix": "_before_lw"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "test_sz"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "test_sz",
            "ShortDescr": "executes a test saw tooth to gain params\n",
            "Condition": [
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 8e-10
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.0002
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "Corvus_1-check_position"
                    },
                    {
                        "TaskName": "Corvus_2-dvg_position"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V22"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 10000,
                            "@waitfor": "rough flow equilibrium"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-get_time",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Values.Time",
                            "@type": "start_sz_mt",
                            "@timepath": "Time-start_sz"
                        }
                    },
                    {
                        "TaskName": "FM3_1T-read_out",
                        "Replace": {
                            "@repeat": 10,
                            "@waittime": 100,
                            "@exchpath": "FM3_1T-start_sz",
                            "@token": "start_sz"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 20000,
                            "@waitfor": "pressure drop"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-read_out",
                        "Replace": {
                            "@repeat": 10,
                            "@waittime": 100,
                            "@exchpath": "FM3_1T-end_sz",
                            "@token": "end_sz"
                        }
                    },
                    {
                        "TaskName": "Common-get_time",
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Values.Time",
                            "@type": "end_sz_mt",
                            "@timepath": "Time-end_sz"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-read_out",
                        "Replace": {
                            "@repeat": 10,
                            "@waittime": 100,
                            "@exchpath": "FM3_1T-start_drv",
                            "@token": "start_drv"
                        }
                    },
                    {
                        "TaskName": "Corvus_2-displacer_position",
                        "Replace": {
                            "@exchpath": "Displacer-start_drv.Value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_exec",
                        "Use": {
                            "Values": "displacer_in"
                        },
                        "Replace": {
                            "@rot": 1
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-read_out",
                        "Replace": {
                            "@repeat": 10,
                            "@waittime": 100,
                            "@exchpath": "FM3_1T-end_drv",
                            "@token": "end_drv"
                        }
                    },
                    {
                        "TaskName": "Corvus_2-displacer_position",
                        "Replace": {
                            "@exchpath": "Displacer-end_drv.Value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "CE3-cal_sz_param"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V22"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "meas_sz"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "meas_sz",
            "ShortDescr": "sz measurement\n",
            "Condition": [
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 8e-10
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.0002
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "FM3_CE3-DMM_Agilent-read_out",
                        "Replace": {
                            "@prefix": "agilentCh",
                            "@sufix": "_before_lw"
                        }
                    },
                    {
                        "TaskName": "FM3_1T-read_save",
                        "Replace": {
                            "@repeat": 10,
                            "@waittime": 100,
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@token": "dp_before"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "close_V22"
                        }
                    },
                    {
                        "TaskName": "Common-wait",
                        "Replace": {
                            "@waittime": 10000
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_position"
                    },
                    {
                        "TaskName": "FM3_1T-read_save",
                        "Replace": {
                            "@repeat": 10,
                            "@waittime": 100,
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@token": "dp_after"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_exec",
                        "Use": {
                            "Values": "displacer_in"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_position"
                    },
                    {
                        "TaskName": "FM3_1T-sz_read_out"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_exec",
                        "Use": {
                            "Values": "displacer_in"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_position"
                    },
                    {
                        "TaskName": "FM3_1T-sz_read_out"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_exec",
                        "Use": {
                            "Values": "displacer_in"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_position"
                    },
                    {
                        "TaskName": "FM3_1T-sz_read_out"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_exec",
                        "Use": {
                            "Values": "displacer_in"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_position"
                    },
                    {
                        "TaskName": "FM3_1T-sz_read_out"
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_exec",
                        "Use": {
                            "Values": "displacer_in"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_position"
                    },
                    {
                        "TaskName": "FM3_1T-sz_read_out"
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V22"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_sz_exec",
                        "ExpandSeq": {
                            "Values": [
                                "displacer_out",
                                "displacer_out",
                                "displacer_out",
                                "displacer_out",
                                "displacer_out"
                            ]
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_CE3-DMM_Agilent-read_out",
                        "Replace": {
                            "@prefix": "agilentCh",
                            "@sufix": "_after_lw"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "end_sz"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "end_sz",
            "ShortDescr": "reset sz\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 0.013
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 8e-10
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "FM3_10T-read_save",
                        "Replace": {
                            "@token": "after_lw_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-exec",
                        "Use": {
                            "Values": "close_klLW"
                        },
                        "Replace": {
                            "@runif": "LW_kl_endpos.Bool"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_exec",
                        "Use": {
                            "Values": "displacer_out"
                        },
                        "Replace": {
                            "@rot": 1
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "start_meas"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "end_sz",
            "ShortDescr": "reset sz\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 500
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.0002
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "FM3_1000T-read_save",
                        "Replace": {
                            "@token": "after_lw_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-exec",
                        "Use": {
                            "Values": "close_grLW"
                        },
                        "Replace": {
                            "@runif": "LW_gr_endpos.Bool"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_exec",
                        "Use": {
                            "Values": "displacer_out"
                        },
                        "Replace": {
                            "@rot": 1
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "start_meas"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "end_sz",
            "ShortDescr": "reset sz\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 500
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 8e-10
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "FM3_1000T-read_save",
                        "Replace": {
                            "@token": "after_lw_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-exec",
                        "Use": {
                            "Values": "close_klLW"
                        },
                        "Replace": {
                            "@runif": "LW_kl_endpos.Bool"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_exec",
                        "Use": {
                            "Values": "displacer_out"
                        },
                        "Replace": {
                            "@rot": 1
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "start_meas"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "end_sz",
            "ShortDescr": "reset sz\n",
            "Condition": [
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "gt",
                    "Value": 0.013
                },
                {
                    "ExchangePath": "Filling_Pressure.Value",
                    "Methode": "lt",
                    "Value": 13.3
                },
                {
                    "ExchangePath": "Filling_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.0002
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
                [
                    {
                        "TaskName": "FM3_10T-read_save",
                        "Replace": {
                            "@token": "after_lw_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
                        }
                    }
                ],
                [
                    {
                        "TaskName": "VS_CE3-ctrl_valve",
                        "Use": {
                            "Values": "open_V21"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_1-exec",
                        "Use": {
                            "Values": "close_klLW"
                        },
                        "Replace": {
                            "@runif": "LW_gr_endpos.Bool"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Corvus_2-displacer_exec",
                        "Use": {
                            "Values": "displacer_out"
                        },
                        "Replace": {
                            "@rot": 1
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "start_meas"
                        }
                    }
                ]
            ]
        },
        {
            "DefinitionClass": "customer_offset",
            "ShortDescr": "ini and read customer offset\n",
            "Condition": [
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "gt",
                    "Value": 1e-11
                },
                {
                    "ExchangePath": "Target_Pressure.Selected",
                    "Methode": "lt",
                    "Value": 0.0002
                },
                {
                    "ExchangePath": "Target_Pressure.Unit",
                    "Methode": "eq",
                    "Value": "mbar"
                }
            ],
            "Definition": [
              [
                    {
                      "TaskName": "common-wait"
                    }
                ],
                [
                      {
                        "TaskName": "read_element",
                        "Customer": true,
                        "Replace": {
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@elemtype": "ind_offset",
                            "@runif": "ind_offset.Ready"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "Commons-select_definition",
                        "Replace": {
                            "@definitionclass": "prepair_cond"
                        }
                    }
                ]

            ]
        }
    ],
    "Task": [
        {
            "Action": "ctrlContainer",
            "Comment": "Starts ini Container",
            "TaskName": "run_container",
            "RunIf": "DocumentsOk.Ready",
            "Value": {
                "1": "load;run",
                "2": "load;run"
            }
        },
        {
            "Action": "writeExchange",
            "Comment": "Add an element to the Exchange api",
            "TaskName": "std_exchange_element",
            "ExchangePath": "@devicename-@elemtype",
            "Values": {
                "cal_port": {
                    "Caption": "@devicename",
                    "Selected": "P1",
                    "Select": [
                        {
                            "value": "P1",
                            "display": "Port 1 (rechts)"
                        },
                        {
                            "value": "P2",
                            "display": "Port 2 (mitte)"
                        },
                        {
                            "value": "P3",
                            "display": "Port 3 (links)"
                        },
                        {
                            "value": "P4",
                            "display": "Port 4 (XHV)"
                        }
                    ],
                    "Ready": false
                },
                "operation_kind": {
                    "Caption": "Kind of operation",
                    "Selected": "opK1",
                    "Select": [
                        {
                            "value": "opK1",
                            "display": "UHV-KP on UHV-Correction"
                        },
                        {
                            "value": "opK2",
                            "display": "UHV-KP on XHV-KP on"
                        },
                        {
                            "value": "opK3",
                            "display": "UHV-KP on XHV-Correction"
                        },
                        {
                            "value": "opK4",
                            "display": "const. C Methode"
                        },
                        {
                            "value": "opK5",
                            "display": "SRG comparison"
                        }
                    ],
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
                },
                "pressure_element": {
                    "Caption": "@caption @devicename",
                    "Type": "",
                    "Value": null,
                    "SdValue": null,
                    "N": null,
                    "Unit": "",
                    "Ready": false
                }
            }
        },
        {
            "Action": "writeExchange",
            "Comment": "Add an element to the Exchange api",
            "TaskName": "meas_exchange_element",
            "ExchangePaths": {
                "target_pressure": "Target_Pressure",
                "target_pfill": "Filling_Pressure",
                "reset_pfill_ok": "Filling_Pressure_Ok",
                "pfill_dev": "Filling_Pressure_Dev"
            },
            "Values": {
                "reset_pfill_ok": {
                    "Value": false
                },
                "target_pressure": {
                  "Caption": "Target pressure",
                  "Ready": false,
                  "Selected": null,
                  "Select": [
                    {
                      "value": null,
                      "display": "select"
                    }
                  ],

                  "Unit": "mbar"

                },
                "target_pfill": {
                    "Caption": "Filling pressure",
                    "Type": "fill",
                    "Unit": "mbar",
                    "Value": null
                },
                "pfill_dev": {
                    "Caption": "Filling pressure deviation",
                    "Type": "rel.",
                    "Unit": "1",
                    "Value": null
                }
            }
        },
        {
            "Action": "/usr/bin/Rscript",
            "Comment": "Calculates pfill from pcal",
            "TaskName": "cal_pfill",
            "RunIf": "Target_Pressure.Ready",
            "FromExchange": {
                "@targetpressure": "Target_Pressure.Selected"
            },
            "Value": [
                "/usr/local/lib/vlr/scripts/ce3.filling_pressure.r",
                "@targetpressure"
            ],
            "PostProcessing": [
                "var ToExchange = {'Filling_Pressure.Value':JSON.parse(_x)};"
            ]
        },
        {
            "Action": "/usr/bin/Rscript",
            "Comment": "Calculates the saw tooth parameters.",
            "TaskName": "cal_sz_param",
            "FromExchange": {
                "@targetpressure": "Target_Pressure.Selected",
                "@fillingpressure": "Filling_Pressure.Value",
                "@pressurestart": "FM3_1T-start_sz.Value",
                "@timestart": "Time-start_sz.Value",
                "@pressureend": "FM3_1T-end_sz.Value",
                "@timeend": "Time-end_sz.Value",
                "@pressuredrvstart": "FM3_1T-start_drv.Value",
                "@displdrvstart": "Displacer-start_drv.Value",
                "@pressuredrvend": "FM3_1T-end_drv.Value",
                "@displdrvend": "Displacer-end_drv.Value"
            },
            "Value": [
                "/usr/local/lib/vlr/scripts/fm3.sz_param.r",
                "@targetpressure",
                "@fillingpressure",
                "@pressurestart",
                "@timestart",
                "@pressureend",
                "@timeend",
                "@pressuredrvstart",
                "@displdrvstart",
                "@pressuredrvend",
                "@displdrvend"
            ],
            "PostProcessing": [
                "var ToExchange = JSON.parse(_x);"
            ]
        }
    ]
}