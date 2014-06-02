{
    "Sign": "9999_004",
    "Type": "NN",
    "Year": "2014",
    "Standard": "CE3",
    "Presettings": {
        "Date": [
            {
                "Value": "2014-05-26 11:50",
                "Type": "generated"
            },
            {
                "Type": "schedule",
                "Duration": ""
            }
        ],
        "Customer": {
            "Lang": "en",
            "Name": "BOC EDWARDS",
            "Sign": "EDW",
            "Type": "Firma",
            "DebitorenNr": "7101006282",
            "Adress": {
                "Street": "Marshall Road",
                "Town": "Eastbourne, East Sussex",
                "Zipcode": "BN22 9BA"
            },
            "Contact": {
                "Name": "Peter Smith",
                "Phone": "+44(0)1323 525254 ",
                "Fax": "+44(0)1323 525254 ",
                "Mail": "Peter.Smith@edwardsvacuum.com"
            },
            "Shipping": {
                "Land": "United Kingdom",
                "Town": "EASTBOURNE, EAST SUSSEX"
            }
        },
        "ToDo": {
            "Name": "IG 3E-8 bis 9E-4 mbar (error)",
            "Sign": "IG-3E-8-9E-4",
            "Type": "error",
            "Gas": "N2",
            "Repeat": "1",
            "MaxDev": "0.1",
            "Values": {
                "Pressure": {
                    "Type": "target",
                    "Unit": "mbar",
                    "Value": [
                        "3e-8",
                        "5e-8",
                        "9e-8",
                        "3e-7",
                        "5e-7",
                        "8.9e-7",
                        "9e-7",
                        "3e-6",
                        "5e-6",
                        "9e-6",
                        "3e-5",
                        "5e-5",
                        "9e-5",
                        "3e-4",
                        "5e-4",
                        "9e-4"
                    ]
                }
            }
        }
    },
    "Measurement": {
        "CalibrationObject": [
            {
                "Type": "CDG",
                "Sign": "4824",
                "Name": "FM3_1T",
                "Owner": {
                    "Name": "PTB AG7.54"
                },
                "Device": {
                    "Serial": "33765-2",
                    "Type": "398HD-01000 SP05",
                    "Producer": "MKS",
                    "InventarNo": "94008936-1",
                    "LocationBuilding": "Foe-Bau",
                    "LocationRoom": "24",
                    "Standard": "CE3",
                    "UsedFor": "delta_pfill"
                },
                "Date": {
                    "Type": "generated",
                    "Value": "2012-08-28"
                },
                "Setup": {
                    "Display": "mbar",
                    "Heater": "off",
                    "Average": "1"
                },
                "Defaults": {
                    "_host": "e75481",
                    "_device": "gpib0,8",
                    "_unt": "mbar",
                    "_t_d": "500",
                    "_N_d": "100",
                    "_acc": "VXI11",
                    "_CR": "\n",
                    "_range": "X1",
                    "_prefix": "drift",
                    "_docpath": "Calibration.Measurement.Values.Drift"
                },
                "Tasks": [
                    {
                        "TaskName": "device_init",
                        "Comment": "Gerät initiieren",
                        "Action": "_acc",
                        "Host": "_host",
                        "Device": "_device",
                        "LogPriority": "3",
                        "Value": ":digit 5.5_CR:sens:scan(@1):puni _unt_CR:sens:scan(@1):aver 1_CR:sens:func pres_CR:meas:func_CR",
                        "PostProcessing": [
                            "ok = true"
                        ]
                    },
                    {
                        "TaskName": "range_init",
                        "Comment": "Initialize Range _range",
                        "Action": "_acc",
                        "Host": "_host",
                        "Device": "_device",
                        "LogPriority": "3",
                        "Value": ":sens:scan(@1):gain _range_CR:meas:func_CR",
                        "PostProcessing": [
                            "ok = true"
                        ]
                    },
                    {
                        "TaskName": "slope_exec",
                        "Comment": "Auslese mit Prefix _prefix ",
                        "Action": "_acc",
                        "Host": "_host",
                        "Device": "_device",
                        "Value": ":meas:func_CR",
                        "Repeat": "_N_d",
                        "VxiTimeout": "100",
                        "Wait": "_t_d",
                        "LogPriority": "3",
                        "DocPath": "_docpath",
                        "PostProcessing": [
                            "var _D = new Date(),",
                            "_vec = _x.map(_.extractMKSCDG).map(parseFloat);",
                            "_ret = _.checkNumArr(_vec);",
                            "_res = _.vlSlope(_ret.Arr, _.rmByIndex(_t_start,_ret.Skip), _.rmByIndex(_t_stop,_ret.Skip)),",
                            "Result=[",
                            "_.vlRes('_prefixt_slope_x',  _res.bx,     'mbar/ms'),",
                            "_.vlRes('_prefix_mean_p',   _res.mvY,    'mbar'),",
                            "_.vlRes('_prefix_mean_t',   _res.mvX,    'ms'),",
                            "_.vlRes('_prefix_R',        _res.R,      '1'),",
                            "_.vlRes('_prefix_N',        _res.remainN,'1')",
                            "_.vlRes('_prefix_t_N', _D.getTime().toString(),  'ms'),",
                            "],",
                            "RawData =_x;"
                        ]
                    }
                ],
                "History": {
                    "2013-11-26": "springt während der Messung unvermittelt in mTorr Range",
                    "2014-05-20": "Änderung des DB Namens (war CDG an FM3 1T) "
                }
            }
        ]
    }
}