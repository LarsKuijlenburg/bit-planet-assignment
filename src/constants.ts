const constants = {
  colors: {
    surfaces: {
      water: "blue",
      sand: "yellow",
      land: "green",
      city: "red",
      mountains: "gray",
      snow: "white",
      skiResort: "purple",
    },
  },
  // Maximum elevation value on a scale of 0-1
  maxElevations: {
    water: 0.35,
    sand: 0.38,
    land: 0.7,
    mountains: 0.92,
    snow: 1,
  },
  maxPopulations: {
    city: 0.7,
    skiResort: 0.85,
  },
};

export default constants;
