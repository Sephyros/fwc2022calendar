const teams = {
  QAT: {
    teamName: "Qatar",
    ISO3166A2: "QA",
    ISO3166A3: "QAT",
    teamGroup: "A",
  },
  ECU: {
    teamName: "Ecuador",
    ISO3166A2: "EC",
    ISO3166A3: "ECU",
    teamGroup: "A",
  },
  SEN: {
    teamName: "Senegal",
    ISO3166A2: "SN",
    ISO3166A3: "SEN",
    teamGroup: "A",
  },
  NLD: {
    teamName: "Netherlands",
    ISO3166A2: "NL",
    ISO3166A3: "NLD",
    teamGroup: "A",
  },
  ENG: {
    teamName: "England",
    ISO3166A2: "EN", // Modified from GB
    ISO3166A3: "ENG",
    teamGroup: "B",
  },
  IRN: {
    teamName: "Islamic Republic of Iran",
    ISO3166A2: "IR",
    ISO3166A3: "IRN",
    teamGroup: "B",
  },
  USA: {
    teamName: "United States of America",
    ISO3166A2: "US",
    ISO3166A3: "USA",
    teamGroup: "B",
  },
  WLS: {
    teamName: "Wales",
    ISO3166A2: "WL", // Modified from GB
    ISO3166A3: "WLS",
    teamGroup: "B",
  },
  ARG: {
    teamName: "Argentina",
    ISO3166A2: "AR",
    ISO3166A3: "ARG",
    teamGroup: "C",
  },
  SAU: {
    teamName: "Saudi Arabia",
    ISO3166A2: "SA",
    ISO3166A3: "SAU",
    teamGroup: "C",
  },
  MEX: {
    teamName: "Mexico",
    ISO3166A2: "MX",
    ISO3166A3: "MEX",
    teamGroup: "C",
  },
  POL: {
    teamName: "Poland",
    ISO3166A2: "PL",
    ISO3166A3: "POL",
    teamGroup: "C",
  },
  FRA: {
    teamName: "France",
    ISO3166A2: "FR",
    ISO3166A3: "FRA",
    teamGroup: "D",
  },
  AUS: {
    teamName: "Australia",
    ISO3166A2: "AU",
    ISO3166A3: "AUS",
    teamGroup: "D",
  },
  DNK: {
    teamName: "Denmark",
    ISO3166A2: "DK",
    ISO3166A3: "DNK",
    teamGroup: "D",
  },
  TUN: {
    teamName: "Tunisia",
    ISO3166A2: "TN",
    ISO3166A3: "TUN",
    teamGroup: "D",
  },
  ESP: {
    teamName: "Spain",
    ISO3166A2: "ES",
    ISO3166A3: "ESP",
    teamGroup: "E",
  },
  CRI: {
    teamName: "Costa Rica",
    ISO3166A2: "CR",
    ISO3166A3: "CRI",
    teamGroup: "E",
  },
  DEU: {
    teamName: "Germany",
    ISO3166A2: "DE",
    ISO3166A3: "DEU",
    teamGroup: "E",
  },
  JPN: {
    teamName: "Japan",
    ISO3166A2: "JP",
    ISO3166A3: "JPN",
    teamGroup: "E",
  },
  BEL: {
    teamName: "Belgium",
    ISO3166A2: "BE",
    ISO3166A3: "BEL",
    teamGroup: "F",
  },
  CAN: {
    teamName: "Canada",
    ISO3166A2: "CA",
    ISO3166A3: "CAN",
    teamGroup: "F",
  },
  MAR: {
    teamName: "Morocco",
    ISO3166A2: "MA",
    ISO3166A3: "MAR",
    teamGroup: "F",
  },
  HRV: {
    teamName: "Croatia",
    ISO3166A2: "HR",
    ISO3166A3: "HRV",
    teamGroup: "F",
  },
  BRA: {
    teamName: "Brazil",
    ISO3166A2: "BR",
    ISO3166A3: "BRA",
    teamGroup: "G",
  },
  SRB: {
    teamName: "Serbia",
    ISO3166A2: "RS",
    ISO3166A3: "SRB",
    teamGroup: "G",
  },
  CHE: {
    teamName: "Switzerland",
    ISO3166A2: "CH",
    ISO3166A3: "CHE",
    teamGroup: "G",
  },
  CMR: {
    teamName: "Cameroon",
    ISO3166A2: "CM",
    ISO3166A3: "CMR",
    teamGroup: "G",
  },
  PRT: {
    teamName: "Portugal",
    ISO3166A2: "PT",
    ISO3166A3: "PRT",
    teamGroup: "H",
  },
  GHA: {
    teamName: "Ghana",
    ISO3166A2: "GH",
    ISO3166A3: "GHA",
    teamGroup: "H",
  },
  URY: {
    teamName: "Uruguay",
    ISO3166A2: "UY",
    ISO3166A3: "URY",
    teamGroup: "H",
  },
  KOR: {
    teamName: "Korea Republic",
    ISO3166A2: "KR",
    ISO3166A3: "KOR",
    teamGroup: "H",
  },
}

const stadiums = {
  AlBaytStadium: "Al Bayt Stadium",
  KhalifaInternationalStadium: "Khalifa International Stadium",
  AlThumamaStadium: "Al Thumama Stadium",
  AhmadBinAliStadium: "Ahmad Bin Ali Stadium",
  LusailStadium: "Lusail Stadium",
  Stadium974: "Stadium 974",
  EducationCityStadium: "Education City Stadium",
  AlJanoubStadium: "Al Janoub Stadium",
}

const cupStages = {
  group: "Fase de Grupos",
  ro16: "Oitavas de Final",
  quarter: "Quartas de Final",
  semi: "Semifinais",
  third: "Terceiro Lugar",
  final: "Final",
}

const games = [
  {
    firstTeam: teams.QAT,
    firstTeamScore: 0,
    secondTeam: teams.ECU,
    secondTeamScore: 2,
    gameDate: "2022-11-20T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Bayt Stadium",
    gameNumber: 1
  },
  {
    firstTeam: teams.ENG,
    firstTeamScore: 6,
    secondTeam: teams.IRN,
    secondTeamScore: 2,
    gameDate: "2022-11-21T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Khalifa International Stadium",
    gameNumber: 3
  },
  {
    firstTeam: teams.SEN,
    firstTeamScore: 0,
    secondTeam: teams.NLD,
    secondTeamScore: 2,
    gameDate: "2022-11-21T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Thumama Stadium",
    gameNumber: 2
  },
  {
    firstTeam: teams.USA,
    firstTeamScore: 1,
    secondTeam: teams.WLS,
    secondTeamScore: 1,
    gameDate: "2022-11-21T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Ahmad Bin Ali Stadium",
    gameNumber: 4
  },
  {
    firstTeam: teams.ARG,
    firstTeamScore: 1,
    secondTeam: teams.SAU,
    secondTeamScore: 2,
    gameDate: "2022-11-22T13:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Lusail Stadium",
    gameNumber: 8
  },
  {
    firstTeam: teams.DNK,
    firstTeamScore: 0,
    secondTeam: teams.TUN,
    secondTeamScore: 0,
    gameDate: "2022-11-22T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Education City Stadium",
    gameNumber: 6
  },
  {
    firstTeam: teams.MEX,
    firstTeamScore: 0,
    secondTeam: teams.POL,
    secondTeamScore: 0,
    gameDate: "2022-11-22T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Stadium 974",
    gameNumber: 7
  },
  {
    firstTeam: teams.FRA,
    firstTeamScore: 4,
    secondTeam: teams.AUS,
    secondTeamScore: 1,
    gameDate: "2022-11-22T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Janoub Stadium",
    gameNumber: 5
  },
  {
    firstTeam: teams.MAR,
    firstTeamScore: 0,
    secondTeam: teams.HRV,
    secondTeamScore: 0,
    gameDate: "2022-11-23T13:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Bayt Stadium",
    gameNumber: 12
  },
  {
    firstTeam: teams.DEU,
    firstTeamScore: 1,
    secondTeam: teams.JPN,
    secondTeamScore: 2,
    gameDate: "2022-11-23T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Khalifa International Stadium",
    gameNumber: 11
  },
  {
    firstTeam: teams.ESP,
    firstTeamScore: 7,
    secondTeam: teams.CRI,
    secondTeamScore: 0,
    gameDate: "2022-11-23T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Thumama Stadium",
    gameNumber: 10
  },
  {
    firstTeam: teams.BEL,
    firstTeamScore: 1,
    secondTeam: teams.CAN,
    secondTeamScore: 0,
    gameDate: "2022-11-23T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Ahmad Bin Ali Stadium",
    gameNumber: 9
  },
  {
    firstTeam: teams.CHE,
    firstTeamScore: 1,
    secondTeam: teams.CMR,
    secondTeamScore: 0,
    gameDate: "2022-11-24T13:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Janoub Stadium",
    gameNumber: 13
  },
  {
    firstTeam: teams.URY,
    firstTeamScore: 0,
    secondTeam: teams.KOR,
    secondTeamScore: 0,
    gameDate: "2022-11-24T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Education City Stadium",
    gameNumber: 14
  },
  {
    firstTeam: teams.PRT,
    firstTeamScore: 3,
    secondTeam: teams.GHA,
    secondTeamScore: 2,
    gameDate: "2022-11-24T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Stadium 974",
    gameNumber: 15
  },
  {
    firstTeam: teams.BRA,
    firstTeamScore: 2,
    secondTeam: teams.SRB,
    secondTeamScore: 0,
    gameDate: "2022-11-24T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Lusail Stadium",
    gameNumber: 16
  },
  {
    firstTeam: teams.WLS,
    firstTeamScore: 0,
    secondTeam: teams.IRN,
    secondTeamScore: 2,
    gameDate: "2022-11-25T13:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Ahmad Bin Ali Stadium",
    gameNumber: 17
  },
  {
    firstTeam: teams.QAT,
    firstTeamScore: 0,
    secondTeam: teams.SEN,
    secondTeamScore: 3,
    gameDate: "2022-11-25T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Thumama Stadium",
    gameNumber: 18
  },
  {
    firstTeam: teams.NLD,
    firstTeamScore: 1,
    secondTeam: teams.ECU,
    secondTeamScore: 1,
    gameDate: "2022-11-25T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Khalifa International Stadium",
    gameNumber: 19
  },
  {
    firstTeam: teams.ENG,
    firstTeamScore: 0,
    secondTeam: teams.USA,
    secondTeamScore: 0,
    gameDate: "2022-11-25T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Bayt Stadium",
    gameNumber: 20
  },
  {
    firstTeam: teams.TUN,
    firstTeamScore: 0,
    secondTeam: teams.AUS,
    secondTeamScore: 1,
    gameDate: "2022-11-26T13:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Janoub Stadium",
    gameNumber: 21
  },
  {
    firstTeam: teams.POL,
    firstTeamScore: 2,
    secondTeam: teams.SAU,
    secondTeamScore: 0,
    gameDate: "2022-11-26T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Education City Stadium",
    gameNumber: 22
  },
  {
    firstTeam: teams.FRA,
    firstTeamScore: 2,
    secondTeam: teams.DNK,
    secondTeamScore: 1,
    gameDate: "2022-11-26T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Stadium 974",
    gameNumber: 23
  },
  {
    firstTeam: teams.ARG,
    firstTeamScore: 2,
    secondTeam: teams.MEX,
    secondTeamScore: 0,
    gameDate: "2022-11-26T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Lusail Stadium",
    gameNumber: 24
  },
  {
    firstTeam: teams.JPN,
    firstTeamScore: 0,
    secondTeam: teams.CRI,
    secondTeamScore: 1,
    gameDate: "2022-11-27T13:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Ahmad Bin Ali Stadium",
    gameNumber: 25
  },
  {
    firstTeam: teams.BEL,
    firstTeamScore: 0,
    secondTeam: teams.MAR,
    secondTeamScore: 2,
    gameDate: "2022-11-27T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Thumama Stadium",
    gameNumber: 26
  },
  {
    firstTeam: teams.HRV,
    firstTeamScore: 4,
    secondTeam: teams.CAN,
    secondTeamScore: 1,
    gameDate: "2022-11-27T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Khalifa International Stadium",
    gameNumber: 27
  },
  {
    firstTeam: teams.ESP,
    firstTeamScore: 1,
    secondTeam: teams.DEU,
    secondTeamScore: 1,
    gameDate: "2022-11-27T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Bayt Stadium",
    gameNumber: 28
  },
  {
    firstTeam: teams.CMR,
    firstTeamScore: 3,
    secondTeam: teams.SRB,
    secondTeamScore: 3,
    gameDate: "2022-11-28T13:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Janoub Stadium",
    gameNumber: 29
  },
  {
    firstTeam: teams.KOR,
    firstTeamScore: 2,
    secondTeam: teams.GHA,
    secondTeamScore: 3,
    gameDate: "2022-11-28T16:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Education City Stadium",
    gameNumber: 30
  },
  {
    firstTeam: teams.BRA,
    firstTeamScore: 1,
    secondTeam: teams.CHE,
    secondTeamScore: 0,
    gameDate: "2022-11-28T19:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Stadium 974",
    gameNumber: 31
  },
  {
    firstTeam: teams.PRT,
    firstTeamScore: 2,
    secondTeam: teams.URY,
    secondTeamScore: 0,
    gameDate: "2022-11-28T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Lusail Stadium",
    gameNumber: 32
  },
  {
    firstTeam: teams.ECU,
    firstTeamScore: 1,
    secondTeam: teams.SEN,
    secondTeamScore: 2,
    gameDate: "2022-11-29T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Khalifa International Stadium",
    gameNumber: 35
  },
  {
    firstTeam: teams.NLD,
    firstTeamScore: 2,
    secondTeam: teams.QAT,
    secondTeamScore: 0,
    gameDate: "2022-11-29T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Bayt Stadium",
    gameNumber: 36
  },
  {
    firstTeam: teams.IRN,
    firstTeamScore: 0,
    secondTeam: teams.USA,
    secondTeamScore: 1,
    gameDate: "2022-11-29T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Thumama Stadium",
    gameNumber: 34
  },
  {
    firstTeam: teams.WLS,
    firstTeamScore: 0,
    secondTeam: teams.ENG,
    secondTeamScore: 1,
    gameDate: "2022-11-29T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Ahmad Bin Ali Stadium",
    gameNumber: 33
  },
  {
    firstTeam: teams.AUS,
    firstTeamScore: 1,
    secondTeam: teams.DNK,
    secondTeamScore: 0,
    gameDate: "2022-11-30T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Janoub Stadium",
    gameNumber: 37
  },
  {
    firstTeam: teams.TUN,
    firstTeamScore: 1,
    secondTeam: teams.FRA,
    secondTeamScore: 0,
    gameDate: "2022-11-30T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Education City Stadium",
    gameNumber: 38
  },
  {
    firstTeam: teams.POL,
    firstTeamScore: 0,
    secondTeam: teams.ARG,
    secondTeamScore: 2,
    gameDate: "2022-11-30T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Stadium 974",
    gameNumber: 39
  },
  {
    firstTeam: teams.SAU,
    firstTeamScore: 1,
    secondTeam: teams.MEX,
    secondTeamScore: 2,
    gameDate: "2022-11-30T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Lusail Stadium",
    gameNumber: 40
  },
  {
    firstTeam: teams.CAN,
    firstTeamScore: 1,
    secondTeam: teams.MAR,
    secondTeamScore: 2,
    gameDate: "2022-12-01T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Thumama Stadium",
    gameNumber: 42
  },
  {
    firstTeam: teams.HRV,
    firstTeamScore: 0,
    secondTeam: teams.BEL,
    secondTeamScore: 0,
    gameDate: "2022-12-01T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Ahmad Bin Ali Stadium",
    gameNumber: 41
  },
  {
    firstTeam: teams.CRI,
    firstTeamScore: 2,
    secondTeam: teams.DEU,
    secondTeamScore: 4,
    gameDate: "2022-12-01T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Bayt Stadium",
    gameNumber: 44
  },
  {
    firstTeam: teams.JPN,
    firstTeamScore: 2,
    secondTeam: teams.ESP,
    secondTeamScore: 1,
    gameDate: "2022-12-01T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Khalifa International Stadium",
    gameNumber: 43
  },
  {
    firstTeam: teams.GHA,
    firstTeamScore: 0,
    secondTeam: teams.URY,
    secondTeamScore: 2,
    gameDate: "2022-12-02T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Al Janoub Stadium",
    gameNumber: 45
  },
  {
    firstTeam: teams.KOR,
    firstTeamScore: 2,
    secondTeam: teams.PRT,
    secondTeamScore: 1,
    gameDate: "2022-12-02T18:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Education City Stadium",
    gameNumber: 46
  },
  {
    firstTeam: teams.CMR,
    firstTeamScore: 1,
    secondTeam: teams.BRA,
    secondTeamScore: 0,
    gameDate: "2022-12-02T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Lusail Stadium",
    gameNumber: 48
  },
  {
    firstTeam: teams.SRB,
    firstTeamScore: 2,
    secondTeam: teams.CHE,
    secondTeamScore: 3,
    gameDate: "2022-12-02T22:00:00.00Z",
    type: cupStages.group,
    gameStadium: "Stadium 974",
    gameNumber: 47
  },
  {
    firstTeam: teams.NLD, // 1A
    firstTeamScore: 3,
    secondTeam: teams.USA, // 2B
    secondTeamScore: 1,
    gameDate: '2022-12-03T18:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Khalifa International Stadium',
    gameNumber: 49
  },
  {
    firstTeam: teams.ARG, // 1C
    firstTeamScore: 2,
    secondTeam: teams.AUS, // 2D
    secondTeamScore: 1,
    gameDate: '2022-12-03T22:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Ahmad Bin Ali Stadium',
    gameNumber: 50
  },
  {
    firstTeam: teams.FRA, // 1D
    firstTeamScore: null,
    secondTeam: teams.POL, // 2C
    secondTeamScore: null,
    gameDate: '2022-12-04T18:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Al Thumama Stadium',
    gameNumber: 52
  },
  {
    firstTeam: teams.ENG, // 1B
    firstTeamScore: null,
    secondTeam: teams.SEN, // 2A
    secondTeamScore: null,
    gameDate: '2022-12-04T22:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Al Bayt Stadium',
    gameNumber: 51
  },
  {
    firstTeam: teams.JPN, // 1E
    firstTeamScore: null,
    secondTeam: teams.HRV, // 2F
    secondTeamScore: null,
    gameDate: '2022-12-05T18:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Al Janoub Stadium',
    gameNumber: 53
  },
  {
    firstTeam: teams.BRA, // 1G
    firstTeamScore: null,
    secondTeam: teams.KOR, // 2H
    secondTeamScore: null,
    gameDate: '2022-12-05T22:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Stadium 974',
    gameNumber: 54
  },
  {
    firstTeam: teams.MAR, // 1F
    firstTeamScore: null,
    secondTeam: teams.ESP, // 2E
    secondTeamScore: null,
    gameDate: '2022-12-06T18:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Education City Stadium',
    gameNumber: 55
  },
  {
    firstTeam: teams.PRT, // 1H
    firstTeamScore: null,
    secondTeam: teams.CHE, // 2G
    secondTeamScore: null,
    gameDate: '2022-12-06T22:00:00.00Z',
    type: cupStages.ro16,
    gameStadium: 'Lusail Stadium',
    gameNumber: 56
  },
  // {
  //   firstTeam: 'W53', // W53
  //   firstTeamScore: null,
  //   secondTeam: 'W54', // W54
  //   secondTeamScore: null,
  //   gameDate: '2022-12-09T18:00:00.00Z',
  //   type: cupStages.quarter,
  //   gameStadium: 'Education City Stadium',
  //   gameNumber: 58
  // },
  // {
  //   firstTeam: 'W49', // W49
  //   firstTeamScore: null,
  //   secondTeam: 'W50', // W50
  //   secondTeamScore: null,
  //   gameDate: '2022-12-09T22:00:00.00Z',
  //   type: cupStages.quarter,
  //   gameStadium: 'Lusail Stadium',
  //   gameNumber: 57
  // },
  // {
  //   firstTeam: 'W55', // W55
  //   firstTeamScore: null,
  //   secondTeam: 'W56', // W56
  //   secondTeamScore: null,
  //   gameDate: '2022-12-10T18:00:00.00Z',
  //   type: cupStages.quarter,
  //   gameStadium: 'Al Thumama Stadium',
  //   gameNumber: 60
  // },
  // {
  //   firstTeam: 'W51', // W51
  //   firstTeamScore: null,
  //   secondTeam: 'W52', // W52
  //   secondTeamScore: null,
  //   gameDate: '2022-12-10T22:00:00.00Z',
  //   type: cupStages.quarter,
  //   gameStadium: 'Al Bayt Stadium',
  //   gameNumber: 59
  // },
  // {
  //   firstTeam: 'W57', // W57
  //   firstTeamScore: null,
  //   secondTeam: 'W58', // W58
  //   secondTeamScore: null,
  //   gameDate: '2022-12-13T22:00:00.00Z',
  //   type: cupStages.semi,
  //   gameStadium: 'Lusail Stadium',
  //   gameNumber: 61
  // },
  // {
  //   firstTeam: 'W59', // W59
  //   firstTeamScore: null,
  //   secondTeam: 'W60', // W60
  //   secondTeamScore: null,
  //   gameDate: '2022-12-14T22:00:00.00Z',
  //   type: cupStages.semi,
  //   gameStadium: 'Al Bayt Stadium',
  //   gameNumber: 62
  // },
  // {
  //   firstTeam: 'L61', // L61
  //   firstTeamScore: null,
  //   secondTeam: 'L62', // L62
  //   secondTeamScore: null,
  //   gameDate: '2022-12-17T18:00:00.00Z',
  //   type: cupStages.third,
  //   gameStadium: 'Khalifa International Stadium',
  //   gameNumber: 63
  // },
  // {
  //   firstTeam: 'W61', // W61
  //   firstTeamScore: null,
  //   secondTeam: 'W62', // W62
  //   secondTeamScore: null,
  //   gameDate: '2022-12-18T18:00:00.00Z',
  //   type: cupStages.final,
  //   gameStadium: 'Lusail Stadium',
  //   gameNumber: 64
  // },
]

const weekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
]

function getTeamMatchResultClass(game, team) {
  const { firstTeam, firstTeamScore, secondTeamScore } = game
  if (firstTeamScore === secondTeamScore) { return ' tie' }
  if (team === firstTeam) {
    return firstTeamScore > secondTeamScore ? ' winner' : ' loser'
  }
  return secondTeamScore > firstTeamScore ? ' winner' : ' loser'
}

function getCupStageClass(game) {
  return Object.keys(cupStages).find(key => cupStages[key] === game.type);
}

let delay = -0.1
function createCard(game) {
  const { gameDate } = game
  const findDate = /(\d{4})-(\d{2})-(\d{2})/
  const year = gameDate.match(findDate)[1]
  const month = gameDate.match(findDate)[2]
  const day = gameDate.match(findDate)[3]
  const newDate = new Date(year, month - 1, day)
  const dayOfWeek = weekDays[newDate.getDay()]

  delay = delay + 0.1
  return `
    <div id="day${month}${day}" class="card${' ' + getCupStageClass(game)}" style="animation-delay: ${delay}s">
      <div><p>${game.type}</p></div>
      <h2>${day}/${month}<span>${dayOfWeek}</span></h2>
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
    gameStadium,
  } = game
  const matchTimeRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}:\d{2}):\d{2}\.\d{2}Z/
  const matchTime = gameDate.match(matchTimeRegex)[4]
  const month = gameDate.match(matchTimeRegex)[2]
  const day = gameDate.match(matchTimeRegex)[3]
  const alreadyCreatedCardOfThisDay = document.querySelector(
    `#day${month}${day}`
  )
  let firstGameOnCard = false
  if (!alreadyCreatedCardOfThisDay) {
    cards.innerHTML += createCard(game)
    firstGameOnCard = true
  }
  const gameList = document.querySelector(`#gamesOf${month}${day}`)
  gameList.innerHTML += `
  ${firstGameOnCard ? "" : "<hr>"}
<li class="gameCard">
   <div class="gameCardContent">
      <div class="firstTeam">
         <div class="teamFlag">
            <div class="test">
               <img src="./assets/flags/${firstTeam.ISO3166A2.toLowerCase()}.svg" alt="Bandeira do ${firstTeam.teamName
    }" class="leftFlag"/>
            </div>
            <strong class="teamName teamNameLeft">${firstTeam.teamName}</strong>
            <firstTeamFlagMask/>
         </div>
         <div class="pointsFrame">
            <strong class="teamPoints${getTeamMatchResultClass(game, firstTeam)}">${firstTeamScore ?? ""}</strong>
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
            <strong class="teamPoints${getTeamMatchResultClass(game, secondTeam)}">${secondTeamScore ?? ""}</strong>
         </div>
         <div class="teamFlag">
            <div>
              <img src="./assets/flags/${secondTeam.ISO3166A2.toLowerCase()}.svg" alt="Bandeira do ${secondTeam.teamName
    }" class="rightFlag"/>
            </div>
            <strong class="teamName teamNameRight">${secondTeam.teamName
    }</strong>
            <StadiumMask/>
         </div>
         
      </div>
   </div>
   <div class="gameCardBackground">
      <img src="./assets/stadiums/${gameStadium.replace(
      /\s/gi,
      "-"
    )}.png" alt="${gameStadium}" class="stadium" />
   </div>
</li>
`
}

games.forEach((game) => {
  createGame(game)
})
