{
  "Container": [
    {
      "Element": [
        "Stime.Value",
        "Stime.Unit",
        "target_fill.Value",
        "CUCO-*-ind_offset",
        "CUCO-*-ind"
      ],
      "Ctrl": "unformed",
      "NoOfRepeats": 1,
      "Definition": [
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
      "Element": [
        "Stime.Value",
        "Stime.Unit",
        "target_fill.Value"
      ],
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
        "value":"ms"
      },
      "Value": {
        "required": false,
        "value":0
      }
    },
    "Rtime": {
      "Unit": {
        "required": false,
        "value":"ms"
      },
      "Value": {
        "required": false,
        "value":0
      }
    },
    "target_p_fill": {
      "Unit": {
        "required": false,
        "value":"mbar"
      },
      "Value": {
        "required": false,
        "value":0
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
      "Container": "_container",
      "Key": "_devicename-_elemtype",
      "Value": {
        "Caption": {

          "required": false,
          "value": "_caption"
        },
        "DocPath": {

          "required": true,
          "value": "_docpath"
        },
        "Type": {

          "required": true,
          "value": "_elemtype",
          "type": "text"
        },
        "Unit": {

          "required": true,
          "value": "mbar",
          "options": "_pressureunits"
        },
        "Value": {

          "required": true,
          "type": "number"
        },
        "Comment": {

          "required": false,
          "type": "text"
        }
      }
    },
    {
      "Action": "rmElement",
      "Comment": "Remove an Element from Elements and Exchange",
      "TaskName": "remove_element",
      "Container": "_container",
      "Key": "_devicename-_elemtype"
    }
  ],
  "Description": "ssmp test definition",
  "Standard":"CE3"
}