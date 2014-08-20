{
    "Comment": "MKS Steuergerät 1.) zu den Flussreglern an der FRS; 2.) Fülldruckeinstellung FM3",
    "Date": {
        "Type": "generated",
        "Value": "2011-07-14"
    },
    "Defaults": {
        "@CR": "\r",
        "@host": "e75491",
        "@port": "10002"
    },
    "Device": {
        "InvNr": "200036664",
        "LocationBuilding": "Foe-Bau ",
        "LocationRoom": "9",
        "Producer": "MKS",
        "SerNr": ""
    },
    "Name": "MKS_Flow_Ctrl",
    "Owner": {
        "Name": "PTB AG 7.54"
    },
    "Tasks": [
        {
            "TaskName": "is_ready",
            "Comment": "Kontrolliert, ob Gerät ansprechbar ist",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "LogPriority": "3",
            "Value": "?ID@CR",
            "PostProcessing": [
                "var ok = _x == 'PR42021320845\\r',",
                "ToExchange={'@exchpath':ok};"
            ]
        },
        {
            "TaskName": "device_ini",
            "Comment": "Setzt Gerät Flow-Ctrl auf null; dient als initialisierung des Geräts",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "LogPriority": "3",
            "Value": "SP1,0.0@CRSP2,0.0@CR",
            "PostProcessing": [
                "var ok = _x"
            ]
        }
    ]
}