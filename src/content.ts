export const sourceUrl = 'https://github.com/slimnate/dragonwilds-toolkit';
export const downloadUrl =
  'https://github.com/slimnate/dragonwilds-toolkit/releases/download/v1.0.0/DragonwildsToolkit-1.0.0.exe';

export type Highlight = {
  id: string;
  title: string;
  image: string;
  alt: string;
  text: string;
};

export type Feature = {
  id: string;
  title: string;
  card: string;
  text: string;
  details: string[];
  image?: string;
  alt?: string;
  experimental?: boolean;
};

/** The pages most people open a save editor to use. */
export const highlights: Highlight[] = [
  {
    id: 'inventory',
    title: 'Inventory',
    image: '/images/character-inventory.png',
    alt: 'Inventory page with the bag grid and the equipment doll',
    text: 'Rearrange your bags, top up runes and ammo, sort out quest items, and restock your personal chest.',
  },
  {
    id: 'map',
    title: 'Map',
    image: '/images/character-map.png',
    alt: 'Ashenfall map with pins and resource markers',
    text: 'Explore Ashenfall, drop your own pins, and turn on resource markers to find what you need.',
  },
  {
    id: 'skills',
    title: 'Skills',
    image: '/images/character-skills.png',
    alt: 'Skills page with Attack selected, showing level, XP, and unlocks',
    text: 'Set any skill’s level or XP, and see the unlocks and perks that come with it.',
  },
  {
    id: 'spells',
    title: 'Spells',
    image: '/images/character-spells.png',
    alt: 'Spellbook with four spell wheels and the spell list',
    text: 'Set up your spell wheels and unlock new spells straight from the spellbook.',
  },
];

/** Every editor page, in app order. The homepage highlights a subset. */
export const features: Feature[] = [
  {
    id: 'file',
    title: 'File',
    image: '/images/character-file.png',
    alt: 'File page with the character name, hardcore setting, and worlds playtime',
    card: 'Your character’s name, hardcore mode, and time spent in each world.',
    text: 'Rename your character, switch hardcore mode on or off, and check which save version you’re on. You can also see when you last played in each world, shown in your local time.',
    details: [
      'Character name, unique ID, and type',
      'Save version, how many times it’s been saved, and the backup token',
      'Hardcore mode, and the world it’s tied to',
      'When you last played each world, in local time alongside the raw timestamp',
    ],
  },
  {
    id: 'character',
    title: 'Character',
    image: '/images/character-vitals.png',
    alt: 'Character page with vital bars, a drink buff, and the mount row',
    card: 'Health, stamina, and the rest of your vitals, plus your mount.',
    text: 'See all your vitals at a glance: health, stamina, sustenance, hydration, endurance, and toxicity. Your current drink buff and mount are right there too.',
    details: [
      'Vital bars, with an edit toggle for when you want to change the numbers',
      'Your active drink buff',
      'Every mount you’ve unlocked, and which one is equipped',
      'Status effects like poison, burning, cold, and well rested',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    image: '/images/character-inventory.png',
    alt: 'Inventory page with the bag grid and the equipment doll',
    card: 'Your bags, your personal chest, and the gear you’re wearing.',
    text: 'Rearrange your bags, top up runes and ammo, sort out quest items, and restock your personal chest.',
    details: [
      'Separate bag pages for inventory, runes, ammo, and quest items',
      'Your personal chest, right next to your bag',
      'An equipment doll showing everything you’re wearing',
      'Add any item from the built-in catalog',
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    image: '/images/character-skills.png',
    alt: 'Skills page with Attack selected, showing level, XP, and unlocks',
    card: 'Levels, XP, unlocks, and perks.',
    text: 'Set any skill’s level or XP, and see the unlocks and perks that come with it.',
    details: [
      'Change the level and XP of any skill',
      'See what each skill unlocks as you level it up',
    ],
  },
  {
    id: 'spells',
    title: 'Spells',
    image: '/images/character-spells.png',
    alt: 'Spellbook with four spell wheels and the spell list',
    card: 'Your spell wheels and spellbook.',
    text: 'Set up your spell wheels and unlock new spells straight from the spellbook.',
    details: [
      'All four spell wheels',
      'Unlock or lock any spell in the book',
      'Filter by unlocked, locked, or all spells',
    ],
  },
  {
    id: 'map',
    title: 'Map',
    image: '/images/character-map.png',
    alt: 'Ashenfall map with pins and resource markers',
    card: 'Ashenfall, your pins, and resource markers.',
    text: 'Explore Ashenfall, drop your own pins, and turn on resource markers to find what you need.',
    details: [
      'The full map of Ashenfall, with fog of war',
      'Your own custom pins',
      'Resource markers you can switch on and off as you look around',
    ],
  },
  {
    id: 'journal',
    title: 'Journal',
    image: '/images/character-journal.png',
    alt: 'Journal on the Recipes tab with Law Rune selected',
    card: 'World, Recipes, and Knowledge entries.',
    text: 'Laid out just like the in-game journal, with World, Recipes, and Knowledge tabs. Unlock any entry, or mark it as unread again.',
    details: [
      'World, Recipes, and Knowledge tabs',
      'Filter by all, unlocked, locked, or unread',
      'Search, plus subcategories on the tabs that have them',
    ],
  },
  {
    id: 'quests',
    title: 'Quests',
    image: '/images/character-quests.png',
    alt: 'Quests page with active quests open',
    card: 'Active, completed, and not-yet-started quests.',
    text: 'See every quest you’re working on, have finished, or haven’t picked up yet. Open one to check its progress and objectives.',
    details: [
      'Main quests, side quests, and tasks',
      'Each quest’s progress and objectives',
      'The quest you’re currently tracking',
    ],
  },
  {
    id: 'progress',
    title: 'Progress',
    image: '/images/character-progress.png',
    alt: 'Progress page with the recipe list expanded',
    card: 'Recipes, buildings, discoveries, vendors, and agility.',
    text: 'Everything else your character has picked up along the way, from recipes and building pieces to vendor reputation and agility courses.',
    details: [
      'Crafting recipes, and their item pages in the journal',
      'Building pieces, including which ones are new or favourited',
      'Utility spell unlocks (to change what’s equipped, use the Spells page)',
      'First-time pickups and milestone materials',
      'Vendor reputation, agility courses, shrines, and kebbit burrows',
    ],
  },
  {
    id: 'appearance',
    title: 'Appearance',
    image: '/images/character-appearance.png',
    alt: 'Appearance page with body, head, hair, and color slots filled',
    card: 'Body, head, hair, facial hair, and colors.',
    text: 'Change your body type, head, hair, and facial hair, and pick new skin, hair, eye, and eyebrow colors from the same options the game gives you.',
    details: [
      'Body type and head',
      'Hair and facial hair styles',
      'Skin tone, plus hair, eye, and eyebrow color',
    ],
  },
  {
    id: 'world',
    title: 'World',
    experimental: true,
    card: 'Edit your world saves too. Still experimental.',
    text: 'Open a world save alongside your character to change its settings and dig through everything that’s been placed in the world. This part is still experimental, so make sure the game is closed before you save over a file it’s using.',
    details: [
      'Settings: name, map, difficulty, hardcore, privacy, friendly fire, crossplay, and custom scaling',
      'Progress: bosses you’ve defeated, one-time world events that have already fired, other progress flags, and lore still out in the world',
      'Time and weather: the in-game clock and the weather in each region',
      'Resources: ore, rocks, and trees, including ones that are depleted or respawning',
      'Containers: chests, station inventories, and items dropped on the ground',
      'Buildings: every piece you’ve placed, kept exactly where it was saved',
      'Everything else: other objects saved in the world, grouped by type, with numbers and text you can edit where possible',
    ],
  },
];
