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
    text: 'Edit character inventory, runes, ammo, quest items, and the personal chest.',
  },
  {
    id: 'map',
    title: 'Map',
    image: '/images/character-map.png',
    alt: 'Ashenfall map with pins and resource markers',
    text: 'Interactive map with custom pins and resource markers.',
  },
  {
    id: 'skills',
    title: 'Skills',
    image: '/images/character-skills.png',
    alt: 'Skills page with Attack selected, showing level, XP, and unlocks',
    text: 'View and edit skill levels and XP. See skill unlocks and perks.',
  },
  {
    id: 'spells',
    title: 'Spells',
    image: '/images/character-spells.png',
    alt: 'Spellbook with four spell wheels and the spell list',
    text: 'Edit spell wheels and unlock spells from the book.',
  },
];

/** Every editor page, in app order. The homepage highlights a subset. */
export const features: Feature[] = [
  {
    id: 'file',
    title: 'File',
    image: '/images/character-file.png',
    alt: 'File page with the character name, hardcore setting, and worlds playtime',
    card: 'Name, hardcore, and playtime for each world.',
    text: 'Rename the character, check the save version, and turn hardcore on or off. Playtime is listed for each world this character has entered, with the local time next to the stored timestamp.',
    details: [
      'Character name, GUID, and type',
      'Save version, save count, and backup token',
      'Hardcore flag, and the world it is tied to',
      'Last played time for each world, stored as Unix time',
    ],
  },
  {
    id: 'character',
    title: 'Character',
    image: '/images/character-vitals.png',
    alt: 'Character page with vital bars, a drink buff, and the mount row',
    card: 'Vitals, the drink buff, and the equipped mount.',
    text: 'Health, stamina, sustenance, hydration, endurance, and toxicity sit on their bars, next to the drink buff and the mount.',
    details: [
      'Vital bars, with an edit toggle when you want to change the numbers',
      'Drink buff on the hydration block',
      'Unlocked mounts, and the one that is equipped',
      'Status effects, including poison, burning, cold, and well rested',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    image: '/images/character-inventory.png',
    alt: 'Inventory page with the bag grid and the equipment doll',
    card: 'Bag pages and the equipment doll.',
    text: 'Edit character inventory, runes, ammo, quest items, and the personal chest.',
    details: [
      'Bag pages for inventory, runes, ammo, and quest items',
      'Personal chest beside the bag',
      'Equipment doll for what is worn',
      'Items chosen from the bundled catalog',
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    image: '/images/character-skills.png',
    alt: 'Skills page with Attack selected, showing level, XP, and unlocks',
    card: 'Levels, XP, unlocks, and perks.',
    text: 'View and edit skill levels and XP. See skill unlocks and perks.',
    details: [
      'Level and XP on each skill',
      'Unlocks that XP reaches, listed beside the skill',
    ],
  },
  {
    id: 'spells',
    title: 'Spells',
    image: '/images/character-spells.png',
    alt: 'Spellbook with four spell wheels and the spell list',
    card: 'Spell wheels and the spellbook.',
    text: 'Edit spell wheels and unlock spells from the book.',
    details: [
      'Four spell wheels',
      'Unlock or lock spells from the book',
      'Filters for unlocked, locked, and all spells',
    ],
  },
  {
    id: 'map',
    title: 'Map',
    image: '/images/character-map.png',
    alt: 'Ashenfall map with pins and resource markers',
    card: 'Ashenfall, pins, and resource markers.',
    text: 'Interactive map with custom pins and resource markers.',
    details: [
      'Ashenfall, with fog of war',
      'Custom pins',
      'Resource markers you can toggle while looking around the map',
    ],
  },
  {
    id: 'journal',
    title: 'Journal',
    image: '/images/character-journal.png',
    alt: 'Journal on the Recipes tab with Law Rune selected',
    card: 'World, Recipes, and Knowledge entries.',
    text: 'World, Recipes, and Knowledge, matching the in-game journal. Unlock an entry or mark it unread.',
    details: [
      'World, Recipes, and Knowledge tabs',
      'Filters for all, unlocked, locked, and unread',
      'Search, and a subcategory when the page has one',
    ],
  },
  {
    id: 'quests',
    title: 'Quests',
    image: '/images/character-quests.png',
    alt: 'Quests page with active quests open',
    card: 'Active, completed, and not-started quests.',
    text: 'Active, completed, and not-started quests, with state and objectives on the open card.',
    details: [
      'Main, side, and task quests from the catalog',
      'State and objectives on the open card',
      'The quest the character is tracking',
    ],
  },
  {
    id: 'progress',
    title: 'Progress',
    image: '/images/character-progress.png',
    alt: 'Progress page with the recipe list expanded',
    card: 'Recipes, buildings, discovery, vendors, and agility.',
    text: 'Recipes, buildings, discovery, vendors, and agility, kept as their own lists on the character.',
    details: [
      'Crafting recipes, and the item pages in the journal',
      'Building pieces, including new and favourited pieces',
      'Utility spell unlocks. Equipped wheels are edited on the Spells page',
      'First pickups and milestone materials',
      'Vendor reputation, agility courses, shrines, and kebbit burrows',
    ],
  },
  {
    id: 'appearance',
    title: 'Appearance',
    image: '/images/character-appearance.png',
    alt: 'Appearance page with body, head, hair, and color slots filled',
    card: 'Body, head, hair, facial hair, and colors.',
    text: 'Body, head, hair, facial hair, and the skin, hair, eye, and eyebrow colors, chosen from the customization tables on the save.',
    details: [
      'Body type and head',
      'Hair and facial hair presets',
      'Skin tone, hair color, eye color, and eyebrow color',
    ],
  },
  {
    id: 'world',
    title: 'World',
    experimental: true,
    card: 'World files. Still experimental.',
    text: 'Open a world .sav beside the character file. These pages cover the save’s settings and what is placed in the world. Close the game before overwriting a live file.',
    details: [
      'File: name, map, difficulty, hardcore, privacy, friendly fire, crossplay, and custom scales',
      'Progress: defeated bosses, world hooks, tagged progress, and lore still placed in the world',
      'Time and weather: the in-game clock and regional weather',
      'Resources: ore, rock, and trees, including depleted and respawning nodes',
      'Containers: chests, station inventories, and dropped items',
      'Buildings: placed pieces, with positions left as they were saved',
      'Actors: other saved actors, grouped by type, where a number or string can be edited',
    ],
  },
];
