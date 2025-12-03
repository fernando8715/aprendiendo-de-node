const runCommand = async (args: string[]) => {

    process.argv = [...process.argv, ...args];
    const { yarg } = await import('../../src/config/plugins/yarn.plugin');

    return yarg;

}



describe('test yarn.plugin', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });


    test('should return default values', async () => {

        const argv = await runCommand(['-b', '5']);

        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'table',
            d: 'output',
        }));

    })

    test('should return configuration with custom values', async () => {

        const comands = ['-b', '10', '-l', '7', '-s', '-n', 'multiplication-7', '-d', 'custom/outputs/']

        const argv = await runCommand(comands);

        expect(argv).toEqual(expect.objectContaining({
            b: 10,
            l: 7,
            s: true,
            n: 'multiplication-7',
            d: 'custom/outputs/',
        }));


    });

});

