"use client"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Meno musí mať aspoň 2 znaky." }),
  email: z.string().email({ message: "Prosím, zadajte platnú emailovú adresu." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Predmet musí mať aspoň 5 znakov." }),
  message: z.string().min(10, { message: "Správa musí mať aspoň 10 znakov." }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: FormData) {
    console.log("Formulár odoslaný:", data)
    await new Promise((r) => setTimeout(r, 1000))
    alert("Správa odoslaná! Ďakujeme, že ste nás kontaktovali.")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label>Celé meno</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Ján Novák"
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label>Emailová adresa</label>
          <input
            type="email"
            {...register("email")}
            placeholder="jan.novak@example.com"
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label>Telefónne číslo (Nepovinné)</label>
        <input
          type="tel"
          {...register("phone")}
          placeholder="(09xx) xxx xxx"
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Predmet</label>
        <input
          type="text"
          {...register("subject")}
          placeholder="Dopyt na Moderný Eko Dom"
          className="w-full border p-2 rounded"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>

      <div>
        <label>Správa</label>
        <textarea
          {...register("message")}
          placeholder="Povedzte nám viac o vašom projekte alebo otázke..."
          rows={6}
          className="w-full border p-2 rounded"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Odosielam..." : "Odoslať správu"}
      </button>
    </form>
  )
}