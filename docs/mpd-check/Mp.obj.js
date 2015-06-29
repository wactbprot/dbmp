{
  "Name": "Check",
  "Container": [
    {
      "Description": "checks relay and database",
      "Ctrl": "load;mon",
      "Title": "check",
      "Element": [

      ],
      "Definition": [
        [
          {
            "TaskName": "Commons-db_info",
            "Replace": {
              "@dbinfo": "DataBase"
            }
          },
          {
            "TaskName": "Commons-relay_info",
            "Replace": {
              "@dbinfo": "Relay"
            }
          }
        ],
        [
          {
            "TaskName": "Common-wait",
            "Replace": {
              "@waittime": 10000
            }
          }
        ]
      ]
    }
  ]
}
