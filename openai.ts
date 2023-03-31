import { Configuration, OpenAIApi } from "openai"

const config = new Configuration({
    organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION_ID,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION_ID
})

const openai = new OpenAIApi(config)

export default openai