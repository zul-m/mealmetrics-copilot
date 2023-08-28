// create a controller

const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const generateInfo = async (req, res) => {
    try {
        const response = await openai.createCompletion({
            engine: 'davinci',
            prompt: req.body.prompt,
            maxTokens: 64,
            temperature: 0.9,
            topP: 1,
            presencePenalty: 0,
            frequencyPenalty: 0,
            bestOf: 1,
            n: 1,
            stream: false,
            stop: ['\n'],
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}