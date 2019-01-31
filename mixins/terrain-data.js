export const terrainData = {
  data() {
    return {
      terrain: [
        {
          name: 'Unstable Terrain',
          color: '#583846',
          text: `Figures may move through unstable terrain but can\'t end
          a move action in it. If a figure would be forced to end its movement
          in unstable terrain, that figure stops just short of the terrain`,
          example: ``,
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Slow Terrain',
          color: '#b78f30',
          text: `
            It costs +1 Move point to enter each space of slow terrain.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Grind Rail',
          color: '#72615a',
          text: `
            When adjacent to a rail, move onto it and as far along it as
            desired, following the arrows. You may make an attack +2
            melee strike against each enemy adjacent to the rail as you move past
            them. Move off of the rail to end this action`,
          example: '',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Throwing Objects',
          color: '#293b3b',
          text: `
            Manhole covers and trash cans may be thrown.
            Open manholes have no game effect unless the battle scenario's
            special rules say otherwise.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Throw Object',
          color: '#4a5125',
          text: `
            While adjacent to or in the same space asa an object that can be thrown,
            make a ranged strike as normal except that katanas may be spent as though they were shurikens for this stike.
            Then remove the object from the map (destroyed).
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Covered Terrain',
          color: '#4a5125',
          text: `
            Figures in covered terrain gain Defend +1. In addition, they are considered to be 1 extra space away
            when attacked with ranged strikes.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Take Cover',
          color: '#4a5125',
          text: `
            While in or adjacent to a space of covered terrain, use this action
            to take cover. Until you leave the space you're currently in, you
            gain Defend +2. This can stack with the bonus from being in covered terrain.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Rough Terrain',
          color: '#7c2923',
          text: `
            A figure that enters a space of rough terrain immediately ends
            its current move action and loes any remaining Move points.
            This does not prevent the figure from starting a new move action,
            however, it merely ends the current move action.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Obscuring Terrain',
          color: '#583846',
          text: `
            Figures may draw a line of sight into,
            but not through obscuring terrain
            Figures in obscuring terrain do not need to be broken
            away from and do not affect adjacent figures that are awakening.
            Any attack made into or out of obscuring terrain
            treats single hit results as misses instead`,
          example: '',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Harmful Terrain',
          color: '#b82e47',
          text: `
          Entering a space of harmful terrain deals 1 damage to a figure.
          This damage may not be reduced by a defense roll.`,
          example: '',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Climb',
          color: '#4a5125',
          text: `
            Move from a space of low terrain to an adjacent space of elevated terrain
            (or vice versa) if the other space is unoccupied. When moving to low terrain, no falling damage occurs.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Blocking Terrain',
          color: '#000',
          text: `
            Blocking terrain cann't be entered, nor may figures draw line of sight into or through it, regardless of other game effects.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Locked Doors',
          color: '#000000',
          text: `
          A locked door is blocking terrain while closed.
          <br /><br />
          A locked door may be opened by making a focus check against the difficulty shown on the battle map.
          <br /><br />
          Alternately, dealing damage to a locked door equal to its focus check difficult +3 in a single hit will open it Locked doors are machine enemies
          <br /><br />
          When a locked door is opened, flip it over to its blank side. It is now considered an empty space. Alocked door cannot be closed again once opened.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Cameras',
          color: '#583846',
          text: `
            Cameras have line of sight in a straight line in the direction
            they are facing. A camera cannot see the space it is in.
            <br /><br />
            If a hero enters a camera's line of sight, the camer is 'alerted'.
            The effects of this vary by battle
            <br /><br />
            At the start of each round, flip each camera over so that it faces the opposite direction.
            Each camera is then alerted once for each hero in its line of sight.
            <br /><br />
            Cameras are Machine enemies. Dealing 3 or more damage to a camera in a single hit will destroy it (remove from the game)
            , which does not alert it.
          `,
          example: '',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Elevated Terrain',
          color: '#013f66',
          text: `
          Elevated terrain i not considered to be adjacent to low(i.e. non-elevated) terrain except for the purposes of the climb terrain move.
          <br /><br />
          Fire escapes are adjacent to both low and elevated terrain.
          <br /><br />
          Figures can't move from low to elevated terrain except through fire escapes or by using the climb terrain move.
          <br /><br />
          Figures in elevated terrain are considered to be 2 extra spaces away when attacked with ranged strikes by attackers in low terrain.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Elevated Terrain 2',
          color: '#013f66',
          text: `
            A figure that moves from elevated terrain to low terrain suffers
            4 dice of damage (defend as normal).
            <br /><br />
            This damage is avoided when moving into a space that contains a trash heap,
            a dumpster, or a fire escape. Leaping figures only check to see if they take falling
            damage at the end of their leap.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
        {
          name: 'Crouch',
          color: '#4a5125',
          text: `
          While adjacent to a space of blocking terrain, use this action to make yourself less noticeabl. Until you leave the space you're currently in, you gain Defend +1
          This can stack with the +1 bonus from being in covered terrain.
          `,
          example: 'example here',
          icon: 'icon',
          image: 'image',
        },
      ]
    };
  }
};
