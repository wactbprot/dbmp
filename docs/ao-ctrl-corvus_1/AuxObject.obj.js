{
    "Comment": "Corvus Motorsteuerung an CE3 für DV1 und DV2",
    "Name": "Corvus_1",
    "Standard": "CE3",
    "Type": "Motorsteuerung",
    "Date": {
        "Type": "generated",
        "Value": "2011-06-22"
    },
    "Defaults": {
        "@host": "e75468",
        "@port": "23",
        "@CR": "\\r"
    },
    "Device": {
        "SerNr": "1105056",
        "Producer": "ITK Dr. Kassen GmbH",
        "InvNr": "99080444/21",
        "LocationBuilding": "Foe-Bau ",
        "LocationRoom": "9",
        "Type": "8064-12"
    },
    "Owner": {
        "Name": "PTB AG 7.54"
    },
    "Tasks": [
        {
            "TaskName": "is_ready",
            "Comment": "Testet status des Geräts",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "status@CR",
            "PostProcessing": [
                "var val = parseInt(_x,10);",
                "ToExchange={'@exchpath': val == 0};"
            ]
        },
        {
            "TaskName": "open_grLW_exe",
            "Comment": "Öffnet großen Leitwert (10 Umdr.)",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "1.8 sv@CR0 10 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "close_grLW_exe",
            "Comment": "schließt großen Leitwert (10 Umdr.)",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "1.8 sv@CR0 -10 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "open_klLW_exe",
            "Comment": "öffnet kleinen Leitwert (10 Umdr.)",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "1.8 sv@CR0 0 10 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "close_klLW_exe",
            "Comment": "schließt kleinen Leitwert (10 Umdr.)",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "1.8 sv@CR0 0 -10 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "klLW_startpos",
            "Comment": "Task liefert die Position des kleinen LW-Ventils.",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Timeout": "10000",
            "Value": " pos @CR",
            "StopIf": "klLw_start_position",
            "PostProcessing": [
                "var _pos = parseFloat(_x.split('\\n')[1]),",
                "Value = {klLw_start_position : (_pos < 0.01 && _pos > -0.01)};"
            ]
        },
        {
            "TaskName": "grLW_startpos",
            "Comment": "Task liefert die Position des kleinen LW-Ventils.",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Timeout": "10000",
            "Value": " pos @CR",
            "StopIf": "grLw_start_position",
            "PostProcessing": [
                "var _pos = parseFloat(_x.split('\\n')[0]),",
                "Value = {grLw_start_position : (_pos < 0.01 && _pos > -0.01)};"
            ]
        }
    ]
}