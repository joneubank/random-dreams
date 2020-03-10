const rng = max => Math.floor(Math.random() * max);

const settings = [
  'You find yourself on a ship at night with rain pelting your face.',
  'You find yourself in a seemingly peaceful grove full of flowers.',
  "You find yourself at the top of a wizard's tower, looking over the ledge.",
  'You find yourself sitting at a the bar of a familiar inn.',
  'You find yourself face down in the sand with no structure in sight.',
  'You find yourself falling from the sky and crashing into a body of water.',
  'You find yourself on a battlefield lined with dead soldiers and common folk alike.',
  'You find yourself in a cemetery covering all sides of a city-sized sphere floating in the darkness.',
  'You find yourself as small as an insect, lost in the grass of a field.',
  'You find yourself looking down upon your own body, laying where you slept this night.',
  'You find yourself feasting with loved ones in a grand mansion.',
  'You find yourself bound to a strangers back as they walk through a swamp.',
  'You find yourself rising from slumber in the same spot you fell asleep, but you see your body still sleeping; you are a spirit.',
  'You find yourself losing an arm wrestling contest to a king, and the court laughs and points.',
  'You find yourself swimming in an endless ocean.',
  'You find yourself telling a joke to a monarch, and nobody laughs.',
  'You find yourself furiously running from something chasing you.',
  'You find yourself aboard a ship far out to sea.',
  'You find yourself at the gates of eternity; a choir of divine beings float around you as far as you can see.',
  'You find yourself in the dilapidated temple of a religion you despise. However, a feeling of failure weighs heavy on your mind.',
];

const beings = [
  'A three-headed being looks down upon you from the sky, one face scowling, one crying, and one smiling.',
  'Your deity manifests in front of you after crashing down from the heavens; it is worn from battle.',
  'A serpent slithers toward you, its body growing longer as it moves as to never leaves an area it once occupied.',
  'A sickly frog uses its broken limbs to move toward you.',
  'A figure made solely of familiar faces stares at you.',
  'The person you care for most walks up behind you and places their hands gently around your neck.',
  'Bones rise and form the skeleton of an unrecognizable creature.',
  'Your skin tears from your muscle, forming a swirl of a face in front of you.',
  'A swarm of maggots overtake your surroundings becoming a being standing 20 feet tall.',
  'A mass of red clouds shroud the sky. A tear allows you to see something approaching from far beyond the stars.',
  'Four versions of you appear, each one from an important moment in your life. They merge into one, crying silently.',
  'An oval eye nearly as tall as you stares at you, following you wherever you go.',
];

const actions = [
  'The being looks left quickly, and scrambles around before disappearing, but you can faintly make out',
  "It creates a plume of fire; you feel the heat against your face. In the flames there is a shifting vision of what's to come:",
  'A pool forms at your feet, swirling with otherworldly power, which glistens with the image of',
  'It calls out your name but its voice fades from existence. Then you see',
  'It tears open, revealing a single word in a language you do not know. The word leaves an image in your mind of',
  'You destroy it, but it wails and dies revealing',
  'A wave of teeth and bones wash everything away, and in its wake, you see',
  'It kneels before you, arms stretched out as if waiting to receive something. You see reflected in its eyes',
  'Its mouth opens, a haunting chorus of laughter erupting forth; its cackles turn to streams of light which become',
  'It splits the ground open before you, exposing',
];

const omens = [
  'your hometown, burning, absolutely orange with smoke and flame.',
  'those you love turning their backs on you - there is no shame in their eyes.',
  'a devilish form laughing before being consumed in brimstone.',
  'your eyes being pulled from your body and the world goes dark.',
  'all material items you treasure being taken, destroyed, and forgotten.',
  'a foreign vessel, with an dieing crew, sinking at an incredible rate.',
  'cracks forming along the horizon, and a horde of monstrous limbs climbing out.',
  'a sickly child unleashing a terrible screech - until you are suddenly left in complete and utter silence.',
];

const feelings = [
  'You feel a great sense of dread about how real it all felt, but shake it off quickly.',
  'You feel a bit perplexed on why this being came to you of all people.',
  'You feel like this is something you need to tell your party members, but can barely find the words to describe the experience.',
  'You feel like this matter will weigh on you for the days to come.',
  'You feel the matter would be a complete waste of time to investigate.',
  'You feel unsettled at the events that unfolded before you.',
];

const wakes = [
  'You awaken in a cold sweat.',
  'When you awake, you find yourself sleepwalking about 20 feet from where you fell asleep.',
  'When you awaken, you still see the last image of your dream when you shut your eyes until you flush them with water.',
  'You jump up, screaming for a moment, but you are able to silence yourself before waking your allies.',
];

export default () => {
  const setting = settings[rng(20)];
  const being = beings[rng(12)];
  const action = actions[rng(10)];
  const omen = omens[rng(8)];
  const feeling = feelings[rng(6)];
  const wake = wakes[rng(4)];

  const result = `${setting} ${being} ${action} ${omen} ${feeling} ${wake}`;
  console.log(result);
  return {
    setting,
    being,
    action,
    omen,
    feeling,
    wake,
    result,
  };
};

export const setting = () => settings[rng(20)];
export const being = () => beings[rng(12)];
export const action = () => actions[rng(10)];
export const omen = () => omens[rng(8)];
export const feeling = () => feelings[rng(6)];
export const wake = () => wakes[rng(4)];
