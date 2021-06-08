#! /usr/bin/env ts-node --compiler-options {"module":"CommonJS","lib":["es2020"]}
//
//

import fs from 'fs';
import readline from 'readline';
import path from 'path';

// Data Paths
const pathToInputJson = path.join(__dirname, 'rawData', 'mpc-asteroids.json');
const pathToOutputJson = path.join(
  __dirname,
  'src',
  'threejs',
  'data',
  'json',
  'asteroids'
);

const HVals = [
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  999,
] as const;
type THVals = typeof HVals[number];

const histo: any = { max: -999999999999, min: 999999999999 };
const orbitTypes = [
  'MBA',
  'distantObject',
  '1kmNEO',
  'not1kmNEO',
  'PHA',
] as const;
type TOrbitTypes = typeof orbitTypes[number];

interface IWriteStreams {
  [index: string]: {
    ws: fs.WriteStream;
    isFirstObjWritten: boolean;
  };
}

async function processLineByLine() {
  // --->>>

  // Create a writeStream for each value of H and orbitType
  const writeStreams: IWriteStreams = {};
  for (let j = 0; j < orbitTypes.length; j++) {
    for (let k = 0; k < HVals.length; k++) {
      const H = HVals[k];
      const orbitType = orbitTypes[j];
      const key = getWriteStreamKey(orbitType, H);
      const file = `${pathToOutputJson}/${key}`;
      console.log('file: ', file);
      writeStreams[key] = {
        ws: fs.createWriteStream(file),
        isFirstObjWritten: false,
      };
    }
  }

  // Begin each file with a JSON '['
  Object.keys(writeStreams).forEach(key => writeStreams[key].ws.write('[\n'));

  // Read raw data line by line
  const fileStream = fs.createReadStream(pathToInputJson);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // Main loop
  let l = 0; // Tracks line number
  let strObj = '';
  for await (let line of rl) {
    printProgress(l);

    // Skip first/last lines
    if (['[', ']'].includes(line)) {
      continue;
    }

    strObj += line;
    const isEndOfObj = line.includes('},');

    if (isEndOfObj) {
      strObj = strObj.replace('},', '}');
      const newObj = JSON.parse(strObj);
      strObj = '';

      // Compute histo numbers
      if (newObj.H && newObj.H > histo.max) histo.max = newObj.H;
      if (newObj.H && newObj.H < histo.min) histo.min = newObj.H;
      if (!newObj.H) histo.noH = histo.noH + 1 || 1;
      if (newObj.H) histo.withH = histo.withH + 1 || 1;
      for (let k = 0; k < HVals.length; k++) {
        const H = HVals[k];
        if (newObj.H < H) histo['<' + H] = histo['<' + H] + 1 || 1;
      }

      // Write to streams for different values of H and orbitType
      if (newObj.H) {
        for (let k = 0; k < HVals.length; k++) {
          const H = HVals[k];

          // Only record bodies below this H
          if (newObj.H > H) continue;

          let orbitType: TOrbitTypes | undefined;

          if (newObj.NEO_flag) {
            orbitType = newObj.One_km_NEO_flag ? '1kmNEO' : 'not1kmNEO';
          }
          if (newObj.Orbit_type === 'MBA') {
            orbitType = 'MBA';
          }
          if (newObj.Orbit_type === 'Distant Object') {
            orbitType = 'distantObject';
          }
          if (newObj.PHA_flag) {
            orbitType = 'PHA';
          }

          if (orbitType) {
            // Only copy needed data for output:
            const outObj = {
              H: newObj.H,
              name: newObj.Name,
              desig: newObj.Principal_desig,
              epoch: newObj.Epoch,
              ma: newObj.M,
              w: newObj.Peri,
              om: newObj.Node,
              i: newObj.i,
              e: newObj.e,
              a: newObj.a,
            };

            // Logic to avoid first comma in array
            const key = getWriteStreamKey(orbitType, H);
            let sep = ',\n';
            if (!writeStreams[key].isFirstObjWritten) {
              sep = '\n';
              writeStreams[key].isFirstObjWritten = true;
            }
            // Write obj to file
            writeStreams[key].ws.write(sep + JSON.stringify(outObj));
          }
        }
      }
    }

    // Increment counter
    l++;
  }

  // Finish each file with a JSON ']'
  Object.keys(writeStreams).forEach(key => {
    writeStreams[key].ws.write(']\n');
    writeStreams[key].ws.end();
  });

  // Print and save frequencies
  const histoStr = JSON.stringify(histo, null, 2);
  console.log('>>>> ', histoStr);
  fs.writeFileSync(`${pathToOutputJson}/_histo.json`, histoStr);
}

processLineByLine();

function printProgress(i: number) {
  const lineCount = 34_887_312;
  if (i % 10000 === 0) {
    const dp = 1000;
    console.log('i: ', i, ' ', ((i / lineCount) * 100).toFixed(1), '%');
  }
}

function getWriteStreamKey(orbitType: TOrbitTypes, H: THVals) {
  return `asteroids-${orbitType}-h-${H}.json`;
}
