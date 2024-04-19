"use server"

import { redirect } from "next/navigation";

export async function create(formData: FormData) {
    await new Promise(r => setTimeout(r, 2000));

    const currentDate = new Date();

    const dateString = currentDate.toISOString();

    const data = {
        comment: formData.get("comment"),
        date: dateString
    };

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const resp = await fetch(`${process.env.API_BASE_URL}/comment`, options);
    const respData = await resp.json()

    // if (resp.status === 201) location.reload();
}