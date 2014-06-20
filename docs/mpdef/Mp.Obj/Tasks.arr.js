[
    {
        "Action": "wait",
        "Comment": "_waitfor  _waittime ms",
        "TaskName": "wait",
        "Value": {
            "WaitTime": "_waittime"
        }
    },
    {
        "Action": "wait",
        "Comment": "_waitfor  _waittime ms",
        "TaskName": "cond_wait",
        "FromExchange": "wait_time.Value",
        "RunIf": "got_time.Value",
        "Value": {
            "WaitTime": "wait_time.Value"
        }
    },
    {
        "Action": "select",
        "Comment": "selects recipes",
        "TaskName": "select_recipe",
        "Value": {
            "RecipeClass": "_recipeclass"
        }
    },
    {
        "Action": "addElement",
        "Comment": "Add an element to the Container _container Exchange api",
        "TaskName": "pressure_element",
        "Container": "_container",
        "Key": "_devicename-_elemtype",
        "Value": {
            "Caption": {
                "exchange": false,
                "required": false,
                "value": "_caption"
            },
            "DocPath": {
                "exchange": true,
                "required": true,
                "value": "_docpath"
            },
            "Type": {
                "exchange": true,
                "required": true,
                "value": "_elemtype",
                "type": "text"
            },
            "Unit": {
                "exchange": true,
                "required": true,
                "value": "mbar",
                "options": "_pressureunits"
            },
            "Value": {
                "exchange": true,
                "required": true,
                "type": "number"
            },
            "Comment": {
                "exchange": true,
                "required": false,
                "type": "text"
            }
        }
    },
    {
        "Action": "rmElement",
        "Comment": "Remove an Element from Elements and Exchange",
        "TaskName": "remove_element",
        "Container": "_container",
        "Key": "_devicename-_elemtype"
    }
]