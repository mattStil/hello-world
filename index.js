var doc = document
window.onload = function() {
  pop = function() {
      population = {
        array: [],
        firstNames: ["holly","vincent","matt","daniel","mark","mary","billy"],
        lastNames:["smith","stillion",'brown','white','bittner','rockefeller'],
        jobs:[
          farmer = {
            name: 'farmer',
            salary: 2,
            buildings: ['farm'],
          },
          worker = {
            name: "worker",
            salary: 2,
            buildings: ['mine','quarry','mill'],
          },
          villageIdiot = {
            name: 'villageIdiot',
            salary:3,
            buildings: ['lab']
          },
          innKeeper = {
            name:'innKeeper',
            salary:4,
            buildings:['tavern']
          },

        ],
        houses:1000,
        needed: 0,
      };
      Object.prototype.addToPop = function(obj)  {
        population.array[population.array.length] = obj;
      };
      function Person() {
        this.age = Math.floor((Math.random()*81)+18);
        this.firstName = population.firstNames[Math.floor(Math.random()*population.firstNames.length)]
        this.lastName = population.lastNames[Math.floor(Math.random()*population.lastNames.length)]
        this.job = population.jobs[Math.floor(Math.random()*population.jobs.length)]
        addToPop(this);
      };
      //builds the people if the population is less than needed
      popDeficeit = function() {
        clearInterval(interval);
        if (population.array.length < population.houses) {
          population.array[population.array.length] = new Person();
        };
        population.needed = population.houses - (population.array.length - 1);
        interval = setInterval(popDeficeit, Math.floor((10000/population.needed) + 1));
      };

      popG = function() {
        interval = setInterval(popDeficeit, Math.floor((10000/(population.needed)+1)));
      };
      popG();

      addOne = function() {
        population.array[population.array.length] = new Person();
      };
      log = function() {
        console.log(population.array);
      };
      console.log('yes');
  };
  pop();
  production = function() {
    pro = {
      farm: {
      eff: 0.25,
      production: 1,
      store:0,
      notStore:0,
      num:0,
      },
      mine: {
        eff: 0.25,
        production:1,
        store:0,
        notStore:0,
        num:0,
      },
      quarry:{
        eff:0.25,
        production:1,
        store:0,
        notStore:0,
        num:0
      },
      mill: {
        eff:0.15,
        production:0.95,
        store:0,
        notStore:0,
        num:0
      },
      pres: {
        eff:1,
        production:1,
        store:500,
        notStore:0,
        num:0,
      }
    };


  };
  production();
  //eco is to add all the production of the farms and such to the stores
  eco = function() {
    //calculates the production for the various
    produ = function(building) {
      pro.building.notStore += (pro.building.num * pro.building.eff);
    }
    move = function() {
      pro.building.store++
    };
    income = function() {
      produ(farm);
      produ(mine);
      produ(mill);
      produ(quarry);
      produ(press);
    };


    setInterval(income,1000);
  }
  //function for different job types
  countJob = function(job, id2) {
    job = 0;
    for ( var i = 0; i < population.array.length; i++) {
        if(population.array[i].job.name === id2) {
          job++;
        };
    };
    document.getElementById((id2+'s')).innerHTML = job;
  };
  //keeps track of the num of types
  jobCounting = function() {
    setInterval(function() {
      countJob(worker,'worker');
      countJob(farmer,'farmer');
      countJob(villageIdiot,'villageIdiot');
      countJob(innKeeper,'innKeeper');
      totalPop = population.array.length;
      document.getElementById('pop').innerHTML = totalPop;
    },100);
  };
  jobCounting();
};
