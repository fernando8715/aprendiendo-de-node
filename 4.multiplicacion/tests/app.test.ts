import { ServerApp } from '../src/presentation/server-app';

describe('test app.ts', () => {

    test('should call serverApp with values', async() => {

        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '4', '-l', '5', '-s', '-n', 'test-fileName', '-d', 'test-destination'];

        await import('../src/app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 4,
            limit: 5,
            showTable: true,
            fileName: 'test-fileName',
            fileDestination: 'test-destination'
        });

    });
});