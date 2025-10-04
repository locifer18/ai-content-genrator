'use client'
import React, { useState, use, useContext } from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { generateAIContent } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

interface Props {
  params: Promise<{
    'template-slug': string
  }>;
}

const CreateNewContent = (props: Props) => {
  const { user } = useUser();
  const params = use(props.params);
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
  const router = useRouter();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == params['template-slug']
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const {userSubscription, setUserSubscription} = useContext<any>(UserSubscriptionContext);
  const {updateCredit, setUpdateCredit} = useContext<any>(UpdateCreditUsageContext);
  /**
   * used to generate ai content
   * @param formData 
   * @returns 
   */  

  const GenerateAIContent = async (formData: any) => {
    if(totalUsage >= 10000 && !userSubscription){
      router.push('/dashboard/billing');
      return ;
    }
    if (!formData || !selectedTemplate?.aiPrompt) return;

    setLoading(true);
    setAiOutput("");

    try {
      const FinalAiPrompt = `${selectedTemplate.aiPrompt}\n\nInput: ${JSON.stringify(formData)}`;
      const result = await generateAIContent(FinalAiPrompt);

      // Clean the result - remove LaTeX commands and excessive formatting
      const cleanedResult = cleanAIResponse(result || "No content generated");
      setAiOutput(cleanedResult);

      // Save to DB AFTER state is set (use the result directly, not state)
      await SaveInDb(formData, selectedTemplate?.slug, cleanedResult);
      setUpdateCredit(Date.now())
    } catch (err) {
      console.error("AI Error:", err);
      setAiOutput("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to clean AI response
  const cleanAIResponse = (response: string): string => {
    // Remove LaTeX commands like \rtf1, \ansi, \fontbl, etc.
    let cleaned = response
      .replace(/\{\\rtf1[^}]*\}/g, '')
      .replace(/\\[a-z]+\d*\s?/g, '')
      .replace(/\{\\[^}]*\}/g, '')
      .replace(/\{|\}/g, '');

    // Trim excessive whitespace
    cleaned = cleaned.trim().replace(/\n{3,}/g, '\n\n');

    return cleaned;
  };

  const SaveInDb = async (formData: any, slug: string, aiResp: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    try {
      const result = await db.insert(AIOutput).values({
        formData: JSON.stringify(formData),
        templateSlug: slug || '',
        aiResponse: aiResp || '',
        createdBy: user.primaryEmailAddress.emailAddress,
        createdAt: new Date(),
      }).returning();
      
      setTotalUsage(totalUsage + Number(aiResp?.length));
    } catch (error) {
      console.error("DB Save Error:", error);
    }
  }

  return (
    <div className="p-5">
      <Link href={'/dashboard'}>
        <Button className="cursor-pointer"><ArrowLeft /> Back</Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          loading={loading}
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
        />

        <div className="col-span-2">
          <OutputSection output={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;