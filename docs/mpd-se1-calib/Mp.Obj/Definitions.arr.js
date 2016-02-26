[
  {
    "Definitionclass": "set_p_fill",
    "ShortDescr": "sets the filling pressure with 10T CDG\n",
    "Condition": [
      {
        "ExchangePath": "Filling_Pressure.Value",
        "Methode": "lt",
        "Value": 13.3
      }
    ],
    "Definition": [
      [
        {
          "TaskName": "CDG_10-init"
        }
      ],
      [
        {
          "TaskName": "CDG_10-ctrl_pfill"
        },
        {
          "TaskName": "MKS_Flow_Ctrl-ctrl_pfill"
        }
      ],
      [
        {
          "TaskName": "MKS_Flow_Ctrl-device_ini",
          "Use": {
            "Values": "set_zero"
          },
          "Replace": {
            "@exchpath": "MKS_Flow_Ctrl_Ok.Bool"
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "exec_meas"
          }
        }
      ]
    ]
  },
  {
    "DefinitionClass": "set_p_fill",
    "ShortDescr": "sets the filling pressure with 100T CDG\n",
    "Condition": [
      {
        "ExchangePath": "Filling_Pressure.Value",
        "Methode": "ge",
        "Value": 13.3
      },
      {
        "ExchangePath": "Filling_Pressure.Value",
        "Methode": "lt",
        "Value": 133.3
      }
    ],
    "Definition": [
      [
        {
          "TaskName": "CDG_100-init"
        }
      ],
      [
        {
          "TaskName": "CDG_100-ctrl_pfill"
        },
        {
          "TaskName": "MKS_Flow_Ctrl-ctrl_pfill"
        }
      ],
      [
        {
          "TaskName": "MKS_Flow_Ctrl-device_ini",
          "Use": {
            "Values": "set_zero"
          },
          "Replace": {
            "@exchpath": "MKS_Flow_Ctrl_Ok.Bool"
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "exec_meas"
          }
        }
      ]
    ]
  },
  {
    "DefinitionClass": "set_p_fill",
    "ShortDescr": "sets the filling pressure with 10T CDG\n",
    "Condition": [
      {
        "ExchangePath": "Filling_Pressure.Value",
        "Methode": "ge",
        "Value": 133.3
      },
      {
        "ExchangePath": "Filling_Pressure.Value",
        "Methode": "lt",
        "Value": 1000
      }
    ],
    "Definition": [
      [
        {
          "TaskName": "CDG_1000-init"
        }
      ],
      [
        {
          "TaskName": "CDG_1000-ctrl_pfill"
        },
        {
          "TaskName": "MKS_Flow_Ctrl-ctrl_pfill"
        }
      ],
      [
        {
          "TaskName": "MKS_Flow_Ctrl-device_ini",
          "Use": {
            "Values": "set_zero"
          },
          "Replace": {
            "@exchpath": "MKS_Flow_Ctrl_Ok.Bool"
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "exec_meas"
          }
        }
      ]
    ]
  },



  {
    "DefinitionClass": "pfill_meas",
    "ShortDescr": "Filling pressure measurement and Measure Time\n",
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
          "TaskName": "Common-get_time",
          "Replace": {
            "@type": "amt_before",
            "@docpath": "Calibration.Measurement.Values.Time",
            "@timepath": "Before_Expansion_Time"
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
            "@token": "cdg10_p_fill",
            "@docpath": "Calibration.Measurement.Values.Pressure",
            "@exchangepath": "CDG_10-Pfill"
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
            "@token": "cdg100_p_fill",
            "@docpath": "Calibration.Measurement.Values.Pressure",
            "@exchangepath": "CDG_100-Pfill"
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
            "@token": "cdg1000_p_fill",
            "@docpath": "Calibration.Measurement.Values.Pressure",
            "@exchangepath": "CDG_1000-Pfill"
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "temp_before_meas"
          }
        }
      ]

    ]
  },
  {
    "DefinitionClass": "temp_before_meas",
    "ShortDescr": "Temperature measurement before Expansion\n",
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
          "TaskName": "SE1-DMM_Keithley-temperature_exec",
          "Replace":{
            "@token": "keithley_T_before_ch"
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "expansion_exec"
          }
        }
      ]
    ]
  },   {
    "DefinitionClass": "temp_after_meas",
    "ShortDescr": "Temperature measurement after Expansion\n",
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
          "TaskName": "SE1-DMM_Keithley-temperature_exec",
          "Replace":{
            "@token": "keithley_T_after_ch"
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "customer_read_ind"
          }
        }
      ]
    ]
  },
  {
    "DefinitionClass": "customer_read_ind",
    "ShortDescr": "reads out the customers devices\n",
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
          "TaskName": "read_element",
          "Customer": true,
          "Replace": {
            "@docpath": "Calibration.Measurement.Values.Pressure",
            "@elemtype": "ind",
            "@runif": "ind.Ready"
          }
        }
      ],
      [
        {
          "TaskName": "Common-get_time",
          "Replace": {
            "@type": "amt_after",
            "@docpath": "Calibration.Measurement.Values.Time",
            "@timepath": "After_Expansion_Time"
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "expansion_post"
          }
        }
      ]
    ]
  },
  {
    "DefinitionClass": "expansion_post",
    "ShortDescr": "Valve setting after expasion A\n",
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
            "Values": "close_v6"
          }
        },
        {
          "TaskName": "VS-SE1-status_closed",
          "Replace": {
            "@valve": "V6"
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
            "Values": "close_v2"
          }
        },
        {
          "TaskName": "VS-SE1-status_closed",
          "Replace": {
            "@valve": "V2"
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
            "Values": "open_v1"
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
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "start_meas"
          }
        }
      ]
    ]
  },
  {
    "DefinitionClass": "expansion_exec",
    "ShortDescr": "Executes the double Expasion A\n",
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
            "Values": "close_v3"
          }
        },
        {
          "TaskName": "VS-SE1-status_closed",
          "Replace": {
            "@valve": "V3"
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
          "TaskName": "VS-SE1-ctrl_valve",
          "Use": {
            "Values": "open_v2"
          }
        },
        {
          "TaskName": "Common-wait",
          "Replace": {
            "@waittime": 20000
          }
        }
      ],
      [
        {
          "TaskName": "VS-SE1-ctrl_valve",
          "Use": {
            "Values": "close_v5"
          }
        },
        {
          "TaskName": "VS-SE1-status_closed",
          "Replace": {
            "@valve": "V5"
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
            "Values": "close_v4"
          }
        },
        {
          "TaskName": "VS-SE1-status_closed",
          "Replace": {
            "@valve": "V4"
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
            "Values": "open_v6"
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
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "temp_after_meas"
          }
        }
      ]
    ]
  },
  {
    "DefinitionClass": "exec_meas",
    "ShortDescr": "First part of expansion A\n",
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
            "Values": "close_v1"
          }
        },
        {
          "TaskName": "VS-SE1-status_closed",
          "Replace": {
            "@valve": "V1"
          }
        },
        {
          "TaskName": "Common-wait",
          "Replace": {
            "@waittime": 50000
          }
        }
      ],
      [
        {
          "TaskName": "Commons-select_definition",
          "Replace": {
            "@definitionclass": "pfill_meas"
          }
        }
      ]
    ]
  },
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
            "@message": "Voreinstellungen ok? Offset bestätigen;\n danach wird Fülldruck wird eingestellt"
          }
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
            "@definitionclass": "set_p_fill"
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
            "@waittime": 2000
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
            "@waittime": 2000
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
            "@docpath": "Calibration.Measurement.AuxValues.Time",
            "@timepath": "Offset_Time"
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
            "@docpath": "Calibration.Measurement.AuxValues.Pressure",
            "@exchangepath": "CDG_10-Offset"
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
            "@docpath": "Calibration.Measurement.AuxValues.Pressure",
            "@exchangepath": "CDG_100-Offset"
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
            "@docpath": "Calibration.Measurement.AuxValues.Pressure",
            "@exchangepath": "CDG_1000-Offset"
          }
        }
      ]
    ]
  }
]