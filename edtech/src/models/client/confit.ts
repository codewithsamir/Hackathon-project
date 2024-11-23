import env from "@/env";
import { Client, Account } from "appwrite";


const client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId);                 // Your project ID

const account = new Account(client);


export {account}
