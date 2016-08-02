{
    "Type": "CDG",
    "Sign": "4038",
    "Standard": "SE1",
    "Device": {
        "Serial": "101",
        "Type": "CTR 101",
        "Producer": "Oerlikon Leybold",
        "CalibrationIntervall": "24",
        "InvNo": "300013795/126",
        "LocationBuilding": "Foe-Bau",
        "LocationRoom": "23",
        "UsedFor": "pfill"
    },
    "Name": "CDG_1000",
    "Owner": {
        "Name": "PTB AG 7.54"
    },
    "Setup": {
        "Fullscale": "1000",
        "Heater": "on",
        "Channel": "203"
    },
    "Constants": [
        {
            "Type": "cdg1000Conv",
            "Value": "133.3224",
            "Unit": "mbar/V",
            "Comment": "1333mbar/10V = ind_in_mbar/ind_in_V"
        },
        {
            "Type": "cdg1000CorrA",
            "Value": "0.58612922",
            "Unit": "%",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg1000CorrB",
            "Value": "0.000486694",
            "Unit": "%/mbar",
            "Comment": "TTC-Eq.:4403"
        },
        {
            "Type": "cdg1000CorrC",
            "Value": "-1.0828196e-7",
            "Unit": "%/mbar^2",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg1000CorrD",
            "Value": "-0.019453533",
            "Unit": "-",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg1000CorrE",
            "Value": "-599.08308",
            "Unit": "-",
            "Comment": "TC-Eq.:4403"
        },
        {
            "Type": "cdg1000UseDev",
            "From": "130",
            "To": "1300",
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
        "@CONV": "0.0075006"
    },
    "Task": [
        {
            "TaskName": "ctrl_pfill",
            "Comment": "Berechnet die aktuelle Abweichung des p_ist vom p_soll und daraus den setpoint für den flow controller",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "Value": "READ?",
            "NoLog": true,
            "Repeat": "3",
            "FromExchange": {
                "@target_p_fill": "Filling_Pressure.Value"
            },
            "Wait": "100",
            "StopIf": "Filling_Pressure_Ok.Ready",
            "Fallback": {
                "ToExchange": {
                    "Filling_Pressure_Ok.Ready": false
                }
            },
            "PostProcessing": [
                "_vec=_x.map(_.extractKeithleyVolt).map(parseFloat);",
                "_res = _.vlStat(_vec),",
                "mq = 'expansion' == 'Expansion_B'? 0.01:0.025,",
                "_ret = _.calQsp(@target_p_fill, _res.mv / @CONV, mq);",
                "ToExchange={",
                "'Filling_Pressure_Dev.Value':_ret.dp,",
                "'Filling_Pressure_Ok.Ready':_ret.pfill_ok,",
                "'MKS_Flow_Ctrl.Bool': typeof _ret.sp1 =='number' && typeof _ret.sp2 =='number',",
                "'MKS_Flow_Ctrl.Value':'SP1,'+_ret.sp1+'\\r' +'SP2,'+_ret.sp2+'\\r'",
                "};"
            ]
        },
        {
            "TaskName": "init",
            "Comment": "Initialisiert Channel 203",
            "LogPriority": "3",
            "Action": "@acc",
            "Host": "@host",
            "Device": "@device",
            "Value": "*RST;FUNC 'VOLT',(@203);ROUT:CLOS (@203);*OPC?",
            "PostProcessing": [
                "ok = (_x == 1)?true:false;"
            ]
        },
        {
            "TaskName": "exec",
            "Comment": "Messung cdg1000",
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
                "var ToExchange={'@exchangepath.Caption':'@exchangepath','@exchangepath.Type':'@token','@exchangepath.Value':_res.mv / @CONV,'@exchangepath.SdValue':_res.sd / @CONV,'@exchangepath.Unit':'mbar'};"
            ]
        }
    ],
    "Uncertainty": [
        {
            "Type": "cdg1000_u1_a",
            "Value": "2e-4",
            "Unit": "1",
            "Comment": "rel. Uns. d. Kalibrierdrucks im Bereich 13mbar bis 20mbar",
            "From": "13",
            "To": "20",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg1000_u1_b",
            "Value": "1e-4",
            "Unit": "1",
            "Comment": "rel. Uns. d. Kalibrierdrucks im Bereich 0.013 mbar bis 0.13 mbar",
            "From": "20",
            "To": "1300",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg1000_u2",
            "Value": "3.8e-7",
            "Unit": "mbar",
            "Comment": "abs. Uns. d. Digitalisierung 0.29e-4*.13mbar/10V",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg1000_u4",
            "Value": "0.0005",
            "Unit": "1",
            "Comment": "Langzeitstab. pro 1a"
        },
        {
            "Type": "cdg1000_u5",
            "Value": "0.0003",
            "Unit": "1",
            "Comment": "rel. Uns. d. Nichtreproduzierbarkeit",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg1000_u7",
            "Value": "5e-2",
            "Unit": "mbar",
            "Comment": "rel. Uns. d. nichterfassb. Nullpunktschw.",
            "RangeUnit": "mbar"
        },
        {
            "Type": "cdg1000_u6",
            "Value": "0.00005",
            "Unit": "1",
            "Comment": "rel. Uns. durch Temperaturdifferenz (5e-5/K)"
        },
        {
            "Type": "cdg1000_u7",
            "Value": "0.000005",
            "Unit": "mbar",
            "Comment": "abs. Uns. d. nicht erfassbaren Nullpunktschwankung"
        },
        {
            "Type": "cdg1000_u8",
            "Value": "1e-4",
            "Unit": "1",
            "Comment": "Abweichung von Fitkurve"
        }
    ]
}