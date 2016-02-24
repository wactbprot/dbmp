{
    "Name": "CDG_100",
    "Sign": "4037",
    "Type": "CDG",
    "Owner": {
        "Name": "PTB AG 7.54"
    },
    "Setup": {
        "Fullscale": "100",
        "Heater": "on",
        "Channel": "202"
    },
    "Device": {
        "Serial": "101",
        "Type": "CTR 101",
        "Producer": "Oerlikon Leybold",
        "CalibrationIntervall": "24",
        "InvNo": "300013795/126",
        "LocationBuilding": "Foe-Bau",
        "LocationRoom": "23",
        "Standard": "SE1",
        "UsedFor": "pfill"
    },
    "Constants": [
        {
            "Type": "cdg100Conv",
            "Value": "13.33224",
            "Unit": "mbar/V",
            "Comment": "133mbar/10V = ind_in_mbar/ind_in_V"
        },
        {
            "Type": "cdg100CorrA",
            "Value": "0.012920434",
            "Unit": "%",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg100CorrB",
            "Value": "-0.0010739282",
            "Unit": "%/mbar",
            "Comment": "TTC-Eq.:4403"
        },
        {
            "Type": "cdg100CorrC",
            "Value": "4.5726e-6",
            "Unit": "%/mbar^2",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg100CorrD",
            "Value": "0.0039743778",
            "Unit": "-",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg100CorrE",
            "Value": "-0.17614131",
            "Unit": "-",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg100UseDev",
            "From": "13",
            "To": "130",
            "RangeUnit": "mbar",
            "Comment": "Gültigkeitsbereich"
        }
    ],
    "Defaults": {
        "@host": "e75465",
        "@device": "gpib0,10",
        "@acc": "VXI11",
        "@Pwait": "200",
        "@NP": "20",
        "@CONV": "0.075006"
    },
    "Task": [
        {
            "TaskName": "ctrl_pfill",
            "Comment": "Berechnet die aktuelle Abweichung des p_ist vom p_soll und daraus den setpoint für den flow controller",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "Value": "READ?",
            "LogPriority": "1",
            "Repeat": "4",
            "Wait": "100",
            "StopIf": "pfill_ok",
            "ReadDefaultFrom": "ex_and_pfill",
            "PostProcessing": [
                "_vec=_x.map(_.extractKeithleyVolt).map(parseFloat);",
                "_res = _.vlStat(_vec),",
                "mq = 'expansion' == 'Expansion_B'? 0.01:0.05,",
                "_ret = _.calQsp(p_fill_mbar, _res.mv / @CONV, mq);",
                "ToExchange={",
                "'Filling_Pressure_Dev.Value':_ret.dp,",
                "'Filling_Pressure_Ok.Value':_ret.pfill_ok,",
                "'MKS_Flow_Ctrl.Bool': typeof _ret.sp1 =='number' && typeof _ret.sp2 =='number',",
                "'MKS_Flow_Ctrl.Value':'SP1,'+_ret.sp1+'\\r' +'SP2,'+_ret.sp2+'\\r'",
                "};"
            ]
        },
        {
            "TaskName": "init",
            "Comment": "Initialisiert Channel 202",
            "LogPriority": "3",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "Value": "*RST;FUNC 'VOLT',(@202);INIT:CONT OFF;*OPC?",
            "PostProcessing": [
                "ok = (_x == 1)?true:false;"
            ]
        },
        {
            "TaskName": "exec",
            "Comment": "Messung cdg100",
            "LogPriority": "3",
            "Action": "@acc",
            "Repeat": "@NP",
            "Wait": "@Pwait",
            "Host": "@host",
            "Device": "@device",
            "DocPath": "@docpath",
            "Value": "READ?",
            "PostProcessing": [
                " var LogData ={'x':_x};",
                "var _vec=_x.map(_.extractKeithleyVolt).map(parseFloat),",
                "_res = _.vlStat(_.checkNumArr(_vec).Arr);",
                "var Result=[_.vlRes('@token',_res.mv,'V', '',_res.sd, _res.N)];",
                "var ToExchange={'@exchangepath.Type':'@token','@exchangepath.Value':_res.mv / @CONV,'@exchangepath.Unit':'mbar'};"
            ]
        }
    ],
    "Uncertainty": [
        {
            "Type": "cdg100_u1_a",
            "Value": "0.0022",
            "Unit": "1",
            "Comment": "rel. Uns. d. Kalibrierdrucks im Bereich 13 mbar bis 20 mbar",
            "From": "13",
            "To": "20",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg100_u1_b",
            "Value": "0.0013",
            "Unit": "1",
            "Comment": "rel. Uns. d. Kalibrierdrucks im Bereich 020 mbar bis 130 mbar",
            "From": "20",
            "To": "130",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg100_u2",
            "Value": "3.8e-7",
            "Unit": "mbar",
            "Comment": "abs. Uns. d. Digitalisierung 0.29e-4*.13mbar/10V",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg100_u4",
            "Value": "0.0005",
            "Unit": "1",
            "Comment": "Langzeitstab. pro 1a"
        },
        {
            "Type": "cdg100_u5",
            "Value": "0.0003",
            "Unit": "1",
            "Comment": "rel. Uns. d. Nichtreproduzierbarkeit",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg100_u7",
            "Value": "5e-3",
            "Unit": "mbar",
            "Comment": "abs. Uns. d. nichterfassb. Nullpunktschw.",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg100_u6",
            "Value": "0.000025",
            "Unit": "1",
            "Comment": "rel. Uns. durch Temperaturdifferenz (5e-5/K)"
        },
        {
            "Type": "cdg100_u8",
            "Value": "1e-4",
            "Unit": "1",
            "Comment": "Abweichung von Fitkurve"
        }
    ]
}