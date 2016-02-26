[
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
        "TaskName": "pressure_input",
        "ExchangePath": "@devicename-@inputtype",
        "Value": {
            "Caption": "@caption @devicename",
            "Type": "@type",
            "Value": null,
            "SdValue": null,
            "N": null,
            "Unit": "mbar",
            "Ready": false
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
]