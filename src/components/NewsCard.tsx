"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    source: {
      name: string;
    };
    publishedAt: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl font-bold line-clamp-2">{article.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-2">
          {article.source.name} - {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between p-4">
        <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
          {article.description || "Không có mô tả."}
        </p>
        <Button asChild className="w-full mt-auto">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Đọc thêm
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;