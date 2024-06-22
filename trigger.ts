import { Trigger } from "deno-slack-api/types.ts";
import { TriggerEventTypes, TriggerTypes, TriggerContextData } from "deno-slack-api/mod.ts";

const trigger: Trigger<typeof ExampleWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "Message sent",
  description: "Send the message to Discord",
  workflow: "#/workflows/send_to_discord",
  event: {
    event_type: TriggerEventTypes.MessagePosted,
    channel_ids: ["C079AQLJDCK"],
  },
  filter: {
      version: 1,
      root: {
        statement: "{{data}}"
      }
    }
  },
  inputs: {
    stringtoSend: {
      value: {{data.text}},
    }
  },
};

export default trigger;

