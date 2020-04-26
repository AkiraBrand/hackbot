import Magic8Ball from '@/commands/magic8ball';
import { mockMessage, MockMessage } from '../mocks/discord';

let sendMock: MockMessage;
beforeEach(() => {
  sendMock = jest.fn();
  mockMessage.channel.send = sendMock;
});

describe('Magic8Ball Command', () => {
  test('Returns an answer from responses', () => {
    Magic8Ball.execute(['Will', 'this', 'work'], mockMessage);
    const sentMessage = sendMock.mock.calls[0][0];
    expect(Magic8Ball.responses.indexOf(sentMessage)).toBeGreaterThan(-1);
  });
});
