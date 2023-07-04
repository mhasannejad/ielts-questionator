import {Configuration, OpenAIApi} from "openai";
import {env} from "$env/dynamic/private";
import {json} from "@sveltejs/kit";

const configuration = new Configuration({
    apiKey: env.SECRET_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const POST = async ({request}) => {
    const quiz_props = await request.json()
    let prompt = `act as a professional english teacher who knows how to generate IELTS style questions , generate  ${quiz_props.quiz_count} ${quiz_props.quiz_level} level IELTS ${quiz_props.quiz_field} questions in form of  ${quiz_props.question_type} questions in a valid json formatted array in this array each item is a question and do not include any other property but properties included in following example:\n` +
        "[\n" +
        "  {\n" +
        "    \"question\":\"According to the article, which of the following statements is FALSE?\",\n" +
        "    \"option-1\":\" Working from home has become increasingly popular in recent years \",\n" +
        "    \"option-2\":\"Technology has enabled more people to access remote work opportunities\",\n" +
        "    \"option-3\":\"Remote workers have significantly fewer opportunities for connecting with colleagues and clients\",\n" +
        "    \"option-4\":\"Working in a home office can increase stress levels\"\n" +
        "  }\n" +
        "]"
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-16k-0613",
        messages: [{role: "user", content: prompt}],
        temperature: 1,
        max_tokens: 16000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    console.log(response.data.choices[0].message.content)
    return json(JSON.parse(response.data.choices[0].message.content))
}
