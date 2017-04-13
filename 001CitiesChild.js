(function() {
  var list = [
    {id: '1', name: "San Francisco Bay Area", parent: null},
    {id: '2', name: "San Jose", parent: 3},
    {id: '3', name: "South Bay", parent: 1},
    {id: '4', name: "San Francisco", parent: 1},
    {id: '5', name: "Manhattan", parent: 6},
    {id: '6', name: "New York", parent: null}
  ];

  //START
  var map = {};

  // Map each parent id to an object in map
  // {parent: {name: id}}
  // {1 : {
  //       South Bay : 3,
  //       San Francisco : 4
  // }
  // 3 : {
        //San Jose : 2
//}}
  list.forEach(function(obj) {
    if(map[obj.parent] == null) {
      map[obj.parent] = {};
    }
    map[obj.parent][obj.name] = obj.id;
  });

  print(null, '');

  //@function print
  //params parent: parent id, str: dashes before city name for printing
  function print(parent, str) {
    //Get cities object from map
    var cities = map[parent];

    //If city is a parent city
    if(cities) {
      //Get array of child cities
      var citiesList = Object.keys(cities);

      //Sort cities
      citiesList = citiesList.sort();

      //For each city in the list
      for(var i = 0; i < citiesList.length; i++) {
        //Print current city
        console.log(str + citiesList[i]);
        //Call print on child cities
        print(cities[citiesList[i]], str + '-');
      }
    }

  };
})();
