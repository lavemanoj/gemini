import "./database.js"
import { PostModulel } from "./models.js"        

import posts from "./posts.json" with { type: "json" };

PostModulel.insertMany(posts).then(() => {
    console.log("Data inserted successfully");
}).catch(error => {
    console.error("Error inserting data:", error);
})