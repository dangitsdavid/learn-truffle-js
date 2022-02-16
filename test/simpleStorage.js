const SimpleStorage = artifacts.require('SimpleStorage.sol');

contract('SimpleStorage', () => {
    it('Should update data', async () => {
        const storage = await SimpleStorage.new();
        await storage.updateData(10);
        const data = await storage.readData();
        assert(data.toString() === '10');
        // assert(data.toNumber() === 10); // not a good method due to num length
    });
});