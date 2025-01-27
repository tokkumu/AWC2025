import { AnimeDetails } from '../../types';
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
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const darts = configData.minigames.darts
    ? generateDarts(challengeDetails, configData)
    : '';
  const bingo = configData.minigames.bingo
    ? generateBingo(challengeDetails, configData)
    : '';
  const plinko = configData.minigames.plinko
    ? generatePlinko(challengeDetails, configData)
    : '';
  const whackamole = configData.minigames.whackamole
    ? generateWhackamole(challengeDetails, configData)
    : '';
  const tarot = configData.minigames.tarot
    ? generateTarot(challengeDetails, configData)
    : '';
  const duckpond = configData.minigames.duckpond
    ? generateDuckpond(challengeDetails, configData)
    : '';
  const minigamesText = [darts, bingo, plinko, whackamole, tarot, duckpond]
    .filter((m) => !!m)
    .join('\n\n');

  const templateData = {
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

function formatEntry(params: {
  anime?: AnimeDetails;
  challenge: ChallengeEntry;
  legend: ConfigData['legend'];
}) {
  const { anime, challenge, legend } = params;
  return `[*][color=${legendToColor(legend, challenge)}][Started: ${formatDate(challenge.startDate)}] [Finished: ${formatDate(challenge.endDate)}][/color] ${CHALLENGE_LIST[challenge.id].bbCode}\n[url=https://myanimelist.net/anime/${challenge.malId ?? ''}]${anime?.title ?? 'ANIME_TITLE'}[/url]${challenge.extraInfo ? `\n[color=#B22222][${challenge.extraInfo}][/color]` : ''}`;
}

function generateDarts(
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const challenges = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes('Darts')
  );

  return replaceTemplates(dartsText, {
    darts: challenges
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
  });
}

function generateBingo(
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const challenges = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes(
      configData.minigames.bingo17 === '17A' ? 'Bingo 17A' : 'Bingo 17B'
    )
  );
  const challenges2 = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes(
      configData.minigames.bingo21 === '21A' ? 'Bingo 21A' : 'Bingo 21B'
    )
  );

  return replaceTemplates(bingoText, {
    bingo17Name: configData.minigames.bingo17,
    bingo17: challenges
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
    bingo21Name: configData.minigames.bingo21,
    bingo21: challenges2
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
  });
}

function generatePlinko(
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const challenges = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes('Plinko Tier 1')
  );
  const challenges2 = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes('Plinko Tier 2')
  );
  const challenges3 = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes('Plinko Tier 3')
  );

  return replaceTemplates(plinkoText, {
    plinko1: challenges
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
    plinko2: challenges2
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
    plinko3: challenges3
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
  });
}

function generateWhackamole(
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

  const challenges = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes(`Whack-a-Mole ${configData.minigames.whackamole1}`)
  );
  const challenges2 = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes(`Whack-a-Mole ${configData.minigames.whackamole2}`)
  );
  const challenges3 = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes(`Whack-a-Mole ${configData.minigames.whackamole3}`)
  );

  return replaceTemplates(whackamoleText, {
    whackamoleRestrictions:
      configData.minigames.whackamoleRestrictions.join(', '),
    whackamole1Name: names[configData.minigames.whackamole1],
    whackamole1Restrictions:
      configData.minigames.whackamole1Restrictions.join(', '),
    whackamole1Quests: challenges
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
    whackamole2Name: names[configData.minigames.whackamole2],
    whackamole2Restrictions:
      configData.minigames.whackamole2Restrictions.join(', '),
    whackamole2Quests: challenges2
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
    whackamole3Name: names[configData.minigames.whackamole3],
    whackamole3Restrictions:
      configData.minigames.whackamole3Restrictions.join(', '),
    whackamole3Quests: challenges3
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
  });
}

function generateTarot(
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

  const challenges = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes('Tarot Route 1')
  );
  const challenges2 = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes(`Tarot Route ${routeB}`)
  );
  const challenges3 = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes(`Tarot Route ${configData.minigames.tarotEnding}`)
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
    tarotRouteA: challenges
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
    tarotRouteB: challenges2
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
    tarotRouteC: challenges3
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
  });
}

function generateDuckpond(
  challengeDetails: ChallengeData,
  configData: ConfigData
) {
  const challenges = Object.values(challengeDetails).filter((entry) =>
    entry.minigames.includes('Duck Pond')
  );

  return replaceTemplates(duckpondText, {
    duckpond: challenges
      .map((challenge) =>
        formatEntry({
          anime: challenge.animeData,
          challenge,
          legend: configData.legend,
        })
      )
      .join('\n\n'),
  });
}
