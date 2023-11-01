export function sortTrick(listObj: any, listIds: any, key: string, trick = true) {
  // Create a map for constant time lookup
  const map = new Map(listObj.map((obj) => [obj[key], obj]));

  // Map over listIds and get the corresponding object from the map
  const results = listIds.map((id) => {
    if (!map.has(id) && !trick) {
      throw new Error(`Cannot find key ${key}=${id} in listObj`);
    }
    return map.get(id) ?? null;
  });

  return results;
}
