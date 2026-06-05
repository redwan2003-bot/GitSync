const { GoogleGenAI } = require('@google/genai');

async function test() {
  const client = new GoogleGenAI({ apiKey: 'fake-key' });
  
  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: 'test',
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: 'object', // string instead of enum
          properties: {
            title: { type: 'string' },
          },
        }
      }
    });
    console.log('Success');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

test();
