# superhero-api

### [Railway Link](https://superhero-api-production.up.railway.app/api/superheroes)

#### Root path: https://superhero-api-production.up.railway.app

## Get list of all Superheroes

### Request

`GET /api/superheroes`

### Response

Gets all superheroes

## Get a specific Superhero

### Request

`GET /api/superheroes/:id`

### Response

Gets info on specific superhero based on ID

```
{
"powerstats": {
  "intelligence": 75,
  "strength": 80,
  "speed": 47,
  "durability": 56,
  "power": 59,
  "combat": 64
},
"appearance": {
  "gender": "Male",
  "race": null,
  "height": [
    "5'11",
    "180 cm"
  ],
  "weight": [
    "200 lb",
    "90 kg"
  ],
  "eyeColor": "Green",
  "hairColor": "No Hair"
},
"biography": {
  "fullName": "Annihilus",
  "alterEgos": "No alter egos found.",
  "aliases": [
    "The Living Death That Walks",
    "Lord of the Negative Zone"
  ],
  "placeOfBirth": "Planet of Arthros, Sector 17A, Negative Zone",
  "firstAppearance": "Fantastic Four Annual #6 (1968)",
  "publisher": "Marvel Comics",
  "alignment": "bad"
},
"work": {
  "occupation": "Conqueror, scavenger",
  "base": "-"
},
"connections": {
  "groupAffiliation": "Sometime ally of Blastaar",
  "relatives": "Annihilus is a series of clonal scions"
},
"images": {
  "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/29-annihilus.jpg",
  "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/29-annihilus.jpg",
  "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/29-annihilus.jpg",
  "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/29-annihilus.jpg"
},
"_id": "63c16c9a3f187623f1c46d18",
"name": "Annihilus",
"slug": "29-annihilus",
"__v": 0
}
```

## Create a new Superhero

### Request

`POST /api/superheroes`

### Response

Adds a new superhero to the database

## Update a Superhero

### Request

`PUT /api/superheroes/:id`

### Response

Updates info on specific superhero based on ID


## Delete a Superhero

### Request

`DELETE /api/superheroes/:id`

### Response

Deletes a specific superhero based on ID

