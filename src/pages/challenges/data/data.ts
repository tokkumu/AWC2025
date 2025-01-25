import { ConfigData } from '../../config/types';
import { ChallengeData } from '../types';
import { STACK_78, STACK_79, STACK_80 } from './stacks';
import { ChallengeList } from './types';
import {
  validateAirTime,
  validateBroadcastDate,
  validateEpisodeCount,
  validateEpisodeDuration,
  validateFavorites,
  validateFinishedAiring,
  validateGenreCount,
  validateMainCharacterCountAtLeast,
  validateMainCharacterCountEquals,
  validateMALIdContains,
  validateMoreMainThanSupporting,
  validatePopularity,
  validateRankingPopularityDiff,
  validateRating,
  validateRuntime,
  validateScore,
  validateSongCountAtLeast,
  validateSongCountEquals,
  validateSource,
  validateStack,
  validateStartDate,
  validateStartMonth,
  validateTags,
  validateTitleUsername,
  validateType,
  validateWordsWithSameLetter,
} from './validators';

export const MINIGAME_DATA: { [id: string]: { required: number } } = {
  Darts: {
    required: 10,
  },
  'Bingo 17A': {
    required: 14,
  },
  'Bingo 17B': {
    required: 14,
  },
  'Bingo 21A': {
    required: 16,
  },
  'Bingo 21B': {
    required: 16,
  },
  'Plinko Tier 1': {
    required: 5,
  },
  'Plinko Tier 2': {
    required: 5,
  },
  'Plinko Tier 3': {
    required: 5,
  },
  'Whack-a-Mole A': {
    required: 5,
  },
  'Whack-a-Mole B': {
    required: 5,
  },
  'Whack-a-Mole C': {
    required: 5,
  },
  'Whack-a-Mole D': {
    required: 5,
  },
  'Whack-a-Mole E': {
    required: 5,
  },
  'Tarot Route 1': {
    required: 3,
  },
  'Tarot Route 2': {
    required: 6,
  },
  'Tarot Route 2.1': {
    required: 6,
  },
  'Tarot Route 2.2': {
    required: 6,
  },
  'Tarot Route 3': {
    required: 6,
  },
  'Tarot Route 3.1': {
    required: 6,
  },
  'Tarot Route 3.2': {
    required: 6,
  },
  'Duck Pond': {
    required: 15,
  },
};

export const CHALLENGE_LIST: ChallengeList = {
  '1': {
    bbCode: `(1) Watch an anime an active [url=https://myanimelist.net/forum/?topicid=1867298#msg60815692][color=#4BB1DF][b]MAL Staff Member[/b][/color][/url] has listed in their '[url=https://i.imgur.com/H3AydsD.png][color=#9068D4][b]Popularity vs Anime Score[/b][/color][/url]' profile statistics and provide a screenshot (AWC Staff are not MAL Staff)`,
    description: `(1) Watch an anime an active <a href="https://myanimelist.net/forum/?topicid=1867298#msg60815692">MAL Staff Member</a> has listed in their '<a href="https://i.imgur.com/H3AydsD.png">Popularity vs Anime Score</a>' profile statistics and provide a screenshot (AWC Staff are not MAL Staff)`,
    addlInfo: [
      `- On the MAL user's profile click "All Anime Stats" just above the anime Mean Score or click "Statistics" under the Joined date`,
    ],
    defaultExtraInfo: 'MAL Staff: | Screenshot: ',
    minigames: ['Duck Pond'],
    validators: [],
  },
  '2': {
    bbCode:
      '(2) Watch an anime from a [url=https://myanimelist.net/forum/?topicid=1867298#msg68289129][color=#4BB1DF][b]Stack[/b][/color][/url] provided by an active AWC Staff Member (MAL Staff are not AWC Staff)',
    description:
      '(2) Watch an anime from a <a href="https://myanimelist.net/forum/?topicid=1867298#msg68289129">Stack</a> provided by an active AWC Staff Member (MAL Staff are not AWC Staff)',
    addlInfo: [],
    defaultExtraInfo: 'AWC Staff Stack Used: ',
    minigames: ['Darts'],
    validators: [],
  },
  '3': {
    bbCode:
      '(3) Watch an anime completed by an [url=https://myanimelist.net/forum/?goto=post&topicid=1867298&id=68289129][color=#4BB1DF][b]AWC Staff Member[/b][/color][/url] (staff must have rated the anime at least an 8 and completed it before item is started)',
    description:
      '(3) Watch an anime completed by an <a href="https://myanimelist.net/forum/?goto=post&topicid=1867298&id=68289129">AWC Staff Member</a> (staff must have rated the anime at least an 8 and completed it before item is started)',
    addlInfo: [],
    defaultExtraInfo: 'AWC Staff Member: ',
    minigames: ['Tarot Route 2.1', 'Tarot Route 3.1', 'Tarot Route 3.2'],
    validators: [],
  },
  '4': {
    bbCode:
      '(4) Watch an anime recommended to you in the [url=https://myanimelist.net/forum/?topicid=2188282][color=#4BB1DF][b]AWC 2025 Staff Recs[/b][/color][/url] thread by an active [url=https://myanimelist.net/forum/?goto=post&topicid=1867298&id=68289129][color=#4BB1DF][b]AWC Staff Member[/b][/color][/url]',
    description:
      '(4) Watch an anime recommended to you in the <a href="https://myanimelist.net/forum/?topicid=2188282">AWC 2025 Staff Recs</a> thread by an active <a href="https://myanimelist.net/forum/?goto=post&topicid=1867298&id=68289129">AWC Staff Member</a>',
    addlInfo: [],
    defaultExtraInfo: 'Recommendation Link: ',
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [],
  },
  '5': {
    bbCode:
      '(5) Watch an anime recommended to you in the [url=https://myanimelist.net/forum/?topicid=2188284][color=#4BB1DF][b]AWC 2025 Participant Recs[/b][/color][/url] thread',
    description:
      '(5) Watch an anime recommended to you in the <a href="https://myanimelist.net/forum/?topicid=2188284">AWC 2025 Participant Recs</a> thread',
    addlInfo: [],
    defaultExtraInfo: 'Recommendation Link: ',
    minigames: ['Whack-a-Mole B'],
    validators: [],
  },
  '6': {
    bbCode:
      '(6) Watch an anime completed by a 2025 AWC participant who has a [url=https://myanimelist.net/forum/?topicid=2196122][color=#4BB1DF][b]sign-up post[/b][/color][/url] on page 1-3 (participant must have rated the anime a 9 or 10 and completed it before item is started)',
    description:
      '(6) Watch an anime completed by a 2025 AWC participant who has a <a href="https://myanimelist.net/forum/?topicid=2196122">sign-up post</a> on page 1-3 (participant must have rated the anime a 9 or 10 and completed it before item is started)',
    addlInfo: [],
    defaultExtraInfo: 'AWC Participant: | Post Link: | Screenshot: ',
    minigames: ['Plinko Tier 3'],
    validators: [],
  },
  '7': {
    bbCode:
      '(7) Watch an anime that a 2025 AWC participant has completed for the 2025 challenge (participant must have completed anime before item is started)',
    description:
      '(7) Watch an anime that a 2025 AWC participant has completed for the 2025 challenge (participant must have completed anime before item is started)',
    addlInfo: [],
    defaultExtraInfo: 'AWC ParticipantL | Item Used For: | Post Link: ',
    minigames: ['Duck Pond'],
    validators: [],
  },
  '8': {
    bbCode:
      '(8) Watch an anime a 2025 AWC participant [url=https://i.imgur.com/qW5Obtw.png][color=#9068D4][b]dropped[/b][/color][/url] or put [url=https://i.imgur.com/cGfhreB.png][color=#9068D4][b]on-hold[/b][/color][/url] September 30, 2024 or earlier (participant must have watched at least one episode)',
    description:
      '(8) Watch an anime a 2025 AWC participant <a href="https://i.imgur.com/qW5Obtw.png">dropped</a> or put <a href="https://i.imgur.com/cGfhreB.png">on-hold</a> September 30, 2024 or earlier (participant must have watched at least one episode)',
    addlInfo: [
      '- If participant does not track Start/Finish dates, their Last Updated must show a date of September 30, 2024 or earlier',
      '- You may <u>not</u> use your own list for this item',
    ],
    defaultExtraInfo: 'AWC Participant: | Post Link: | Screenshot: ',
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [],
  },
  '9': {
    bbCode: `(9) Watch an anime featured in a 2025 AWC participant's forum [url=https://i.imgur.com/kXJlFdt.png][color=#9068D4][b]avatar or signature[/b][/color][/url]`,
    description: `(9) Watch an anime featured in a 2025 AWC participant's forum <a href="https://i.imgur.com/kXJlFdt.png">avatar or signature</a>`,
    addlInfo: [
      '- The character in the avatar/signature must appear in the anime you choose to watch, not just the series in general',
    ],
    defaultExtraInfo: 'AWC Participant: | Post Link: ',
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [],
  },
  '10': {
    bbCode: `(10) Watch an anime a 2025 AWC participant has listed in their '[url=https://i.imgur.com/PUBpGRc.png][color=#9068D4][b]MAL Score vs Anime Score[/b][/color][/url]' profile statistics and provide a screenshot`,
    description: `(10) Watch an anime a 2025 AWC participant has listed in their '<a href="https://i.imgur.com/PUBpGRc.png">MAL Score vs Anime Score</a>' profile statistics and provide a screenshot`,
    addlInfo: [
      `- On the MAL user's profile click "All Anime Stats" just above the anime Mean Score or click "Statistics" under the Joined date`,
    ],
    defaultExtraInfo:
      'AWC Participant: | Post Link: | Profile Statistics Link: | Screenshot: ',
    minigames: ['Tarot Route 2'],
    validators: [],
  },
  '11': {
    bbCode:
      '(11) Watch a TV-type anime with an episode duration of [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Episode%20Duration/TV%20type%20with%20episode%20duration%20of%2025min%20or%20more.txt][color=#4BB1DF][b]25 minutes[/b][/color][/url] or more',
    description:
      '(11) Watch a TV-type anime with an episode duration of <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Episode%20Duration/TV%20type%20with%20episode%20duration%20of%2025min%20or%20more.txt">25 minutes</a> or more',
    addlInfo: [],
    minigames: ['Whack-a-Mole A'],
    validators: [validateType(['TV']), validateEpisodeDuration(25, 'gte')],
  },
  '12': {
    bbCode: '(12) Watch an ONA, OVA, or Special that has 10 episodes or more',
    description:
      '(12) Watch an ONA, OVA, or Special that has 10 episodes or more',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [
      validateType(['ONA', 'OVA', 'Special']),
      validateEpisodeCount(10, 'gte'),
    ],
  },
  '13': {
    bbCode:
      '(13) Watch a Movie with a total duration of 1 hour 30 minutes or more',
    description:
      '(13) Watch a Movie with a total duration of 1 hour 30 minutes or more',
    addlInfo: [],
    minigames: ['Plinko Tier 1'],
    validators: [validateType(['Movie']), validateRuntime(90, 'gte')],
  },
  '14': {
    bbCode:
      '(14) Watch a TV-type anime with an [url=https://i.imgur.com/AUlOSJY.png][color=#9068D4][b]irregular release schedule[/b][/color][/url] (where at least one episode was released less than 7 days after its previous episode or more than 7 days after its previous episode)',
    description:
      '(14) Watch a TV-type anime with an <a href="https://i.imgur.com/AUlOSJY.png">irregular release schedule</a> (where at least one episode was released less than 7 days after its previous episode or more than 7 days after its previous episode)',
    addlInfo: [
      "- If the episode air dates are not listed in the anime's Episodes tab, you must provide a reliable source of this information (AniDB, AnimeNewsNetwork, etc.)",
    ],
    minigames: ['Whack-a-Mole A'],
    validators: [validateType(['TV'])],
  },
  '15': {
    bbCode:
      '(15) Watch a TV-type anime with a [url=https://i.imgur.com/0WHKcHk.png][color=#9068D4][b]Sequel[/b][/color][/url] listed under Related Entries',
    description:
      '(15) Watch a TV-type anime with a <a href="https://i.imgur.com/0WHKcHk.png">Sequel</a> listed under Related Entries',
    addlInfo: [],
    minigames: ['Whack-a-Mole A'],
    validators: [validateType(['TV'])],
  },
  '16': {
    bbCode:
      '(16) Watch a Sequel (any anime type) to the anime used for Item (15)',
    description:
      '(16) Watch a Sequel (any anime type) to the anime used for Item (15)',
    addlInfo: [
      '- The pair can be watched in whatever order you want; sometimes a "prequel" airs after its "sequel"',
    ],
    minigames: ['Whack-a-Mole A'],
    validators: [],
  },
  '17': {
    bbCode:
      '(17) Watch an anime with 15 or more episodes (each episode must be less than 16 minutes)',
    description:
      '(17) Watch an anime with 15 or more episodes (each episode must be less than 16 minutes)',
    addlInfo: [],
    minigames: ['Plinko Tier 2'],
    validators: [
      validateEpisodeCount(15, 'gte'),
      validateEpisodeDuration(15, 'lte'),
    ],
  },
  '18': {
    bbCode:
      '(18) Watch an anime with 22 or more episodes (each episode must be at least 15 minutes)',
    description:
      '(18) Watch an anime with 22 or more episodes (each episode must be at least 15 minutes)',
    addlInfo: [],
    minigames: ['Darts'],
    validators: [
      validateEpisodeCount(22, 'gte'),
      validateEpisodeDuration(15, 'gte'),
    ],
  },
  '19': {
    bbCode:
      '(19) Watch an anime with 43 or more episodes (each episode must be at least 15 minutes)',
    description:
      '(19) Watch an anime with 43 or more episodes (each episode must be at least 15 minutes)',
    addlInfo: [],
    minigames: ['Whack-a-Mole E'],
    validators: [
      validateEpisodeCount(43, 'gte'),
      validateEpisodeDuration(15, 'gte'),
    ],
  },
  '20': {
    bbCode:
      '(20) Watch an anime with 61 or more episodes (each episode must be at least 10 minutes)',
    description:
      '(20) Watch an anime with 61 or more episodes (each episode must be at least 10 minutes)',
    addlInfo: [],
    minigames: ['Bingo 21B'],
    validators: [
      validateEpisodeCount(61, 'gte'),
      validateEpisodeDuration(10, 'gte'),
    ],
  },
  '21': {
    bbCode:
      '(21) Watch an anime that began airing between Jan 1, 2020 and Dec 31, 2024 (total duration must be at least 16 minutes)',
    description:
      '(21) Watch an anime that began airing between Jan 1, 2020 and Dec 31, 2024 (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [
      validateRuntime(16, 'gte'),
      validateStartDate('2020-01-01', 'gte'),
      validateStartDate('2024-12-31', 'lte'),
    ],
  },
  '22': {
    bbCode:
      '(22) Watch an anime that began airing between Jan 1, 2015 and Dec 31, 2019 (total duration must be at least 16 minutes)',
    description:
      '(22) Watch an anime that began airing between Jan 1, 2015 and Dec 31, 2019 (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Darts'],
    validators: [
      validateRuntime(16, 'gte'),
      validateStartDate('2015-01-01', 'gte'),
      validateStartDate('2019-12-31', 'lte'),
    ],
  },
  '23': {
    bbCode:
      '(23) Watch an anime that began airing between Jan 1, 2010 and Dec 31, 2014 (total duration must be at least 16 minutes)',
    description:
      '(23) Watch an anime that began airing between Jan 1, 2010 and Dec 31, 2014 (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Tarot Route 2.1', 'Tarot Route 2.2', 'Tarot Route 3.1'],
    validators: [
      validateRuntime(16, 'gte'),
      validateStartDate('2010-01-01', 'gte'),
      validateStartDate('2014-12-31', 'lte'),
    ],
  },
  '24': {
    bbCode:
      '(24) Watch an anime that began airing between Jan 1, 2000 and Dec 31, 2009 (total duration must be at least 16 minutes)',
    description:
      '(24) Watch an anime that began airing between Jan 1, 2000 and Dec 31, 2009 (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Whack-a-Mole D'],
    validators: [
      validateRuntime(16, 'gte'),
      validateStartDate('2000-01-01', 'gte'),
      validateStartDate('2009-12-31', 'lte'),
    ],
  },
  '25': {
    bbCode:
      '(25) Watch an anime that began airing between Jan 1, 1990 and Dec 31, 1999 (total duration must be at least 16 minutes)',
    description:
      '(25) Watch an anime that began airing between Jan 1, 1990 and Dec 31, 1999 (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Plinko Tier 2'],
    validators: [
      validateRuntime(16, 'gte'),
      validateStartDate('1990-01-01', 'gte'),
      validateStartDate('1999-12-31', 'lte'),
    ],
  },
  '26': {
    bbCode:
      '(26) Watch an anime that  began airing between Jan 1, 1960 and Dec 31, 1989',
    description:
      '(26) Watch an anime that  began airing between Jan 1, 1960 and Dec 31, 1989',
    addlInfo: [],
    minigames: ['Bingo 21B'],
    validators: [
      validateStartDate('1960-01-01', 'gte'),
      validateStartDate('1989-12-31', 'lte'),
    ],
  },
  '27': {
    bbCode:
      '(27) Watch an anime that started airing on a [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Monday.txt][color=#4BB1DF][b]Monday[/b][/color][/url] or [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Tuesday.txt][color=#4BB1DF][b]Tuesday[/b][/color][/url] (day must be listed on [url=https://i.imgur.com/FchOYtT.png][color=#9068D4][b]MAL page[/b][/color][/url])',
    description:
      '(27) Watch an anime that started airing on a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Monday.txt">Monday</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Tuesday.txt">Tuesday</a> (day must be listed on <a href="https://i.imgur.com/FchOYtT.png">MAL page</a>)',
    addlInfo: [],
    minigames: ['Whack-a-Mole D'],
    validators: [validateBroadcastDate(['Monday', 'Tuesday'])],
  },
  '28': {
    bbCode:
      '(28) Watch an anime that started airing on a [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Wednesday.txt][color=#4BB1DF][b]Wednesday[/b][/color][/url] or [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Thursday.txt][color=#4BB1DF][b]Thursday[/b][/color][/url] (day must be listed on [url=https://i.imgur.com/Wi5bSB2.png][color=#9068D4][b]MAL page[/b][/color][/url])',
    description:
      '(28) Watch an anime that started airing on a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Wednesday.txt">Wednesday</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Thursday.txt">Thursday</a> (day must be listed on <a href="https://i.imgur.com/Wi5bSB2.png">MAL page</a>)',
    addlInfo: [],
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [validateBroadcastDate(['Wednesday', 'Thursday'])],
  },
  '29': {
    bbCode:
      '(29) Watch an anime that started airing on a [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Friday.txt][color=#4BB1DF][b]Friday[/b][/color][/url] or [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Saturday.txt][color=#4BB1DF][b]Saturday[/b][/color][/url] (day must be listed on [url=https://i.imgur.com/x60U8GM.png][color=#9068D4][b]MAL page[/b][/color][/url])',
    description:
      '(29) Watch an anime that started airing on a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Friday.txt">Friday</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Saturday.txt">Saturday</a> (day must be listed on <a href="https://i.imgur.com/x60U8GM.png">MAL page</a>)',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [validateBroadcastDate(['Friday', 'Saturday'])],
  },
  '30': {
    bbCode:
      '(30) Watch an anime that started airing on a [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Sunday.txt][color=#4BB1DF][b]Sunday[/b][/color][/url] or [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Unknown.txt][color=#4BB1DF][b]Unknown[/b][/color][/url] day (day must be listed on [url=https://i.imgur.com/qUSGGWN.png][color=#9068D4][b]MAL page[/b][/color][/url])',
    description:
      '(30) Watch an anime that started airing on a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Sunday.txt">Sunday</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Day%20of%20week/Unknown.txt">Unknown</a> day (day must be listed on <a href="https://i.imgur.com/qUSGGWN.png">MAL page</a>)',
    addlInfo: [],
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [validateBroadcastDate(['Sunday', 'Unknown'])],
  },
  '31': {
    bbCode:
      '(31) Watch an anime that started airing in [b]January[/b] (each episode must be at least 16 minutes)',
    description:
      '(31) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/1.txt">January</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [validateStartMonth([1]), validateEpisodeDuration(16, 'gte')],
  },
  '32': {
    bbCode:
      '(32) Watch an anime that started airing in [b]April[/b] (each episode must be at least 16 minutes)',
    description:
      '(32) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/4.txt">April</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Tarot Route 2', 'Tarot Route 3'],
    validators: [validateStartMonth([4]), validateEpisodeDuration(16, 'gte')],
  },
  '33': {
    bbCode:
      '(33) Watch an anime that started airing in [b]July[/b] (each episode must be at least 16 minutes)',
    description:
      '(33) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/7.txt">July</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Tarot Route 2', 'Tarot Route 3.1', 'Tarot Route 3.2'],
    validators: [validateStartMonth([7]), validateEpisodeDuration(16, 'gte')],
  },
  '34': {
    bbCode:
      '(34) Watch an anime that started airing in [b]October[/b] (each episode must be at least 16 minutes)',
    description:
      '(34) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/10.txt">October</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Plinko Tier 3'],
    validators: [validateStartMonth([10]), validateEpisodeDuration(16, 'gte')],
  },
  '35': {
    bbCode:
      '(35) Watch an anime that started airing in [b]February[/b] or [b]May[/b] (total duration must be at least 16 minutes)',
    description:
      '(35) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/2.txt">February</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/5.txt">May</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [validateStartMonth([2, 5]), validateRuntime(16, 'gte')],
  },
  '36': {
    bbCode:
      '(36) Watch an anime that started airing in [b]March[/b] or [b]November[/b] (total duration must be at least 16 minutes)',
    description:
      '(36) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/3.txt">March</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/11.txt">November</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Whack-a-Mole D'],
    validators: [validateStartMonth([3, 11]), validateRuntime(16, 'gte')],
  },
  '37': {
    bbCode:
      '(37) Watch an anime that started airing in [b]June[/b] or [b]August[/b] (total duration must be at least 16 minutes)',
    description:
      '(37) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/6.txt">June</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/8.txt">August</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Whack-a-Mole D'],
    validators: [validateStartMonth([6, 8]), validateRuntime(16, 'gte')],
  },
  '38': {
    bbCode:
      '(38) Watch an anime that started airing in [b]September[/b] or [b]December[/b] (total duration must be at least 16 minutes)',
    description:
      '(38) Watch an anime that started airing in <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/9.txt">September</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Start%20Month/12.txt">December</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [validateStartMonth([9, 12]), validateRuntime(16, 'gte')],
  },
  '39': {
    bbCode:
      '(39) Watch an anime that began airing the same [url=https://github.com/nyomdalee/awc-helper-txt/tree/master/Anime%20by%20Start%20Year][color=#4BB1DF][b]year[/b][/color][/url] you joined MAL',
    description:
      '(39) Watch an anime that began airing the same <a href="https://github.com/nyomdalee/awc-helper-txt/tree/master/Anime%20by%20Start%20Year">year</a> you joined MAL',
    addlInfo: [
      '- The anime must air in the same year you joined but can be any month and day',
    ],
    minigames: ['Plinko Tier 3'],
    validators: [],
  },
  '40': {
    bbCode:
      '(40) Watch an anime that began airing the same [url=https://i.imgur.com/8bRDbk2.png][color=#9068D4][b]season and year[/b][/color][/url] as one of the anime in your MAL favorites (favorite anime must have been completed before item is started)',
    description:
      '(40) Watch an anime that began airing the same <a href="https://i.imgur.com/8bRDbk2.png">season and year</a> as one of the anime in your MAL favorites (favorite anime must have been completed before item is started)',
    addlInfo: [
      '- The favorite anime must be listed on your profile and <em>must be completed</em> (no airing items) before this item is started',
      '- The anime do not have to be TV type or show the season/year on their MAL page',
    ],
    defaultExtraInfo: 'Favorite Anime: | Season/Year: ',
    minigames: ['Darts'],
    validators: [],
  },
  '41': {
    bbCode:
      '(41) Watch an anime that began airing the same [url=https://github.com/nyomdalee/awc-helper-txt/tree/master/Anime%20by%20Start%20Month][color=#4BB1DF][b]month[/b][/color][/url] (eg. July) you joined MAL',
    description:
      '(41) Watch an anime that began airing the same <a href="https://github.com/nyomdalee/awc-helper-txt/tree/master/Anime%20by%20Start%20Month">month</a> (eg. July) you joined MAL',
    addlInfo: [
      '- The anime must air in the same month but can be any year and day',
    ],
    minigames: ['Darts'],
    validators: [],
  },
  '42': {
    bbCode:
      '(42) Watch an anime that began airing the same [url=https://github.com/nyomdalee/awc-helper-txt/tree/master/Anime%20by%20Start%20Day][color=#4BB1DF][b]day[/b][/color][/url] (eg. 18th) you joined MAL',
    description:
      '(42) Watch an anime that began airing the same <a href="https://github.com/nyomdalee/awc-helper-txt/tree/master/Anime%20by%20Start%20Day">day</a> (eg. 18th) you joined MAL',
    addlInfo: [
      '- The anime must air on the same day but can be any year and month',
    ],
    minigames: ['Whack-a-Mole D'],
    validators: [],
  },
  '43': {
    bbCode:
      '(43) Watch an anime that has a main title starting with the same [url=https://i.imgur.com/2ftTmQE.png][color=#9068D4][b]letter/number[/b][/color][/url] as your MAL username',
    description:
      '(43) Watch an anime that has a main title starting with the same <a href="https://i.imgur.com/2ftTmQE.png">letter/number</a> as your MAL username',
    addlInfo: [
      "- If your username starts with a non-standard character (anything that isn't a number or letter like -, *, [, ], _, etc) the anime's main title can start with any non-standard character",
    ],
    minigames: ['Darts'],
    validators: [validateTitleUsername()],
  },
  '44': {
    bbCode:
      '(44) Watch an anime with 7 or more words in the main title (symbols and numbers do not count as words)',
    description:
      '(44) Watch an anime with 7 or more words in the main title (symbols and numbers do not count as words)',
    addlInfo: [
      '- The words must be separated by a space; two words linked with a symbol (no space) will count as one word. Example: "Steins;Gate: Oukoubakko no Poriomania" has four words',
    ],
    minigames: ['Tarot Route 2', 'Tarot Route 3.1', 'Tarot Route 3.2'],
    validators: [],
  },
  '45': {
    bbCode:
      '(45) Watch an anime that has an English number (10, ten) somewhere in the [url=https://i.imgur.com/Qp2di40.png][color=#9068D4][b]main title[/b][/color][/url]',
    description:
      '(45) Watch an anime that has an English number (10, ten) somewhere in the <a href="https://i.imgur.com/Qp2di40.png">main title</a>',
    addlInfo: [],
    defaultExtraInfo: 'English Number: ',
    minigames: ['Tarot Route 1'],
    validators: [],
  },
  '46': {
    bbCode:
      '(46) Watch an anime that has a [url=https://i.imgur.com/yAsZclH.png][color=#9068D4][b]one-word[/b][/color][/url] main title',
    description:
      '(46) Watch an anime that has a <a href="https://i.imgur.com/yAsZclH.png">one-word</a> main title',
    addlInfo: [
      '- The word cannot be a symbol, single letter, or number (unless the number is written as a word)',
      '- Titles with punctuation separating words are not allowed (like Steins;Gate and K-On!)',
    ],
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [],
  },
  '47': {
    bbCode:
      '(47) Watch an anime that has a main character’s [url=https://i.imgur.com/O2Ww6kD.png][color=#9068D4][b]name/nickname/alternative name[/b][/color][/url] in the main title',
    description: `(47) Watch an anime that has a main character's <a href="https://i.imgur.com/O2Ww6kD.png">name/nickname/alternative name</a> in the main title`,
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [],
  },
  '48': {
    bbCode:
      '(48) Watch an anime with at least two different [url=https://i.imgur.com/cIxXfc9.png][color=#9068D4][b]non-alphanumeric[/b][/color][/url] characters in the main title',
    description:
      '(48) Watch an anime with at least two different <a href="https://i.imgur.com/cIxXfc9.png">non-alphanumeric</a> characters in the main title',
    addlInfo: [],
    minigames: ['Plinko Tier 1'],
    validators: [],
  },
  '49': {
    bbCode:
      '(49) Watch an anime that has at least 3 words in the main title that start with the same letter',
    description:
      '(49) Watch an anime that has at least 3 words in the main title that start with the same letter',
    addlInfo: [],
    minigames: ['Tarot Route 2.1', 'Tarot Route 2.2', 'Tarot Route 3'],
    validators: [validateWordsWithSameLetter(3)],
  },
  '50': {
    bbCode:
      '(50) Watch an anime that is tagged with one of your two least watched [url=https://i.imgur.com/wfMCV3n.png][color=#9068D4][b]Genres/Themes/Demographics by Days[/b][/color][/url] according to your MAL statistics and provide a screenshot showing the genre selections',
    description:
      '(50) Watch an anime that is tagged with one of your two least watched <a href="https://i.imgur.com/wfMCV3n.png">Genres/Themes/Demographics by Days</a> according to your MAL statistics and provide a screenshot showing the genre selections',
    addlInfo: [
      '- On your profile under Statistics click "All Anime Stats"; click "Genres"; sort by smallest number of "Days"',
      '- "Genres", "Themes", and "Demographics" should all have a check mark ("Explicit Genres" is optional)',
    ],
    defaultExtraInfo: 'Least Watched 1: | Least Watched 2: | Screenshot: ',
    minigames: ['Whack-a-Mole B'],
    validators: [],
  },
  '51': {
    bbCode:
      '(51) Watch an anime that has the number [url=https://github.com/nyomdalee/awc-helper-txt/tree/master/Anime%20by%20ID][color=#4BB1DF][b]25[/b][/color][/url] in its [url=https://i.imgur.com/qCG26tL.png][color=#9068D4][b]MAL ID[/b][/color][/url]',
    description: `(51) Watch an anime that has the number <a href=""https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20ID/ID%20contains%20'25'.txt"">25</a> in its <a href="https://i.imgur.com/qCG26tL.png">MAL ID</a>`,
    addlInfo: [
      `- The MAL ID is the set of digits after the "anime/" section of the anime page's URL (Cowboy Bebop's MAL ID is 1)`,
    ],
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [validateMALIdContains('25')],
  },
  '52': {
    bbCode:
      '(52) Watch an anime that was [url=https://myanimelist.net/reviews.php?t=anime][color=#4BB1DF][b]Reviewed[/b][/color][/url] the same [url=https://i.imgur.com/Gb3RDW4.png][color=#9068D4][b]2025 date[/b][/color][/url] you started it (each episode must be at least 16 minutes)',
    description:
      '(52) Watch an anime that was <a href="https://myanimelist.net/reviews.php?t=anime">Reviewed</a> the same <a href="https://i.imgur.com/Gb3RDW4.png">2025 date</a> you started it (each episode must be at least 16 minutes)',
    addlInfo: [
      '- It is recommended that you save a screenshot in case the review gets deleted',
      '- Reviews that are not in English or look as if they will get deleted (such as troll reviews) will not be accepted',
    ],
    defaultExtraInfo: 'Review Link: | Screenshot: ',
    minigames: ['Duck Pond'],
    validators: [],
  },
  '53': {
    bbCode:
      '(53) Watch an anime with a Review that has at least three different [url=https://i.imgur.com/b3jbqzt.png][color=#9068D4][b]reaction emojis[/b][/color][/url]',
    description:
      '(53) Watch an anime with a Review that has at least three different <a href="https://i.imgur.com/b3jbqzt.png">reaction emojis</a>',
    addlInfo: [],
    defaultExtraInfo: 'Review Link: | Screenshot: ',
    minigames: ['Darts'],
    validators: [],
  },
  '54': {
    bbCode:
      '(54) Watch an anime where the difference between [url=https://i.imgur.com/G2yPp7P.png][color=#9068D4][b]ranking and popularity[/b][/color][/url] is at least 1,500',
    description:
      '(54) Watch an anime where the difference between <a href="https://i.imgur.com/G2yPp7P.png">ranking and popularity</a> is at least 1,500',
    addlInfo: [],
    defaultExtraInfo: 'Ranking When Started: | Popularity When Started: ',
    minigames: ['Whack-a-Mole E'],
    validators: [validateRankingPopularityDiff(1500, 'gte')],
  },
  '55': {
    bbCode:
      '(55) Watch an anime that has [url=https://i.imgur.com/HLaZ9WR.png][color=#9068D4][b]no Recommendations[/b][/color][/url] (anime must finish airing before you start it)',
    description:
      '(55) Watch an anime that has <a href="https://i.imgur.com/HLaZ9WR.png">no Recommendations</a> (anime must finish airing before you start it)',
    addlInfo: [],
    minigames: ['Bingo 17B'],
    validators: [validateFinishedAiring()],
  },
  '56': {
    bbCode:
      '(56) Watch an anime with more users in the "[url=https://i.imgur.com/9J0fS86.png][color=#9068D4][b]Plan-to-Watch[/b][/color][/url]" stat than the "Completed" stat (anime must finish airing before you start it)',
    description:
      '(56) Watch an anime with more users in the "<a href="https://i.imgur.com/9J0fS86.png">Plan-to-Watch</a>" stat than the "Completed" stat (anime must finish airing before you start it)',
    addlInfo: [],
    defaultExtraInfo: 'Plan to Watch When Started: | Completed When Started: ',
    minigames: ['Tarot Route 2.2', 'Tarot Route 3'],
    validators: [validateFinishedAiring()],
  },
  '57': {
    bbCode:
      '(57) Watch an anime with 12 or more episodes that has a synopsis by [url=https://i.imgur.com/5MNklk9.png][color=#9068D4][b]MAL Rewrite[/b][/color][/url] (anime must finish airing before you start it)',
    description:
      '(57) Watch an anime with 12 or more episodes that has a synopsis by <a href="https://i.imgur.com/5MNklk9.png">MAL Rewrite</a> (anime must finish airing before you start it)',
    addlInfo: [],
    minigames: ['Whack-a-Mole A'],
    validators: [validateEpisodeCount(12, 'gte'), validateFinishedAiring()],
  },
  '58': {
    bbCode:
      '(58) Watch an anime with 150 or less favorites on MAL (total duration must be at least 16 minutes)',
    description:
      '(58) Watch an anime with 150 or less favorites on MAL (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Bingo 17B'],
    validators: [validateFavorites(150, 'lte')],
  },
  '59': {
    bbCode:
      '(59) Watch an anime that has a higher score than a listed [url=https://i.imgur.com/wyXhHzB.png][color=#9068D4][b]Adaptation[/b][/color][/url] under related anime',
    description:
      '(59) Watch an anime that has a higher score than a listed <a href="https://i.imgur.com/wyXhHzB.png">Adaptation</a> under related anime',
    addlInfo: [],
    defaultExtraInfo:
      'Anime Score When Started: | Adaptation Score When Started: ',
    minigames: ['Bingo 21A'],
    validators: [],
  },
  '60': {
    bbCode:
      '(60) Watch an anime with a popularity lower than [url=https://i.imgur.com/y70AA7b.png][color=#9068D4][b]#418[/b][/color][/url] (total duration must be at least 16 minutes)',
    description:
      '(60) Watch an anime with a popularity lower than <a href="https://i.imgur.com/y70AA7b.png">#418</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    defaultExtraInfo: 'Popularity When Started: ',
    minigames: ['Plinko Tier 2'],
    validators: [validatePopularity(418, 'gt'), validateRuntime(16, 'gte')],
  },
  '61': {
    bbCode:
      '(61) Watch an anime with a popularity lower than [url=https://i.imgur.com/s8WrXx6.png][color=#9068D4][b]#1721[/b][/color][/url] (total duration must be at least 16 minutes)',
    description:
      '(61) Watch an anime with a popularity lower than <a href="https://i.imgur.com/s8WrXx6.png">#1721</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    defaultExtraInfo: 'Popularity When Started: ',
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [validatePopularity(1721, 'gt'), validateRuntime(16, 'gte')],
  },
  '62': {
    bbCode:
      '(62) Watch an anime with a popularity lower than [url=https://i.imgur.com/E0ei7CX.png][color=#9068D4][b]#4240[/b][/color][/url] (total duration must be at least 16 minutes)',
    description:
      '(62) Watch an anime with a popularity lower than <a href="https://i.imgur.com/E0ei7CX.png">#4240</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    defaultExtraInfo: 'Popularity When Started: ',
    minigames: ['Duck Pond'],
    validators: [validatePopularity(4240, 'gt'), validateRuntime(16, 'gte')],
  },
  '63': {
    bbCode:
      '(63) Watch an anime with a score of 8.22 or above (anime must finish airing before you start it)',
    description:
      '(63) Watch an anime with a score of 8.22 or above (anime must finish airing before you start it)',
    addlInfo: [],
    minigames: ['Whack-a-Mole E'],
    validators: [validateScore(8.22, 'gte'), validateFinishedAiring()],
  },
  '64': {
    bbCode:
      '(64) Watch an anime with a score of 6.23 or below (anime must finish airing before you start it)',
    description:
      '(64) Watch an anime with a score of 6.23 or below (anime must finish airing before you start it)',
    addlInfo: [],
    minigames: ['Tarot Route 2', 'Tarot Route 3.1', 'Tarot Route 3.2'],
    validators: [validateScore(6.23, 'lte'), validateFinishedAiring()],
  },
  '65': {
    bbCode:
      '(65) Watch an anime tagged with either [url=https://anidb.net/tag/1528/animetb/?cat.minweight=0&h=1&noalias=1&orderby.name=0.1&view=list][color=#4BB1DF][b]Artificial Intelligence[/b][/color][/url] or [url=https://anidb.net/tag/1528/animetb/?cat.minweight=0&h=1&noalias=1&orderby.name=0.1&view=list][color=#4BB1DF][b]Android[/b][/color][/url] on [url=https://anidb.net/][color=#4BB1DF][b]AniDB[/b][/color][/url]',
    description:
      '(65) Watch an anime tagged with either <a href="https://anidb.net/tag/1528/animetb/?cat.minweight=0&h=1&noalias=1&orderby.name=0.1&view=list">Artificial Intelligence</a> or <a href="https://anidb.net/tag/1528/animetb/?cat.minweight=0&h=1&noalias=1&orderby.name=0.1&view=list">Android</a> on <a href="https://anidb.net/">AniDB</a>',
    addlInfo: [],
    defaultExtraInfo: 'List Used: ',
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [],
  },
  '66': {
    bbCode:
      '(66) Watch an anime that has a main character tagged with [url=https://www.anime-planet.com/characters/all?role_id=1&include_tags=354][color=#4BB1DF][b]Hot-Headed[/b][/color][/url] or [url=https://www.anime-planet.com/characters/all?role_id=1&include_tags=428][color=#4BB1DF][b]Selfish[/b][/color][/url] on Anime Planet (character must be listed on MAL)',
    description:
      '(66) Watch an anime that has a main character tagged with <a href="https://www.anime-planet.com/characters/all?role_id=1&include_tags=354">Hot-Headed</a> or <a href="https://www.anime-planet.com/characters/all?role_id=1&include_tags=428">Selfish</a> on Anime Planet (character must be listed on MAL)',
    addlInfo: [],
    defaultExtraInfo: 'Main Character: | List Used: ',
    minigames: ['Plinko Tier 2'],
    validators: [],
  },
  '67': {
    bbCode:
      '(67) Watch an anime that has an [url=https://www.anime-planet.com/characters/tags/inanimate-objects][color=#4BB1DF][b]Inanimate Object[/b][/color][/url] as a character',
    description:
      '(67) Watch an anime that has an <a href="https://www.anime-planet.com/characters/tags/inanimate-objects">Inanimate Object</a> as a character',
    addlInfo: [],
    minigames: ['Tarot Route 2.2', 'Tarot Route 3.1', 'Tarot Route 3.2'],
    validators: [],
  },
  '68': {
    bbCode:
      '(68) Watch an anime that has a main character with majority [url=https://i.imgur.com/WnQAsfu.png][color=#9068D4][b]blue, green, pink, or purple[/b][/color][/url] [url=https://anidb.net/tag/12/chartb][color=#4BB1DF][b]hair color[/b][/color][/url] (just streaks of these colors do not count)',
    description:
      '(68) Watch an anime that has a main character with majority <a href="https://i.imgur.com/WnQAsfu.png">blue, green, pink, or purple</a> <a href="https://anidb.net/tag/12/chartb">hair color</a> (just streaks of these colors do not count)',
    addlInfo: [
      "- The character's hair must be mostly one or several of the listed colors; just streaks of them will not be valid",
      '- The character can have a combination of the listed hair colors, as long as the listed hair colors make up the majority of their hair',
    ],
    defaultExtraInfo: 'Main Character: ',
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [],
  },
  '69': {
    bbCode:
      '(69) Watch an anime with a [url=https://myanimelist.net/character.php?q=narrator&cat=character][color=#4BB1DF][b]Narrator[/b][/color][/url] or [url=https://myanimelist.net/character.php?cat=character&q=narration][color=#4BB1DF][b]Narration[/b][/color][/url] character listed on the Characters and Staff page',
    description:
      '(69) Watch an anime with a <a href="https://myanimelist.net/character.php?q=narrator&cat=character">Narrator</a> or <a href="https://myanimelist.net/character.php?cat=character&q=narration">Narration</a> character listed on the Characters and Staff page',
    addlInfo: [],
    minigames: ['Bingo 21A'],
    validators: [],
  },
  '70': {
    bbCode:
      '(70) Watch an anime with 3 or more main characters that are of the same gender',
    description:
      '(70) Watch an anime with 3 or more main characters that are of the same gender',
    addlInfo: [],
    minigames: ['Darts'],
    validators: [],
  },
  '71': {
    bbCode:
      '(71) Watch an anime that only has one main character listed on MAL (can have any number of supporting characters)',
    description:
      '(71) Watch an anime that only has one main character listed on MAL (can have any number of supporting characters)',
    addlInfo: [],
    minigames: ['Bingo 21A'],
    validators: [validateMainCharacterCountEquals(1)],
  },
  '72': {
    bbCode:
      '(72) Watch an anime with 8 or more main characters listed on MAL (can have any number of supporting characters)',
    description:
      '(72) Watch an anime with 8 or more main characters listed on MAL (can have any number of supporting characters)',
    addlInfo: [],
    minigames: ['Whack-a-Mole E'],
    validators: [validateMainCharacterCountAtLeast(8)],
  },
  '73': {
    bbCode:
      '(73) Watch an anime that has more main characters than supporting characters',
    description:
      '(73) Watch an anime that has more main characters than supporting characters',
    addlInfo: [],
    defaultExtraInfo: '# of Mains: | # of Supporting: ',
    minigames: ['Duck Pond'],
    validators: [validateMoreMainThanSupporting()],
  },
  '74': {
    bbCode:
      '(74) Watch an anime where the same Voice Actor is credited under at least [url=https://i.imgur.com/NNc2N03.png][color=#9068D4][b]two different characters[/b][/color][/url] (main or supporting)',
    description:
      '(74) Watch an anime where the same Voice Actor is credited under at least <a href="https://i.imgur.com/NNc2N03.png">two different characters</a> (main or supporting)',
    addlInfo: [
      "- The voice actor/actress must be listed on the anime's Characters and Staff page next to both characters",
    ],
    defaultExtraInfo: 'Voice Actor: | Character 1: | Character 2: ',
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [],
  },
  '75': {
    bbCode:
      '(75) Watch a [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Time/Morning%20(0600%20-%201159%20JST).txt][color=#4BB1DF][b]morning[/b][/color][/url] anime (broadcast between [url=https://i.imgur.com/441NNyN.png][color=#9068D4][b]6:00 and 11:59[/b][/color][/url] JST)',
    description:
      '(75) Watch a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Time/Morning%20(0600%20-%201159%20JST).txt">morning</a> anime (broadcast between <a href="https://i.imgur.com/441NNyN.png">6:00 and 11:59</a> JST)',
    addlInfo: [],
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [validateAirTime(['06', '07', '08', '09', '10', '11'])],
  },
  '76': {
    bbCode:
      '(76) Watch an [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Time/Afternoon-Evening%20(1700%20-%202259%20JST).txt][color=#4BB1DF][b]afternoon/evening[/b][/color][/url] anime (broadcast between [url=https://i.imgur.com/SSUQk90.png][color=#9068D4][b]17:00 and 22:59[/b][/color][/url] JST)',
    description:
      '(76) Watch an <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Time/Afternoon-Evening%20(1700%20-%202259%20JST).txt">afternoon/evening</a> anime (broadcast between <a href="https://i.imgur.com/SSUQk90.png">17:00 and 22:59</a> JST)',
    addlInfo: [],
    minigames: ['Tarot Route 2.1', 'Tarot Route 2.2'],
    validators: [validateAirTime(['17', '18', '19', '20', '21', '22'])],
  },
  '77': {
    bbCode:
      '(77) Watch a [url=https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Time/Late%20night%20(2300%20-%200359%20JST).txt][color=#4BB1DF][b]late night[/b][/color][/url] anime (broadcast between [url=https://i.imgur.com/SGi8Z6g.png][color=#9068D4][b]23:00 and 03:59[/b][/color][/url] JST)',
    description:
      '(77) Watch a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Broadcast/Time/Late%20night%20(2300%20-%200359%20JST).txt">late night</a> anime (broadcast between <a href="https://i.imgur.com/SGi8Z6g.png">23:00 and 03:59</a> JST)',
    addlInfo: [],
    minigames: ['Plinko Tier 1'],
    validators: [validateAirTime(['23', '00', '01', '02', '03'])],
  },
  '78': {
    bbCode:
      '(78) Watch a listed [url=https://myanimelist.net/stacks/26][color=#4BB1DF][b]Anime no Me[/b][/color][/url], [url=https://myanimelist.net/stacks/78][color=#4BB1DF][b]Nichigo[/b][/color][/url], or [url=https://myanimelist.net/stacks/5][color=#4BB1DF][b]noitaminA[/b][/color][/url] anime',
    description:
      '(78) Watch a listed <a href="https://myanimelist.net/stacks/26">Anime no Me</a>, <a href="https://myanimelist.net/stacks/78">Nichigo</a>, or <a href="https://myanimelist.net/stacks/5">noitaminA</a> anime',
    addlInfo: [],
    defaultExtraInfo: 'List Used: ',
    minigames: ['Bingo 21B'],
    validators: [validateStack(STACK_78)],
  },
  '79': {
    bbCode:
      '(79) Watch a listed [url=https://myanimelist.net/stacks/45][color=#4BB1DF][b]Animeism[/b][/color][/url], [url=https://myanimelist.net/stacks/7][color=#4BB1DF][b]NUMAnimation[/b][/color][/url] or [url=https://myanimelist.net/stacks/46][color=#4BB1DF][b]TBS Wonderful[/b][/color][/url] anime',
    description:
      '(79) Watch a listed <a href="https://myanimelist.net/stacks/45">Animeism</a>, <a href="https://myanimelist.net/stacks/7">NUMAnimation</a> or <a href="https://myanimelist.net/stacks/46">TBS Wonderful</a> anime',
    addlInfo: [],
    defaultExtraInfo: 'List Used: ',
    minigames: ['Duck Pond'],
    validators: [validateStack(STACK_79)],
  },
  '80': {
    bbCode:
      '(80) Watch a listed [url=https://myanimelist.net/stacks/27][color=#4BB1DF][b]Anisata[/b][/color][/url], [url=https://myanimelist.net/stacks/20][color=#4BB1DF][b]AnichU[/b][/color][/url], [url=https://myanimelist.net/stacks/79][color=#4BB1DF][b]Doroku[/b][/color][/url], [url=https://myanimelist.net/stacks/47][color=#4BB1DF][b]Ultra Super Anime Time[/b][/color][/url], or [url=https://myanimelist.net/stacks/3][color=#4BB1DF][b]+Ultra[/b][/color][/url] anime',
    description:
      '(80) Watch a listed <a href="https://myanimelist.net/stacks/27">Anisata</a>, <a href="https://myanimelist.net/stacks/20">AnichU</a>, <a href="https://myanimelist.net/stacks/79">Doroku</a>, <a href="https://myanimelist.net/stacks/47">Ultra Super Anime Time</a>, or <a href="https://myanimelist.net/stacks/3">+Ultra</a> anime',
    addlInfo: [],
    defaultExtraInfo: 'List Used: ',
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [validateStack(STACK_80)],
  },
  '81': {
    bbCode: `(81) Watch an anime by a studio with less than 35 anime in MAL's database`,
    description:
      "(81) Watch an anime by a studio with less than 35 anime in MAL's database",
    addlInfo: [
      '- If there are multiple studios listed, only one of them needs to be valid',
    ],
    defaultExtraInfo: 'Studio: ',
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [],
  },
  '82': {
    bbCode: `(82) Watch an anime by a studio you haven't seen anything from (studio cannot be listed as producer)`,
    description:
      "(82) Watch an anime by a studio you haven't seen anything from (studio cannot be listed as producer)",
    addlInfo: [
      '- If you have an anime from the chosen studio on your Completed/Watching/On Hold/Dropped list, you <em>cannot</em> use that studio',
      '- If there are multiple studios listed, only one of them needs to be valid',
    ],
    defaultExtraInfo: 'Studio: ',
    minigames: ['Whack-a-Mole B'],
    validators: [],
  },
  '83': {
    bbCode: `(83) Watch an anime listed on a 2025 AWC participant's [url=https://anime.plus][color=#4BB1DF][b]Anime+[/b][/color][/url] recommendations and provide a screenshot that includes their username`,
    description: `(83) Watch an anime listed on a 2025 AWC participant's <a href="https://anime.plus">Anime+</a> recommendations and provide a screenshot that includes their username`,
    addlInfo: [],
    defaultExtraInfo: 'AWC Participant: | Post Link: | Screenshot: ',
    minigames: ['Whack-a-Mole B'],
    validators: [],
  },
  '84': {
    bbCode:
      '(84) Watch an anime suggested to you by [b]MAL[/b] or by [url=https://anime.plus][color=#4BB1DF][b]Anime+[/b][/color][/url] and provide a [url=https://myanimelist.net/forum/?goto=post&topicid=1869539&id=68336127][color=#4BB1DF][b]screenshot[/b][/color][/url] including your username',
    description:
      '(84) Watch an anime suggested to you by <a href="https://myanimelist.net/anime.php">MAL</a> or by <a href="https://anime.plus">Anime+</a> and provide a <a href="https://myanimelist.net/forum/?goto=post&topicid=1869539&id=68336127">screenshot</a> including your username',
    addlInfo: [],
    defaultExtraInfo: 'Screenshot: ',
    minigames: ['Darts'],
    validators: [],
  },
  '85': {
    bbCode:
      '(85) Watch an anime from your most watched studio [url=https://i.imgur.com/5AwczTi.png][color=#9068D4][b]sorted by time[/b][/color][/url] on [url=https://anime.plus/][color=#4BB1DF][b]Anime+[/b][/color][/url] that has a MAL rating of less than 8.0 (screenshot must show username)',
    description:
      '(85) Watch an anime from your most watched studio <a href="https://i.imgur.com/5AwczTi.png">sorted by time</a> on <a href="https://anime.plus/">Anime+</a> that has a MAL rating of less than 8.0 (screenshot must show username)',
    addlInfo: [
      '- On Anime+ under Anime Favorites, sort Favorite Studios by Time, from highest to lowest',
      '- The studio must be listed as the <em>studio</em> not the producer',
      '- Anime can have two or more studios listed as long as one of them is your most watched',
    ],
    defaultExtraInfo:
      'Most Watched Studio By Time: | Anime Rating: | Anime+ Screenshot: ',
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [],
  },
  '86': {
    bbCode:
      '(86) Watch an anime tagged with your lowest scored genre/theme/demographic sorted by [url=https://i.imgur.com/pxvV3w2.png][color=#9068D4][b]Mean[/b][/color][/url] according to [url=https://anime.plus/][color=#4BB1DF][b]Anime+[/b][/color][/url] (screenshot must show username)',
    description:
      '(86) Watch an anime tagged with your lowest scored genre/theme/demographic sorted by <a href="https://i.imgur.com/pxvV3w2.png">Mean</a> according to <a href="https://anime.plus/">Anime+</a> (screenshot must show username)',
    addlInfo: [
      '- On Anime+ under Anime Favorites, sort Favorite Genres by Mean watched (the "M" column), from lowest to highest',
      '- Hentai and Erotica CAN be skipped, but make note of it',
    ],
    defaultExtraInfo: 'Lowest Scored by Mean: | Screenshot: ',
    minigames: ['Whack-a-Mole B'],
    validators: [],
  },
  '87': {
    bbCode:
      '(87) Watch an anime [url=https://i.imgur.com/JSiadIO.png][color=#9068D4][b]Recommended[/b][/color][/url] to one of the Anime listed in your MAL Favorites (favorite anime must have been completed before item is started)',
    description:
      '(87) Watch an anime <a href="https://i.imgur.com/JSiadIO.png">Recommended</a> to one of the Anime listed in your MAL Favorites (favorite anime must have been completed before item is started)',
    addlInfo: [],
    defaultExtraInfo: 'Favorite Anime: ',
    minigames: ['Darts'],
    validators: [],
  },
  '88': {
    bbCode:
      '(88) Watch an anime in which one of the [url=https://i.imgur.com/pSal4Hc.png][color=#9068D4][b]People[/b][/color][/url] listed in your MAL Favorites participated',
    description:
      '(88) Watch an anime in which one of the <a href="https://i.imgur.com/pSal4Hc.png">People</a> listed in your MAL Favorites participated',
    addlInfo: [
      '- Person must be listed on your profile under People; they can be a voice actor/actress, director, original creator, musical artist, etc.',
    ],
    defaultExtraInfo: 'Favorite Person: ',
    minigames: ['Plinko Tier 1'],
    validators: [],
  },
  '89': {
    bbCode:
      '(89) Finish an anime that you watched at least one episode of and [url=https://i.imgur.com/saKdbmU.png][color=#9068D4][b]dropped/put on hold[/b][/color][/url] September 30, 2024 or earlier (Alternatively: watch something from the listed provided by the [url=https://myanimelist.net/forum/?goto=post&topicid=1867298&id=68342156][color=#4BB1DF][b]AWCC/MRCC Staff[/b][/color][/url])',
    description:
      '(89) Finish an anime that you watched at least one episode of and <a href="https://i.imgur.com/saKdbmU.png">dropped/put on hold</a> September 30, 2024 or earlier (Alternatively: watch something from the listed provided by the <a href="https://myanimelist.net/forum/?goto=post&topicid=1867298&id=68342156">AWCC/MRCC Staff</a>)',
    addlInfo: [
      '- The anime needs to have more than one episode and you must have watched at least one episode previously',
    ],
    defaultExtraInfo:
      'Original Anime Start Date:  | Last Watched Episode Date:  | Episodes Previously Watched:  | Screenshot: ',
    minigames: ['Bingo 17B'],
    validators: [],
  },
  '90': {
    bbCode:
      '(90) Watch an anime that has no Opening Theme and no Ending Theme listed (anime must have finished airing before you started it)',
    description:
      '(90) Watch an anime that has no Opening Theme and no Ending Theme listed (anime must have finished airing before you started it)',
    addlInfo: [
      '- The anime cannot have an Opening Theme and it <u>also</u> cannot have an Ending Theme',
    ],
    minigames: ['Tarot Route 2.2', 'Tarot Route 3.2'],
    validators: [validateSongCountEquals(0, 0), validateFinishedAiring()],
  },
  '91': {
    bbCode:
      '(91) Watch an anime that has only one Opening Theme and one Ending Theme listed (anime must have at least 20 episodes)',
    description:
      '(91) Watch an anime that has only one Opening Theme and one Ending Theme listed (anime must have at least 20 episodes)',
    addlInfo: [
      '- Cannot have 1 OP and 0 ED; cannot have 0 OP and 1 ED; must have <em>exactly</em> one of each',
    ],
    minigames: ['Bingo 21B'],
    validators: [
      validateSongCountEquals(1, 1),
      validateEpisodeCount(20, 'gte'),
    ],
  },
  '92': {
    bbCode:
      '(92) Watch an anime with either 5 or more [url=https://i.imgur.com/cUWrDzH.png][color=#9068D4][b]Opening Themes[/b][/color][/url] listed or 5 or more [url=https://i.imgur.com/Q8YLfHS.png][color=#9068D4][b]Ending Themes[/b][/color][/url] listed',
    description:
      '(92) Watch an anime with either 5 or more <a href="https://i.imgur.com/cUWrDzH.png">Opening Themes</a> listed or 5 or more <a href="https://i.imgur.com/Q8YLfHS.png">Ending Themes</a> listed',
    addlInfo: [
      '- It must at least 5 Opening Theme songs <em>or</em> at least 5 Ending Theme songs',
      "- Example: 2 OP and 5 ED, 6 OP and 1 ED, 5 OP and 5 ED; it can't be 2 OP and 3 ED",
    ],
    minigames: ['Bingo 21A'],
    validators: [validateSongCountAtLeast(5, 5)],
  },
  '93': {
    bbCode:
      '(93) Watch an anime in which 2 or more Opening Theme (OP) and/or Ending Theme (ED) are performed by the same [url=https://i.imgur.com/C7WTQNA.png][color=#9068D4][b]Artist/Group[/b][/color][/url] (must be two different songs)',
    description:
      '(93) Watch an anime in which 2 or more Opening Theme (OP) and/or Ending Theme (ED) are performed by the same <a href="https://i.imgur.com/C7WTQNA.png">Artist/Group</a> (must be two different songs)',
    addlInfo: [
      '- Must be <u>two different songs</u>; can be 2 OP, 2 ED, 1 OP+1 ED, etc.',
      '- The artist/group can collaborate with others; for example: in Cowboy Bebop The Seatbelts are credited for the OP "Tank!" and ED #1 "The Real Folk Blues" featuring Mai Yamane',
    ],
    defaultExtraInfo: 'Artist/Group: ',
    minigames: ['Tarot Route 2.1', 'Tarot Route 3.1', 'Tarot Route 3.2'],
    validators: [],
  },
  '94': {
    bbCode:
      '(94) Watch an anime featuring a Voice Actor (main or supporting character) who is also credited with a [url=https://i.imgur.com/1Imalpv.png][color=#9068D4][b]Theme/Insert Song Performance[/b][/color][/url] in the anime',
    description:
      '(94) Watch an anime featuring a Voice Actor (main or supporting character) who is also credited with a <a href="https://i.imgur.com/1Imalpv.png">Theme/Insert Song Performance</a> in the anime',
    addlInfo: [
      "- If the voice actor/actress is credited under their band's name it will not be valid; for example: Kishou Taniyama must be credited with a Theme/Insert Song Performance in the anime instead of GRANRODEO",
    ],
    defaultExtraInfo: 'Voice Actor: ',
    minigames: ['Plinko Tier 3'],
    validators: [],
  },
  '95': {
    bbCode:
      '(95) Watch an anime tagged with [b]Kids[/b] (total duration must be at least 16 minutes)',
    description:
      '(95) Watch an anime tagged with <a href="https://myanimelist.net/anime/genre/15">Kids</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [validateRuntime(16, 'gte'), validateTags(['Kids'], 1)],
  },
  '96': {
    bbCode: '(96) Watch an anime tagged with [b]Music[/b]',
    description:
      '(96) Watch an anime tagged with <a href="https://myanimelist.net/anime/genre/19">Music</a>',
    addlInfo: [],
    minigames: ['Darts'],
    validators: [validateTags(['Music'], 1)],
  },
  '97': {
    bbCode:
      '(97) Watch an anime tagged with [b]School[/b] (total duration must be at least 16 minutes)',
    description:
      '(97) Watch an anime tagged with <a href="https://myanimelist.net/anime/genre/23">School</a> (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Plinko Tier 1'],
    validators: [validateRuntime(16, 'gte'), validateTags(['School'], 1)],
  },
  '98': {
    bbCode:
      '(98) Watch an anime tagged with either [b]Adult Cast[/b] or [b]Supernatural[/b] (each episode must be at least 16 minutes)',
    description:
      '(98) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/50">Adult Cast</a> or <a href="https://myanimelist.net/anime/genre/37">Supernatural</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Adult Cast', 'Supernatural'], 1),
    ],
  },
  '99': {
    bbCode:
      '(99) Watch an anime tagged with either [b]Anthropomorphic[/b] or [b]Avant Garde[/b] (each episode must be at least 16 minutes)',
    description:
      '(99) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/51">Anthropomorphic</a> or <a href="https://myanimelist.net/anime/genre/5">Avant Garde</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Bingo 17A'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Anthropomorphic', 'Avant Garde'], 1),
    ],
  },
  '100': {
    bbCode:
      '(100) Watch an anime tagged with either [b]Historical[/b] or [b]Horror[/b] (each episode must be at least 16 minutes)',
    description:
      '(100) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/13">Historical</a> or <a href="https://myanimelist.net/anime/genre/14">Horror</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Tarot Route 2', 'Tarot Route 3'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Historical', 'Horror'], 1),
    ],
  },
  '101': {
    bbCode:
      '(101) Watch an anime tagged with either [b]Mecha[/b] or [b]Super Power[/b] (each episode must be at least 16 minutes)',
    description:
      '(101) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/18">Mecha</a> or <a href="https://myanimelist.net/anime/genre/31">Super Power</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Mecha', 'Super Power'], 1),
    ],
  },
  '102': {
    bbCode:
      '(102) Watch an anime tagged with either [b]Military[/b] or [b]Sports[/b] (each episode must be at least 16 minutes)',
    description:
      '(102) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/38">Military</a> or <a href="https://myanimelist.net/anime/genre/30">Sports</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Military', 'Sports'], 1),
    ],
  },
  '103': {
    bbCode:
      '(103) Watch an anime tagged with either [b]Mystery[/b] or [b]Parody[/b] (each episode must be at least 16 minutes)',
    description:
      '(103) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/7">Mystery</a> or <a href="https://myanimelist.net/anime/genre/20">Parody</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Tarot Route 1'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Mystery', 'Parody'], 1),
    ],
  },
  '104': {
    bbCode:
      '(104) Watch an anime tagged with either [b]Mythology[/b] or [b]Seinen[/b] (each episode must be at least 16 minutes)',
    description:
      '(104) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/6">Mythology</a> or <a href="https://myanimelist.net/anime/genre/42">Seinen</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Whack-a-Mole C'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Mythology', 'Seinen'], 1),
    ],
  },
  '105': {
    bbCode:
      '(105) Watch an anime tagged with either [b]Slice of Life[/b] or [b]Team Sports[/b] (each episode must be at least 16 minutes)',
    description:
      '(105) Watch an anime tagged with either <a href="https://myanimelist.net/anime/genre/36">Slice of Life</a> or <a href="https://myanimelist.net/anime/genre/77">Team Sports</a> (each episode must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Plinko Tier 2'],
    validators: [
      validateRuntime(16, 'gte'),
      validateTags(['Slice of Life', 'Team Sports'], 1),
    ],
  },
  '106': {
    bbCode:
      '(106) Watch an anime tagged with at least ONE of the following: [b]Ecchi[/b], [b]Erotica[/b], [b]Hentai[/b]',
    description:
      '(106) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/9">Ecchi</a>, <a href="https://myanimelist.net/anime/genre/49">Erotica</a>, <a href="https://myanimelist.net/anime/genre/12">Hentai</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Bingo 17A'],
    validators: [validateTags(['Ecchi', 'Erotica', 'Hentai'], 1)],
  },
  '107': {
    bbCode:
      '(107) Watch an anime tagged with at least ONE of the following: [b]Award Winning[/b], [b]Crossdressing[/b], [b]Gore[/b], [b]Samurai[/b]',
    description:
      '(107) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/46">Award Winning</a>, <a href="https://myanimelist.net/anime/genre/81">Crossdressing</a>, <a href="https://myanimelist.net/anime/genre/58">Gore</a>, <a href="https://myanimelist.net/anime/genre/21">Samurai</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Whack-a-Mole C'],
    validators: [
      validateTags(['Award Winning', 'Crossdressing', 'Gore', 'Samurai'], 1),
    ],
  },
  '108': {
    bbCode:
      '(108) Watch an anime tagged with at least ONE of the following: [b]CGDCT[/b], [b]Medical[/b], [b]Racing[/b], [b]Strategy Game[/b]',
    description:
      '(108) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/52">CGDCT</a>, <a href="https://myanimelist.net/anime/genre/67">Medical</a>, <a href="https://myanimelist.net/anime/genre/3">Racing</a>, <a href="https://myanimelist.net/anime/genre/11">Strategy Game</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Plinko Tier 3'],
    validators: [
      validateTags(['CGDCT', 'Medical', 'Racing', 'Strategy Game'], 1),
    ],
  },
  '109': {
    bbCode:
      '(109) Watch an anime tagged with at least ONE of the following: [b]Boys Love[/b],  [b]Iyashikei[/b], [b]Mahou Shoujo[/b], [b]Urban Fantasy[/b]',
    description:
      '(109) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/28">Boys Love</a>,  <a href="https://myanimelist.net/anime/genre/63">Iyashikei</a>, <a href="https://myanimelist.net/anime/genre/66">Mahou Shoujo</a>, <a href="https://myanimelist.net/anime/genre/82">Urban Fantasy</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Bingo 17A'],
    validators: [
      validateTags(
        ['Boys Love', 'Iyashikei', 'Mahou Shoujo', 'Urban Fantasy'],
        1
      ),
    ],
  },
  '110': {
    bbCode:
      '(110) Watch an anime tagged with at least ONE of the following: [b]Childcare[/b], [b]Gag Humor[/b], [b]Magical Sex Shift[/b], [b]Shoujo[/b]',
    description:
      '(110) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/53">Childcare</a>, <a href="https://myanimelist.net/anime/genre/57">Gag Humor</a>, <a href="https://myanimelist.net/anime/genre/65">Magical Sex Shift</a>, <a href="https://myanimelist.net/anime/genre/25">Shoujo</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Tarot Route 2', 'Tarot Route 3'],
    validators: [
      validateTags(
        ['Childcare', 'Gag Humor', 'Magical Sex Shift', 'Shoujo'],
        1
      ),
    ],
  },
  '111': {
    bbCode:
      '(111) Watch an anime tagged with at least ONE of the following: [b]Combat Sports[/b], [b]Idols (Male)[/b], [b]Psychological[/b], [b]Video Game[/b]',
    description:
      '(111) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/54">Combat Sports</a>, <a href="https://myanimelist.net/anime/genre/61">Idols (Male)</a>, <a href="https://myanimelist.net/anime/genre/40">Psychological</a>, <a href="https://myanimelist.net/anime/genre/79">Video Game</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Duck Pond'],
    validators: [
      validateTags(
        ['Combat Sports', 'Idols (Male)', 'Psychological', 'Video Game'],
        1
      ),
    ],
  },
  '112': {
    bbCode:
      '(112) Watch an anime tagged with at least ONE of the following: [b]Delinquents[/b], [b]Otaku Culture[/b], [b]Space[/b], [b]Villainess[/b]',
    description:
      '(112) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/55">Delinquents</a>, <a href="https://myanimelist.net/anime/genre/69">Otaku Culture</a>, <a href="https://myanimelist.net/anime/genre/29">Space</a>, <a href="https://myanimelist.net/anime/genre/83">Villainess</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Whack-a-Mole C'],
    validators: [
      validateTags(['Delinquents', 'Otaku Culture', 'Space', 'Villainess'], 1),
    ],
  },
  '113': {
    bbCode:
      '(113) Watch an anime tagged with at least ONE of the following: [b]Detective[/b], [b]Educational[/b], [b]Performing Arts[/b], [b]Reverse Harem[/b]',
    description:
      '(113) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/39">Detective</a>, <a href="https://myanimelist.net/anime/genre/56">Educational</a>, <a href="https://myanimelist.net/anime/genre/70">Performing Arts</a>, <a href="https://myanimelist.net/anime/genre/73">Reverse Harem</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Bingo 21B'],
    validators: [
      validateTags(
        ['Detective', 'Educational', 'Performing Arts', 'Reverse Harem'],
        1
      ),
    ],
  },
  '114': {
    bbCode:
      '(114) Watch an anime tagged with at least ONE of the following: [b]Girls Love[/b], [b]Love Polygon[/b], [b]Suspense[/b], [b]Vampire[/b]',
    description:
      '(114) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/26">Girls Love</a>, <a href="https://myanimelist.net/anime/genre/64">Love Polygon</a>, <a href="https://myanimelist.net/anime/genre/41">Suspense</a>, <a href="https://myanimelist.net/anime/genre/32">Vampire</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Whack-a-Mole C'],
    validators: [
      validateTags(['Girls Love', 'Love Polygon', 'Suspense', 'Vampire'], 1),
    ],
  },
  '115': {
    bbCode:
      '(115) Watch an anime tagged with at least ONE of the following: [b]Gourmet[/b], [b]Harem[/b], [b]Organized Crime[/b], [b]Showbiz[/b]',
    description:
      '(115) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/47">Gourmet</a>, <a href="https://myanimelist.net/anime/genre/35">Harem</a>, <a href="https://myanimelist.net/anime/genre/68">Organized Crime</a>,  <a href="https://myanimelist.net/anime/genre/75">Showbiz</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Plinko Tier 2'],
    validators: [
      validateTags(['Gourmet', 'Harem', 'Organized Crime', 'Showbiz'], 1),
    ],
  },
  '116': {
    bbCode:
      '(116) Watch an anime tagged with at least ONE of the following: [b]High Stakes Game[/b], [b]Love Status Quo[/b], [b]Martial Arts[/b], [b]Visual Arts[/b]',
    description:
      '(116) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/59">High Stakes Game</a>, <a href="https://myanimelist.net/anime/genre/74">Love Status Quo</a>, <a href="https://myanimelist.net/anime/genre/17">Martial Arts</a>, <a href="https://myanimelist.net/anime/genre/80">Visual Arts</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Duck Pond'],
    validators: [
      validateTags(
        ['High Stakes Game', 'Love Status Quo', 'Martial Arts', 'Visual Arts'],
        1
      ),
    ],
  },
  '117': {
    bbCode:
      '(117) Watch an anime tagged with at least ONE of the following: [b]Idols (Female)[/b], [b]Josei[/b], [b]Pets[/b], [b]Workplace[/b]',
    description:
      '(117) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/60">Idols (Female)</a>, <a href="https://myanimelist.net/anime/genre/43">Josei</a>, <a href="https://myanimelist.net/anime/genre/71">Pets</a>, <a href="https://myanimelist.net/anime/genre/48">Workplace</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With: ',
    minigames: ['Bingo 21A'],
    validators: [
      validateTags(['Idols (Female)', 'Josei', 'Pets', 'Workplace'], 1),
    ],
  },
  '118': {
    bbCode:
      '(118) Watch an anime tagged with at least ONE of the following: [b]Isekai[/b], [b]Reincarnation[/b], [b]Survival[/b], [b]Time Travel[/b]',
    description:
      '(118) Watch an anime tagged with at least ONE of the following: <a href="https://myanimelist.net/anime/genre/62">Isekai</a>, <a href="https://myanimelist.net/anime/genre/72">Reincarnation</a>, <a href="https://myanimelist.net/anime/genre/76">Survival</a>, <a href="https://myanimelist.net/anime/genre/78">Time Travel</a>',
    addlInfo: [],
    minigames: ['Tarot Route 1'],
    validators: [
      validateTags(['Isekai', 'Reincarnation', 'Survival', 'Time Travel'], 1),
    ],
  },
  '119': {
    bbCode:
      '(119) Watch an anime tagged with at least TWO of the following: [b]Action[/b], [b]Drama[/b], [b]Romance[/b], [b]Sci-Fi[/b]',
    description:
      '(119) Watch an anime tagged with at least TWO of the following: <a href="https://myanimelist.net/anime/genre/1">Action</a>, <a href="https://myanimelist.net/anime/genre/8">Drama</a>, <a href="https://myanimelist.net/anime/genre/22">Romance</a>, <a href="https://myanimelist.net/anime/genre/24">Sci-Fi</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With 1: | Tagged With 2: ',
    minigames: ['Tarot Route 2.1', 'Tarot Route 2.2', 'Tarot Route 3'],
    validators: [validateTags(['Action', 'Drama', 'Romance', 'Sci-Fi'], 2)],
  },
  '120': {
    bbCode:
      '(120) Watch an anime tagged with at least TWO of the following: [b]Adventure[/b], [b]Comedy[/b], [b]Fantasy[/b], [b]Shounen[/b]',
    description:
      '(120) Watch an anime tagged with at least TWO of the following: <a href="https://myanimelist.net/anime/genre/2">Adventure</a>, <a href="https://myanimelist.net/anime/genre/4">Comedy</a>, <a href="https://myanimelist.net/anime/genre/10">Fantasy</a>, <a href="https://myanimelist.net/anime/genre/27">Shounen</a>',
    addlInfo: [],
    defaultExtraInfo: 'Tagged With 1: | Tagged With 2: ',
    minigames: ['Bingo 21A', 'Bingo 21B'],
    validators: [
      validateTags(['Adventure', 'Comedy', 'Fantasy', 'Shounen'], 2),
    ],
  },
  '121': {
    bbCode:
      '(121) Watch an anime with a total duration of 16 minutes or more and tagged with 1 Genre or less (Themes/Demographics do not count)',
    description:
      '(121) Watch an anime with a total duration of 16 minutes or more and tagged with 1 Genre or less (Themes/Demographics do not count)',
    addlInfo: [],
    minigames: ['Whack-a-Mole C'],
    validators: [validateRuntime(16, 'gte'), validateGenreCount(1, 'lte')],
  },
  '122': {
    bbCode:
      '(122) Watch an anime with a total duration of 16 minutes or more and tagged with 3 Genres or more (Themes/Demographics do not count)',
    description:
      '(122) Watch an anime with a total duration of 16 minutes or more and tagged with 3 Genres or more (Themes/Demographics do not count)',
    addlInfo: [],
    minigames: ['Bingo 17A', 'Bingo 17B'],
    validators: [validateRuntime(16, 'gte'), validateGenreCount(3, 'gte')],
  },
  '123': {
    bbCode:
      '(123) Watch an anime rated [url=https://i.imgur.com/d3NpdjE.png][color=#9068D4][b]G - All Ages or PG - Children[/b][/color][/url]',
    description:
      '(123) Watch an anime rated <a href="https://i.imgur.com/d3NpdjE.png">G - All Ages or PG - Children</a>',
    addlInfo: ['- Does NOT include anime rated PG-13 - Teens 13 or Older'],
    minigames: ['Duck Pond'],
    validators: [
      validateRuntime(16, 'gte'),
      validateRating(['G - All Ages', 'PG - Children']),
    ],
  },
  '124': {
    bbCode:
      '(124) Watch an anime rated [url=https://i.imgur.com/CtXjsQU.png][color=#9068D4][b]PG-13 - Teens 13 or older[/b][/color][/url] (total duration must be at least 16 minutes)',
    description:
      '(124) Watch an anime rated <a href="https://i.imgur.com/CtXjsQU.png">PG-13 - Teens 13 or older</a> (total duration must be at least 16 minutes)',
    addlInfo: ['- Does NOT include anime rated PG - Children'],
    minigames: ['Plinko Tier 3'],
    validators: [
      validateRuntime(16, 'gte'),
      validateRating(['PG-13 - Teens 13 or older']),
    ],
  },
  '125': {
    bbCode:
      '(125) Watch an anime rated [url=https://i.imgur.com/SAMWoRq.png][color=#9068D4][b]R -17+ or R+ - Mild Nudity[/b][/color][/url] (total duration must be at least 16 minutes)',
    description:
      '(125) Watch an anime rated <a href="https://i.imgur.com/SAMWoRq.png">R -17+ or R+ - Mild Nudity</a> (total duration must be at least 16 minutes)',
    addlInfo: ['- Does NOT include anime rated Rx - Hentai'],
    minigames: ['Whack-a-Mole E'],
    validators: [
      validateRuntime(16, 'gte'),
      validateRating(['R - 17+ (violence & profanity)', 'R+ - Mild Nudity']),
    ],
  },
  '126': {
    bbCode:
      '(126) Watch an anime adapted from a [b]Manga[/b] Source (total duration must be at least 16 minutes)',
    description:
      '(126) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Manga.txt">Manga</a> Source (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Plinko Tier 1'],
    validators: [validateRuntime(16, 'gte'), validateSource(['Manga'])],
  },
  '127': {
    bbCode:
      '(127) Watch an anime adapted from an [b]Original[/b] Source (total duration must be at least 16 minutes)',
    description:
      '(127) Watch an anime adapted from an <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Original.txt">Original</a> Source (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Darts'],
    validators: [validateRuntime(16, 'gte'), validateSource(['Original'])],
  },
  '128': {
    bbCode:
      '(128) Watch an anime adapted from an [b]Unknown[/b] Source (total duration must be at least 16 minutes)',
    description:
      '(128) Watch an anime adapted from an <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Unknown.txt">Unknown</a> Source (total duration must be at least 16 minutes)',
    addlInfo: [],
    minigames: ['Tarot Route 3'],
    validators: [validateRuntime(16, 'gte'), validateSource(['Unknown'])],
  },
  '129': {
    bbCode:
      '(129) Watch an anime adapted from a [b]4-koma Manga[/b] or [b]Music[/b] Source',
    description:
      '(129) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/4-koma%20Manga.txt">4-koma Manga</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Music.txt">Music</a> Source',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [validateSource(['4-koma Manga', 'Music'])],
  },
  '130': {
    bbCode:
      '(130) Watch an anime adapted from a [b]Book[/b] or [b]Light Novel[/b] Source',
    description:
      '(130) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Book.txt">Book</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Light%20Novel.txt">Light Novel</a> Source',
    addlInfo: [],
    minigames: ['Duck Pond'],
    validators: [validateSource(['Book', 'Light Novel'])],
  },
  '131': {
    bbCode:
      '(131) Watch an anime adapted from a [b]Card Game[/b] or [b]Other[/b] Source',
    description:
      '(131) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Card%20Game.txt">Card Game</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Other.txt">Other</a> Source',
    addlInfo: [],
    minigames: ['Bingo 17B'],
    validators: [validateSource(['Card Game', 'Other'])],
  },
  '132': {
    bbCode:
      '(132) Watch an anime adapted from a [b]Game[/b] or [b]Radio[/b] Source',
    description:
      '(132) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Game.txt">Game</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Radio.txt">Radio</a> Source',
    addlInfo: [],
    minigames: ['Bingo 21B'],
    validators: [validateSource(['Game', 'Radio'])],
  },
  '133': {
    bbCode:
      '(133) Watch an anime adapted from a [b]Mixed Media[/b] or [b]Web Manga[/b] Source',
    description:
      '(133) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Mixed%20Media.txt">Mixed Media</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Web%20Manga.txt">Web Manga</a> Source',
    addlInfo: [],
    minigames: ['Bingo 17A'],
    validators: [validateSource(['Mixed Media', 'Web Manga'])],
  },
  '134': {
    bbCode:
      '(134) Watch an anime adapted from a [b]Novel[/b] or [b]Picture Book[/b] Source',
    description:
      '(134) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Novel.txt">Novel</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Picture%20Book.txt">Picture Book</a> Source',
    addlInfo: [],
    minigames: ['Tarot Route 2.1'],
    validators: [validateSource(['Novel', 'Picture Book'])],
  },
  '135': {
    bbCode:
      '(135) Watch an anime adapted from a [b]Visual Novel[/b] or [b]Web Novel[/b] Source',
    description:
      '(135) Watch an anime adapted from a <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Visual%20Novel.txt">Visual Novel</a> or <a href="https://github.com/nyomdalee/awc-helper-txt/blob/master/Anime%20by%20Source/Web%20Novel.txt">Web Novel</a> Source',
    addlInfo: [],
    minigames: ['Bingo 21A'],
    validators: [validateSource(['Visual Novel', 'Web Novel'])],
  },
};

export function generateChallengeData() {
  const data: ChallengeData = {};
  for (const [id, value] of Object.entries(CHALLENGE_LIST)) {
    data[id] = {
      id,
      malId: '',
      startDate: '',
      endDate: '',
      extraInfo: value.defaultExtraInfo ?? '',
      minigames: value.minigames,
      validationStatus: {
        valid: false,
        success: [],
        error: [],
      },
    };
  }
  return data;
}

export function getEnabledMinigames(minigames: ConfigData['minigames']) {
  function whackamoleQuestEnabled(quest: string) {
    return (
      minigames.whackamole1 === quest ||
      minigames.whackamole2 === quest ||
      minigames.whackamole3 === quest
    );
  }

  return {
    Darts: minigames.darts,
    'Bingo 17A': minigames.bingo && minigames.bingo17 === '17A',
    'Bingo 17B': minigames.bingo && minigames.bingo17 === '17B',
    'Bingo 21A': minigames.bingo && minigames.bingo21 === '21A',
    'Bingo 21B': minigames.bingo && minigames.bingo21 === '21B',
    'Plinko Tier 1': minigames.plinko,
    'Plinko Tier 2': minigames.plinko,
    'Plinko Tier 3': minigames.plinko,
    'Whack-a-Mole A': minigames.whackamole && whackamoleQuestEnabled('A'),
    'Whack-a-Mole B': minigames.whackamole && whackamoleQuestEnabled('B'),
    'Whack-a-Mole C': minigames.whackamole && whackamoleQuestEnabled('C'),
    'Whack-a-Mole D': minigames.whackamole && whackamoleQuestEnabled('D'),
    'Whack-a-Mole E': minigames.whackamole && whackamoleQuestEnabled('E'),
    'Tarot Route 1': minigames.tarot,
    'Tarot Route 2':
      minigames.tarot &&
      (minigames.tarotEnding === '2.1' || minigames.tarotEnding === '2.2'),
    'Tarot Route 3':
      minigames.tarot &&
      (minigames.tarotEnding === '3.1' || minigames.tarotEnding === '3.2'),
    'Tarot Route 2.1': minigames.tarot && minigames.tarotEnding === '2.1',
    'Tarot Route 2.2': minigames.tarot && minigames.tarotEnding === '2.2',
    'Tarot Route 3.1': minigames.tarot && minigames.tarotEnding === '3.1',
    'Tarot Route 3.2': minigames.tarot && minigames.tarotEnding === '3.2',
    'Duck Pond': minigames.duckpond,
  };
}
