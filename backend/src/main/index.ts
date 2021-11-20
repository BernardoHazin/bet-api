import "module-alias/register";
import fs from "fs";
import path from "path";
import jsyml from "js-yaml";
import setup from "@/config/setup";
import env from "@/config/enviroment";

const dir = path.resolve(__dirname, "../../src/config/routes");

fs.readdirSync(dir).forEach((file) => {
  const content = fs.readFileSync(path.join(dir, file), "utf-8");
  jsyml.load(content);
});

const app = setup();

app.listen(env.port, () => {
  console.log("Listening at port:", env.port);
});
