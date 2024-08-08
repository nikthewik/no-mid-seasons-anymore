// Libraries
import React from "react";
import { Navigate, Params, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Types
import { NewArctic, Co2, Methane, No2, Temp } from "../types/DataTypes";
// Helpers
import getData from "../services/apiGlobalWarming";
import manageApiData from "../helpers/manageApiData";
import manageTitle from "../helpers/manageTitle";
import checkChart from "../helpers/checkChart";
// Components
import Title from "../components/Title/Title";
import ChartText from "../components/ChartText/ChartText";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import ChartTemp from "../components/ChartTemp/ChartTemp";
import ChartMethane from "../components/ChartMethane/ChartMethane";
import ChartArctic from "../components/ChartArctic/ChartArctic";
import ChartCo2 from "../components/ChartCo2/ChartCo2";
import ChartNo2 from "../components/ChartNo2/ChartNo2";

function Charts(): React.ReactElement {
  const { chart }: Readonly<Params<string>> = useParams();

  const { isPending, isError, data } = useQuery({
    queryKey: ["chart", chart],
    queryFn: () => getData(chart),
    networkMode: "always",
  });

  if (!chart) return <Error />;
  if (checkChart(chart) === false) return <Navigate to="*" />;

  if (isPending)
    return (
      <>
        <Title>{manageTitle(chart)}</Title>
        <ChartText chart={chart} />
        <Spinner />
      </>
    );
  if (isError) return <Error />;

  const result = manageApiData(data, chart);

  if (!result) return <Error />;

  // Narrowing Data Types With Filter Method and Type Guards
  const resultTemp: Temp[] = result.filter((item): item is Temp => !!item);
  const resultMethane: Methane[] = result.filter(
    (item): item is Methane => !!item
  );
  const resultArctic: NewArctic[] = result.filter(
    (item): item is NewArctic => !!item
  );
  const resultCo2: Co2[] = result.filter((item): item is Co2 => !!item);
  const resultNo2: No2[] = result.filter((item): item is No2 => !!item);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${manageTitle(chart)} | NMSA`}</title>
      </Helmet>

      <Title>{manageTitle(chart)}</Title>
      <ChartText chart={chart} />

      {chart === "temperature" && <ChartTemp data={resultTemp} />}
      {chart === "methane" && <ChartMethane data={resultMethane} />}
      {chart === "arctic" && <ChartArctic data={resultArctic} />}
      {chart === "co2" && <ChartCo2 data={resultCo2} />}
      {chart === "no2" && <ChartNo2 data={resultNo2} />}
    </HelmetProvider>
  );
}

export default Charts;
