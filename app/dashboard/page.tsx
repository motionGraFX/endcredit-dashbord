
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UploadCloud, Download, Loader2 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎬 Project Dashboard</h1>
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="render">Render</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Project Info</h2>
              <Input placeholder="Project Title (e.g. Final Credits for Episode 3)" />
              <Textarea placeholder="Project description, notes, or instructions for the rendering team..." rows={4} />
              <Button variant="outline">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Upload Assets</h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Upload Credit Text (TXT, DOCX)</label>
                <Input type="file" />
                <label className="block text-sm font-medium">Upload Logos / Fonts / Images</label>
                <Input type="file" multiple />
              </div>
              <Button className="mt-4" icon={<UploadCloud size={16} />}>Upload Files</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="render">
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Render Preview</h2>
              <div className="flex items-center gap-4">
                <Button className="bg-blue-600 text-white">Request Render</Button>
                <Button variant="ghost" icon={<Loader2 size={16} className="animate-spin" />}>Rendering...</Button>
                <Button variant="outline" icon={<Download size={16} />}>Download Latest Render</Button>
              </div>
              <p className="text-sm text-muted-foreground">Typical turnaround: 1–2 hours (automated or manual pipeline)</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
