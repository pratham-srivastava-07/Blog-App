'use client'

import CreateBlog, { FormSchema } from "@/components/CreateBlog";
import { toast } from "@/components/ui/use-toast";

export default function page() {
  const handleChange = (data: FormSchema) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
    return (
        <div className="mt-4">
          <CreateBlog onHandleSubmit={handleChange}/>
        </div>
    )
}