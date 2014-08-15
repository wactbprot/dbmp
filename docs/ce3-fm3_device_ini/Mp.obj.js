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
                        "TaskName": "FM3_10T-device_ini",
                        "Replace": {
                            "@exchpath": "FM3_10T_ini_ok.Value.value"
                        }
                    }
                ],
                [
                    {
                        "TaskName": "FM3_1T-device_ini",
                        "Replace": {
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