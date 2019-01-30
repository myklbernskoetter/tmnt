export const villainData = {
  data() {
    return {
      maxFocus: 3,
      currentFocus: 3,
      badGuys: [
        {
          name: 'Master Shredder',
          image1: '/images/shredder-2.png',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '16 (11 to awaken)',
          attack: 3,
          defend: 4,
          move: 3,
          specialAbility: `
            <b>Commanding: </b></br>
            The Villain players' hand size is increaed by 1 card while Shredder is in play.`
        },
        {
          name: 'Street Thug Gunner',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 1,
          attack: 1,
          defend: 2,
          move: 3,
          specialAbility: `
            <b>Gunner: </b></br>
            Street Thug Gunner's ranged strikes do not weaken for the first 4 spaces.`
        },
        {
          name: 'Street Thug Brawler',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 3,
          attack: 1,
          defend: 2,
          move: 3,
          specialAbility: `
            <b>Sure-Footed: </b></br>
            Street Thug Brawlers ignore slow and rough terrain.`
        },
        {
          name: 'Alopex',
          image1: '/images/alopex-1.png',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '9 (9 to awaken)',
          attack: 1,
          defend: 3,
          move: 5,
          specialAbility: `
            <b>Agile: </b></br>
            Alopex does not lose her remaining Move points when she begins a new action.`
        },
        {
          name: 'Old Hob',
          image1: '/images/old-hob-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '11 (8 to awaken)',
          attack: 1,
          defend: 3,
          move: 3,
          specialAbility: `
            <b>Cunning: </b></br>
            Allied minions within 3 spaces of Old Hob roll +1 die each time that they roll dice.`
        },
        {
          name: 'Rocksteady',
          image1: '/images/rocksteady-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 8,
          attack: 3,
          defend: 5,
          move: 3,
          specialAbility: `
          Cost: 2 Focus (Enhanced Foot Clan Bruiser)
          <b>Rhino Charge: </b></br>
          For 1 melee icon and 1 move icon, Rockstead may make a charge action.
          He receives 6 move points but must move in a straight line. At the end of his move,
          Rocksteady may make an Attack +2 melee strike.`
        },
        {
          name: 'Bebop',
          image1: '/images/bebop-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 8,
          attack: 3,
          defend: 4,
          move: 4,
          specialAbility: `
            Cost: 2 Focus (Enhanced Foot Clan Bruiser)
            <b>Roberta: </b></br>
            Bebop's chainsaw, Roberta, cuts easily through armor.
            Any defense rolls made against Bebop's attacks are made at
            Defend -2 penalty`
        },
        {
          name: 'Foot Clan Ninja',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          currentHealth: 2,
          attack: 1,
          defend: 2,
          move: 3,
          specialAbility: `
            <b>Numerous: </b></br>
            You may spend 1 focus at the start of your turn to add 2
            Foot Clan Ninjas to your figure pool and immediately spawn 1.`
        },
        {
          name: 'Mouser',
          image1: '/images/mousers-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 3,
          attack: '*',
          defend: 0,
          move: 1,
          specialAbility: `
            <b>Machine Minion</b></br>
            <b>Automatons: </b></br>
            All mousers activate at the end of each Villain player's turn and move towards
            the nearest non-KO'ed hero with the lowest Life plus Defend stat.
            After movement, each hero adjacent to a Mouser suffers a melee strike with strength
            equal to the number of Mousers adjacent to that hero.`
        },
        {
          name: 'Foot Clan Elite',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 4,
          attack: 2,
          defend: 3,
          move: 4,
          specialAbility: `
            <b>Skilled: </b></br>
            For Foot Clan Elites, double hit results count as triple hits when
            attacking and as single blocks when defending.`
        },
        {
          name: 'Foot Clan Bruiser',
          image1: '/images/casey-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: 6,
          attack: 3,
          defend: 4,
          move: 2,
          specialAbility: `
            <b>Big</b></br>
            Figures adjacent to Foot Clan Bruiser treat him as
            2 figures when breaking away or awakening
            `
        },
        {
          name: 'Karai',
          image1: '/images/karai-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '10 (7 to awaken)',
          attack: 2,
          defend: 3,
          move: 4,
          specialAbility: `
            <b>Archer: </b></br>
            Karai's ranged strikes do not weaken for the first 5 spaces.`
        },
        {
          name: 'Super-Shredder',
          image1: '/images/shredder-1.jpg',
          color: 'grey',
          imageSelected: '',
          status: false,
          maxHealth: '16 (11 to awaken)',
          attack: 4,
          defend: 5,
          move: 4,
          specialAbility: `
            <b>Bown Down to his Evil: </b></br>
            Ultimate Shredder may activate more than once on the Villain player's turn.`
        }
      ]
    };
  }
};
