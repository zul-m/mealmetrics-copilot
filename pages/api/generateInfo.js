// create a controller

const { Configuration, OpenAIApi } = require("openai");
const { recipePrompt } = require("../../data/recipe.json");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const generateInfo = async (req, res) => {
    const { recipe } = req.body;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `${recipePrompt}${recipe}` }],
            maxTokens: 200,
            temperature: 0,
            n: 1,
        });
        const response = completion.data.choices[0].message.content;

        return res.status(200).json({
            success: true,
            data: response,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}