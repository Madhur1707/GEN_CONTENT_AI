"use client";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Trash } from "lucide-react";
import { useState, useEffect } from "react";
import Templates from "@/app/(data)/Templates";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import Image from "next/image";
import DeleteHistory from "./_components/DeleteHistory";

interface AIOutputType {
  id: number;
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

const History = () => {
  const { user } = useUser();
  const [data, setData] = useState<AIOutputType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const result: AIOutputType[] = await db
          .select()
          .from(AIOutput)
          .where(
            eq(
              AIOutput.createdBy,
              user?.primaryEmailAddress?.emailAddress ?? ""
            )
          );

        const sortedResult = result.sort((a, b) => {
          const parseDate = (date: string) =>
            new Date(date.split("/").reverse().join("-")).getTime();
          return parseDate(b.createdAt || "") - parseDate(a.createdAt || "");
        });

        setData(sortedResult);
      } catch (err) {
        setError("Failed to load history.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleCopy = (text: string | null, id: number) => {
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(id);
          setTimeout(() => setCopied(null), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await db.delete(AIOutput).where(eq(AIOutput.id, id));

      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  const getTemplateIcon = (slug: string) => {
    const template = Templates.find((t) => t.slug === slug);
    return template?.icon || "/default-icon.png";
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="text-center">
          <Image
            src={"/nloader.svg"}
            alt="loading..."
            width={100}
            height={100}
          />
          <p className="mt-2 text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <CardContent>
          <span role="img" aria-label="error" style={{ fontSize: "2rem" }}>
            ⚠️
          </span>
          <div>{error}</div>
        </CardContent>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <CardContent>
          <span role="img" aria-label="no history" style={{ fontSize: "2rem" }}>
            📜
          </span>
          <div>No History Available..</div>
        </CardContent>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">History</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card
            key={item.id}
            className=" shadow-lg rounded-lg border bg-white hover:shadow-xl transition-shadow duration-200 flex flex-col cursor-pointer"
          >
            <CardHeader className="flex items-center space-x-4">
              <img
                src={getTemplateIcon(item.templateSlug)}
                alt={item.templateSlug}
                className="w-10 h-10 rounded-lg object-cover items-center shadow-sm"
              />
              <div>
                <CardTitle className="text-lg text-center font-semibold">
                  {item.templateSlug || "Unknown Template"}
                </CardTitle>
                <p className="text-sm text-center text-gray-500">
                  {item.createdAt || "N/A"}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4 mt- text-justify">
              <div className="bg-gray-100 p-3 rounded-lg text-gray-700 text-base">
                <span className="font-semibold text-lg">
                  Generated Result:{" "}
                  <span className="text-sm">
                    {item.aiResponse
                      ? `${item.aiResponse.slice(0, 100)}...`
                      : "No response"}
                  </span>
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-gray-700 text-base">
                  <span className="font-semibold">Words: </span>
                  {item.aiResponse ? item.aiResponse.split(" ").length : 0}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-500 flex items-center gap-2 hover:bg-blue-50 transition-colors duration-200"
                  onClick={() => handleCopy(item.aiResponse, item.id)}
                >
                  <Copy className="w-5 h-5" />
                  {copied === item.id ? "Copied!" : "Copy"}
                </Button>

                {/* DELETE HISTORY COMPONENT  */}

                <DeleteHistory id={item.id} onDelete={handleDelete} />
                {/* DELETE HISTORY COMPONENT  */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default History;
