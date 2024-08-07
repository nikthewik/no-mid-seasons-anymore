/**************************************************************************/

// Charts
type Temp = {
  time: string;
  station: string;
  land: string;
};

type Methane = {
  date: string;
  average: string;
  trend: string;
  averageUnc: string;
  trendUnc: string;
};

type No2 = Methane;

type Co2 = {
  year: string;
  month: string;
  day: string;
  cycle: string;
  trend: string;
};

// Arctic from API
type OldArctic = {
  value: number;
  anom: number;
  monthlyMean: number;
};

// Arctic reformatted
type NewArctic = {
  date: string;
  value: number;
};

/**************************************************************************/

// Raw data form API
type ApiData = {
  data: {
    result: Temp[];
    methane: Methane[];
    arcticData: {
      data: OldArctic[];
    };
    co2: Co2[];
    nitrous: No2[];
  };
};

/**************************************************************************/

// Data after manageApiData()
type ManagedData = Temp[] | Methane[] | NewArctic[] | Co2[] | No2[] | undefined;

/**************************************************************************/

export type {
  ApiData,
  ManagedData,
  Temp,
  Methane,
  OldArctic,
  NewArctic,
  Co2,
  No2,
};
