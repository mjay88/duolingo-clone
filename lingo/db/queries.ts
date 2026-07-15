import {cache} from "react";
import db from "./drizzle";
import {courses} from "./schema"

export const getCourses = cache(async () => {
    //syntax has changed from tutorial
    const data = await db.select().from(courses);

    return data;
})