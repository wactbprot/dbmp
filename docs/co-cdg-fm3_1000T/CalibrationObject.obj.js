{
    "Comment": "CDGB",
    "Type": "398HD-01000 SP05",
    "Sign": "4023",
    "Name": "FM3_1000T",
    "Owner": {
        "Name": "PTB AG7.54"
    },
    "Device": {
        "Serial": "33765-2",
        "Producer": "MKS",
        "LastCalibration": "QS 7/13",
        "CalibrationIntervall": "24",
        "MeasuredQuantity": "M+A",
        "InventarNo": "94008769-0003",
        "LocationBuilding": "Foe-Bau",
        "LocationRoom": "24",
        "Standard": "CE3",
        "UsedFor": "pfill"
    },
    "Date": {
        "Type": "updated",
        "Value": "2013-06-07"
    },
    "Setup": {
        "ZeroEnable": "on",
        "Display": "mbar",
        "Heater": "on",
        "Average": "1"
    },
    "Uncertainty": [
        {
            "Type": "cdgb_u1_a",
            "Value": "0.00022",
            "Unit": "1",
            "Comment": "relative Standardunsicherheit des Kalibrierdrucks während der Kalibrierung für Drücke > 30mbar",
            "From": "1.3",
            "To": "29.99",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdgb_u1_a",
            "Value": "0.00013",
            "Unit": "1",
            "Comment": "relative Standardunsicherheit des Kalibrierdrucks während der Kalibrierung für Drücke < 30mbar",
            "From": "30",
            "To": "1300.0",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdgb_u2_a",
            "Value": "0.0029",
            "Unit": "mbar",
            "Comment": "absolute Unsicherheit durch Digitalisierung im Bereich 133.0mbar bis 1300.0mbar",
            "From": "133.0",
            "To": "1300.0",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdgb_u2_b",
            "Value": "0.00029",
            "Unit": "mbar",
            "Comment": "absolute Unsicherheit durch Digitalisierung im Bereich 1.3mbar bis 132.999mbar",
            "From": "1.3",
            "To": "132.99",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdgb_u3",
            "Value": "0.0002",
            "Unit": "1",
            "Comment": "relative Langzeitstabilität bis zur nächsten Kalibrierfrist (2Jahre)"
        },
        {
            "Type": "cdgb_u4_a",
            "Value": "0.0008",
            "Unit": "1",
            "Comment": "relative Unsicherheit durch Nichtreproduzierbarkeit für Drücke < 200mbar",
            "From": "1.3",
            "To": "199.99",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdgb_u4_b",
            "Value": "0.0001",
            "Unit": "1",
            "Comment": " relative Unsicherheit durch Nichtreproduzierbarkeit für Drücke > 200mbar",
            "From": "200",
            "To": "1300.0",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdgb_u5",
            "Value": "0.0",
            "Unit": "1",
            "Comment": "relative Unsicherheit durch nicht erfassbare Nullpunktschwankungen"
        }
    ],
    "Constants": [
        {
            "Type": "fullscale",
            "Value": "1000",
            "Unit": "Torr"
        },
        {
            "Type": "cdgbCorrA",
            "Value": "-1.1255315",
            "Unit": "1",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgbCorrB",
            "Value": "490.42154",
            "Unit": "1/mbar",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgbCorrC",
            "Value": "-0.24251923",
            "Unit": "1/mbar",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgbCorrD",
            "Value": "-2.1125578",
            "Unit": "1/mbar^2",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgbCorrE",
            "Value": "0.0024634774",
            "Unit": "1/mbar^2",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgbCorrF",
            "Value": "0.026910772",
            "Unit": "1/mbar^3",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "useDev",
            "From": "13.0",
            "To": "1300.0",
            "RangeUnit": "mbar",
            "Comment": "Gültigkeitsbereich"
        }
    ],
    "Defaults": {
        "@host": "e75481",
        "@device": "gpib0,9",
        "@unt": "mbar",
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
                "var ok = _x == 'MKS INSTRUMENTS INC, MODEL 670, 0, SW Version 1.1',",
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
                "var ToExchange={'@exchpath':_x == null};"
            ]
        }
    ]
}