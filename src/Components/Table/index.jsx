import { useEffect, useState } from "react";
import GridItem from "../GridItem";
import styles from "./style.module.css";
import TableHeading from "../TableHeading/TableHeading";
export default function Table() {
  const [apiData, setApiData] = useState();
  const TableHeadData = [
    <TableHeading>#</TableHeading>,
    <TableHeading>Place Name</TableHeading>,
    <TableHeading>Country</TableHeading>,
  ];

  useEffect(() => {
    async function fetchData() {
      const params = new URLSearchParams({
        countryIds: "IN",
        namePrefix: "del",
        limit: "10",
      });
      const res = await fetch(
        "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?" + params,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            "X-RapidAPI-Key":
              "bc5064bfc3msh166cb47c5574357p1b2852jsn24d111df1afb",
          },
        }
      );
      const data = await res.json();
      setApiData(data);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <GridItem numberOfColoum={TableHeadData?.length} data={TableHeadData} />
      {apiData &&
        apiData?.data?.length > 0 &&
        apiData?.data?.map((data, index) => (
          <GridItem
            numberOfColoum={TableHeadData?.length}
            data={[index + 1, data?.city, data?.country]}
          />
        ))}
    </div>
  );
}
