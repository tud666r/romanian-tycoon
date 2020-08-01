class Player {
  constructor(FName, LName, Gender, Place) {
      this.FName = FName;
      this.LName = LName;
      this.Gender = Gender;
      this.Place = Place;
      this.Age = 0;
      this.Money = 0;
      this.Happiness = 10 - places[Place][PLACE_DANGER] * 0.5 - places[Place][PLACE_POVERTY] * 0.3;
      this.Health = 100 - places[Place][PLACE_POVERTY] * 5;
      this.Cleverness = getRndInteger(85, 145);
      this.Look = getRndInteger(3, 10);
  }

  ageUp() {
      this.Age ++;
  }

  giveHappiness(value) {
      if (this.Happiness + value > 10)
          this.Happiness = 10;
      else
          this.Happiness += value;

      document.getElementById('viewPlayerHappiness').innerHTML = '😃 <span class="badge badge-success">' + player.Happiness + '</span>';
  }

  giveHealth(value) {
      if (this.Health + value > 100)
          this.Health = 100;
      else
          this.Health += value;

      document.getElementById('viewPlayerHealth').innerHTML = '🧡 <span class="badge badge-success">' + player.Health + '</span>';
  }

}
