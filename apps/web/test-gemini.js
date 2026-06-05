require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

async function test() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('No API key');
  
  const client = new GoogleGenAI({ apiKey });
  const model = 'gemini-2.0-flash'; // Let's try this

  const prompt = `Create a compact project card for LinkedIn.
Repository: GitSync
Description: GitHub progress to credible LinkedIn visibility
Language: TypeScript
URL: https://github.com/redwan2003-bot/GitSync

Output Requirements:
Return a JSON object with the following fields: title, subtitle, details, callToAction.`;

  try {
    const response = await client.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });
    console.log('Success:', response.text);
  } catch (err) {
    console.error('Error generating content:', err);
  }
}

test();
