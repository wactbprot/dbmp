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
        "@CR": "\n",
        "@range": "X1",
        "@prefix": "drift",
        "@docpath": "Calibration.Measurement.Values.Drift"
    },
    "Tasks": [
        {
            "TaskName": "device_ini",
            "Comment": "Gerät initiieren",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "LogPriority": "3",
            "Value": ":digit 5.5@CR:sens:scan(@1):puni @unt@CR:sens:scan(@1):aver 1@CR:sens:func pres@CR*OPC?@CR",
            "PostProcessing": [
                "var ok = _x == 1 ,",
                "ToExchange={'@exchpath':ok};"
            ]
        },
        {
            "TaskName": "set_range",
            "Comment": "Initialize Range _range",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "LogPriority": "3",
            "Value": ":sens:scan(@1):gain @range@CR:meas:func@CR*OPC?@CR",
            "PostProcessing": [
                "var ok = _x == 1,",
                "ToExchange={'@exchpath':ok};"
            ]
        }
    ],
    "History": {
        "2013-11-26": "springt während der Messung unvermittelt in mTorr Range",
        "2014-05-20": "Änderung des DB Namens (war CDG an FM3 1T) in der Datenbank mp_db"
    }
}