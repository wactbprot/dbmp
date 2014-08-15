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
                        "TaskName": "FM3_1T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":digit 5.5",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_10T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":digit 5.5",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):puni MBAR",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_10T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):puni MBAR",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):aver 1",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_10T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):aver 1",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:func pres",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_10T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:func pres",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-set_range",
                        "Replace": {
                            "@range": "X1",
                            "@exchpath": "FM3_1T_range_ok.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_10T-set_range",
                        "Replace": {
                            "@range": "X1",
                            "@exchpath": "FM3_10T_range_ok.Value.value"
                        }
                    }
                ]
            ],
            "Title": "Initialisieren aller Geräte"
        }
    ],
    "Exchange": {
        "FM3_1T_ini_ok": {
            "Value": {
                "value": false
            }
        },
        "FM3_10T_ini_ok": {
            "Value": {
                "value": false
            }
        },
        "FM3_1T_range_ok": {
            "Value": {
                "value": false
            }
        },
        "FM3_10T_range_ok": {
            "Value": {
                "value": false
            }
        }
    }
}