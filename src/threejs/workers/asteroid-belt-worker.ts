import { createAsteroidBeltMergedGeometries } from '../utils/create-asteroid-belt-merged-geometries';

onmessage = async function(e) {
  const belt = e.data;
  const res = await createAsteroidBeltMergedGeometries(belt);
  const ret = JSON.stringify({
    mergedAsteroidGeometry: res.mergedAsteroidGeometry.toJSON(),
    mergedTailsGeometry: res.mergedTailsGeometry.toJSON(),
  });
  postMessage(ret);
};
