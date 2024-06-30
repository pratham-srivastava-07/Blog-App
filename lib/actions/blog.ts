"use server"

import { FormSchema } from "@/components/CreateBlog"
import { createServerClient } from "@supabase/ssr"
import {cookies} from 'next/headers'

const cookieStore = cookies()

const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, 
    {
        cookies: {
            get(name: string) {
                return cookieStore.get(name)?.value;
            }
        }
    }
)


export async function BlogForm(data: FormSchema) {
    // To be continued
}