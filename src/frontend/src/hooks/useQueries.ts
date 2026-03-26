import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Category } from "../backend.d";
import type { BlogPost, Product } from "../backend.d";
import { useActor } from "./useActor";

export type { Product, BlogPost };
export { Category };

export function useAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllBlogPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddProduct() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (product: Product) => actor!.addProduct(product),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

export function useAddBlogPost() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      title,
      content,
      author,
    }: { title: string; content: string; author: string }) =>
      actor!.addBlogPost(title, content, author),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blogPosts"] }),
  });
}
