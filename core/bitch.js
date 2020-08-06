class Bitch {
  constructor(Name, Look)
  {
      this.Name = Name;
      this.Age = getRndInteger(18, 40);
      this.Look = Look;

      if (this.Look <= 3)
          this.Price = 30;
      else if (this.Look <= 5)
          this.Price = 50;
      else if (this.Look <= 7)
          this.Price = 100;
      else if (this.Look <= 9)
          this.Price = 200;
      else if (this.Look == 10)
          this.Price = 300;
  }

  accept()
  {
      if (player.Money < this.Price)
          alert('Nu cred că vrei ca peștii să-ți rupă oasele :-)');
      else
      {
          player.Money -= this.Price;

          let Exp = getRndInteger(1, this.Look);

          view_page('game');

          e = new Event("‍👯‍♀️ Vagaboante", "Ai fost la vagaboante.", "NOTHING", "Ok");
          e.view();
      }
  }
}
