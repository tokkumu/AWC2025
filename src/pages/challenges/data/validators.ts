import { ConfigData } from '../../config/types';
import { ChallengeData } from '../types';
import { CHALLENGE_LIST } from './data';
import {
  ValidationStatus,
  Validator,
  ValidatorParams,
  ValidatorStatus,
} from './types';

const restrictionMap: Record<string, Validator> = {
  Warrior: validateTags(['Action'], 1),
  Adventurer: validateTags(['Adventure'], 1),
  Jester: validateTags(['Comedy'], 1),
  Thespian: validateTags(['Drama'], 1),
  Minstrel: validateTags(['Fantasy'], 1),
  Sorcerer: validateTags(['Romance'], 1),
  Guardian: validateTags(['Shounen'], 1),
  Cleric: validateTags(['Slice of Life'], 1),
  Watcher: validateType(['TV']),
  Seeker: validateType(['Movie']),
  Finder: validateType(['OVA']),
  Neutral: validateRating(['PG-13']),
  'Chaotic Evil': validateRating([
    'R - 17+ (violence & profanity)',
    'R+ - Mild Nudity',
  ]),
  Indomitable: validateEpisodeDuration(20, 'gte'),
  Almighty: validateType(['TV']),
};

export function validateAnime(
  config: ConfigData,
  challengeData: ChallengeData,
  challengeId: string,
  minigame: string
): ValidationStatus {
  if (!challengeData[challengeId].animeData) {
    return { valid: false, success: [], error: ['Anime not found'] };
  }

  for (const challenge of Object.values(challengeData)) {
    if (challengeId === challenge.id) {
      continue;
    }
    if (
      challenge.animeData?.malId === challengeData[challengeId].animeData.malId
    ) {
      return {
        valid: false,
        success: [],
        error: [`Anime already used in challenge ${challenge.id}`],
      };
    }
  }

  const params: ValidatorParams = {
    anime: challengeData[challengeId].animeData,
    config,
    entry: challengeData[challengeId],
  };

  const allValidators = [...CHALLENGE_LIST[challengeId].validators];

  if (minigame.startsWith('Whack-a-Mole')) {
    if (`Whack-a-Mole ${config.minigames.whackamole1}` === minigame) {
      allValidators.push(
        ...config.minigames.whackamole1Restrictions.map(
          (r) => restrictionMap[r]
        )
      );
    } else if (`Whack-a-Mole ${config.minigames.whackamole2}` === minigame) {
      allValidators.push(
        ...config.minigames.whackamole2Restrictions.map(
          (r) => restrictionMap[r]
        )
      );
    } else if (`Whack-a-Mole ${config.minigames.whackamole3}` === minigame) {
      allValidators.push(
        ...config.minigames.whackamole3Restrictions.map(
          (r) => restrictionMap[r]
        )
      );
    }

    if (config.minigames.whackamoleRestrictions.includes('Exalted')) {
      allValidators.push(restrictionMap[config.minigames.exaltedRestriction]);
    }

    if (config.minigames.whackamoleRestrictions.includes('Supreme')) {
      allValidators.push(restrictionMap[config.minigames.supremeRestriction]);
    }

    if (config.minigames.whackamoleRestrictions.includes('Indomitable')) {
      allValidators.push(restrictionMap['Indomitable']);
    }

    if (config.minigames.whackamoleRestrictions.includes('Almighty')) {
      allValidators.push(restrictionMap['Almighty']);
    }
  }

  return buildResponse(allValidators.map((validator) => validator(params)));
}

function buildResponse(criteria: ValidatorStatus[]): ValidationStatus {
  return {
    valid: criteria.every((criterion) => criterion.valid),
    success: criteria
      .filter((criterion) => criterion.valid)
      .map((criterion) => criterion.criterion),
    error: criteria
      .filter((criterion) => !criterion.valid)
      .map((criterion) => criterion.criterion),
  };
}

function arrayToList(arr: string[]): string {
  if (arr.length === 0) return '';
  if (arr.length === 1) return arr[0];
  return `${arr.slice(0, -1).join(', ')} or ${arr[arr.length - 1]}`;
}

function numberToMonth(num: number): string {
  return new Date(0, num - 1).toLocaleString('en', { month: 'long' });
}

export function validateType(allowedTypes: string[]): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must be of type ${arrayToList(allowedTypes)}`,
      valid: allowedTypes.includes(params.anime.type),
    };
  };
}

export function validateEpisodeCount(
  count: number,
  exp: 'gte' | 'lte'
): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must have ${exp === 'gte' ? 'at least' : 'at most'} ${count} episodes`,
      valid:
        exp === 'gte'
          ? params.anime.episodes >= count
          : params.anime.episodes <= count,
    };
  };
}

export function validateRuntime(
  duration: number,
  exp: 'gte' | 'lte'
): Validator {
  return (params: ValidatorParams) => {
    const durationParser =
      /(?:(?<hour>\d+) hr)?\s*(?:(?<min>\d+) min)?\s*(?:per ep)?/i;
    const parsedDuration = durationParser.exec(params.anime.duration);
    if (!parsedDuration) {
      return { criterion: 'Anime runtime is invalid', valid: false };
    } else {
      const runtime =
        (parseInt(parsedDuration.groups?.hour ?? '0') * 60 +
          parseInt(parsedDuration.groups?.min ?? '0')) *
        params.anime.episodes;
      return {
        criterion: `Anime must have ${exp === 'gte' ? 'at least' : 'at most'} ${duration} minutes of runtime`,
        valid: exp === 'gte' ? runtime >= duration : runtime <= duration,
      };
    }
  };
}

export function validateEpisodeDuration(
  duration: number,
  exp: 'gte' | 'lte'
): Validator {
  return (params: ValidatorParams) => {
    const durationParser =
      /(?:(?<hour>\d+) hr)?\s*(?:(?<min>\d+) min)?\s*(?:per ep)?/i;
    const parsedDuration = durationParser.exec(params.anime.duration);
    if (!parsedDuration) {
      return { criterion: 'Anime episode duration is invalid', valid: false };
    } else {
      const episodeDuration =
        parseInt(parsedDuration.groups?.hour ?? '0') * 60 +
        parseInt(parsedDuration.groups?.min ?? '0');
      return {
        criterion: `Anime must have ${exp === 'gte' ? 'at least' : 'at most'} ${duration} minutes per episode`,
        valid:
          exp === 'gte'
            ? episodeDuration >= duration
            : episodeDuration <= duration,
      };
    }
  };
}

export function validateStartDate(date: string, exp: 'gte' | 'lte'): Validator {
  return (params: ValidatorParams) => {
    const { year, month, day } = params.anime.aired.from;
    const startDate = `${year}-${month}-${day}`;
    return {
      criterion: `Anime must ${exp === 'gte' ? 'start airing on or after' : 'start airing on or before'} ${date}`,
      valid: exp === 'gte' ? startDate >= date : startDate <= date,
    };
  };
}

export function validateBroadcastDate(days: string[]): Validator {
  return (params: ValidatorParams) => {
    const broadcastDate = params.anime.aired.day;
    return {
      criterion: `Anime must air on ${arrayToList(days)}`,
      valid: days.includes(broadcastDate),
    };
  };
}

export function validateStartMonth(months: number[]): Validator {
  return (params: ValidatorParams) => {
    const startMonth = params.anime.aired.from.month;
    return {
      criterion: `Anime must start airing in ${arrayToList(months.map(numberToMonth))}`,
      valid: months.includes(startMonth),
    };
  };
}

export function validateTitleUsername(): Validator {
  return (params: ValidatorParams) => {
    const animeFirstLetter = params.anime.title.charAt(0);
    const usernameFirstLetter = params.config.username.charAt(0);

    if (!animeFirstLetter.match(/[a-z0-9]/i)) {
      return {
        criterion: 'Username must start with same letter as anime title',
        valid: !!usernameFirstLetter.match(/[a-z0-9]/i),
      };
    }

    return {
      criterion: 'Username must start with same letter as anime title',
      valid:
        animeFirstLetter.toLowerCase() === usernameFirstLetter.toLowerCase(),
    };
  };
}

export function validateSource(sources: string[]): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must be from ${arrayToList(sources)}`,
      valid: sources
        .map((s) => s.toLowerCase())
        .includes(params.anime.source.toLowerCase()),
    };
  };
}

export function validateRating(ratings: string[]): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must have a rating of ${arrayToList(ratings)}`,
      valid: ratings.includes(params.anime.rating),
    };
  };
}

export function validateGenreCount(count: number, exp: 'lte' | 'gte') {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must have ${exp === 'gte' ? 'at least' : 'at most'} ${count} genres`,
      valid:
        exp === 'gte'
          ? params.anime.genres.length >= count
          : params.anime.genres.length <= count,
    };
  };
}

export function validateTags(requiredTags: string[], requiredCount: number) {
  return (params: ValidatorParams) => {
    const { genres, themes, demographics } = params.anime;
    const tags = [...genres, ...themes, ...demographics];
    const tagCount = tags.filter((g) => requiredTags.includes(g)).length;
    return {
      criterion: `Anime must have ${requiredCount} of the following tags: ${arrayToList(requiredTags)}`,
      valid: tagCount >= requiredCount,
    };
  };
}

export function validateFinishedAiring(): Validator {
  return (params: ValidatorParams) => {
    const airEndDate = `${params.anime.aired.to.year}-${params.anime.aired.to.month}-${params.anime.aired.to.day}`;
    return {
      criterion: 'Anime must have finished airing before you started it',
      valid: !params.entry.startDate || airEndDate <= params.entry.startDate,
    };
  };
}

export function validateSongCountEquals(
  requiredOpenings: number,
  requiredEndings: number
): Validator {
  return (params: ValidatorParams) => {
    const { openingCount, endingCount } = params.anime;
    return {
      criterion: `Anime must have ${requiredOpenings} openings and ${requiredEndings} endings`,
      valid:
        openingCount === requiredOpenings && endingCount === requiredEndings,
    };
  };
}

export function validateSongCountAtLeast(
  requiredOpenings: number,
  requiredEndings: number
): Validator {
  return (params: ValidatorParams) => {
    const { openingCount, endingCount } = params.anime;
    return {
      criterion: `Anime must have at least ${requiredOpenings} openings or ${requiredEndings} endings`,
      valid: openingCount >= requiredOpenings || endingCount >= requiredEndings,
    };
  };
}

export function validateAirTime(times: string[]): Validator {
  return (params: ValidatorParams) => {
    const airTime = params.anime.aired.time.split(':')[0];
    return {
      criterion: `Anime must air in one of the following hours: ${arrayToList(times)}`,
      valid: times.includes(airTime),
    };
  };
}

export function validateMainCharacterCountEquals(
  requiredCount: number
): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must have ${requiredCount} main characters`,
      valid: params.anime.mainCharacters === requiredCount,
    };
  };
}

export function validateMainCharacterCountAtLeast(
  requiredCount: number
): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must have at least ${requiredCount} main characters`,
      valid: params.anime.mainCharacters >= requiredCount,
    };
  };
}

export function validateMoreMainThanSupporting(): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion:
        'Anime must have more main characters than supporting characters',
      valid: params.anime.mainCharacters > params.anime.supportingCharacters,
    };
  };
}

export function validatePopularity(
  popularity: number,
  exp: 'gt' | 'lt'
): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must be ${exp === 'gt' ? 'lower than' : 'higher than'} ${popularity} in popularity`,
      valid:
        exp === 'gt'
          ? params.anime.popularity > popularity
          : params.anime.popularity < popularity,
    };
  };
}

export function validateScore(rating: number, exp: 'gte' | 'lte'): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must be ${exp === 'gte' ? 'at or above' : 'at or below'} ${rating} in rating`,
      valid:
        exp === 'gte'
          ? params.anime.score >= rating
          : params.anime.score <= rating,
    };
  };
}

export function validateFavorites(
  favorites: number,
  exp: 'gte' | 'lte'
): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must have ${exp === 'gte' ? 'at least' : 'at most'} ${favorites} favorites`,
      valid:
        exp === 'gte'
          ? params.anime.favorites >= favorites
          : params.anime.favorites <= favorites,
    };
  };
}

export function validateRankingPopularityDiff(
  diff: number,
  exp: 'gte' | 'lte'
): Validator {
  return (params: ValidatorParams) => {
    const realDiff = Math.abs(params.anime.rank - params.anime.popularity);
    return {
      criterion: `Anime must have a ranking/popularity difference of ${exp === 'gte' ? 'at least' : 'at most'} ${diff}`,
      valid: exp === 'gte' ? realDiff >= diff : realDiff <= diff,
    };
  };
}

export function validateMALIdContains(s: string): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must have MAL ID containing ${s}`,
      valid: params.anime.malId.toString().includes(s),
    };
  };
}

export function validateWordsWithSameLetter(count: number): Validator {
  return (params: ValidatorParams) => {
    const words = params.anime.title
      .toLowerCase()
      .split(' ')
      .filter((w) => w.match(/[a-z]/i))
      .map((w) => w.charAt(0));
    const letterCount = words.reduce(
      (acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
    return {
      criterion: `Anime must have at least ${count} words starting with the same letter`,
      valid: Object.values(letterCount).some((c) => c >= count),
    };
  };
}

export function validateStack(stack: number[]): Validator {
  return (params: ValidatorParams) => {
    return {
      criterion: `Anime must be in stack`,
      valid: stack.includes(params.anime.malId),
    };
  };
}
