import useSWR from "swr";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import Plant from "./Plant";
import Pagination from "./Pagination";
import SortButton from "./SortButton";

const fetcher = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const PlantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const PaginatedList = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("desc");
  const limit = 5;

  const { data, error } = useSWR(
    `https://62018bfab8735d00174cb4e9.mockapi.io/plant?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`,
    fetcher
  );

  if (!data || !data.items) {
    return null;
  }

  return (
    <Container>
      <SortButton order={order} setOrder={setOrder} />
      <PlantContainer>
        {data.items.map((plant) => (
          <Plant plant={plant} key={plant.name} />
        ))}
      </PlantContainer>
      <Pagination
        page={page}
        setPage={setPage}
        limit={limit}
        total={data.total}
      />
    </Container>
  );
};

export default PaginatedList;
