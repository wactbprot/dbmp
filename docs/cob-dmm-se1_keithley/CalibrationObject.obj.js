{
    "Comment": "Auslese von CDG und Pt-100",
    "Type": "2700",
    "Standard": "SE1",
    "Name": "SE1-DMM_Keithley",
    "Sign": "4027",
    "Device": {
        "SN": "1192465",
        "Producer": "Keithley",
        "InvNo": "200031278",
        "LocationBuilding": "Foe-Bau",
        "LocationRoom": "21"
    },
    "Date": {
        "Type": "updated",
        "Value": "2015-02-13"
    },
    "Owner": {
        "Name": "PTB AG7.54"
    },
    "Defaults": {
        "@host": "e75465",
        "@device": "gpib0,10",
        "@unit": "C",
        "@acc": "VXI11",
        "@tempchan": "(@101:110)",
        "@presschan": "(@201:203)",
        "@channel": "101",
        "@CR": "\n",
        "@Twait": "1000",
        "@Pwait": "1000",
        "@NT": "3",
        "@NP": "3"
    },
    "Task": [
        {
            "TaskName": "device_init",
            "Comment": "Führt initialisierungen aus",
            "LogPriority": "3",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "Values": {
                "syst": "SYST:PRES;*OPC?",
                "reset": "*RST;*OPC?",
                "trac_cl": "TRAC:CLE;*OPC?",
                "cont_ini_off": "INIT:CONT OFF;*OPC?",
                "trig_imm": "TRIG:SOUR IMM;*OPC?",
                "trig_coun": "TRIG:COUN 1;*OPC?",
                "samp_coun": "SAMP:COUN 10;*OPC?",
                "rout_scan_t": "ROUT:SCAN @tempchan;*OPC?",
                "rout_scan_v": "ROUT:SCAN @presschan;*OPC?",
                "rout_tso": "ROUT:SCAN:TSO IMM;*OPC?",
                "rout_lsel": "ROUT:SCAN:LSEL INT;*OPC?",
                "trac_ao": "TRAC:CLE:AUTO OFF;*OPC?",
                "func_t": "FUNC 'TEMP', @tempchan;*OPC?",
                "func_v": "FUNC 'VOLT', @presschan;*OPC?",
                "temp_frtd": "TEMP:TRAN FRTD, @tempchan;*OPC?",
                "temp_typ": "TEMP:FRTD:TYPE PT100, @tempchan;*OPC?",
                "close": "ROUT:CLOS (@@channel);*OPC?"
            },
            "PostProcessing": [
                "ok= (_x == 1)?true:false;"
            ]
        },
        {
            "TaskName": "temperature_exec",
            "Comment": "read out channel @tempchan",
            "LogPriority": "3",
            "Action": "@acc",
            "Repeat": "@NT",
            "Wait": "@Twait",
            "Host": "@host",
            "Device": "@device",
            "DocPath": "Calibration.Measurement.Values.Temperature",
            "Value": "READ?@CR",
            "PostProcessing": [
                "var _ro =_.extractKeithleyTempScan(_x,'@tempchan'), _res = [], k;",
                "for(k in _ro){",
                "_res.push(_.vlRes('@token' + k,_ro[k].mv,'C'))",
                "}",
                "Result=_res;"
            ]
        },
        {
            "TaskName": "pressure_exec",
            "Comment": "read out channel @presschan",
            "LogPriority": "3",
            "Action": "@acc",
            "Repeat": "@NT",
            "Wait": "@Twait",
            "Host": "@host",
            "Device": "@device",
            "DocPath": "Calibration.Measurement.Values.Pressure",
            "Value": "READ?@CR",
            "PostProcessing": [
                "var _ro =_.extractKeithleyPressScan(_x,'@presschan'), _res = [], k;",
                "for(k in _ro){",
                "_res.push(_.vlRes('@token' + k,_ro[k].mv,'C'))",
                "}",
                "Result=_res;"
            ]
        }
    ],
    "Uncertainty": [
        {
            "Type": "keithley_u1",
            "Value": "0.015",
            "Unit": "K",
            "Comment": "Uns. des Temperaturnormals"
        },
        {
            "Type": "keithley_u2",
            "Value": "0.000029",
            "Unit": "K",
            "Comment": "Digitalisierung"
        },
        {
            "Type": "keithley_u3",
            "Value": "0.02",
            "Unit": "K",
            "Comment": "Gradient ueber Al-Block, (Abschätzung)"
        },
        {
            "Type": "keithley_u4",
            "Value": "0.0",
            "Unit": "K",
            "Comment": "Temperaturabh. der Korrektur"
        },
        {
            "Type": "keithley_u5",
            "Value": "0.2",
            "Unit": "K",
            "Comment": "Langzeitstab. pro Jahr (war 0.3 auf 2a)"
        },
        {
            "Type": "keithley_u6",
            "Value": "0.08",
            "Unit": "K",
            "Comment": "experimentelle Streuung bei der Kalib."
        }
    ]
}