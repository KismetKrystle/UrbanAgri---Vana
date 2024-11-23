// Helper function to generate random numbers
export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const mockLocations = [
    'New York City',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix'
  ];
  
  const generateMockData = (location) => {
    // Helper function to generate random numbers
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
    const geographicData = {
      latitude: randomNumber(25, 48),
      longitude: randomNumber(-123, -71),
      elevation: randomNumber(0, 1000),
      area: randomNumber(100, 1000),
      climate: ['Temperate', 'Subtropical', 'Continental'][randomNumber(0, 2)]
    };
  
    const demographicData = {
      population: randomNumber(500000, 8000000),
      density: randomNumber(1000, 10000),
      medianAge: randomNumber(30, 45),
      averageIncome: randomNumber(30000, 100000),
      unemploymentRate: randomNumber(3, 15) / 100
    };
  
    const agriculturalData = {
      availableLand: randomNumber(100, 1000),
      soilQuality: ['Poor', 'Moderate', 'Good'][randomNumber(0, 2)],
      waterAvailability: randomNumber(50, 100),
      sunlightHours: randomNumber(6, 12),
      majorCrops: ['Tomatoes', 'Lettuce', 'Peppers', 'Herbs'].slice(0, randomNumber(2, 4))
    };
  
    return {
      location,
      geographic: geographicData,
      demographic: demographicData,
      agricultural: agriculturalData
    };
  };
  
  const generateAISummary = (data) => {
    return `${data.location} is a ${data.geographic.climate} city with a population of ${data.demographic.population.toLocaleString()}. 
    The city has ${data.agricultural.availableLand} acres of land potentially available for urban farming, 
    with ${data.agricultural.soilQuality} soil quality and an average of ${data.agricultural.sunlightHours} hours of sunlight per day.`;
  };
  
  const generateUrbanFarmingSolution = (data) => {
    const solutions = [
      `Implement rooftop gardens on ${randomNumber(10, 30)}% of buildings to increase green space and local food production.`,
      `Establish ${randomNumber(5, 20)} community gardens in unused lots to promote local food security and community engagement.`,
      `Introduce vertical farming systems in ${randomNumber(3, 10)} abandoned warehouses to maximize space efficiency and crop yield.`,
      `Create a network of ${randomNumber(50, 200)} backyard chicken coops to provide fresh eggs and promote sustainable protein sources.`,
      `Develop ${randomNumber(2, 5)} aquaponics facilities to combine fish farming with vegetable production, maximizing water efficiency.`
    ];
  
    return solutions[randomNumber(0, solutions.length - 1)];
  };
  
  export { mockLocations, generateMockData, generateAISummary, generateUrbanFarmingSolution };
  