"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {BsSave} from "react-icons/bs"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons"
import { Switch } from "@/components/ui/switch"
import { PencilIcon, RocketIcon, StarIcon } from "lucide-react"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function CreateBlog() {

  const [ isPreview, setPreview] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(onSubmit)} 
      className="w-full rounded-md space-y-6">
        <div className="px-5 flex gap-5 items-center flex-wrap justify-between">
          <div className="flex items-center gap-7">
           <span 
           role="button" 
           tabIndex={0} 
           onClick={()=>setPreview(!isPreview)}
           className="flex items-center gap-1 bg-zinc-600 p-2 rounded-md hover:ring-2 hover:ring-zinc-400 transition-all">
           {isPreview ? 
           
            (<>
            <Pencil1Icon/>
            Edit
           </>
          )
          :
          (
             <>
          <EyeOpenIcon/>
            Preview
           </>
          )
          }
            
            </span>
            <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className="flex items-center gap-2 border bg-zinc-700 p-2 rounded-md">
                <StarIcon/>
                <span>Premium</span>
              <Switch/>
              </div>
              </FormControl>
              
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className="flex items-center gap-2 border bg-zinc-700 p-2 rounded-md">
                <RocketIcon/>
                <span>Publish</span>
              <Switch/>
              </div>
              </FormControl>
              
            </FormItem>
          )}
        />
        </div>
        <Button className="flex items-cennter gap-2">
          <BsSave/>
          Save
          </Button>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

