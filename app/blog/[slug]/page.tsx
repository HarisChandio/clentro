// app/blog/[slug]/page.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Head from "next/head";
import { useParams } from "next/navigation";
import { blogData } from "@/lib/blogData";

export default function BlogPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = blogData[slug];

  if (!data) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
        </div>
      </>
    );
  }

  const { title, description, heroImage, content, faqs, alt } = data;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      faqs?.map((faq: any) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })) || [],
  };

  return (
    <>
      {/* Note: next/head does not work in App Router as expected, but keeping for compatibility if utilized elsewhere */}
      <Head>
        <title>{title} | Clentro</title>
        <meta name="description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-20 space-y-4">
        {heroImage && (
          <img
            src={heroImage.src}
            alt={alt ? alt : title}
            className="w-[70%] h-auto mx-auto object-cover"
          />
        )}

        <h1 className="text-4xl font-bold">{title}</h1>

        {content.map((block: any, index: number) => {
          if (block.type === "p") {
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          }
          if (block.type === "h2") {
            return (
              <h2 key={index} className="text-2xl font-bold mt-6">
                {block.content}
              </h2>
            );
          }
          if (block.type === "h5") {
            return (
              <h5 key={index} className="text-md font-bold mt-4">
                {block.content}
              </h5>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc list-inside space-y-1">
                {block.items.map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );
          }
          if (block.type === "ordered-list") {
            return (
              <ol key={index} className="list-decimal list-inside space-y-1">
                {block.items.map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            );
          }
          if (block.type === "img") {
            return (
              <img
                key={index}
                src={block.src}
                alt={block.alt}
                className="my-4 w-full h-auto"
              />
            );
          }
          return null;
        })}

        {faqs && faqs.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mt-6">FAQs</h2>
            <Accordion
              type="single"
              defaultValue="faq-0"
              collapsible
              className="space-y-3"
            >
              {faqs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-bold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </>
        )}
      </main>
    </>
  );
}
