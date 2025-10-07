async function generateResponse(shortText) {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "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",  // <-- put your Groq API key here
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",   // you can switch to mixtral if you prefer
        messages: [
          { role: "system", content: "You are an AI communication assistant for paralyzed patients. Expand short phrases into polite, natural speech." },
          { role: "user", content: shortText }
        ],
        max_tokens: 50,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() || shortText;
  } catch (e) {
    console.error("Groq generation failed:", e);
    return shortText; // fallback
  }
}
