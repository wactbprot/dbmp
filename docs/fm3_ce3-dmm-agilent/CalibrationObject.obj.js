{
    "Comment": "Neue Temperaturfuehler fuer CE3 an Agilent Scanner und neue PT100, liefert seit 27.10.11 Unsicherheit für CE3/FM3",
    "Constants": [
        {
            "Type": "useDev",
            "From": "293.15",
            "To": "300.15",
            "RangeUnit": "K",
            "Comment": "Gültigkeitsbereich"
        }
    ],
    "Date": {
        "Type": "updated",
        "Value": "2011-10-27"
    },
    "Defaults": {
        "@acc": "VXI11",
        "@host": "e75481",
        "@device": "gpib0,5",
        "@CR": "\n"
    },
    "Device": {
        "Serial": "MY44042868",
        "Producer": "Agilent/LKM",
        "LastCalibration": "10/11",
        "CalibrationIntervall": "12",
        "Calibration": "QS 13/11",
        "InventarNo": "94008818",
        "LocationBuilding": "Foe-Bau",
        "LocationRoom": "24",
        "Standard": "CE3",
        "UsedFor": "T"
    },
    "Name": "FM3_CE3-DMM_Agilent",
    "Owner": {
        "Name": "PTB AG7.54"
    },
    "Sign": "4833",
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
                "var ok = _x == 'HEWLETT-PACKARD,34970A,0,13-2-2\\n',",
                "ToExchange={'@exchpath':ok};"
            ]
        },
        {
            "TaskName": "device_ini",
            "Comment": "Initialisierung des Messgeräts",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "LogPriority": "3",
            "Value": "CONF:TEMP FRTD,91,1,MAX,(@101,102,103,104,105,106,107,108,109,110)@CRUNIT:TEMP C@CR*OPC?",
            "PostProcessing": [
                "var ok = _x == 1,",
                "ToExchange={'@exchpath':ok};"
            ]
        }
    ],
    "Type": "34970A",
    "Uncertainty": [
        {
            "Type": "agilent_u1",
            "Value": "0.015",
            "Unit": "K",
            "Comment": "Uns. des Temperaturnormals"
        },
        {
            "Type": "agilent_u2",
            "Value": "0.000029",
            "Unit": "K",
            "Comment": "Digitalisierung"
        },
        {
            "Type": "agilent_u3",
            "Value": "0.02",
            "Unit": "K",
            "Comment": "Gradient ueber Al-Block, (Abschätzung)"
        },
        {
            "Type": "agilent_u4",
            "Value": "0.0",
            "Unit": "K",
            "Comment": "Temperaturabh. der Korrektur (war bei PP2 extrem ausgeprägt)"
        },
        {
            "Type": "agilent_u5",
            "Value": "0.2",
            "Unit": "K",
            "Comment": "Langzeitstab. pro Jahr (war 0.3 auf 2a); Erfahrung fehlt noch"
        },
        {
            "Type": "agilent_u6",
            "Value": "0.08",
            "Unit": "K",
            "Comment": "experimentelle Streuung bei der Kalib."
        }
    ]
}