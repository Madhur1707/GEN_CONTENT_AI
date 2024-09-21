import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";



interface AIOutputType {
    id: number;
    formData: string | null;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string | null;
    createdAt: string | null;
}


const History = async () => {

    const data: AIOutputType[] = await db.select().from(AIOutput);

    return (

        <div className="p-10">
            <h1 className="text-2xl font-bold">History</h1>
            <div className="mt-5 grid grid-cols-1 gap-5">
                {data.map((item) => (
                    <div key={item.id} className="border p-5 rounded-lg shadow-md">
                        <p className="text-sm text-gray-500">{item.createdAt || "N/A"}</p>
                        <p className="font-semibold">{item.templateSlug}</p>
                        <p>{item.aiResponse ? item.aiResponse.slice(0, 100) : "No response"}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
