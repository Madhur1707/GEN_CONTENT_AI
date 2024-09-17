"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplatesSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any
}

function FormSection({ selectedTemplate, userFormInput }: PROPS) {
    const [formData, setFormData] = useState<any>();

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData)
    };

    return (
        <div className="p-5 shadow-lg border rounded-lg bg-white">
            <Image src={selectedTemplate?.icon || "/default-icon.png"} alt="icon" width={50} height={50} />
            <h2 className="font-bold text-2xl mb-2 text-primary">
                {selectedTemplate?.name}
            </h2>
            <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

            <form className="mt-6" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className="my-2 flex flex-col gap-2 mb-7">
                        <label className="font-bold">{item.label}</label>
                        {item.field == "input" ? (
                            <Input
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        ) : item.field == "textarea" ? (
                            <Textarea
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                            />
                        ) : null}
                    </div>
                ))}
                <Button type="submit" className="w-full py-6">
                    Generate Content
                </Button>
            </form>
        </div>
    );
}

export default FormSection;