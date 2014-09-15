```
    .______.                   
  __| _/\_ |__   _____ ______  
 / __ |  | __ \ /     \\____ \ 
/ /_/ |  | \_\ \  Y Y  \  |_> >
\____ |  |___  /__|_|  /   __/ 
     \/      \/      \/|__|    

```


__dbmp__ is a container for the ```ssmp``` 
```views```, ```shows``` and ```lists```

## views
### tasks

Diese _view_ liefert das Datenmaterial für die 
nachfolgend beschriebene list _get_.
Ein _http-get_ Request auf:

```
http://localhost:5984/nmp_db/_design/dbmp/_view/tasks
```

liefert alle in der DB vorhandenen Tasks. Diese _task_s sind i.d.R.
noch nicht ausführbar, da noch keine Ersetzungen vorgenommen sind.
Die geschieht erst in der _list_ ```get``` (s. Datei ```lists/get.js```).


## lists

Die _list_ ```get``` in Kombination mit der _view_ ```task```
liefert fertige task-Objekte:

```
http://localhost:5984/nmp_db/_design/dbmp/_view/tasks
```

Als Ersetzungsstrings stehen immer:

* ```@mpname```: der Messprogrammname der (default: Mp)
* ```@devicename```: der Gerätename (Name des CalibrationObjects, ...) (default: GenericDevice)
* ```@year```: das aktuelle Jahr im YYYY Format
* ```@cdids```: ein Array mit allen ausgewählten Kalibrier-ids 

zur Verfügung.