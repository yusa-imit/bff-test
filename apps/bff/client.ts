import { treaty } from "@elysiajs/eden";
import type { ElysiaServer } from ".";

export const apiClient = treaty<ElysiaServer>("localhost:3000");

async function check(){
    const {data, error} = await apiClient.api.sample["my-sample"].index.get();
    data?.list

}