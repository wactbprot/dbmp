{
    "Comment": "SE1 Ventilsteierung",
    "Type": "Ventilsteuerung",
    "Standard": "SE1",
    "Name": "VS-SE1",
    "Owner": {
        "Name": "PTB AG 7.54"
    },
    "Device": {
        "Producer": "Eigenbau PTB",
        "InvNr": "94006902",
        "LocationBuilding": "Foe-Bau ",
        "LocationRoom": "9"
    },
    "Date": {
        "Type": "generated",
        "Value": "2016-02-18"
    },
    "Defaults": {
        "@host": "e75465",
        "@device": "gpib0,18",
        "@CR": "",
        "@acc": "VXI11",
        "@valve": "V1"
    },
    "Task": [
        {
            "TaskName": "is_ready",
            "Comment": "Testet ob das Gerät ansprechbar ist",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "LogPriority": "3",
            "Value": "*IDN?",
            "Fallback": {
                "ToExchange": {
                    "@exchpath": false
                }
            },
            "PostProcessing": [
                "var _ok = _x.substr(0,5) == '00000',",
                "ToExchange={'@exchpath':_ok};"
            ]
        },
        {
            "TaskName": "valves_init",
            "Comment": "initialisiert SE1-Ventilsteuerung",
            "LogPriority": "3",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "Value": "C1P0F0R0I0X@CR"
        },
        {
            "TaskName": "ctrl_valve",
            "Comment": "Öffnet/schliest Ventile",
            "Action": "@acc",
            "Host": "@host",
            "LogPriority": "3",
            "Device": "@device",
            "Values": {
                "close_v1": "P1B1X@CR",
                "open_v1": "P1A1X@CR",
                "close_v2": "P1B2X@CR",
                "open_v2": "P1A2X@CR",
                "close_v3": "P1B3X@CR",
                "open_v3": "P1A3X@CR",
                "close_v4": "P1B4X@CR",
                "open_v4": "P1A4X@CR",
                "close_v5": "P1B5X@CR",
                "open_v5": "P1A5X@CR",
                "close_v6": "P1B6X@CR",
                "open_v6": "P1A6X@CR"
            }
        },
        {
            "TaskName": "status_closed",
            "Comment": "liefert Antwort auf: Ventil @valve geschlossen?",
            "LogPriority": 1,
            "Action": "@acc",
            "Host": "@host",
            "NoLog": true,
            "Device": "@device",
            "StopIf": "Valve_@valve_closed.Bool",
            "Value": "P0X@CR",
            "PostProcessing": [
                "var _state =  _.se1ValveStatus(_x,'@valve'),",
                "ToExchange = {'Valve_@valve_closed.Bool':_state.Valve_closed,'Valve_@valve_opened.Bool':_state.Valve_opened};"
            ]
        },
        {
            "TaskName": "status_opened",
            "Comment": "liefert Antwort auf: Ventil @valve geöffnet?",
            "LogPriority": 1,
            "Action": "@acc",
            "Host": "@host",
            "NoLog": true,
            "Device": "@device",
            "StopIf": "Valve_@valve_opened.Bool",
            "Value": "P0X@CR",
            "PostProcessing": [
                "var _state =  _.se1ValveStatus(_x,'@valve'),",
                "ToExchange = {'Valve_@valve_closed.Bool':_state.Valve_closed,'Valve_@valve_opened.Bool':_state.Valve_opened};"
            ]
        }
    ]
}