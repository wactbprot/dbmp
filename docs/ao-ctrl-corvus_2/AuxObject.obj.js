{
    "Comment": "Corvus Motorsteuerung an CE3 für DVG1 und FBV",
    "Date": {
        "Type": "generated",
        "Value": "2011-06-22"
    },
    "Defaults": {
        "@host": "e75469",
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
    "Name": "Corvus_2",
    "Owner": {
        "Name": "PTB AG 7.54"
    },
    "Standard": "CE3",
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
            "TaskName": "open_dvg1_exe",
            "Comment": "Task öffnet Dosierventil DVG1 (10 Umdrehungen)",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "1.8 sv@CR0 10 0 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "close_dvg1_exe",
            "Comment": "Task schließt Dosierventil DVG1 (10 Umdrehungen)",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "1.8 sv@CR0 -10 0 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_20_in_exe",
            "Comment": "Task fährt den Verdränger 20 Umdrehungen im Uhrzeigersinn",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.8 sv@CR0 0 -20 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_20_out_exe",
            "Comment": "Task fährt den Verdränger 20 Umdrehungen gegen Uhrzeigersinn",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.8 sv@CR0 0 20 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_pos_exe",
            "Comment": "Task liefert die Verdrängerposition",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": " pos @CR",
            "ReadDefaultFrom": "select_pfill",
            "DocPath": "Calibration_Measurement_AuxValues_Conductance",
            "PostProcessing": [
                "var _identif = mp_no,",
                " Result=[",
                "{'Type':'turn_'+_identif,'Value':parseFloat(_x.split('\\n')[1]),'Unit':'1'}];"
            ]
        },
        {
            "TaskName": "displacer_0.1_in_exe",
            "Comment": "Verdränger 0.1 rein",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.8 sv@CR0 0 -0.1 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_0.1_out_exe",
            "Comment": "Verdränger 0.1 raus",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.8 sv@CR0 0 0.1 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_grLw_in_exe",
            "Comment": "Verdränger 5.06 rein",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.98 sv@CR0 0 -5.06 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_grLw_out_exe",
            "Comment": "Verdränger 5.06 raus",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.98 sv@CR0 0 5.06 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_klLw_in_exe",
            "Comment": "Verdränger 0.665 rein",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.98 sv@CR0 0 -0.665 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_klLw_out_exe",
            "Comment": "Verdränger 0.665 raus",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": "0.98 sv@CR0 0 0.665 r@CR0 0 0 r@CR1 getpitch@CR"
        },
        {
            "TaskName": "displacer_startpos",
            "Comment": "Task liefert die Verdrängerposition; entscheidet ob mit LW-Messung begonnen werden kann.",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": " pos @CR",
            "StopIf": "displacer_start_position",
            "PostProcessing": [
                "var _pos = parseFloat(_x.split('\\n')[1]),",
                "Value = {displacer_start_position : (_pos < 0.01 && _pos > -0.01)};"
            ]
        },
        {
            "TaskName": "dvg1_startpos",
            "Comment": "Task liefert die Verdrängerposition; entscheidet ob mit LW-Messung begonnen werden kann.",
            "Action": "TCP",
            "Host": "@host",
            "Port": "@port",
            "Value": " pos @CR",
            "StopIf": "dvg1_start_position",
            "PostProcessing": [
                "var _pos = parseFloat(_x.split('\\n')[0]),",
                "Value = {dvg1_start_position : (_pos < 0.01 && _pos > -0.01)};"
            ]
        }
    ],
    "Type": "Motorsteuerung"
}