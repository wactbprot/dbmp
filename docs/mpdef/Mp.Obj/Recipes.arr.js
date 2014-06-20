[
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
        "Recipe": [
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
        "Recipe": [
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
]