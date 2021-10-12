const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];
  
  countries.forEach((flags) => {
    
    const Images=document.createElement("img");
    Images.innerText=flags.image;
    document.body.append(Images);
    
    const Name=document.createElement("p");
    Name.innerText=flags.country;
    document.body.append(Name);
    
    const Population=document.createElement("p");
    Population.innerText=flags.population;
    document.body.append(Population);
    
    const Region=document.createElement("p");
    Region.innerText=flags.region;
    document.body.append(Region);
    
    const Capital=document.createElement("p");
    Capital.innerText=flags.capital;
    document.body.append(Capital);
  });