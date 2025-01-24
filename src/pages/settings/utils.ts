import { AnimeData, AnimeDetails } from '../../types';
import { ChallengeData, ChallengeEntry } from '../challenges/types';
import { ConfigData } from '../config/types';
import get from 'lodash/get';
import { signupText } from './data/signup';
import { dartsText } from './data/darts';
import { bingoText } from './data/bingo';
import { plinkoText } from './data/plinko';
import { whackamoleText } from './data/whackamole';
import { tarotText } from './data/tarot';
import { CHALLENGE_LIST } from '../challenges/data/data';
import { duckpondText } from './data/duckpond';

export function generateBBCode(
  animeDetails: AnimeData,
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const darts = configData.minigames.darts
    ? generateDarts(animeDetails, challengeDetails, configData)
    : '';
  const bingo = configData.minigames.bingo
    ? generateBingo(animeDetails, challengeDetails, configData)
    : '';
  const plinko = configData.minigames.plinko
    ? generatePlinko(animeDetails, challengeDetails, configData)
    : '';
  const whackamole = configData.minigames.whackamole
    ? generateWhackamole(animeDetails, challengeDetails, configData)
    : '';
  const tarot = configData.minigames.tarot
    ? generateTarot(animeDetails, challengeDetails, configData)
    : '';
  const duckpond = configData.minigames.duckpond
    ? generateDuckpond(animeDetails, challengeDetails, configData)
    : '';
  const minigamesText = [darts, bingo, plinko, whackamole, tarot, duckpond]
    .filter((m) => !!m)
    .join('\n\n');

  const templateData = {
    animeDetails,
    challengeDetails,
    configData,
    minigamesText,
    startDate: '',
    finishDate: '',
    challengeList: '',
  };

  return replaceTemplates(signupText, templateData);
}

function replaceTemplates(text: string, data: Record<string, unknown>) {
  const templates = [...text.matchAll(/\{\{([^}]+)\}\}/g)];

  let output = text;
  for (const match of templates) {
    const key = match[1];
    const value = get(data, key, '') as string;
    output = output.replace(match[0], value);
  }

  return output;
}

function legendToColor(legend: ConfigData['legend'], entry: ChallengeEntry) {
  if (!entry.startDate) {
    return legend.ptw;
  } else if (!entry.endDate) {
    return legend.watching;
  } else {
    return legend.completed;
  }
}

function formatDate(date: string) {
  if (!date) {
    return '';
  }

  const dateMap: Record<string, string> = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  const [_year, month, day] = date.split('-');
  return `${dateMap[month]} ${day}`;
}

function formatEntry(
  anime: AnimeDetails,
  challenge: ChallengeEntry,
  legend: ConfigData['legend']
) {
  return `[*][color=${legendToColor(legend, challenge)}][Started: ${formatDate(challenge.startDate)}] [Finished: ${formatDate(challenge.endDate)}][/color] ${CHALLENGE_LIST[challenge.id].bbCode}\n[url=https://myanimelist.net/anime/${challenge.malId ?? ''}]${anime.title ?? 'ANIME_TITLE'}[/url]${challenge.extraInfo ? `\n[color=#B22222][${challenge.extraInfo}][/color]` : ''}`;
}

function generateDarts(
  animeDetails: AnimeData,
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const entries = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes('Darts')
  );

  return replaceTemplates(dartsText, {
    darts: entries
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
  });
}

function generateBingo(
  animeDetails: AnimeData,
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const entries = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes(
      configData.minigames.bingo17 === '17A' ? 'Bingo 17A' : 'Bingo 17B'
    )
  );
  const entries2 = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes(
      configData.minigames.bingo21 === '21A' ? 'Bingo 21A' : 'Bingo 21B'
    )
  );

  return replaceTemplates(bingoText, {
    bingo17Name: configData.minigames.bingo17,
    bingo17: entries
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
    bingo21Name: configData.minigames.bingo21,
    bingo21: entries2
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
  });
}

function generatePlinko(
  animeDetails: AnimeData,
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const entries = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes('Plinko Tier 1')
  );
  const entries2 = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes('Plinko Tier 2')
  );
  const entries3 = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes('Plinko Tier 3')
  );

  return replaceTemplates(plinkoText, {
    plinko1: entries
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
    plinko2: entries2
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
    plinko3: entries3
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
  });
}

function generateWhackamole(
  animeDetails: AnimeData,
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const names: Record<string, string> = {
    A: 'QUEST A - Wizard',
    B: 'QUEST B - Hunter',
    C: 'QUEST C - Barbarian',
    D: 'QUEST D - Bard',
    E: 'QUEST E - Rogue',
  };

  const entries = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes(
      `Whack-a-Mole ${configData.minigames.whackamole1}`
    )
  );
  const entries2 = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes(
      `Whack-a-Mole ${configData.minigames.whackamole2}`
    )
  );
  const entries3 = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes(
      `Whack-a-Mole ${configData.minigames.whackamole3}`
    )
  );

  return replaceTemplates(whackamoleText, {
    whackamoleRestrictions:
      configData.minigames.whackamoleRestrictions.join(', '),
    whackamole1Name: names[configData.minigames.whackamole1],
    whackamole1Restrictions:
      configData.minigames.whackamole1Restrictions.join(', '),
    whackamole1Quests: entries
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
    whackamole2Name: names[configData.minigames.whackamole2],
    whackamole2Restrictions:
      configData.minigames.whackamole2Restrictions.join(', '),
    whackamole2Quests: entries2
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
    whackamole3Name: names[configData.minigames.whackamole3],
    whackamole3Restrictions:
      configData.minigames.whackamole3Restrictions.join(', '),
    whackamole3Quests: entries3
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
  });
}

function generateTarot(
  animeDetails: AnimeData,
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const ending: Record<string, string> = {
    '2.1': '1',
    '2.2': '2',
    '3.1': '3',
    '3.2': '4',
  };

  const [routeB] = configData.minigames.tarotEnding.split('.');

  const entries = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes('Tarot Route 1')
  );
  const entries2 = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes(`Tarot Route ${routeB}`)
  );
  const entries3 = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes(`Tarot Route ${configData.minigames.tarotEnding}`)
  );

  return replaceTemplates(tarotText, {
    tarotEnding: ending[configData.minigames.tarotEnding],
    tarotRouteBName: `ROUTE ${routeB}: ${routeB === '2' ? 'CHOOSING TAROT CARDS' : 'CHOOSING CRYSTAL BALL'}`,
    tarotRouteCName: `ROUTE ${configData.minigames.tarotEnding}: ${
      {
        '2.1': 'LEAVE THE CARD ALONE',
        '2.2': 'FLIP THE CARD OVER',
        '3.1': 'STAYING SAFE',
        '3.2': 'BECOMING SUCCESSFUL',
      }[configData.minigames.tarotEnding]
    }`,
    tarotRouteA: entries
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
    tarotRouteB: entries2
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
    tarotRouteC: entries3
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
  });
}

function generateDuckpond(
  animeDetails: AnimeData,
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const entries = Object.values(challengeDetails).filter((entry) =>
    entry.challenges.includes('Duck Pond')
  );

  return replaceTemplates(duckpondText, {
    duckpond: entries
      .map((entry) =>
        formatEntry(animeDetails[entry.malId] ?? {}, entry, configData.legend)
      )
      .join('\n\n'),
  });
}
