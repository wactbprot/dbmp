{
    "Type": "398HD-00010 SP05",
    "Sign": "4022",
    "Name": "FM3_10T",
    "Owner": {
        "Name": "PTB AG7.54"
    },
    "Device": {
        "Serial": "33765-1",
        "Producer": "MKS",
        "LastCalibration": "QS 6/13",
        "CalibrationIntervall": "24",
        "MeasuredQuantity": "M+A",
        "InventarNo": "94008769-0002",
        "LocationBuilding": "Foe-Bau",
        "LocationRoom": "24",
        "Standard": "CE3",
        "UsedFor": "pfill"
    },
    "Date": {
        "Type": "updated",
        "Value": "2014-08-15"
    },
    "Setup": {
        "ZeroEnable": "on",
        "Display": "mbar",
        "Average": "1",
        "Heater": "on"
    },
    "Uncertainty": [
        {
            "Type": "cdga_u1_a",
            "Value": "0.00078",
            "Unit": "1",
            "Comment": "rel. Uns. d. Kalibrierdrucks im Bereich 0.013 mbar bis 9.99 mbar",
            "From": "0.013",
            "To": "9.99",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdga_u1_b",
            "Value": "0.00023",
            "Unit": "1",
            "Comment": "rel. Uns. d. Kalibrierdrucks im Bereich 10 mbar bis 13 mbar",
            "From": "10.0",
            "To": "13.0",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdga_u2_a",
            "Value": "0.0000029",
            "Unit": "mbar",
            "Comment": "abs. Uns. d. Digitalisierung für p<1.3mbar",
            "From": "0.013",
            "To": "1.299",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdga_u2_b",
            "Value": "0.000029",
            "Unit": "mbar",
            "Comment": "abs. Uns. d. Digitalisierung für p>1.3mbar",
            "From": "1.3",
            "To": "13.0",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdga_u4",
            "Value": "0.001",
            "Unit": "1",
            "Comment": "Langzeitstab. pro 2a"
        },
        {
            "Type": "cdga_u5_a",
            "Value": "0.0008",
            "Unit": "1",
            "Comment": "rel. Uns. d. Nichtreproduzierbarkeit",
            "From": "0.13",
            "To": "0.99",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdga_u5_b",
            "Value": "0.0003",
            "Unit": "1",
            "Comment": "rel. Uns. d. nichterfassb. Nullpunktschw.",
            "From": "1.0",
            "To": "13.0",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdga_u6",
            "Value": "0.00005",
            "Unit": "1",
            "Comment": "rel. Uns. durch Temperaturdifferenz (5e-5/K)"
        },
        {
            "Type": "cdga_u7",
            "Value": "0.000005",
            "Unit": "mbar",
            "Comment": "abs. Uns. d. nicht erfassbaren Nullpunktschwankung"
        },
        {
            "Type": "cdga_u8",
            "Value": "0.0",
            "Unit": "1",
            "Comment": "Abweichung von Fitkurve"
        }
    ],
    "Constants": [
        {
            "Type": "fullscale",
            "Value": "10",
            "Unit": "Torr",
            "Comment": "Kann zur ber. d. rangeabh. factors benutzt werden"
        },
        {
            "Type": "cdgaCorrA_N2",
            "Value": "0.028688827",
            "Unit": "1",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrB_N2",
            "Value": "15.801256",
            "Unit": "1/mbar",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrC_N2",
            "Value": "-0.013648996",
            "Unit": "1/mbar",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrD_N2",
            "Value": "153.25344",
            "Unit": "1/mbar^2",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrE_N2",
            "Value": "-0.49906842",
            "Unit": "1/mbar^2",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrF_N2",
            "Value": "1.6020308",
            "Unit": "1/mbar^3",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrG_N2",
            "Value": "0.0",
            "Unit": "1/mbar^3",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrA_Ar",
            "Value": "0.027487",
            "Unit": "1",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrB_Ar",
            "Value": "12.25051",
            "Unit": "1/mbar",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrC_Ar",
            "Value": "-0.066346385",
            "Unit": "1/mbar",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrD_Ar",
            "Value": "58.984373",
            "Unit": "1/mbar^2",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrE_Ar",
            "Value": "-0.18039466",
            "Unit": "1/mbar^2",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^2)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrF_Ar",
            "Value": "0.068294794",
            "Unit": "1/mbar^3",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "cdgaCorrG_Ar",
            "Value": "0.0",
            "Unit": "1/mbar^3",
            "Comment": "F(relativ)=(a+c*pind+e*pind^2+g*pind^3)/(1+b*pind+d*pind^2+f*pind^3)"
        },
        {
            "Type": "useDev",
            "From": "0.013",
            "To": "12.99",
            "RangeUnit": "mbar",
            "Comment": "Gültigkeitsbereich"
        }
    ],
    "Defaults": {
        "@host": "e75481",
        "@device": "gpib0,10",
        "@unt": "mbar",
        "@acc": "VXI11",
        "@range": "X1",
        "@CR": "\r"
    },
    "Tasks": [
        {
            "TaskName": "device_ini",
            "Comment": "Initialisierung des Geräts",
            "Action": "@acc",
            "Host": "@host",
            "LogPriority": "3",
            "Device": "@device",
            "Value": ":digit 5.5@CR:sens:scan(@1):puni @unt@CR:sens:scan(@1):aver 1@CR:sens:func pres@CR*OPC?@CR",
            "PostProcessing": [
                "var ok = _x == 1,",
                "ToExchange={'@exchpath':ok};"
            ]
        },
        {
            "TaskName": "set_range",
            "Comment": "Stell die Range @range ein",
            "Action": "@acc",
            "Host": "@host",
            "LogPriority": "3",
            "Device": "@device",
            "Value": ":sens:scan(@1):gain @range@CR*OPC?@CR",
            "PostProcessing": [
                "var ok = _x == 1,",
                "ToExchange={'@exchpath':ok};"
            ]
        }
    ],
    "History": {
        "2014-08-15": "Änderung des DB Namens (war CDG an FM3 10T) in der Datenbank mp_db"
    }
}