"use client";

import { motion } from "@/lib/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Palette, Image, FileImage } from "lucide-react";

export default function ImageRequirements() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Getting Started Is Easy
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here's what we'll need from you to create your professional dealership website
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-border/50">
            <CardHeader className="pb-2">
              <div className="mb-4">
                <Image className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Image Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <FileImage className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Dealership Logo</p>
                  <p className="text-sm text-muted-foreground">Your official logo in high resolution (preferably vector format or PNG with transparent background)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Camera className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Vehicle Photos</p>
                  <p className="text-sm text-muted-foreground">High-quality images of each vehicle in your inventory (minimum 5 photos per car)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Dealership Photos</p>
                  <p className="text-sm text-muted-foreground">Images of your physical location, showroom, and team to personalize your site</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader className="pb-2">
              <div className="mb-4">
                <Palette className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Design Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Don't have a professional logo or need to improve your existing one? Our design services can help!
              </p>

              <div className="space-y-2">
                <p className="font-medium">Additional Services:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Professional logo design</li>
                  <li>Custom banner creation</li>
                  <li>Vehicle photo editing and enhancement</li>
                  <li>Marketing materials design</li>
                </ul>
              </div>

              <p className="text-sm mt-4">
                <span className="font-medium">Note:</span> Design services are available separately and can be discussed during consultation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}