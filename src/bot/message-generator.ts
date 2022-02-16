export class MessageGenerator {
  generateReplyMarkupMessage() {
    return {
      keyboard: [[{ text: 'Location', request_location: true }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    };
  }
}
