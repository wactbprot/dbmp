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
                "DocumentsTable",
                "DocumentsOk"
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
                        "TaskName": "exchange_element",
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
                        "TaskName": [
                            "CE3-exchange_element",
                            "CE3-exchange_element"
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
                        "TaskName": "CE3-exchange_element"
                        ,
			"Use":{
			    "Values":"offset_element"
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
			    "@devicename":[
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
			    "@caption":[
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
			    "@devicename":[
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
                "Filling_Pressure_Dev"
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
        }
    ],
    "Definitions": [
        {
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
                                "med_range",
                                "low_range",
                                "med_range"
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
            ],
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n"
        },
        {
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
            ],
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n"
        },
        {
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
            ],
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n"
        },
        {
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
            ],
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n"
        },
        {
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
            ],
            "DefinitionClass": "set_range",
            "ShortDescr": "Sets the Range depending on pfill\n"
        },
        {
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
                        "TaskName": "Corvus_2-check_position"
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
                        "TaskName": "Corvus_2-check_position"
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
                        "TaskName": "Corvus_2-check_position"
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
            ],
            "DefinitionClass": "set_filling_pressure",
            "ShortDescr": "Sets the pfill\n"
        },
        {
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
                        "TaskName": "Corvus_2-check_position"
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
                        "TaskName": "Corvus_2-check_position"
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
                        "TaskName": "Corvus_2-check_position"
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
            ],
            "DefinitionClass": "set_filling_pressure",
            "ShortDescr": "Sets the pfill\n"
        },
        {
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
                    "ExchangePath": "Target_Pressure.Value",
                    "Methode": "gt",
                    "Value": 1e-9
                },
                {
                    "ExchangePath": "Target_Pressure.Value",
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
                        "TaskName": "FM3_10T-read_save",
                        "Replace": {
                            "@token": "before_drift_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
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
                        "TaskName": "FM3_10T-read_save",
                        "Replace": {
                            "@token": "after_drift_fill",
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
                ]
            ],
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n"
        },
        {
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
                    "ExchangePath": "Target_Pressure.Value",
                    "Methode": "gt",
                    "Value": 1e-9
                },
                {
                    "ExchangePath": "Target_Pressure.Value",
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
                        "TaskName": "FM3_1000T-read_save",
                        "Replace": {
                            "@token": "before_drift_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
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
                        "TaskName": "FM3_1000T-read_save",
                        "Replace": {
                            "@token": "after_drift_fill",
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
                ]
            ],
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n"
        },
        {
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
                    "ExchangePath": "Target_Pressure.Value",
                    "Methode": "gt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Value",
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
                        "TaskName": "FM3_10T-read_save",
                        "Replace": {
                            "@token": "before_drift_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
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
                        "TaskName": "FM3_10T-read_save",
                        "Replace": {
                            "@token": "after_drift_fill",
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
                            "Values": "open_V22"
                        }
                    }
                ]
            ],
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n"
        },
        {
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
                    "ExchangePath": "Target_Pressure.Value",
                    "Methode": "gt",
                    "Value": 9e-7
                },
                {
                    "ExchangePath": "Target_Pressure.Value",
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
                        "TaskName": "FM3_1000T-read_save",
                        "Replace": {
                            "@token": "before_drift_fill",
                            "@docpath": "Calibration.Measurement.Values.Pressure",
                            "@repeat": 20,
                            "@wait": 500
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
                        "TaskName": "FM3_1000T-read_save",
                        "Replace": {
                            "@token": "after_drift_fill",
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
                            "Values": "open_V22"
                        }
                    }
                ]
            ],
            "DefinitionClass": "measure_drift",
            "ShortDescr": "measures the drift\n"
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
            "TaskName": "exchange_element",
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
		"offset_element":{
		    "Caption": "@caption",
		    "Type":"",
		    "Value":null,
		    "SdValue":null,
		    "N":null,
		    "Unit":"",
		    "Ready":false


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
                    "Ready": false
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
                },
                "pressure_elem": {
                    "Caption": "@caption",
                    "Ready": false
                }
            }
        },
        {
            "Action": "/usr/bin/Rscript",
            "Comment": "Calculates pfill from pcal",
            "TaskName": "cal_pfill",
	    "RunIf":"Target_Pressure.Ready",
            "FromExchange": {
                "@targetpressure": "Target_Pressure.Selected"
            },
            "Value": [
                "/usr/local/lib/r4vl/ssmp/cal_filling_pressure.r",
                "@targetpressure"
            ],
            "PostProcessing": [
                "var ToExchange = {'Filling_Pressure.Value':JSON.parse(_x)};"
            ]
        }
    ]
}
