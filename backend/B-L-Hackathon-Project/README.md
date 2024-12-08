# B-L-Hackathon-Project
1. /satelite/{id}/{observer_lat}/{observer_lng}
(/satelite/"id_satelity"/"latitude_obserwatora"/"longitude_obserwatora")
zwraca satelitę o danym id

{
  "info": {
    "satname": "COSMOS 1275 DEB",
    "satid": 42233,
    "transactionscount": 0
  },
  "positions": [
    {
      "satlatitude": -82.43091744,
      "satlongitude": -54.13778418,
      "sataltitude": 960.56,
      "azimuth": 187.7,
      "elevation": -51.06,
      "ra": 233.47421,
      "dec": -58.24189553,
      "timestamp": 1733603437,
      "eclipsed": false
    }
  ]
}

2. /satelite/getAllAbove/{observer_lat}/{observer_lng} //troche deprecated, raczej używajcie następnego
zwraca wszystkie satelity nad danymi współrzędnymi

{
  "info": {
    "category": "ANY",
    "transactionscount": 1,
    "satcount": 56
  },
  "above": [
    {
      "satid": 1389,
      "satname": "OPS 4682 DEB",
      "intDesignator": "1965-027D",
      "launchDate": "1965-04-03",
      "satlat": 19.6874,
      "satlng": 22.2809,
      "satalt": 1205.0664
    },
    {
      "satid": 2766,
      "satname": "OPS 6679 (VELA 8)",
      "intDesignator": "1967-040B",
      "launchDate": "1967-04-28",
      "satlat": 19.8385,
      "satlng": 24.9222,
      "satalt": 68263.0962
    },
    {
      "satid": 4354,
      "satname": "DELTA 1 R/B",
      "intDesignator": "1970-021B",
      "launchDate": "1970-03-20",
      "satlat": 25.3445,
      "satlng": 12.7497,
      "satalt": 16192.0577
    }
]

3. /satelite/getAllAbove/{observer_lat}/{observer_lng}/trunc 
zwraca wszystkie satelity nad danymi współrzędnymi ale w lepszym formacie

[
  {
    "satid": 3177,
    "satname": "OV1-14 R/B",
    "satlat": 52.4742,
    "satlng": 8.2972
  },
  {
    "satid": 7373,
    "satname": "SL-6 R/B(2)",
    "satlat": 55.3231,
    "satlng": 30.1271
  },
  {
    "satid": 7629,
    "satname": "SL-6 R/B(2)",
    "satlat": 53.8411,
    "satlng": 21.8452
  },
  {
    "satid": 9271,
    "satname": "TITAN 34B AGENA R/B",
    "satlat": 58.2217,
    "satlng": 29.8025
  },
  {
    "satid": 10155,
    "satname": "SL-6 R/B(2)",
    "satlat": 62.5465,
    "satlng": 20.6932
  },
  {
    "satid": 12330,
    "satname": "KYOKKO 1 DEB",
    "satlat": 53.798,
    "satlng": 17.0972
  },
  {
    "satid": 15266,
    "satname": "SL-12 R/B(AUX MOTOR)",
    "satlat": 50.623,
    "satlng": 22.208
  }
]

4. /satelite/getImageForSatelite/{sateliteId}
   no link po prostu
