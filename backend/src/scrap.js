const { config } = require("dotenv");
const axios = require("axios");
const cheerio = require("cheerio");
const csv = require("fast-csv");
const fs = require("fs");

const reader = require('xlsx')


const ws = fs.createWriteStream("scrap.csv");
config();
const getGiai = (text) => {
  let index;
  let ketqua;
  const giais = [];
  for (let i = 1; i <= 18; i++) {
    const indexOld = index;
    if (i === 1) {
      index = -6;
    } else if (i < 13) {
      index -= 5;
    } else if (i < 17) {
      index -= 4;
    } else if (i === 17) {
      index -= 3;
    } else {
      index -= 2;
    }
    ketqua = text.slice(index, indexOld);
    giais.push(ketqua);
    console.log(i + " => " + ketqua);
  }
  csv.write([giais], { headers: true }).pipe(ws);
};

// scraping mien nam
const scrapingMN = async (date) => {
  const dateSplit = date.split("-");
  const day = dateSplit[0];
  const month = dateSplit[1];
  const year = dateSplit[2];

  date = date + ".html";
  const urlMN = process.env.BASE_URL_MN + date;
  try {
    const response = await axios.get(urlMN);
    const $ = cheerio.load(response.data);
    // get thu
    const thu = $(
      "#noidung > div:nth-child(3) > div:nth-child(2) > div.content > table.bkqmiennam > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td"
    ).text();
    // data 1 start
    const data1 = $(
      "#noidung > div:nth-child(3) > div:nth-child(2) > div.content > table.bkqmiennam > tbody > tr > td:nth-child(2) > table > tbody > tr > td:nth-child(1)"
    ).text();
    const date1Text = data1
      .split(/\>[\n\t\s]*\</g)
      .join("><")
      .split(/[\n\t]*/gm)
      .join("");
    getGiai(date1Text);
    // tinh
    const province1 = $(
      "#noidung > div:nth-child(3) > div:nth-child(2) > div.content > table.bkqmiennam > tbody > tr > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(1) > td"
    ).text();
    console.log(
      province1
        .split(/\>[\n\t\s]*\</g)
        .join("><")
        .split(/[\n\t]*/gm)
        .join("")
    );
    // data 1 end

    // data 2 start
    const data2 = $(
      "#noidung > div:nth-child(3) > div:nth-child(2) > div.content > table.bkqmiennam > tbody > tr > td:nth-child(2) > table > tbody > tr > td:nth-child(2)"
    ).text();
    const date2Text = data2
      .split(/\>[\n\t\s]*\</g)
      .join("><")
      .split(/[\n\t]*/gm)
      .join("");
    getGiai(date2Text);
    // tinh
    const province2 = $(
      "#noidung > div:nth-child(3) > div:nth-child(2) > div.content > table.bkqmiennam > tbody > tr > td:nth-child(2) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td"
    ).text();
    console.log(
      province2
        .split(/\>[\n\t\s]*\</g)
        .join("><")
        .split(/[\n\t]*/gm)
        .join("")
    );
    // data 2 end

    // data 3 start
    const data3 = $(
      "#noidung > div:nth-child(3) > div:nth-child(2) > div.content > table.bkqmiennam > tbody > tr > td:nth-child(2) > table > tbody > tr > td:nth-child(3)"
    ).text();
    const date3Text = data3
      .split(/\>[\n\t\s]*\</g)
      .join("><")
      .split(/[\n\t]*/gm)
      .join("");
    getGiai(date3Text);
    // tinh
    const province3 = $(
      "#noidung > div:nth-child(3) > div:nth-child(2) > div.content > table.bkqmiennam > tbody > tr > td:nth-child(2) > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(1) > td"
    ).text();
    console.log(
      province3
        .split(/\>[\n\t\s]*\</g)
        .join("><")
        .split(/[\n\t]*/gm)
        .join("")
    );
    // data 3 end
  } catch (error) {}
};
scrapingMN("24-12-2022");
module.exports = { scrapingMN };
