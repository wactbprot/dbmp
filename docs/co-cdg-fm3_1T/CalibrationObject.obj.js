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
        "@prefix": "drift",
        "@docpath": "Calibration.Measurement.Values.Drift"
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
            "PostProcessing": [
                "var ok = _x == 'MKS Instruments MKS670BD81 0 1.2',",
                "ToExchange={'@exchpath':ok};"
            ]
        },
        {
            "TaskName": "device_ini",
            "Comment": "Task klammert alle ini strungs und führt per default die digit einstellung durch.",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "VxiTimeout": 0,
            "LogPriority": "3",
            "Values": {
                "unit_mbar": ":sens:scan(@1):puni MBAR",
                "no_aver": ":sens:scan(@1):aver 1",
                "high_res": ":digit 5.5",
                "meas_p": ":sens:func pres",
                "high_range": ":sens:scan(@1):gain X1",
                "med_range": ":sens:scan(@1):gain X0.1",
                "low_range": ":sens:scan(@1):gain X0.01"
            },
            "Value": ":digit 5.5",
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