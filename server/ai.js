import dotenv from "dotenv";
dotenv.config();

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const res = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-2-7b-chat-hf",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: `I have: ${ingredientsString}. Give me a recipe.`,
            },
          ],
          max_tokens: 500,
        }),
      }
    );

    console.log("HF REQUEST using ROUTER API");

    const responseText = await res.text();
    console.log("HF RAW RESPONSE:", responseText);

    const data = JSON.parse(responseText);

    return data.choices?.[0]?.message?.content || "No recipe returned.";
  } catch (err) {
    console.error("HF fetch error:", err);
    return `AI error: ${err.message}`;
  }
}
