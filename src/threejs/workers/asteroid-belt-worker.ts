import { createAsteroidBeltMergedGeometries } from '../utils/create-asteroid-belt-merged-geometries';

onmessage = async function(e) {
  const belt = e.data;
  console.log('Worker: begin building geometries for belt ' + belt);
  const res = await createAsteroidBeltMergedGeometries(belt);
  console.log('Worker: end building geometries for belt ' + belt);
  const ret = JSON.stringify({
    mergedAsteroidGeometry: res.mergedAsteroidGeometry.toJSON(),
    mergedTailsGeometry: res.mergedTailsGeometry.toJSON(),
  });
  postMessage(ret);
};
