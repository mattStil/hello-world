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
            salary: 2
          },
        ],
        houses:100,
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
        if (population.array.length < population.houses) {
          population.array[population.array.length] = new Person();
        }
        population.needed = population.houses - population.array.length
      };

      popG = function() {
        setInterval(popDeficeit,(1000/(population.needed)+1));
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
      num:0
      },
      mine: {
        eff: 0.25,
        production:1,
        store:0,
        num:0,
      },
      quarry:{
        eff:0.25,
        production:1,
        store:0,
        num:0
      },
      mill: {
        eff:0.15,
        production:0.95,
        store:0,
        num:0
      },
      pres: {
        eff:1,
        production:1,
        store:500,
        num:0,
      }
    };


  };
  production();
  //eco is to add all the production of the farms and such to the stores
  eco = function() {
    income = function() {
      pro.farm.store += (pro.farm.num * pro.farm.eff);
      pro.mine.store += (pro.mine.num * pro.mine.eff);
      pro.quarry.store += (pro.quarry.num * pro.quarry.eff);
      pro.mill.store += (pro.mill.num * pro.mill.eff);
      pro.pres.store += (pro.pres.num * pro.pres.eff);
    };


    setInterval(income,1000);
  }
};
