"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplatesSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
    params: {
        "template-slug": string;
    };
}

function CreateNewContext(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug == props.params["template-slug"]
    );

    const GeneratedAiContent = (formData: any) => { };

    return (
        <div className="p-10">
            <Link href={"/dashboard"}>
                <Button>
                    {" "}
                    <ArrowLeft /> Back
                </Button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                {/* FORM SECTION   */}

                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GeneratedAiContent(v)}
                />

                {/* OUTPUT SECTION  */}
                <div className="col-span-2">
                    <OutputSection />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContext;
