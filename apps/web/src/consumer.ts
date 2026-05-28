// consumer.ts
// This script processes messages from the Cloudflare Queue "reposignal-github-events".
// It runs in the context of a Cloudflare Worker with a queue binding.

export default {
  async queue(batch: any, env: any, ctx: any) {
    // batch: an array of QueueMessages
    // env: contains bindings defined in wrangler.jsonc, e.g., MY_QUEUE (producer) if needed.
    // ctx: provides a waitUntil method for async background tasks.

    for (const message of batch) {
      try {
        // The message body is the payload we sent from the producer worker.
        const payload = await message.json();
        // TODO: Implement actual processing logic here.
        // Example: forward to internal API, log, or trigger GitHub webhook.
        console.log('Processing queue message:', payload);
        // If you need to make async calls, use ctx.waitUntil to not block batch processing.
        // ctx.waitUntil(fetch(env.INTERNAL_API_URL, { method: 'POST', body: JSON.stringify(payload) }));
      } catch (err) {
        // If processing fails, push the message to the dead‑letter queue.
        // The dead‑letter queue is defined in wrangler.jsonc as "my-queue-dlq".
        // Throwing an error will automatically move the message to the DLQ.
        console.error('Failed to process message, moving to DLQ', err);
        throw err;
      }
    }
  }
};

