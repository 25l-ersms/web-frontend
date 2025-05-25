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
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Zod schema stays the same
const creditCardSchema = z.object({

  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),

  phoneNumber: z
  .string()
  .nonempty({ message: 'Phone number is required' })
  .regex(
    /^\+?[1-9]\d{1,14}$/,
    { message: 'Invalid phone number' }
  ),
})

export default function InputRegistrationForm() {
  // No TypeScript generics here
  const form = useForm({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  })

  const Router = useRouter()

    const [selectedRole, setSelectedRole] = useState("customer");

  const onSubmit = (values) => {
    // handle tokenization / submission…
    if (selectedRole === 'vendor') {
      Router.push('/registration/fee')
    }
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
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  maxLength={50}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cardholder Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        {/* CVC */}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  inputMode="numeric"
                  maxLength={9}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         {/* ── Role Radio Group ── */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a role</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => setSelectedRole(value)}
                  value={field.value}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="customer"
                      id="role-customer"
                      className="w-5 h-5 border-2 border-[#a67c0f] text-[#a67c0f]"
                          defaultChecked={true}
                    />
                    <Label htmlFor="role-customer">Customer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="vendor"
                      id="role-vendor"
                      className="w-5 h-5 border-2 border-[#a67c0f] text-[#a67c0f]"
                      defaultChecked={false}

                    />
                    <Label htmlFor="role-vendor">Vendor</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className=" w-100 h-12 mt-1 bg-[#d4a017] rounded-lg [font-family:'Syne-Bold',Helvetica] font-bold text-[#e3e3d6] text-[32px] tracking-[-0.20px] hover:bg-[#c19215] transition-colors"
>
          {selectedRole === 'customer'? "Continue" : 'Submit Form'}

        </Button>
      </form>
    </Form>
  )
}