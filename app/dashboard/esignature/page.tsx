"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

// Dynamically import ReactSignatureCanvas to disable server-side rendering
const ReactSignatureCanvas = dynamic(() => import("react-signature-canvas"), {
  ssr: false, // Disable server-side rendering for this component
});

function Esignature() {
  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold mb-2">E-Sign Document</h1>
          <p className="text-sm text-muted-foreground">
            Upload your document and sign it.
          </p>
        </CardHeader>
        <CardContent>
          {/* File Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Upload Document (PDF, Image)
            </label>
            <input type="file" accept="image/*,.pdf" />
          </div>

          {/* Signature Canvas */}
          <div className="mb-6">
            <ReactSignatureCanvas
              penColor="black"
              canvasProps={{
                width: 500,
                height: 200,
                className: "border rounded-md shadow-sm ",
              }}
            />

            <div className="flex space-x-4 mt-4">
              <Button> Save Signature</Button>
              <Button>Clear Signature</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="w-full md:w-auto">Submit Signed Document</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Esignature;
