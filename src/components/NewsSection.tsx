"use client";

import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { useSupabase } from '@/contexts/SessionContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { showError } from '@/utils/toast';

interface NewsSectionProps {
  title: string;
  query: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({ title, query }) => {
  const { supabase } = useSupabase();
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        // Thay thế 'YOUR_SUPABASE_PROJECT_ID' bằng Project ID thực của bạn
        // hoặc sử dụng biến môi trường nếu bạn đã cấu hình
        const projectId = 'sbryacaoahweuvvcowba'; 
        const { data, error } = await supabase.functions.invoke('fetch-news', {
          body: { query },
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (error) {
          throw new Error(error.message);
        }
        setArticles(data as any[]);
      } catch (err: any) {
        console.error("Error fetching news:", err);
        setError(err.message || "Không thể tải tin tức.");
        showError(err.message || "Không thể tải tin tức.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query, supabase]);

  return (
    <Card className="p-6 md:p-8 shadow-lg border-none bg-white dark:bg-gray-800">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">{error}</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg">Không tìm thấy bài báo nào liên quan.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsSection;