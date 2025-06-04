'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { formTypes } from './page'

const creditCardSchema = z.object({
  cardNumber: z
    .string()
    .min(16, { message: 'Card number must be 16 digits' })
    .regex(/^\d+$/, { message: 'Only digits allowed' }),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Use MM/YY format' }),
  cvc: z
    .string()
    .length(3, { message: 'CVC must be 3 digits' })
    .regex(/^\d+$/, { message: 'Only digits allowed' }),
  name: z.string().min(1, { message: 'Cardholder name is required' }),
})

export default function CreditCardForm({data, setData, setFormType}) {

  const form = useForm({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      name: '',
    },
  })

  const onSubmit = (values) => {
    setData({...data, ...values})
    setFormType(formTypes.expertize);
    console.log('Got card data:', values)
  }

  return (
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`
            space-y-6 mx-15
            [&_input]:h-8
            [&_input]:bg-[#e3e3d6]
            [&_input]:rounded-lg
            [&_input]:border
            [&_input]:border-[#442d17]
            [&_input]:px-4
            [&_input]:py-3
            [&_label]:-top-3
            [&_label]:left-7
            [&_label]:px-2
            [&_label]:[font-family:'Syne-SemiBold',Helvetica]
            [&_label]:font-semibold
            [&_label]:text-[#442d17]
            [&_label]:text-l
            [&_label]:tracking-[-0.20px]
          `}
      >
        {/* Card Number */}
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="1234 5678 9012 3456"
                  inputMode="numeric"
                  maxLength={16}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Expiry Date */}
        <FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiry Date (MM/YY)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="MM/YY"
                  inputMode="numeric"
                  maxLength={5}

                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CVC */}
        <FormField
          control={form.control}
          name="cvc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CVC</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="123"
                  inputMode="numeric"
                  maxLength={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cardholder Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cardholder Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className=" w-100 h-12 mt-1 bg-[#d4a017] rounded-lg [font-family:'Syne-Bold',Helvetica] font-bold text-[#e3e3d6] text-[32px] tracking-[-0.20px] hover:bg-[#c19215] transition-colors">
          Continue
        </Button>
      </form>
    </Form>
  )
}