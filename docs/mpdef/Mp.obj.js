{
  "Name": "Mp",
  "Title": "ssmp",
  "Container": [
    {
      "Ctrl": "unformed",
      "Element": [
        {
          "type": "div",
          "html": [
            {
              "type": "h3",
              "html": "Testify"
            }
          ]
        }
      ],
      "NoOfRepeats": 1,
      "Recipe": [
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000,
             "_waitfor" : "Waiting for Godot "}
          },
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 3000}
          },
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 500}
          }
        ],
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          }
        ],
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          }
        ]
      ],
      "Title": "Container 1"
    },
    {
      "Ctrl": "unformed",
      "Element": [
        {
          "type": "div",
          "html": [
            {
              "type": "h3",
              "html": "Testify"
            }
          ]
        }
      ],
      "NoOfRepeats": 1,
      "Recipe": [
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          },
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 3000}
          },
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 500}
          }
        ],
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          }
        ],
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          }
        ]
      ],
      "Title": "Container 2"
    }
  ],
  "Date": [
    {
      "Type": "created",
      "Value": "2014-04-04"
    }
  ],
  "Defaults": {
    "_waittime": 1000,
    "_waitfor" : "Ready in",
    "_waitunit" : "ms"
  },
  "Recipes": [
    {
      "Conditions": [
        {
          "ReadFrom": "token_1",
          "Methode": "LT",
          "Params": [
            "value_1",
            0.0001
          ]
        },
        {
          "ReadFrom": "token_1",
          "Methode": "GT",
          "Params": [
            "value_1",
            1e-11
          ]
        }
      ],
      "Recipe": [
  [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          },
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 3000}
          },
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 500}
          }
        ],
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          }
        ],
        [
          {"Taskname":"Mp-wait",
           "Replace":{
             "_waittime": 1000}
          }
        ]
      ],
      "RecipeClass": "choose",
      "ShortDescr": "Warten\n"
    }
  ],
  "Tasks": [
    {
      "Action": "wait",
      "Comment": "_waitfor  _waittime ms",
      "TaskName": "wait",
      "Value": {
        "WaitTime": "_waittime"
      }
    }
  ]
}