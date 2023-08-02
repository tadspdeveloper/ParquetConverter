// const reader = require('./lib/reader');
// const writer = require('./lib/writer');
// const schema = require('./lib/schema');
// const shredder = require('./lib/shred');

// New ECMAScript module import statements
import * as reader from './lib/reader';
import * as writer from './lib/writer';
import * as schema from './lib/schema';
import * as shredder from './lib/shred';
import * as parquet from './parquet.js';

//module.exports = {
  //ParquetEnvelopeReader: reader.ParquetEnvelopeReader,
  //ParquetReader: reader.ParquetReader,
  //ParquetEnvelopeWriter: writer.ParquetEnvelopeWriter,
  //ParquetWriter: writer.ParquetWriter,
  //ParquetTransformer: writer.ParquetTransformer,
  //ParquetSchema: schema.ParquetSchema,
  //ParquetShredder: shredder
//};
export const ParquetEnvelopeReader = reader.ParquetEnvelopeReader;
export const ParquetReader = reader.ParquetReader;
export const ParquetEnvelopeWriter = writer.ParquetEnvelopeWriter;
export const ParquetWriter = writer.ParquetWriter;
export const ParquetTransformer = writer.ParquetTransformer;
export const ParquetSchema = schema.ParquetSchema;
export const ParquetShredder = shredder;