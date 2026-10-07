import {ErrorService} from './error.service';

describe('ErrorService', () => {

  it('should emit a friendly message when the backend is unreachable', () => {
    const service = new ErrorService();
    const messages: string[] = [];
    service.error$.subscribe(message => messages.push(message));

    service.throw('Unknown Error');

    expect(messages.length).toBe(1);
    expect(messages[0]).toContain('backend server is not (yet) responding');
  });

  it('should ignore other errors', () => {
    const service = new ErrorService();
    const messages: string[] = [];
    service.error$.subscribe(message => messages.push(message));

    service.throw('Not Found');

    expect(messages.length).toBe(0);
  });
});
