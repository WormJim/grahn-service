const ModelsRoot = require('../../../models');

let Models = null;
let db = null;

async function findOne(id) {
  try {
    return await Models.Event.findOne({
      where: { id: id },
      include: [Models.Location, Models.Highlight]
    });
  } catch (error) {
    return error;
  }
}

module.exports = (_db) => {
  Models = ModelsRoot(_db, false);
  db = _db;
  return { findOne };
};
