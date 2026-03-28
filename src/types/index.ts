export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  year: number;
  featured?: boolean;
  image?: string | null;
  slug: string;
  created_at?: string;
  updated_at?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: string;
  client?: string;
  year: number;
  featured?: boolean;
  image?: string | null;
  slug: string;
  technologies?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

export interface NewsItemResponse {
  data: NewsItem;
  related: {
    previous: NewsItem | null;
    next: NewsItem | null;
  };
}
