"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Combobox } from "@/components/ui/Combobox";



export default function Home() {


  return (
    <div>
      <Card>
  <CardHeader>
    <CardTitle>Satelite Chooser</CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
    {/* <p>Card Content</p> */}
    <Combobox />
  </CardContent>
  <CardFooter>
    {/* <p>Card Footer</p> */}
  </CardFooter>
</Card>
    {/* <Combobox /> */}
    </div>
  );
}
