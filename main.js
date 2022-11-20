const teams = {
  QAT: {
    teamName: 'Qatar',
    ISO3166A2: 'QA',
    ISO3166A3: 'QAT',
    teamGroup: 'A'
  },
  ECU: {
    teamName: 'Ecuador',
    ISO3166A2: 'EC',
    ISO3166A3: 'ECU',
    teamGroup: 'A'
  },
  SEN: {
    teamName: 'Senegal',
    ISO3166A2: 'SN',
    ISO3166A3: 'SEN',
    teamGroup: 'A'
  },
  NLD: {
    teamName: 'Netherlands',
    ISO3166A2: 'NL',
    ISO3166A3: 'NLD',
    teamGroup: 'A'
  },
  ENG: {
    teamName: 'England',
    ISO3166A2: 'EN', // Modified from GB
    ISO3166A3: 'ENG',
    teamGroup: 'B'
  },
  IRN: {
    teamName: 'Islamic Republic of Iran',
    ISO3166A2: 'IR',
    ISO3166A3: 'IRN',
    teamGroup: 'B'
  },
  USA: {
    teamName: 'United States of America',
    ISO3166A2: 'US',
    ISO3166A3: 'USA',
    teamGroup: 'B'
  },
  WLS: {
    teamName: 'Wales',
    ISO3166A2: 'WL', // Modified from GB
    ISO3166A3: 'WLS',
    teamGroup: 'B'
  },
  ARG: {
    teamName: 'Argentina',
    ISO3166A2: 'AR',
    ISO3166A3: 'ARG',
    teamGroup: 'C'
  },
  SAU: {
    teamName: 'Saudi Arabia',
    ISO3166A2: 'SA',
    ISO3166A3: 'SAU',
    teamGroup: 'C'
  },
  MEX: {
    teamName: 'Mexico',
    ISO3166A2: 'MX',
    ISO3166A3: 'MEX',
    teamGroup: 'C'
  },
  POL: {
    teamName: 'Poland',
    ISO3166A2: 'PL',
    ISO3166A3: 'POL',
    teamGroup: 'C'
  },
  FRA: {
    teamName: 'France',
    ISO3166A2: 'FR',
    ISO3166A3: 'FRA',
    teamGroup: 'D'
  },
  AUS: {
    teamName: 'Australia',
    ISO3166A2: 'AU',
    ISO3166A3: 'AUS',
    teamGroup: 'D'
  },
  DNK: {
    teamName: 'Denmark',
    ISO3166A2: 'DK',
    ISO3166A3: 'DNK',
    teamGroup: 'D'
  },
  TUN: {
    teamName: 'Tunisia',
    ISO3166A2: 'TN',
    ISO3166A3: 'TUN',
    teamGroup: 'D'
  },
  ESP: {
    teamName: 'Spain',
    ISO3166A2: 'ES',
    ISO3166A3: 'ESP',
    teamGroup: 'E'
  },
  CRI: {
    teamName: 'Costa Rica',
    ISO3166A2: 'CR',
    ISO3166A3: 'CRI',
    teamGroup: 'E'
  },
  DEU: {
    teamName: 'Germany',
    ISO3166A2: 'DE',
    ISO3166A3: 'DEU',
    teamGroup: 'E'
  },
  JPN: {
    teamName: 'Japan',
    ISO3166A2: 'JP',
    ISO3166A3: 'JPN',
    teamGroup: 'E'
  },
  BEL: {
    teamName: 'Belgium',
    ISO3166A2: 'BE',
    ISO3166A3: 'BEL',
    teamGroup: 'F'
  },
  CAN: {
    teamName: 'Canada',
    ISO3166A2: 'CA',
    ISO3166A3: 'CAN',
    teamGroup: 'F'
  },
  MAR: {
    teamName: 'Morocco',
    ISO3166A2: 'MA',
    ISO3166A3: 'MAR',
    teamGroup: 'F'
  },
  HRV: {
    teamName: 'Croatia',
    ISO3166A2: 'HR',
    ISO3166A3: 'HRV',
    teamGroup: 'F'
  },
  BRA: {
    teamName: 'Brazil',
    ISO3166A2: 'BR',
    ISO3166A3: 'BRA',
    teamGroup: 'G'
  },
  SRB: {
    teamName: 'Serbia',
    ISO3166A2: 'RS',
    ISO3166A3: 'SRB',
    teamGroup: 'G'
  },
  CHE: {
    teamName: 'Switzerland',
    ISO3166A2: 'CH',
    ISO3166A3: 'CHE',
    teamGroup: 'G'
  },
  CMR: {
    teamName: 'Cameroon',
    ISO3166A2: 'CM',
    ISO3166A3: 'CMR',
    teamGroup: 'G'
  },
  PRT: {
    teamName: 'Portugal',
    ISO3166A2: 'PT',
    ISO3166A3: 'PRT',
    teamGroup: 'H'
  },
  GHA: {
    teamName: 'Ghana',
    ISO3166A2: 'GH',
    ISO3166A3: 'GHA',
    teamGroup: 'H'
  },
  URY: {
    teamName: 'Uruguay',
    ISO3166A2: 'UY',
    ISO3166A3: 'URY',
    teamGroup: 'H'
  },
  KOR: {
    teamName: 'Korea Republic',
    ISO3166A2: 'KR',
    ISO3166A3: 'KOR',
    teamGroup: 'H'
  }
}

const stadiums = {
  AlBaytStadium: 'Al Bayt Stadium',
  KhalifaInternationalStadium: 'Khalifa International Stadium',
  AlThumamaStadium: 'Al Thumama Stadium',
  AhmadBinAliStadium: 'Ahmad Bin Ali Stadium',
  LusailStadium: 'Lusail Stadium',
  Stadium974: 'Stadium 974',
  EducationCityStadium: 'Education City Stadium',
  AlJanoubStadium: 'Al Janoub Stadium'
}

const cupStages = [
  'Fase de Grupos',
  'Oitavas de Final',
  'Quartas de Final',
  'Semifinais',
  'Final']

const games = [
  {
    firstTeam: teams.QAT,
    firstTeamScore: 0,
    secondTeam: teams.ECU,
    secondTeamScore: 2,
    gameDate: '2022-11-20T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Bayt Stadium'
  },
  {
    firstTeam: teams.ENG,
    firstTeamScore: null,
    secondTeam: teams.IRN,
    secondTeamScore: null,
    gameDate: '2022-11-21T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Khalifa International Stadium'
  },
  {
    firstTeam: teams.SEN,
    firstTeamScore: null,
    secondTeam: teams.NLD,
    secondTeamScore: null,
    gameDate: '2022-11-21T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Thumama Stadium'
  },
  {
    firstTeam: teams.USA,
    firstTeamScore: null,
    secondTeam: teams.WLS,
    secondTeamScore: null,
    gameDate: '2022-11-21T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Ahmad Bin Ali Stadium'
  },
  {
    firstTeam: teams.ARG,
    firstTeamScore: null,
    secondTeam: teams.SAU,
    secondTeamScore: null,
    gameDate: '2022-11-22T13:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Lusail Stadium'
  },
  {
    firstTeam: teams.MEX,
    firstTeamScore: null,
    secondTeam: teams.POL,
    secondTeamScore: null,
    gameDate: '2022-11-22T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Stadium 974'
  },
  {
    firstTeam: teams.DNK,
    firstTeamScore: null,
    secondTeam: teams.TUN,
    secondTeamScore: null,
    gameDate: '2022-11-22T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Education City Stadium'
  },
  {
    firstTeam: teams.FRA,
    firstTeamScore: null,
    secondTeam: teams.AUS,
    secondTeamScore: null,
    gameDate: '2022-11-22T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Janoub Stadium'
  },
  {
    firstTeam: teams.MAR,
    firstTeamScore: null,
    secondTeam: teams.HRV,
    secondTeamScore: null,
    gameDate: '2022-11-23T13:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Bayt Stadium'
  },
  {
    firstTeam: teams.DEU,
    firstTeamScore: null,
    secondTeam: teams.JPN,
    secondTeamScore: null,
    gameDate: '2022-11-23T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Khalifa International Stadium'
  },
  {
    firstTeam: teams.ESP,
    firstTeamScore: null,
    secondTeam: teams.CRI,
    secondTeamScore: null,
    gameDate: '2022-11-23T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Thumama Stadium'
  },
  {
    firstTeam: teams.BEL,
    firstTeamScore: null,
    secondTeam: teams.CAN,
    secondTeamScore: null,
    gameDate: '2022-11-23T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Ahmad Bin Ali Stadium'
  },
  {
    firstTeam: teams.BRA,
    firstTeamScore: null,
    secondTeam: teams.SRB,
    secondTeamScore: null,
    gameDate: '2022-11-24T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Lusail Stadium'
  },
  {
    firstTeam: teams.PRT,
    firstTeamScore: null,
    secondTeam: teams.GHA,
    secondTeamScore: null,
    gameDate: '2022-11-24T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Stadium 974'
  },
  {
    firstTeam: teams.URY,
    firstTeamScore: null,
    secondTeam: teams.KOR,
    secondTeamScore: null,
    gameDate: '2022-11-24T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Education City Stadium'
  },
  {
    firstTeam: teams.CHE,
    firstTeamScore: null,
    secondTeam: teams.CMR,
    secondTeamScore: null,
    gameDate: '2022-11-24T13:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Janoub Stadium'
  },
  {
    firstTeam: teams.ENG,
    firstTeamScore: null,
    secondTeam: teams.USA,
    secondTeamScore: null,
    gameDate: '2022-11-25T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Bayt Stadium'
  },
  {
    firstTeam: teams.NLD,
    firstTeamScore: null,
    secondTeam: teams.ECU,
    secondTeamScore: null,
    gameDate: '2022-11-25T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Khalifa International Stadium'
  },
  {
    firstTeam: teams.QAT,
    firstTeamScore: null,
    secondTeam: teams.SEN,
    secondTeamScore: null,
    gameDate: '2022-11-25T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Thumama Stadium'
  },
  {
    firstTeam: teams.WLS,
    firstTeamScore: null,
    secondTeam: teams.IRN,
    secondTeamScore: null,
    gameDate: '2022-11-25T13:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Ahmad Bin Ali Stadium'
  },
  {
    firstTeam: teams.ARG,
    firstTeamScore: null,
    secondTeam: teams.MEX,
    secondTeamScore: null,
    gameDate: '2022-11-26T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Lusail Stadium'
  },
  {
    firstTeam: teams.FRA,
    firstTeamScore: null,
    secondTeam: teams.DNK,
    secondTeamScore: null,
    gameDate: '2022-11-26T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Stadium 974'
  },
  {
    firstTeam: teams.POL,
    firstTeamScore: null,
    secondTeam: teams.SAU,
    secondTeamScore: null,
    gameDate: '2022-11-26T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Education City Stadium'
  },
  {
    firstTeam: teams.TUN,
    firstTeamScore: null,
    secondTeam: teams.AUS,
    secondTeamScore: null,
    gameDate: '2022-11-26T13:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Janoub Stadium'
  },
  {
    firstTeam: teams.ESP,
    firstTeamScore: null,
    secondTeam: teams.DEU,
    secondTeamScore: null,
    gameDate: '2022-11-27T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Bayt Stadium'
  },
  {
    firstTeam: teams.HRV,
    firstTeamScore: null,
    secondTeam: teams.CAN,
    secondTeamScore: null,
    gameDate: '2022-11-27T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Khalifa International Stadium'
  },
  {
    firstTeam: teams.BEL,
    firstTeamScore: null,
    secondTeam: teams.MAR,
    secondTeamScore: null,
    gameDate: '2022-11-27T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Thumama Stadium'
  },
  {
    firstTeam: teams.JPN,
    firstTeamScore: null,
    secondTeam: teams.CRI,
    secondTeamScore: null,
    gameDate: '2022-11-27T13:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Ahmad Bin Ali Stadium'
  },
  {
    firstTeam: teams.PRT,
    firstTeamScore: null,
    secondTeam: teams.URY,
    secondTeamScore: null,
    gameDate: '2022-11-28T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Lusail Stadium'
  },
  {
    firstTeam: teams.BRA,
    firstTeamScore: null,
    secondTeam: teams.CHE,
    secondTeamScore: null,
    gameDate: '2022-11-28T19:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Stadium 974'
  },
  {
    firstTeam: teams.KOR,
    firstTeamScore: null,
    secondTeam: teams.GHA,
    secondTeamScore: null,
    gameDate: '2022-11-28T16:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Education City Stadium'
  },
  {
    firstTeam: teams.CMR,
    firstTeamScore: null,
    secondTeam: teams.SRB,
    secondTeamScore: null,
    gameDate: '2022-11-28T13:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Janoub Stadium'
  },
  {
    firstTeam: teams.NLD,
    firstTeamScore: null,
    secondTeam: teams.QAT,
    secondTeamScore: null,
    gameDate: '2022-11-29T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Bayt Stadium'
  },
  {
    firstTeam: teams.ECU,
    firstTeamScore: null,
    secondTeam: teams.SEN,
    secondTeamScore: null,
    gameDate: '2022-11-29T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Khalifa International Stadium'
  },
  {
    firstTeam: teams.IRN,
    firstTeamScore: null,
    secondTeam: teams.USA,
    secondTeamScore: null,
    gameDate: '2022-11-29T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Thumama Stadium'
  },
  {
    firstTeam: teams.WLS,
    firstTeamScore: null,
    secondTeam: teams.ENG,
    secondTeamScore: null,
    gameDate: '2022-11-29T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Ahmad Bin Ali Stadium'
  },
  {
    firstTeam: teams.SAU,
    firstTeamScore: null,
    secondTeam: teams.MEX,
    secondTeamScore: null,
    gameDate: '2022-11-30T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Lusail Stadium'
  },
  {
    firstTeam: teams.POL,
    firstTeamScore: null,
    secondTeam: teams.ARG,
    secondTeamScore: null,
    gameDate: '2022-11-30T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Stadium 974'
  },
  {
    firstTeam: teams.TUN,
    firstTeamScore: null,
    secondTeam: teams.FRA,
    secondTeamScore: null,
    gameDate: '2022-11-30T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Education City Stadium'
  },
  {
    firstTeam: teams.AUS,
    firstTeamScore: null,
    secondTeam: teams.DNK,
    secondTeamScore: null,
    gameDate: '2022-11-30T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Janoub Stadium'
  },
  {
    firstTeam: teams.CRI,
    firstTeamScore: null,
    secondTeam: teams.DEU,
    secondTeamScore: null,
    gameDate: '2022-12-01T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Bayt Stadium'
  },
  {
    firstTeam: teams.JPN,
    firstTeamScore: null,
    secondTeam: teams.ESP,
    secondTeamScore: null,
    gameDate: '2022-12-01T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Khalifa International Stadium'
  },
  {
    firstTeam: teams.CAN,
    firstTeamScore: null,
    secondTeam: teams.MAR,
    secondTeamScore: null,
    gameDate: '2022-12-01T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Thumama Stadium'
  },
  {
    firstTeam: teams.HRV,
    firstTeamScore: null,
    secondTeam: teams.BEL,
    secondTeamScore: null,
    gameDate: '2022-12-01T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Ahmad Bin Ali Stadium'
  },
  {
    firstTeam: teams.CMR,
    firstTeamScore: null,
    secondTeam: teams.BRA,
    secondTeamScore: null,
    gameDate: '2022-12-02T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Lusail Stadium'
  },
  {
    firstTeam: teams.SRB,
    firstTeamScore: null,
    secondTeam: teams.CHE,
    secondTeamScore: null,
    gameDate: '2022-12-02T22:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Stadium 974'
  },
  {
    firstTeam: teams.KOR,
    firstTeamScore: null,
    secondTeam: teams.PRT,
    secondTeamScore: null,
    gameDate: '2022-12-02T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Education City Stadium'
  },
  {
    firstTeam: teams.GHA,
    firstTeamScore: null,
    secondTeam: teams.URY,
    secondTeamScore: null,
    gameDate: '2022-12-02T18:00:00.00Z',
    type: cupStages[0],
    gameStadium: 'Al Janoub Stadium'
  },
  // {
  //   firstTeam: '1A',
  //   firstTeamScore: null,
  //   secondTeam: '2B',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-03T18:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Khalifa International Stadium'
  // },
  // {
  //   firstTeam: '1C',
  //   firstTeamScore: null,
  //   secondTeam: '2D',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-03T22:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Ahmad Bin Ali Stadium'
  // },
  // {
  //   firstTeam: '1B',
  //   firstTeamScore: null,
  //   secondTeam: '2A',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-04T22:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Al Bayt Stadium'
  // },
  // {
  //   firstTeam: '1D',
  //   firstTeamScore: null,
  //   secondTeam: '2C',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-04T18:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Al Thumama Stadium'
  // },
  // {
  //   firstTeam: '1H',
  //   firstTeamScore: null,
  //   secondTeam: '2G',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-06T22:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Lusail Stadium'
  // },
  // {
  //   firstTeam: '1G',
  //   firstTeamScore: null,
  //   secondTeam: '2H',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-05T22:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Stadium 974'
  // },
  // {
  //   firstTeam: '1F',
  //   firstTeamScore: null,
  //   secondTeam: '2E',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-06T18:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Education City Stadium'
  // },
  // {
  //   firstTeam: '1E',
  //   firstTeamScore: null,
  //   secondTeam: '2F',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-05T18:00:00.00Z',
  //   type: cupStages[1],
  //   gameStadium: 'Al Janoub Stadium'
  // },
  // {
  //   firstTeam: 'W51',
  //   firstTeamScore: null,
  //   secondTeam: 'W52',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-10T22:00:00.00Z',
  //   type: cupStages[2],
  //   gameStadium: 'Al Bayt Stadium'
  // },
  // {
  //   firstTeam: 'W55',
  //   firstTeamScore: null,
  //   secondTeam: 'W56',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-10T18:00:00.00Z',
  //   type: cupStages[2],
  //   gameStadium: 'Al Thumama Stadium'
  // },
  // {
  //   firstTeam: 'W49',
  //   firstTeamScore: null,
  //   secondTeam: 'W50',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-09T22:00:00.00Z',
  //   type: cupStages[2],
  //   gameStadium: 'Lusail Stadium'
  // },
  // {
  //   firstTeam: 'W53',
  //   firstTeamScore: null,
  //   secondTeam: 'W54',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-09T18:00:00.00Z',
  //   type: cupStages[2],
  //   gameStadium: 'Education City Stadium'
  // },
  // {
  //   firstTeam: 'W59',
  //   firstTeamScore: null,
  //   secondTeam: 'W60',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-14T22:00:00.00Z',
  //   type: cupStages[3],
  //   gameStadium: 'Al Bayt Stadium'
  // },
  // {
  //   firstTeam: 'W57',
  //   firstTeamScore: null,
  //   secondTeam: 'W58',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-13T22:00:00.00Z',
  //   type: cupStages[3],
  //   gameStadium: 'Lusail Stadium'
  // },
  // {
  //   firstTeam: 'L61',
  //   firstTeamScore: null,
  //   secondTeam: 'L62',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-17T18:00:00.00Z',
  //   type: cupStages[4],
  //   gameStadium: 'Khalifa International Stadium'
  // },
  // {
  //   firstTeam: 'W61',
  //   firstTeamScore: null,
  //   secondTeam: 'W62',
  //   secondTeamScore: null,
  //   gameDate: '2022-12-18T18:00:00.00Z',
  //   type: cupStages[4],
  //   gameStadium: 'Lusail Stadium'
  // },
]

const weekDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]

let delay = -0.1;
function createCard(game) {
  const { gameDate } = game
  const findDate = /(\d{4})-(\d{2})-(\d{2})/
  const year = gameDate.match(findDate)[1]
  const month = gameDate.match(findDate)[2]
  const day = gameDate.match(findDate)[3]
  const newDate = new Date(year, month - 1, day)
  const dayOfWeek = weekDays[newDate.getDay()]

  delay = delay + 0.1;
  return `
    <div id="day${month}${day}" class="card" style="animation-delay: ${delay}s">
      <h2>${day}/${month} <span>${dayOfWeek}</span></h2>
      <ul id="gamesOf${month}${day}">
      </ul>
    </div>
  `
}

function createGame(game) {
  const {
    firstTeam,
    secondTeam,
    gameDate,
    firstTeamScore,
    secondTeamScore,
    type,
    gameStadium } = game
  const matchTimeRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}:\d{2}):\d{2}\.\d{2}Z/
  const matchTime = gameDate.match(matchTimeRegex)[4]
  const month = gameDate.match(matchTimeRegex)[2]
  const day = gameDate.match(matchTimeRegex)[3]
  const alreadyCreatedCardOfThisDay = document.querySelector
    (`#day${month}${day}`)
  let firstGameOnCard = false
  if (!alreadyCreatedCardOfThisDay) {
    cards.innerHTML += createCard(game)
    firstGameOnCard = true
  }
  const gameList = document.querySelector(`#gamesOf${month}${day}`)
  gameList.innerHTML += `
  ${firstGameOnCard || '<hr>'}
<li class="gameCard">
   <div class="gameCardContent">
      <div class="firstTeam">
         <div class="teamFlag">
            <div class="test">
               <img src="./assets/flags/${firstTeam.ISO3166A2.toLowerCase()}.svg" alt="Bandeira do ${firstTeam.teamName}" class="leftFlag"/>
            </div>
            <strong class="teamName teamNameLeft">${firstTeam.teamName}</strong>
            <firstTeamFlagMask/>
         </div>
         <div class="pointsFrame">
            <strong class="teamPoints">${firstTeamScore ?? ''}</strong>
         </div>
      </div>
      <div class="matchInfoFrame">
         <div class="matchHourFrame">
            <strong class="matchHour">${matchTime}</strong>
         </div>
         <div class="stadiumFrame">
            <strong class="stadiumName">${gameStadium}</strong>
         </div>
      </div>
      <div class="secondTeam">
          <div class="pointsFrame">
            <strong class="teamPoints">${secondTeamScore ?? ''}</strong>
         </div>
         <div class="teamFlag">
            <div>
              <img src="./assets/flags/${secondTeam.ISO3166A2.toLowerCase()}.svg" alt="Bandeira do ${secondTeam.teamName}" class="rightFlag"/>
            </div>
            <strong class="teamName teamNameRight">${secondTeam.teamName}</strong>
            <StadiumMask/>
         </div>
         
      </div>
   </div>
   <div class="gameCardBackground">
      <img src="./assets/stadiums/${gameStadium.replace(/\s/gi, "-")}.png" alt="${gameStadium}" class="stadium" />
   </div>
</li>
`
}

games.forEach(game => {
  createGame(game)
})