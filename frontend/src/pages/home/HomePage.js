import React, { useEffect, useState } from "react";
import AppBarComponent from "../../components/appbar/Appbar";
import axios from "axios";
import { BASE_URL } from "../../utils/contants";
import { Box, Grid, TextField } from "@mui/material";
import KqxsTable from "../../components/table/KqxsTable";
import { Container } from "@mui/system";
import SelectBase from "../../components/select/SelectBase";

function HomePage() {
  const [results, setResults] = useState();
  const [dates, setDates] = useState();
  const [awards, setAwards] = useState();
  const [provinces, setProvinces] = useState();

  // options
  const [province, setProvince] = useState("");
  const [award, setAward] = useState("");
  const [date, setDate] = useState();

  useEffect(() => {
    // get results
    const getResults = async () => {
      try {
        const resp = await axios.get(`${BASE_URL}/v1/kqxs`);
        if (resp && resp.status === 200) {
          // filter province
          let data = resp.data;
          if (province) {
            data = data.filter((item) => item.province._id === province);
          }
          if (award) {
            data = data.filter((item) => item.award._id === award);
          }
          if (date) {
            const dateKey = date.split("-").join("");
            data = data.filter((item) => item.date.key === dateKey);
          }
          setResults(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getResults();
  }, [province, award, date]);

  useEffect(() => {
    // get dates
    const getDates = async () => {
      try {
        const resp = await axios.get(`${BASE_URL}/v1/date`);
        if (resp && resp.status === 200) {
          setDates(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // get awards
    const getAwards = async () => {
      try {
        const resp = await axios.get(`${BASE_URL}/v1/award`);
        if (resp && resp.status === 200) {
          setAwards(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // get awards
    const getProvinces = async () => {
      try {
        const resp = await axios.get(`${BASE_URL}/v1/province`);
        if (resp && resp.status === 200) {
          setProvinces(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDates();
    getAwards();
    getProvinces();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <AppBarComponent></AppBarComponent>
        <Box sx={{ mt: 5 }}>
          <Grid container direction="row" spacing={2} mb={3}>
            <Grid item md={3}>
              <SelectBase
                lable="Tỉnh"
                options={provinces}
                value={province}
                setValue={setProvince}
                id="select-province"
              />
            </Grid>
            <Grid item md={3}>
              <SelectBase
                lable="Giải"
                options={awards}
                value={award}
                setValue={setAward}
                id="select-award"
              />
            </Grid>
            <Grid item md={3}>
              <TextField
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </Grid>
          </Grid>
          <KqxsTable results={results} />
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
