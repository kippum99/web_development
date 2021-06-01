// Example data from API 2 Endpoint (GET ?key=<OPENCAGE_API_KEY>&q=<lat>+<long>)
// Holds address data (in .formatted key) for a single launchpad's latitutude/longitude values.
// For testing, you may find it useful to use this JSON for each article until
// you're ready to use each launchpad's lat/long values to fetch this data with
// the OpenCage API.
// Note that there's a _lot_ of fluff here you can ignore... it's a free API at least :)
let localAPI2Data = {
    "documentation": "https://opencagedata.com/api",
    "licenses": [
      {
        "name": "see attribution guide",
        "url": "https://opencagedata.com/credits"
      }
    ],
    "rate": {
      "limit": 2500,
      "remaining": 2499,
      "reset": 1621382400
    },
    "results": [
      {
        "annotations": {
          "DMS": {
            "lat": "28° 33' 43.37136'' N",
            "lng": "80° 34' 38.09568'' W"
          },
          "FIPS": {
            "county": "12009",
            "state": "12"
          },
          "MGRS": "17RNM4134859538",
          "Maidenhead": "EL98rn04rv",
          "Mercator": {
            "x": -8969818.305,
            "y": 3299597.108
          },
          "OSM": {
            "edit_url": "https://www.openstreetmap.org/edit?way=152954307#map=17/28.56205/-80.57725",
            "note_url": "https://www.openstreetmap.org/note/new#map=17/28.56205/-80.57725&layers=N",
            "url": "https://www.openstreetmap.org/?mlat=28.56205&mlon=-80.57725#map=17/28.56205/-80.57725"
          },
          "UN_M49": {
            "regions": {
              "AMERICAS": "019",
              "NORTHERN_AMERICA": "021",
              "US": "840",
              "WORLD": "001"
            },
            "statistical_groupings": [
              "MEDC"
            ]
          },
          "callingcode": 1,
          "currency": {
            "alternate_symbols": [
              "US$"
            ],
            "decimal_mark": ".",
            "disambiguate_symbol": "US$",
            "html_entity": "$",
            "iso_code": "USD",
            "iso_numeric": "840",
            "name": "United States Dollar",
            "smallest_denomination": 1,
            "subunit": "Cent",
            "subunit_to_unit": 100,
            "symbol": "$",
            "symbol_first": 1,
            "thousands_separator": ","
          },
          "flag": "🇺🇸",
          "geohash": "djndqrt3yp8d3rx2pfj9",
          "qibla": 55.78,
          "roadinfo": {
            "drive_on": "right",
            "road": "Centaur Raod",
            "speed_in": "mph"
          },
          "sun": {
            "rise": {
              "apparent": 1621333860,
              "astronomical": 1621328520,
              "civil": 1621332300,
              "nautical": 1621330440
            },
            "set": {
              "apparent": 1621296420,
              "astronomical": 1621301820,
              "civil": 1621297980,
              "nautical": 1621299840
            }
          },
          "timezone": {
            "name": "America/New_York",
            "now_in_dst": 1,
            "offset_sec": -14400,
            "offset_string": "-0400",
            "short_name": "EDT"
          },
          "what3words": {
            "words": "lovable.deployed.confirming"
          }
        },
        "bounds": {
          "northeast": {
            "lat": 28.564591,
            "lng": -80.5751119
          },
          "southwest": {
            "lat": 28.5595325,
            "lng": -80.5794191
          }
        },
        "components": {
          "ISO_3166-1_alpha-2": "US",
          "ISO_3166-1_alpha-3": "USA",
          "_category": "transportation",
          "_type": "aeroway",
          "aeroway": "Space Launch Complex 40",
          "continent": "North America",
          "country": "United States",
          "country_code": "us",
          "county": "Brevard County",
          "road": "Centaur Raod",
          "state": "Florida",
          "state_code": "FL"
        },
        "confidence": 9,
        // This should be used to display the address on the page!
        "formatted": "Space Launch Complex 40, Centaur Raod, Brevard County, FL, United States of America",
        "geometry": {
          "lat": 28.5620476,
          "lng": -80.5772488
        }
      }
    ],
    "status": {
      "code": 200,
      "message": "OK"
    },
    "stay_informed": {
      "blog": "https://blog.opencagedata.com",
      "twitter": "https://twitter.com/OpenCage"
    },
    "thanks": "For using an OpenCage API",
    "timestamp": {
      "created_http": "Tue, 18 May 2021 00:01:16 GMT",
      "created_unix": 1621296076
    },
    "total_results": 1
}