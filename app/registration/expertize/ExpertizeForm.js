'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

// Skill options extracted to constant for easier maintenance and potential reuse
const SKILL_OPTIONS = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'design', label: 'Design' },
]

const addressFormSchema = z.object({
  streetAddress: z.string().min(1, { message: 'Street address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  postalCode: z.string().min(1, { message: 'Postal code is required' }),
  regionState: z.string().min(1, { message: 'Region/State is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  skill: z.string().min(1, { message: 'Skill is required' }),
})

export default function ExpertizeForm () {
  const form = useForm({
    resolver: zodResolver(addressFormSchema),
    defaultValues: Object.fromEntries(
      Object.keys(addressFormSchema.shape).map(key => [key, ''])
    ),
  })

  // useCallback can prevent unnecessary re-renders if passed to child components
  const onSubmit = React.useCallback((data) => {
    console.log('Form data:', data)
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
      className={`
            space-y-6 mx-15
            [&_input]:h-6
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
          `}>
        {/* Example of extracting repeated fields into a config-driven render map */}
        {[
          { name: 'streetAddress', label: 'Street Address', placeholder: '1234 Main St', cols: 'col-span-1' },
          { name: 'regionState', label: 'Region/State', placeholder: 'Region or State', cols: 'col-span-1' },
          { name: 'country', label: 'Country', placeholder: 'Country', cols: 'col-span-1' },
        ].map(field => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: f }) => (
              <FormItem className={field.cols}>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input {...f} placeholder={field.placeholder} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Two-column layout for City & Postal Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['city', 'postalCode'].map(name => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field: f }) => (
                <FormItem>
                  <FormLabel>{name === 'city' ? 'City' : 'Postal Code'}</FormLabel>
                  <FormControl>
                    <Input {...f} placeholder={ name === 'city' ? 'City' : 'Postal Code' } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        {/* Skill dropdown leveraging memoized options */}
        <FormField
          control={form.control}
          name="skill"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skill</FormLabel>
              <FormControl >
                <Select onValueChange={field.onChange} value={field.value} className="w-full bg-[#e3e3d6]">
                  <SelectTrigger>
                    <SelectValue  placeholder="Select Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    {SKILL_OPTIONS.map(opt => (
                      <SelectItem  key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button with consistent sizing and no inline event handler */}
        <Button type="submit" className="w-full h-12 bg-yellow-500 text-white text-lg font-semibold hover:bg-yellow-600 transition-colors">
          Submit Form
        </Button>
      </form>
    </Form>
  )
}
