"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Meno musí mať aspoň 2 znaky." }), // Translated
  email: z.string().email({ message: "Prosím, zadajte platnú emailovú adresu." }), // Translated
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Predmet musí mať aspoň 5 znakov." }), // Translated
  message: z.string().min(10, { message: "Správa musí mať aspoň 10 znakov." }), // Translated
})

export default function ContactForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Formulár odoslaný:", values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast({
      title: "Správa odoslaná!", // Translated
      description: "Ďakujeme, že ste nás kontaktovali. Čoskoro sa vám ozveme.", // Translated
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Celé meno</FormLabel> {/* Translated */}
                <FormControl>
                  <Input placeholder="Ján Novák" {...field} /> {/* Translated */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emailová adresa</FormLabel> {/* Translated */}
                <FormControl>
                  <Input type="email" placeholder="jan.novak@example.com" {...field} /> {/* Translated */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefónne číslo (Nepovinné)</FormLabel> {/* Translated */}
              <FormControl>
                <Input type="tel" placeholder="(09xx) xxx xxx" {...field} /> {/* Translated */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Predmet</FormLabel> {/* Translated */}
              <FormControl>
                <Input placeholder="Dopyt na Moderný Eko Dom" {...field} /> {/* Translated */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Správa</FormLabel> {/* Translated */}
              <FormControl>
                <Textarea placeholder="Povedzte nám viac o vašom projekte alebo otázke..." rows={6} {...field} />{" "}
                {/* Translated */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full md:w-auto" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Odosielam..." : "Odoslať správu"} {/* Translated */}
        </Button>
      </form>
    </Form>
  )
}
