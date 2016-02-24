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
            "TaskName": "SE1-meas_exchange_element",
            "ExpandSeq": {
              "ExchangePaths": [
                "target_pressure_ok",
                "target_pfill",
                "expansion",
                "pfill_dev"
              ],
              "Values": [
                "target_pressure_ok",
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
        "Target_Pressure_Ok",
        "Expansion",
        "Filling_Pressure",
        "Filling_Pressure_Dev"
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
      "Description": "Test Department",
      "Ctrl": "void",
      "Title": "test",
      "Element": [],
      "Definition": [
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
            "TaskName": "SE1-cal_pfill"
          }
        ],
        [
          {
            "TaskName": "Common-message",
            "Replace": {
              "@message": "Voreinstellungen ok?"
            }
          }
        ]
      ]
    },
    {
      "DefinitionClass": "prepair_meas",
      "ShortDescr": "Prepairs the measurement for expansion A\n",
      "Condition": [
        {
          "ExchangePath": "Expansion.Value",
          "Methode": "eq",
          "Value": "Expansion_A"
        }
      ],
      "Definition": [
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
              "@waittime": 2000
            }
          }
        ],[
          {
            "TaskName": "VS-SE1-ctrl_valve",
            "Use": {
              "Values": "close_v2"
            }
          },
          {
            "TaskName": "Common-wait",
            "Replace": {
              "@waittime": 2000
            }
          }
        ],[
          {
            "TaskName": "VS-SE1-ctrl_valve",
            "Use": {
              "Values": "close_v6"
            }
          },
          {
            "TaskName": "Common-wait",
            "Replace": {
              "@waittime": 2000
            }
          }
        ],[
          {
            "TaskName": "VS-SE1-ctrl_valve",
            "Use": {
              "Values": "open_v3"
            }
          },
          {
            "TaskName": "Common-wait",
            "Replace": {
              "@waittime": 2000
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
              "@waittime": 2000
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
              "@waittime": 2000
            }
          }
        ],
        [
          {
            "TaskName": "Common-message",
            "Replace": {
              "@message": "Ventil 7  und 8 (1l-Kugel) zu!\n CDGs zur TMP hin öffnen\n Offsetmessung kann beginnen!"
            }
          }
        ],
        [
          {
            "TaskName": "Common-get_time",
            "Replace": {
              "@type": "amt_offset",
              "@docpath":"Calibration.Measurement.AuxValues.Time",
              "@timepath":"Offset_Time"
            }
          }
        ],
        [
          {
            "TaskName": "CDG_10-init"
          }
        ],
        [
          {
            "TaskName": "CDG_10-exec",
            "Replace": {
              "@token": "cdg10_p_fill_offset",
              "@docpath":"Calibration.Measurement.AuxValues.Pressure",
              "@exchangepath":"CDG_10-Offset"
            }
          }
        ],
        [
          {
            "TaskName": "CDG_100-init"
          }
        ],
        [
          {
            "TaskName": "CDG_100-exec",
            "Replace": {
              "@token": "cdg100_p_fill_offset",
              "@docpath":"Calibration.Measurement.AuxValues.Pressure",
              "@exchangepath":"CDG_100-Offset"
            }
          }
        ],
        [
          {
            "TaskName": "CDG_1000-init"
          }
        ],
        [
          {
            "TaskName": "CDG_1000-exec",
            "Replace": {
              "@token": "cdg1000_p_fill_offset",
              "@docpath":"Calibration.Measurement.AuxValues.Pressure",
              "@exchangepath":"CDG_1000-Offset"
            }
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
    },
    {
      "Action": "writeExchange",
      "Comment": "Add an element to the Exchange api",
      "TaskName": "meas_exchange_element",
      "ExchangePaths": {
        "target_pfill": "Filling_Pressure",
        "expansion": "Expansion",
        "target_pressure_ok": "Target_Pressure_Ok",
        "pfill_dev": "Filling_Pressure_Dev"
      },
      "Values": {
        "target_pfill": {
          "Caption": "Filling pressure",
          "Type": "fill",
          "Unit": "mbar",
          "Value": null
        },
        "target_pressure_ok": {
          "Ready": "false"
        },
        "expansion": {
          "Caption": "Expansion Sequence",
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
      "RunIf": "Target_Pressure_Ok.Ready",
      "FromExchange": {
        "@targetpressure": "Target_Pressure.Selected"
      },
      "Value": [
        "/usr/local/share/vlr/scripts/se1.filling_pressure.r",
        "@targetpressure"
      ],
      "PostProcessing": [
        "var _res = _x.split(';');",
        "var pfill = _res[1] == '~' ? NaN: parseFloat(_res[1]);",
        "var ToExchange = {",
        "'Filling_Pressure.Value':pfill,",
        "'Expansion.Value':_res[0],",
        "};"
      ]
    }
  ],
  "Date": [
    {
      "Type": "created",
      "Value": "2016-02-18"
    }
  ],
  "Name": "SE1",
  "Description": "mp definition for SE1 calibration",
  "Standard": "SE1"
}