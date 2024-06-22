import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

// Workflow definition
export const SendToDiscord = DefineWorkflow({
  callback_id: "send_to_discord",
  title: "Send message to discord",
});

const inputForm = SendToDiscord.addStep(
  console.log(data.text)
);


