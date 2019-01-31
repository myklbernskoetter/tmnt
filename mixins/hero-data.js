export const heroData = {
  data() {
    return {
      goodGuys: [
        {
          name: 'Leonardo',
          image1: '/leo-1.jpg',
          color: '#4aa9e0',
          imageSelected: '',
          status: false,
          maxHealth: 12,
          currentHealth: 12,
          maxFocus: 3,
          currentFocus: 3,
          attack: 1,
          defend: 3,
          move: 3,
          skill: 4,
          specialAbility: `
            <b>Leader:</b> </br>After Action dice are rolled and any re-rolls are made,
            Leo may trade one Action die belonging to any hero with an Action
            die belonging to another hero until the end of the round.`
        },
        {
          name: 'Donatello',
          description: 'text',
          image1: '/donatello-1.jpg',
          color: '#905f9c',
          imageSelected: '',
          status: false,
          maxHealth: 11,
          currentHealth: 11,
          maxFocus: 4,
          currentFocus: 4,
          attack: 1,
          defend: 4,
          move: 3,
          skill: 3,
          specialAbility: `
            <b>Smart:</b></br>At the end of each round, Donnie may either regain
            1 Focus or give 1 of his Focus to another hero of his choice
            (not to exceed that hero\'s maximum Focus).`
        },
        {
          name: 'Raphael',
          description: 'text',
          image1: '/raphael-1.jpg',
          color: '#d1432d',
          imageSelected: '',
          status: false,
          maxHealth: 13,
          currentHealth: 13,
          maxFocus: 3,
          currentFocus: 3,
          attack: 2,
          defend: 3,
          move: 3,
          skill: 2,
          specialAbility: `
            <b>Loner:</b></br>Raph has 6 Action dice instead of 3. However,
            he cannot share other heroes' Action Dice.
            Other heroes may share his dice as usual.`
        },
        {
          name: 'Michaelangelo',
          description: 'text',
          image1: '/mikey-1.jpg',
          color: '#de9835',
          imageSelected: '',
          status: false,
          maxHealth: 12,
          currentHealth: 12,
          maxFocus: 2,
          currentFocus: 2,
          attack: 1,
          defend: 3,
          move: 4,
          skill: 3,
          specialAbility: `
            <b>Nimble:</b></br>Once per turn, Mikey may move 1 space for free,
            ignoring terrain and break away rules. Also, terrain moves cost
            Mikey 1 less icon of your choice to use.`
        },
        {
          name: 'Splinter',
          description: 'text',
          image1: '/splinter-1.jpg',
          color: 'brown',
          imageSelected: '',
          status: false,
          maxHealth: 7,
          currentHealth: 7,
          maxFocus: 4,
          currentFocus: 4,
          attack: 1,
          defend: 4,
          move: 2,
          skill: 5,
          specialAbility:
            '<b>Master: </b></br>Master Splinter may use 2 special moves per round instead of only 1.'
        },
        {
          name: 'April',
          description: 'text',
          image1: '/april-1.jpg',
          color: 'yellow',
          imageSelected: '',
          status: false,
          maxHealth: 11,
          currentHealth: 11,
          maxFocus: 5,
          currentFocus: 5,
          attack: 1,
          defend: 3,
          move: 4,
          skill: 2,
          specialAbility: `
            <b>Beta Tech: </b></br> April receives the Stealth Suit
            and Gravity Gauntlet special moves in addition to her other moves.
            These moves do not count against her limit of 1 special move per turn when used.`
        },
        {
          name: 'Casey Jones',
          description: 'text',
          image1: '/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 15,
          currentHealth: 15,
          maxFocus: 2,
          currentFocus: 2,
          attack: 2,
          defend: 2,
          move: 4,
          skill: 2,
          specialAbility: `
            <b>Walk It Off: </b></br>Casey regains Life (but not focus) when he rolls skateboard
            icons on his Action dice, just as though he had rolled a chi icon.`
        }
      ]
    };
  }
};
