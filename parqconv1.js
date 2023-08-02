const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const parquet = require('parquetjs');

function convertCsvToParquet(csvFilePath, parquetFilePath) {
  const csvData = fs.readFileSync(csvFilePath, 'utf8');
  const results = Papa.parse(csvData, { header: true });

  const schema = {
    fields: results.meta.fields.map(field => ({ name: field, type: 'UTF8' })),
  };

  const writer = new parquet.ParquetWriter(schema, parquetFilePath);

  for (const row of results.data) {
    writer.appendRow(row);
  }

  writer.close();

  console.log(`CSV converted to Parquet successfully and saved at: ${parquetFilePath}`);
}

// Absolute paths to the CSV and Parquet files
const csvFilePath = 'C:/Users/shahm/OneDrive/Desktop/targetarcfiles/pk_study.csv';
const parquetFilePath = 'C:/Users/shahm/OneDrive/Desktop/targetarcfiles/output.parquet';

convertCsvToParquet(csvFilePath, parquetFilePath);


