{
    "Type": "CDG",
    "Sign": "4824",
    "Name": "FM3_1T",
    "Owner": {
        "Name": "PTB AG7.54"
    },
    "Device": {
        "Serial": "33765-2",
        "Type": "398HD-01000 SP05",
        "Producer": "MKS",
        "InventarNo": "94008936-1",
        "LocationBuilding": "Foe-Bau",
        "LocationRoom": "24",
        "Standard": "CE3",
        "UsedFor": "delta_pfill"
    },
    "Date": {
        "Type": "generated",
        "Value": "2012-08-28"
    },
    "Setup": {
        "Display": "mbar",
        "Heater": "off",
        "Average": "1"
    },
    "Defaults": {
        "@host": "e75481",
        "@device": "gpib0,8",
        "@unt": "mbar",
        "@t_d": "500",
        "@N_d": "10",
        "@acc": "VXI11",
        "@cmdstr": ":meas:func",
        "@range": "X1",
        "@prefix": "drift",
        "@docpath": "Calibration.Measurement.Values.Drift"
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
                "var ok = _x == 'MKS Instruments MKS670BD81 0 1.2',",
                "ToExchange={'@exchpath':ok};"
            ]
        },
        {
            "TaskName": "send_cmd",
            "Comment": "Sendet @cmdstr an das Gerät. Es gibt keine Rückantwort; deshalb wird auf null getestet",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "VxiTimeout": 0,
            "LogPriority": "3",
            "Value": "@cmdstr",
            "PostProcessing": [
                "ToExchange={'@exchpath':_x == null};"
            ]
        }
    ],
    "History": {
        "2013-11-26": "springt während der Messung unvermittelt in mTorr Range",
        "2014-05-20": "Änderung des DB Namens (war CDG an FM3 1T) in der Datenbank mp_db"
    }
}