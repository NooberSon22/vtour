var APP_DATA = {
  "scenes": [
    {
      "id": "0-court",
      "name": "court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3460998842706253,
          "pitch": 0.08433137681614156,
          "rotation": 0,
          "target": "3-groundfloor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2765956335994826,
          "pitch": -0.07467018246716428,
          "title": "URSB Registrar",
          "text": "Text"
        },
        {
          "yaw": 2.5235276644321676,
          "pitch": -0.0020059006821178116,
          "title": "OSDS",
          "text": "Text"
        },
        {
          "yaw": 1.0541422494270307,
          "pitch": -0.10021068147672452,
          "title": "Canteen",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-droneshot",
      "name": "droneshot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.005081652150675353,
          "pitch": 0.8534052657461668,
          "rotation": 0,
          "target": "0-court"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0048116028163427416,
          "pitch": 0.4585249258490922,
          "title": "University Of Rizal System - Binangonan",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-1st-floor",
      "name": "1st floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4007578418653015,
          "pitch": 0.24426041866467685,
          "rotation": 0,
          "target": "4-3rdfloor"
        },
        {
          "yaw": -2.933623010904597,
          "pitch": 0.34840650682758856,
          "rotation": 3.141592653589793,
          "target": "3-groundfloor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4358559537920499,
          "pitch": -0.1524723303491431,
          "title": "Dean Office",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-groundfloor",
      "name": "groundfloor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.31043777880658396,
          "pitch": 0.10961537057253246,
          "rotation": 0,
          "target": "0-court"
        },
        {
          "yaw": 1.3993900624193838,
          "pitch": 0.21400287609102797,
          "rotation": 5.497787143782138,
          "target": "2-1st-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8945558178589295,
          "pitch": -0.0632985591553279,
          "title": "CCS Office",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-3rdfloor",
      "name": "3rdfloor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8146371452975032,
          "pitch": 0.42028892901440607,
          "rotation": 3.141592653589793,
          "target": "2-1st-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5880936932320981,
          "pitch": 0.11458200328897306,
          "title": "CA Office",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
