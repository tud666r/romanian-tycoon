class Event {
  constructor(Title, Text, Action) {
      this.Title = Title;
      this.Text = Text;
      this.Action = Action;
      this.Options = [];

      let j = 0;
      for (var i = 3; i < arguments.length; i ++)
          this.Options[j ++] = arguments[i];
  }

  kill() {
      $("#eventModal").modal('hide');
  }

  view() {
      $("#eventModal").modal({
          backdrop: 'static',
          keyboard: false
      });

      document.getElementById('eventTitle').innerHTML = this.Title;
      document.getElementById('eventText').innerHTML = this.Text;

      let j = 0;
      for (var i = 0; i < this.Options.length; i ++)
      {
          j ++;
          document.getElementById('eventOption' + i).style.display = 'block';
          document.getElementById('eventOption' + i).textContent = this.Options[i];
      }

      for (var i = j; i < 4; i ++)
          document.getElementById('eventOption' + i).style.display = 'none';
  }

  action(o) {
      switch (this.Action) {
          case 'FOOTBALL_CALLOUT':
          {
              if (o == 0)
              {
                  player.giveHealth(getRndInteger(3, 10));
                  player.giveHappiness(1);

                  journal_log('Am ieșit la fotbal în fața blocului cu prietenii și m-am simțit bine.');
              }
              else if (o == 1)
              {
                  player.giveHealth(getRndInteger(-10, -3));
                  player.giveHappiness(-1);

                  journal_log('Am stat în casă și m-am jucat Roblox ca ultimul no-lifer.');
              }

              this.kill();

              break;
          }

          case 'VACCINATION_TIME':
          {
              if (o == 0)
              {
                  player.giveHappiness(0.5);
                  journal_log('Am stat cuminte la vaccin, iar medicul m-a dat o bomboană.');
              }
              else if (o == 1)
              {
                  player.giveHappiness(-0.5);
                  journal_log('Am urlat din toți plămânii la vaccin și m-am ales cu o durere în gât.');
              }
              else if (o == 2)
                  journal_log('L-am lovit pe medic la vaccin.');

              this.kill();

              break;
          }

          case 'BATHROOM_EMERGENCY':
          {
              if (o == 0)
                  journal_log('M-am pișat.');
              else if (o == 1)
              {
                  player.giveHappiness(-1);
                  journal_log('M-am pișat pe mine, iar toți prietenii au râs de mine.');
              }
              else if (o == 2)
              {
                  journal_log('M-am pișat după o tufă.');
              }

              break;
          }

          default: { this.kill(); break; }
      }
  }
}
