"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { JobApplicationSchema } from "@/schemas";
import { OutputContext } from "@/store/output-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormWrapper } from "./form-wrapper";

// Positions
const positions = [
  { id: 1, value: "General" },
  { id: 2, value: "Marketing" },
  { id: 3, value: "Sales" },
  { id: 4, value: "Engineering" },
  { id: 5, value: "Human Resources" },
  { id: 6, value: "Customer Service" },
  { id: 7, value: "Design" },
  { id: 8, value: "Finance" },
  { id: 9, value: "Operations" },
  { id: 10, value: "IT" },
];

// Component
export const JobApplicationForm = () => {
  // const [date, setDate] = useState<Date>();
  const { setOutput } = useContext(OutputContext);
  const form = useForm<z.infer<typeof JobApplicationSchema>>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      firstName: "",
      email: "",
      lastName: "",
      position: undefined,
      availableDate: undefined,
      employeeStatus: undefined,
      refFirstName: "",
      refLastName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof JobApplicationSchema>) => {
    setOutput(values);
  };

  return (
    <FormWrapper title="Job Application Form Example">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="space-x-4 flex w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base sm:text-sm placeholder:text-sm"
                        placeholder="John"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input
                        className="text-base sm:text-sm placeholder:text-sm"
                        placeholder="doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      className="text-base sm:text-sm placeholder:text-sm"
                      placeholder="john.doe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-4 sm:flex-row w-full">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>What position are you applying for? *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={`${field.value}`}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="- Select -" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((position) => (
                            <SelectItem
                              value={`${position.id}`}
                              key={position.id}
                            >
                              {position.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="availableDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Available Date *</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            disabled={{ before: new Date() }}
                            captionLayout="dropdown-buttons"
                            fromDate={new Date()}
                            toYear={new Date().getFullYear() + 2}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="employeeStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your current status? *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={`${field.value}`}
                      className="grid grid-cols-2 justify-start gap-3"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1" />
                        </FormControl>
                        <FormLabel className="font-normal">Employed</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="2" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Self-Employed
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="3" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Unemployed
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="4" />
                        </FormControl>
                        <FormLabel className="font-normal">Student</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-x-4 flex w-full">
              <FormField
                control={form.control}
                name="refFirstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>
                      Do you have any references? (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-base sm:text-sm placeholder:text-sm"
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="refLastName"
                render={({ field }) => (
                  <FormItem className="flex-1 self-end">
                    <FormControl>
                      <Input
                        className="text-base sm:text-sm placeholder:text-sm"
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" variant="default">
            Submit
          </Button>
          <Button
            type="button"
            className="ml-4"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
};
