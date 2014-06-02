{
    "Sign": "9999_0003",
    "Type": "NN",
    "Year": "2014",
    "Standard": "CE3",
    "Presettings": {
        "Date": [
            {
                "Value": "2014-05-26 11:50",
                "Type": "generated"
            },
            {
                "Type": "schedule",
                "Duration": ""
            }
        ],
        "ToDo": {
            "Name": "IG 3E-8 bis 9E-4 mbar (error)",
            "Sign": "IG-3E-8-9E-4",
            "Type": "error",
            "Gas": "N2",
            "Repeat": "1",
            "MaxDev": "0.1",
            "Values": {
                "Pressure": {
                    "Type": "target",
                    "Unit": "mbar",
                    "Value": [
                        "3e-8",
                        "5e-8",
                        "9e-8",
                        "3e-7",
                        "5e-7",
                        "8.9e-7",
                        "9e-7",
                        "3e-6",
                        "5e-6",
                        "9e-6",
                        "3e-5",
                        "5e-5",
                        "9e-5",
                        "3e-4",
                        "5e-4",
                        "9e-4"
                    ]
                }
            }
        },
        "Customer": {
            "Lang": "de",
            "Name": "PTB AG7.54",
            "Sign": "PTB",
            "Type": "NMI",
            "DebitorenNr": "intern",
            "Adress": {
                "Street": "Abbestr. 2-12",
                "Town": "Berlin",
                "Zipcode": "10587",
                "Land": "Deutschland"
            },
            "Contact": {
                "Name": "Dr. Karl Jousten",
                "Phone": "++49-30-3481-7262",
                "Fax": "++49-30-3481-7490",
                "Mail": "karl.jousten@ptb.de"
            }
        }
    },
    "Measurement": {
        "CalibrationObject": [
            {
                "Comment": "Sign 6/13 von 4036 auf 4836 geändert",
                "Type": "IG ISX2",
                "Sign": "4836",
                "Name": "AxTRAN ISX2-CE",
                "Date": {
                    "Type": "update",
                    "Value": "2010-09-28"
                },
                "Owner": {
                    "Name": "PTB AG7.54"
                },
                "Device": {
                    "Serial": "0076 00112",
                    "Producer": "ULVAC",
                    "MeasuredQuantity": "M+A",
                    "Comment": "erstmals bei LB Kalib 4/10 mitkalib. soll PN werden",
                    "InventarNo": "",
                    "LocationBuilding": "Foe-Bau",
                    "LocationRoom": "24"
                },
                "Setup": {
                    "Display": "mbar",
                    "Average": "1",
                    "Heater": "on",
                    "Sens": "5.8e-3"
                },
                "Tasks": [
                    {
                        "TaskName": "device_init",
                        "Comment": "erstellt ein Eingabeformular (nur nominaler Druck), dessen Werte nach Calibration/Measurement/Pressure geschrieben werden",
                        "Action": "mp_dform_init",
                        "DocPath": "Calibration.Measurement.Values.Pressure",
                        "Value": {
                            "type": "fieldset",
                            "class": "vals",
                            "caption": "AxTRAN Indication",
                            "elements": [
                                {
                                    "type": "checkbox",
                                    "name": "val_ok",
                                    "class": "valuebox",
                                    "caption": "OK "
                                },
                                {
                                    "name": "type",
                                    "value": "pn_ind",
                                    "type": "text",
                                    "class": "type",
                                    "caption": "Type"
                                },
                                {
                                    "name": "Value",
                                    "type": "text",
                                    "class": "value",
                                    "caption": "Value"
                                },
                                {
                                    "name": "Unit",
                                    "type": "text",
                                    "value": "Pa",
                                    "class": "unit",
                                    "caption": "Unit"
                                },
                                {
                                    "name": "Comment",
                                    "type": "text",
                                    "class": "comment",
                                    "caption": "Comment"
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
}