const { translate } = require('@vitalets/google-translate-api');

async function translateText(req, res) {
    
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Missing "text" field in request body.' });
        }

        const translatedText = await translate(text, { to: "fr" });
        
        return res.json({ translation: translatedText.text });
    } catch (error) {
        console.error('Translation error:', error);
        return res.status(500).json({ error: 'Something went wrong.' });
    }
}

module.exports = {
    translateText
};
