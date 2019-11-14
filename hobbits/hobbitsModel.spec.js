const db = require('../data/dbConfig.js');

const { insert } = require('./hobbitsModel.js');

describe('hobbits model', function() {
  describe('insert()', function() {
    beforeEach(async () => {
      await db('hobbits').truncate();
    });
    it('should insert a hobbit', async function() {
      // insert a hobbit
      await insert({ name: 'sam' });

      // check it was inserted
      const hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(1);
    });

    it('should insert the provided hobbit', async function() {
      await insert({ name: 'jeff' });
      await insert({ name: 'gladys' });

      const hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(2);
      expect(hobbits[0].name).toBe('jeff');
      expect(hobbits[1].name).toBe('gladys');
    });

    it('should return the inserted hobbit', async () => {
      let hobbit = await insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
      expect(hobbit.id).toBeDefined();

      hobbit = await insert({ name: 'gaffer' });
      expect(hobbit.name).toBe('gaffer');
      expect(hobbit.id).toBeDefined();
    });
  });
});
