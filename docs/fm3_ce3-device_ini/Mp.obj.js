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
                        "TaskName": "FM3_CE3-DMM_Agilent-is_ready",
                        "Replace": {
                            "@exchpath": "FM3_CE3-DMM_Agilent_is_ready.Value.value"
                        }
                    },
                    {
                        "TaskName": "VS_CE3-is_ready",
                        "Replace": {
                            "@exchpath": "VS_CE3_is_ready.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_1T-is_ready",
                        "Replace": {
                            "@exchpath": "FM3_1T_is_ready.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_10T-is_ready",
                        "Replace": {
                            "@exchpath": "FM3_10T_is_ready.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_1000T-is_ready",
                        "Replace": {
                            "@exchpath": "FM3_1000T_is_ready.Value.value"
                        }
                    },
                    {
                        "TaskName": "Corvus_1-is_ready",
                        "Replace": {
                            "@exchpath": "Corvus_1_is_ready.Value.value"
                        }
                    },
                    {
                        "TaskName": "Corvus_2-is_ready",
                        "Replace": {
                            "@exchpath": "Corvus_2_is_ready.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_CE3-DMM_Agilent-device_ini",
                        "Replace": {
                            "@exchpath": "FM3_CE3-DMM_Agilent_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "VS_CE3-device_ini",
                        "Replace": {
                            "@exchpath": "VS_CE3_ini_ok.Value.value"
                        }
                    },
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
                            "@exchpath": "FM3_10T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_1000T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":digit 5.5",
                            "@exchpath": "FM3_1000T_ini_ok.Value.value"
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
                            "@exchpath": "FM3_10T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_1000T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):puni MBAR",
                            "@exchpath": "FM3_1000T_ini_ok.Value.value"
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
                            "@exchpath": "FM3_10T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_1000T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):aver 1",
                            "@exchpath": "FM3_1000T_ini_ok.Value.value"
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
                            "@exchpath": "FM3_10T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_1000T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:func pres",
                            "@exchpath": "FM3_1000T_ini_ok.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):gain X1",
                            "@exchpath": "FM3_1T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_10T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):gain X1",
                            "@exchpath": "FM3_10T_ini_ok.Value.value"
                        }
                    },
                    {
                        "TaskName": "FM3_1000T-send_cmd",
                        "Replace": {
                            "@cmdstr": ":sens:scan(@1):gain X1",
                            "@exchpath": "FM3_1000T_ini_ok.Value.value"
                        }
                    }
                ]
            ],
            "Title": "Initialisieren aller Geräte"
        }
    ],
    "Exchange": {
        "FM3_1T_is_ready": {
            "Value": {
                "value": false
            }
        },
        "FM3_10T_is_ready": {
            "Value": {
                "value": false
            }
        },
        "FM3_1000T_is_ready": {
            "Value": {
                "value": false
            }
        },
        "Corvus_1_is_ready": {
            "Value": {
                "value": false
            }
        },
        "Corvus_2_is_ready": {
            "Value": {
                "value": false
            }
        },
        "FM3_CE3-DMM_Agilent_is_ready": {
            "Value": {
                "value": false
            }
        },
        "VS_CE3_is_ready": {
            "Value": {
                "value": false
            }
        },
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
        "FM3_1000T_ini_ok": {
            "Value": {
                "value": false
            }
        },
        "FM3_CE3-DMM_Agilent_ini_ok": {
            "Value": {
                "value": false
            }
        },
        "VS_CE3_ini_ok": {
            "Value": {
                "value": false
            }
        }
    }
}