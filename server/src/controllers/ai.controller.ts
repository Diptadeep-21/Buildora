import {
  Request,
  Response,
} from "express";

import Groq from "groq-sdk";

import {
  SYSTEM_PROMPT,
} from "../utils/systemPrompt";

const groq = new Groq({
  apiKey:
    process.env.GROQ_API_KEY,
});

export const generateAppConfig =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const { prompt } =
        req.body;

      /*
        VALIDATION
      */

      if (!prompt) {

        return res.status(400).json({
          success: false,
          message:
            "Prompt required",
        });
      }

      /*
        AI REQUEST
      */

      const completion =
        await groq.chat.completions.create({

          model:
            "llama-3.3-70b-versatile",

          temperature: 0.3,

          messages: [

            {
              role: "system",

              content:
                SYSTEM_PROMPT,
            },

            {
              role: "user",

              content:
                prompt,
            },
          ],
        });

      /*
        RAW RESPONSE
      */

      const rawContent =
        completion.choices[0]
          ?.message?.content ||
        "{}";

      /*
        PARSE JSON
      */

      const parsedConfig =
        JSON.parse(rawContent);

      /*
        VALIDATE
      */

      if (
        !parsedConfig.pages
      ) {

        throw new Error(
          "Invalid AI response"
        );
      }

      res.json({
        success: true,

        config:
          parsedConfig,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,

        message:
          "AI generation failed",
      });
    }
  };