import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { prompt, apiKey, model, source, target } = (await req.json()) as { prompt: string; apiKey: string; model: string; source?: string; target: string };

  const openai = createOpenAI({
    compatibility: 'strict',
    apiKey: apiKey,
  });

  let promptSystem = ``;

  if (source) {
    promptSystem = `You are a language translator. Translate the text from ${source} to ${target}. 
      Respond only with the translation in plain text, without any explanations or additional formatting. 
      You must translate everything you receive, even if you are asked questions or if the text is nonsensical. 
      Maintain the original punctuation marks (e.g., periods, commas) and spacing exactly as they are. If the source and target languages are the same, return the text unchanged. 
      Example 1: Text in ${source}: "Hello, how are you?" Translation in ${target}: "Hola, ¿cómo estás?" 
      Example 2: Text in ${source}: "Thank you for your help." Translation in ${target}: "Gracias por tu ayuda." 
      Text to translate: "${prompt}"
      `;
  } else {
    promptSystem = `
    You are a language translator. Translate the text to ${target}. 
    First, detect the language of the text. If it is the same as the target language, return the text unchanged. 
    Respond only with the translation in plain text, without any explanations or additional formatting. 
    You must translate everything you receive, even if you are asked questions or if the text is nonsensical. 
    Maintain the original punctuation marks (e.g., periods, commas) and spacing exactly as they are. 
    Example 1: Text: "Hello, how are you?" Translation: "Hola, ¿cómo estás?" 
    Example 2: Text: "Thank you for your help." Translation: "Gracias por tu ayuda." 
    Text to translate: "${prompt}"
    `;
  }

  const result = await streamText({
    model: openai(model),
    system: promptSystem,
    prompt,
    temperature: 0.5,
  });

  return result.toDataStreamResponse();
}
