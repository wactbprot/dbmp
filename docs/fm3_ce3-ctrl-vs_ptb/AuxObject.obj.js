{
    "Comment": "CE3 Ventilsteierung",
    "Type": "Ventilsteuerung",
    "Standard": "CE3",
    "Name": "VS_CE3",
    "Owner": {
        "Name": "PTB AG 7.54"
    },
    "Device": {
        "Producer": "Eigenbau PTB",
        "InvNr": "r2-d2",
        "LocationBuilding": "Foe-Bau ",
        "LocationRoom": "9"
    },
    "Date": {
        "Type": "updated",
        "Value": "2014-08-19"
    },
    "Defaults": {
        "@host": "e75481",
        "@device": "gpib0,12",
        "@CR": "",
        "@acc": "VXI11"
    },
    "Tasks": [
        {
            "TaskName": "is_ready",
            "Comment": "Testet ob das Gerät ansprechbar ist",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "LogPriority": "3",
            "Value": "*IDN?",
            "PostProcessing": [
                "var ok = _x.substr(0,5) == '00000',",
                "ToExchange={'@exchpath':ok};"
            ]
        },
        {
            "TaskName": "device_ini",
            "Comment": "Initialisiert das Gerät",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "LogPriority": "3",
            "Value": "C1P0F0R0I0X@CR",
            "PostProcessing": [
                "var ok = _x.substr(0,5) == '00000',",
                "ToExchange={'@exchpath':ok};"
            ]
        }
    ]
}