// Example data from API 1 Endpoint 1 (POST /launches/query)
// Holds data for 8 launches.
let localAPI1LaunchesData = {
  "docs": [
    {
      "fairings": {
        "reused": true,
        "recovery_attempt": true,
        "recovered": null,
        "ships": [
          "6059166413f40e27e8af34b6"
        ]
      },
      "links": {
        "patch": {
          "small": "https://imgur.com/BrW201S.png", // image link for page
          "large": "https://imgur.com/573IfGk.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/ncfexu/rspacex_starlink26_launch_discussion_updates/",
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": "https://youtu.be/tdgg_qwj-hI",
        "youtube_id": "tdgg_qwj-hI",
        "article": null,
        "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
      },
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "tbd": false,
      "net": false,
      "window": 0,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "This mission launches the 27th batch of operational Starlink satellites, which are version 1.0, from LC-39A or SLC-40. It is the 28th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.",
      "crew": [],
      "ships": [
        "5ea6ed30080df4000697c913",
        "6059166413f40e27e8af34b6",
        "608c1a06cf7f3d6152666ad4",
        "5ea6ed2f080df4000697c90b"
      ],
      "capsules": [],
      "payloads": [
        "605b4bfcaa5433645e37d048",
        "609f48374a12e4692eae4667",
        "609f49c64a12e4692eae4668"
      ],
      "launchpad": "5e9e4502f509094188566f88", // launchpad id for Endpoint 2
      "auto_update": true,
      "launch_library_id": "c32d1f5e-2dd9-4b55-ac8b-3eb8c4a4e955",
      "failures": [],
      "flight_number": 127,
      "name": "Starlink-26 (v1.0) + Capella-6 + Tyvak-0130", // name of launch for h2 in article
      "date_utc": "2021-05-15T22:54:00.000Z", // date to format/add to the article
      "date_unix": 1621119240,
      "date_local": "2021-05-15T18:54:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5e9e28a7f3591817f23b2663",
          "flight": 8,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3032383ecb6bb234e7ca"
        }
      ],
      "id": "605b4b95aa5433645e37d041"
    },
    {
      "fairings": {
        "reused": true,
        "recovery_attempt": true,
        "recovered": true,
        "ships": [
          "6059166413f40e27e8af34b6"
        ]
      },
      "links": {
        "patch": {
          "small": "https://imgur.com/BrW201S.png",
          "large": "https://imgur.com/573IfGk.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/n7ju15/rspacex_starlink27_launch_discussion_updates/",
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": "https://youtu.be/J71s2KmkSrc",
        "youtube_id": "J71s2KmkSrc",
        "article": null,
        "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
      },
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "tbd": false,
      "net": false,
      "window": null,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "This mission launches the 26th batch of operational Starlink satellites, which are version 1.0, from SLC-40. It is the 27th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.",
      "crew": [],
      "ships": [
        "5ea6ed30080df4000697c913",
        "5ee68c683c228f36bd5809b5",
        "6059166413f40e27e8af34b6"
      ],
      "capsules": [],
      "payloads": [
        "6079bd5e9a06446e8c61bf7c"
      ],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "launch_library_id": "e5085f22-208b-4b28-b66c-fd4bd9df90e7",
      "failures": [],
      "flight_number": 126,
      "name": "Starlink-27 (v1.0)",
      "date_utc": "2021-05-09T06:42:00.000Z",
      "date_unix": 1620542520,
      "date_local": "2021-05-09T02:42:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5e9e28a6f35918c0803b265c",
          "flight": 10,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3032383ecb6bb234e7ca"
        }
      ],
      "id": "6079bd1c9a06446e8c61bf76"
    },
    {
      "fairings": {
        "reused": true,
        "recovery_attempt": true,
        "recovered": true,
        "ships": [
          "6059166413f40e27e8af34b6"
        ]
      },
      "links": {
        "patch": {
          "small": "https://imgur.com/BrW201S.png",
          "large": "https://imgur.com/573IfGk.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/n3z0aa/rspacex_starlink25_launch_discussion_updates/",
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": "https://youtu.be/xpl_JnG7rcg",
        "youtube_id": "xpl_JnG7rcg",
        "article": null,
        "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
      },
      "static_fire_date_utc": "2021-05-03T05:00:00.000Z",
      "static_fire_date_unix": 1620018000,
      "tbd": false,
      "net": false,
      "window": 0,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "This mission launches the 25th batch of operational Starlink satellites, which are version 1.0, from LC-39A. It is the 26th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on OCISLY.",
      "crew": [],
      "ships": [
        "608c1a06cf7f3d6152666ad4",
        "5ea6ed30080df4000697c913",
        "6059166413f40e27e8af34b6"
      ],
      "capsules": [],
      "payloads": [
        "605b4befaa5433645e37d047"
      ],
      "launchpad": "5e9e4502f509094188566f88",
      "auto_update": true,
      "launch_library_id": "1ecc82c0-c5c8-41f0-aa58-b50a3b839ae0",
      "failures": [],
      "flight_number": 125,
      "name": "Starlink-25 (v1.0)",
      "date_utc": "2021-05-04T19:01:00.000Z",
      "date_unix": 1620154860,
      "date_local": "2021-05-04T15:01:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5e9e28a5f3591833b13b2659",
          "flight": 9,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3032383ecb6bb234e7ca"
        }
      ],
      "id": "605b4b7daa5433645e37d040"
    },
    {
      "fairings": {
        "reused": false,
        "recovery_attempt": true,
        "recovered": true,
        "ships": [
          "6059166413f40e27e8af34b6"
        ]
      },
      "links": {
        "patch": {
          "small": "https://imgur.com/BrW201S.png",
          "large": "https://imgur.com/573IfGk.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/mzol0k/rspacex_starlink24_launch_discussion_updates/",
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": [
            "https://live.staticflickr.com/65535/51146838376_4667d78231_o.jpg",
            "https://live.staticflickr.com/65535/51147622479_d027e09727_o.jpg",
            "https://live.staticflickr.com/65535/51147949685_975bd6b4ee_o.jpg"
          ]
        },
        "presskit": null,
        "webcast": "https://youtu.be/RBxkRKZ34yo",
        "youtube_id": "RBxkRKZ34yo",
        "article": "https://spaceflightnow.com/2021/04/29/spacex-launches-60-more-starlink-spacecraft-fcc-clears-spacex-to-fly-satellites-at-lower-altitudes/",
        "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
      },
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "tbd": false,
      "net": false,
      "window": null,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "This mission launches the 24th batch of operational Starlink satellites, which are version 1.0, from LC-39A or SLC-40. It is the 25th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.",
      "crew": [],
      "ships": [
        "5ea6ed2f080df4000697c910",
        "5ea6ed2f080df4000697c90d",
        "5ee68c683c228f36bd5809b5",
        "6059166413f40e27e8af34b6"
      ],
      "capsules": [],
      "payloads": [
        "605b4be3aa5433645e37d046"
      ],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "launch_library_id": "fbd23c86-89d0-4d3f-b5fb-5d7165d05cca",
      "failures": [],
      "flight_number": 124,
      "name": "Starlink-24 (v1.0)",
      "date_utc": "2021-04-29T03:44:00.000Z",
      "date_unix": 1619667840,
      "date_local": "2021-04-28T23:44:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5ef670f10059c33cee4a826c",
          "flight": 7,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3033383ecbb9e534e7cc"
        }
      ],
      "id": "605b4b6aaa5433645e37d03f"
    },
    {
      "fairings": null,
      "links": {
        "patch": {
          "small": "https://imgur.com/SS92zpG.png",
          "large": "https://imgur.com/OvSAk3K.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/lrx7ez/crew2_launch_campaign_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/mvcst9/rspacex_crew2_launch_discussion_updates_thread/",
          "media": null,
          "recovery": null
        },
        "flickr": {
          "small": [],
          "original": [
            "https://live.staticflickr.com/65535/51136761295_edb4d3ba1d_o.jpg",
            "https://live.staticflickr.com/65535/51135652706_3e8448193d_o.jpg",
            "https://live.staticflickr.com/65535/51135865043_3ee9818a56_o.jpg",
            "https://live.staticflickr.com/65535/51136428854_4723547f5a_o.jpg",
            "https://live.staticflickr.com/65535/51134975562_ca678d7e2f_o.jpg",
            "https://live.staticflickr.com/65535/51135650561_0bd04e5a56_o.jpg",
            "https://live.staticflickr.com/65535/51135650711_f65e45739d_o.jpg",
            "https://live.staticflickr.com/65535/51136428874_30a1912bc6_o.jpg",
            "https://live.staticflickr.com/65535/51135650696_80bb4d0047_o.jpg",
            "https://live.staticflickr.com/65535/51135650641_f8c77b5420_o.jpg",
            "https://live.staticflickr.com/65535/51136428829_2b995a79bc_o.jpg",
            "https://live.staticflickr.com/65535/51135650621_187bc9fa5b_o.jpg",
            "https://live.staticflickr.com/65535/51135324597_816d0bc217_o.jpg",
            "https://live.staticflickr.com/65535/51135997286_1b5a4452f0_o.jpg",
            "https://live.staticflickr.com/65535/51136428899_eb329865d1_o.jpg",
            "https://live.staticflickr.com/65535/51136428909_d4d6cf76ae_o.jpg",
            "https://live.staticflickr.com/65535/51136761220_9a2e6dbaf6_o.jpg"
          ]
        },
        "presskit": null,
        "webcast": "https://youtu.be/lW07SN3YoLI",
        "youtube_id": "lW07SN3YoLI",
        "article": "https://spaceflightnow.com/2021/04/23/spacex-launches-astronauts-on-refurbished-capsule-and-flight-proven-rocket/",
        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Crew-2"
      },
      "static_fire_date_utc": "2021-04-17T11:01:00.000Z",
      "static_fire_date_unix": 1618657260,
      "tbd": false,
      "net": false,
      "window": 0,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "SpaceX launches the second operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Program, carrying NASA astronauts Shane Kimbrough, Megan McArthur, Thomas Pesquet, and Akihiko Hoshide to the International Space Station. The Falcon 9 and Crew Dragon lift off from LC-39A, Kennedy Space Center. Both the booster and the capsule have flown previously, each a first for a commercial crew flight. The booster for this mission is expected to land on an ASDS. The mission will be complete with the safe return of the astronauts to Earth.",
      "crew": [
        "5fe3ba5fb3467846b3242188",
        "5fe3bb01b3467846b3242189",
        "5fe3bc3db3467846b324218b",
        "5fe3bc8ab3467846b324218c"
      ],
      "ships": [
        "5ea6ed2e080df4000697c909",
        "5ea6ed30080df4000697c913"
      ],
      "capsules": [
        "5e9e2c5df359188aba3b2676"
      ],
      "payloads": [
        "5fe3b3adb3467846b3242173"
      ],
      "launchpad": "5e9e4502f509094188566f88",
      "auto_update": true,
      "launch_library_id": "32dcb5ad-7609-4fc0-8094-768ee5c2ebe0",
      "failures": [],
      "flight_number": 123,
      "name": "Crew-2",
      "date_utc": "2021-04-23T09:49:00.000Z",
      "date_unix": 1619171340,
      "date_local": "2021-04-23T05:49:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5f57c53d0622a6330279009f",
          "flight": 2,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3032383ecb6bb234e7ca"
        }
      ],
      "id": "5fe3af58b3467846b324215f"
    },
    {
      "fairings": {
        "reused": true,
        "recovery_attempt": true,
        "recovered": null,
        "ships": [
          "6059166413f40e27e8af34b6",
          "5ea6ed2f080df4000697c90b",
          "5ea6ed2e080df4000697c908"
        ]
      },
      "links": {
        "patch": {
          "small": "https://imgur.com/BrW201S.png",
          "large": "https://imgur.com/573IfGk.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/mlitqf/rspacex_starlink23_launch_discussion_updates/",
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": [
            "https://live.staticflickr.com/65535/51101836837_8671b88722_o.jpg",
            "https://live.staticflickr.com/65535/51101836832_e151d33d66_o.jpg"
          ]
        },
        "presskit": null,
        "webcast": "https://youtu.be/Uy9Jn-3vuPs",
        "youtube_id": "Uy9Jn-3vuPs",
        "article": "https://spaceflightnow.com/2021/04/07/spacex-launches-its-100th-mission-from-floridas-space-coast/",
        "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
      },
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "tbd": false,
      "net": false,
      "window": 0,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "This mission launches the 23rd batch of operational Starlink satellites, which are version 1.0, from or SLC-40 or LC-39A. It is the 24th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.",
      "crew": [],
      "ships": [
        "5ea6ed30080df4000697c913",
        "5ee68c683c228f36bd5809b5",
        "5ea6ed2f080df4000697c90b"
      ],
      "capsules": [],
      "payloads": [
        "60428b02c041c16716f73cde"
      ],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "launch_library_id": "385455f4-067e-4c24-9937-ca8283ed3307",
      "failures": [],
      "flight_number": 122,
      "name": "Starlink-23 (v1.0)",
      "date_utc": "2021-04-07T16:34:00.000Z",
      "date_unix": 1617813240,
      "date_local": "2021-04-07T12:34:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5e9e28a7f3591817f23b2663",
          "flight": 7,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3032383ecb6bb234e7ca"
        }
      ],
      "id": "60428ac4c041c16716f73cd8"
    },
    {
      "fairings": {
        "reused": null,
        "recovery_attempt": true,
        "recovered": true,
        "ships": [
          "6059166413f40e27e8af34b6",
          "5ea6ed2f080df4000697c90b"
        ]
      },
      "links": {
        "patch": {
          "small": "https://imgur.com/BrW201S.png",
          "large": "https://imgur.com/573IfGk.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/maqmd0/rspacex_starlink22_launch_discussion_updates/",
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": []
        },
        "presskit": null,
        "webcast": "https://youtu.be/a15czI9B91c",
        "youtube_id": "a15czI9B91c",
        "article": "https://spaceflightnow.com/2021/03/24/spacex-launches-25th-mission-to-build-out-starlink-internet-network/",
        "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
      },
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "tbd": false,
      "net": false,
      "window": null,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "This mission launches the 22nd batch of operational Starlink satellites, which are version 1.0, from or SLC-40. It is the 23rd Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.",
      "crew": [],
      "ships": [
        "5ee68c683c228f36bd5809b5",
        "5ea6ed30080df4000697c913",
        "5ea6ed2f080df4000697c90b",
        "6059166413f40e27e8af34b6"
      ],
      "capsules": [],
      "payloads": [
        "60428afbc041c16716f73cdd"
      ],
      "launchpad": "5e9e4501f509094ba4566f84",
      "auto_update": true,
      "launch_library_id": "ec03fe36-fe2a-4e43-8e10-d07d5349f1de",
      "failures": [],
      "flight_number": 121,
      "name": "Starlink-22 (v1.0)",
      "date_utc": "2021-03-24T08:28:00.000Z",
      "date_unix": 1616574480,
      "date_local": "2021-03-24T04:28:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5ef670f10059c33cee4a826c",
          "flight": 6,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3032383ecb6bb234e7ca"
        }
      ],
      "id": "60428aafc041c16716f73cd7"
    },
    {
      "fairings": {
        "reused": true,
        "recovery_attempt": true,
        "recovered": true,
        "ships": [
          "5ea6ed2e080df4000697c909",
          "5ea6ed2f080df4000697c90c"
        ]
      },
      "links": {
        "patch": {
          "small": "https://imgur.com/BrW201S.png",
          "large": "https://imgur.com/573IfGk.png"
        },
        "reddit": {
          "campaign": "https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/",
          "launch": "https://www.reddit.com/r/spacex/comments/m4e377/rspacex_starlink21_launch_discussion_updates/",
          "media": null,
          "recovery": "https://www.reddit.com/r/spacex/comments/k2ts1q/rspacex_fleet_updates_discussion_thread/"
        },
        "flickr": {
          "small": [],
          "original": [
            "https://live.staticflickr.com/65535/51036945097_9fc94fa9a9_o.jpg",
            "https://live.staticflickr.com/65535/51036945067_ce0d5b3c0b_o.jpg",
            "https://live.staticflickr.com/65535/51036945027_47c96d71d1_o.jpg"
          ]
        },
        "presskit": null,
        "webcast": "https://youtu.be/JKf45ATgATc",
        "youtube_id": "JKf45ATgATc",
        "article": "https://spaceflightnow.com/2021/03/14/spacex-extends-its-own-rocket-reuse-record-on-starlink-launch/",
        "wikipedia": "https://en.wikipedia.org/wiki/Starlink"
      },
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "tbd": false,
      "net": false,
      "window": null,
      "rocket": "5e9d0d95eda69973a809d1ec",
      "success": true,
      "details": "This mission launches the 21st batch of operational Starlink satellites, which are version 1.0, from LC-39A or SLC-40. It is the 22nd Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.",
      "crew": [],
      "ships": [
        "5ea6ed2e080df4000697c909",
        "5ea6ed2f080df4000697c90c",
        "5ea6ed2f080df4000697c90d",
        "5ea6ed30080df4000697c913"
      ],
      "capsules": [],
      "payloads": [
        "600f9bd88f798e2a4d5f97a6"
      ],
      "launchpad": "5e9e4502f509094188566f88",
      "auto_update": true,
      "launch_library_id": "896d876d-e834-4810-8a5e-44d6b6a42630",
      "failures": [],
      "flight_number": 120,
      "name": "Starlink-21 (v1.0)",
      "date_utc": "2021-03-14T10:01:00.000Z",
      "date_unix": 1615716060,
      "date_local": "2021-03-14T06:01:00-04:00",
      "date_precision": "hour",
      "upcoming": false,
      "cores": [
        {
          "core": "5e9e28a6f35918c0803b265c",
          "flight": 9,
          "gridfins": true,
          "legs": true,
          "reused": true,
          "landing_attempt": true,
          "landing_success": true,
          "landing_type": "ASDS",
          "landpad": "5e9e3032383ecb6bb234e7ca"
        }
      ],
      "id": "600f9a8d8f798e2a4d5f979e"
    }
  ]
};