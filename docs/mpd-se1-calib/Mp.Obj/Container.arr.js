[
    {
        "Description": "Choose the calibration documents belonging to the calibration devices to calibrate.",
        "Ctrl": "load;run",
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
                    "TaskName": "pressure_input",
                    "Customer": true,
                    "Replace": {
                        "@inputtype": "ind_offset",
                        "@caption": "Offset",
                        "@type": "ind_offset"
                    }
                }
            ],
            [
                {
                    "TaskName": "pressure_input",
                    "Customer": true,
                    "Replace": {
                        "@inputtype": "ind",
                        "@caption": "Pressure",
                        "@type": "ind"
                    }
                }
            ],
            [
                {
                    "TaskName": "SE1-meas_exchange_element",
                    "ExpandSeq": {
                        "ExchangePaths": [
                            "target_pressure",
                            "target_pfill",
                            "expansion",
                            "pfill_dev"
                        ],
                        "Values": [
                            "target_pressure",
                            "target_pfill",
                            "expansion",
                            "pfill_dev"
                        ]
                    }
                }
            ],
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
                    "TaskName": "Common-get_list",
                    "Use": {
                        "Params": "todo"
                    },
                    "Replace": {
                        "@standard": "SE1",
                        "@listname": "generate_target_select",
                        "@viewname": "todos",
                        "@exchangepath": "Target_Pressure"
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
    },
    {
        "Description": "Prepair",
        "Ctrl": "void",
        "Title": "prepair",
        "Element": [
            "Expansion",
            "Filling_Pressure"
        ],
        "Definition": [
            [
                {
                    "TaskName": "Commons-select_definition",
                    "Replace": {
                        "@definitionclass": "prepair_meas"
                    }
                }
            ]
        ]
    },
    {
        "Description": "Measurement",
        "Ctrl": "void",
        "Title": "meas",
        "Element": [
            "Target_Pressure",
            "Expansion",
            "Filling_Pressure",
            "Filling_Pressure_Dev",
            "*-ind_offset",
            "*-ind"
        ],
        "Definition": [
            [
                {
                    "TaskName": "Common-select_definition",
                    "Replace": {
                        "@definitionclass": "start_meas"
                    }
                }
            ]
        ]
    },
    {
        "Description": "End measurement",
        "Ctrl": "void",
        "Title": "end sequence",
        "Element": [],
        "Definition": [
            [
                {
                    "TaskName": "Common-message",
                    "Replace": {
                        "@message": "Ventile in Endstellung?"
                    }
                }
            ],
            [
                {
                    "TaskName": "VS-SE1-ctrl_valve",
                    "Use": {
                        "Values": "close_v6"
                    }
                },
                {
                    "TaskName": "Common-wait",
                    "Replace": {
                        "@waittime": 1000
                    }
                }
            ],
            [
                {
                    "TaskName": "VS-SE1-ctrl_valve",
                    "Use": {
                        "Values": "close_v3"
                    }
                },
                {
                    "TaskName": "Common-wait",
                    "Replace": {
                        "@waittime": 1000
                    }
                }
            ],
            [
                {
                    "TaskName": "VS-SE1-ctrl_valve",
                    "Use": {
                        "Values": "open_v4"
                    }
                },
                {
                    "TaskName": "Common-wait",
                    "Replace": {
                        "@waittime": 1000
                    }
                }
            ],
            [
                {
                    "TaskName": "VS-SE1-ctrl_valve",
                    "Use": {
                        "Values": "open_v5"
                    }
                },
                {
                    "TaskName": "Common-wait",
                    "Replace": {
                        "@waittime": 1000
                    }
                }
            ],
            [
                {
                    "TaskName": "VS-SE1-ctrl_valve",
                    "Use": {
                        "Values": "close_v2"
                    }
                },
                {
                    "TaskName": "Common-wait",
                    "Replace": {
                        "@waittime": 1000
                    }
                }
            ],
            [
                {
                    "TaskName": "Common-message",
                    "Replace": {
                        "@message": "Ventile 10 schließen"
                    }
                }
            ],
            [
                {
                    "TaskName": "VS-SE1-ctrl_valve",
                    "Use": {
                        "Values": "open_v3"
                    }
                },
                {
                    "TaskName": "Common-wait",
                    "Replace": {
                        "@waittime": 1000
                    }
                }
            ],
            [
                {
                    "TaskName": "Common-message",
                    "Replace": {
                        "@message": "Ventile 10 langsam öffnen\n Ventil 9 (20l Volumen) öffnen"
                    }
                }
            ],
            [
                {
                    "TaskName": "VS-SE1-ctrl_valve",
                    "Use": {
                        "Values": "open_v1"
                    }
                },
                {
                    "TaskName": "Common-wait",
                    "Replace": {
                        "@waittime": 1000
                    }
                }
            ]
        ]
    },
    {
        "Description": "Test Department",
        "Ctrl": "void",
        "Title": "test",
        "Element": [],
        "Definition": [
          [
            {
              "TaskName": "VS-SE1-valves_init"
            }
          ],

          [
            {
              "TaskName": "SE1-DMM_Keithley-device_init",
                    "ExpandSeq": {
                        "Values": [
                            "reset",
                            "func_t",
                            "temp_frtd",
                            "temp_typ",
                            "cont_ini_off",
                            "trig_imm",
                            "trig_coun",
                            "samp_coun",
                            "rout_scan_t",
                            "rout_tso",
                            "rout_lsel"
                        ]
                    }
                }
            ],
            [
                {
                    "TaskName": "SE1-DMM_Keithley-temperature_exec"
                }
            ]
        ]
     }
]