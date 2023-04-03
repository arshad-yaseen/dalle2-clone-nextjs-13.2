import openai from "@/openai";

const generateSuggession = async () => {
    
  const response = await openai.createCompletion({
    prompt: "Write a random more detailed text prompt for DALL.E to generate an image. Do not wrap the answer in quotes.",
    max_tokens: 50,
    temperature: 0.9,
    model: "text-davinci-003",
    
  })

  const responseText = response.data.choices[0].text?.trim();

  return responseText;
  
}
const generateImage = async (prompt:string) => {
    
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;

  return image_url;
  
}

export { generateSuggession, generateImage };