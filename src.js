// Set the width and height of the map
var width = 800;
var height = 500;

// Create the SVG element for the map
var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

// Create a projection for the map
var projection = d3.geoMercator()
                   .scale(120)
                   .translate([width / 2, height / 1.5]);

// Create a path for the map
var path = d3.geoPath()
             .projection(projection);

// Load the world map data
d3.json("https://raw.githubusercontent.com/d3/d3-geo/master/test/data/world-110m.json").then(function(world) {
  // Create a group for the map features
  var g = svg.append("g");

  // Create the countries
  g.selectAll("path")
   .data(topojson.feature(world, world.objects.countries).features)
   .enter()
   .append("path")
   .attr("d", path)
   .style("fill", function(d) {
      // Here you can use a function that takes the country name as an input and returns a color based on the input values for each country.
      // For example, if you have a data object that contains the input values for each country, you can use the following code to set the fill color based on those values.
      var color = d3.scaleOrdinal()
                    .domain(["Environmental stewardship", "Social justice", "Economic equity", "Inter-generational equity", "Holistic thinking", "Collaboration and community building", "Innovation and creativity", "Responsibility and accountability", "Respect for diversity", "Ethics and values"])
                    .range(["#f5f5dc", "#e6e6fa", "#dcdcdc", "#ffe4b5", "#f0e68c", "#add8e6", "#90ee90", "#f08080", "#d3d3d3", "#fafad2"]);
      return color("Environmental stewardship");
   })
   .style("stroke", "white")
   .style("stroke-width", "0.5px");
});

//This code will create a basic world map with each country filled with the same color. To set the fill color based on the input values for each country, you can modify the style("fill", function(d) {}) function to return a different color for each country based on the input values.
