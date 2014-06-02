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
            "DocPath": "Calibration_Measurement_Values_Pressure",
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