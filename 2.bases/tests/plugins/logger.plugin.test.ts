import { buildLogger, logger as winstonLogger } from "../../src/plugins";

describe('plugins/logger.plugins', () => {

    test('buildLoger should return log and error functions', () => {

        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test('logger.log should return a log message', () => {

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);
        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalled();
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service,
            })
        );
    });

    test('logger.error should return a error message', () => {

        const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');
        const message = 'test error';
        const service = 'test service';

        const logger = buildLogger(service);
        logger.error(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'error',
            expect.objectContaining({
                message,
                service,
            })
        );

    });
});