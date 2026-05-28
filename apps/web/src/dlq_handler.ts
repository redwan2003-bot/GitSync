// dlq_handler.ts
// This script handles messages that landed in the dead‑letter queue.
// It can be attached to a worker via the "dead_letter_queue" binding.

export default {
  async queue(batch: any, env: any, ctx: any) {
    for (const message of batch) {
      try {
        const payload = await message.json();
        // Log the failed payload for later inspection.
        console.error('DLQ message:', payload);
        // Optionally store in a log service or notify via webhook.
      } catch (e) {
        console.error('Unable to parse DLQ message', e);
      }
    }
  }
};
