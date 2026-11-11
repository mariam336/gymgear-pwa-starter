import { getCollection } from 'astro:content';
import categories from '../data/categories.json';
export const paths: Record<string,string> = {
  reviews:'/reviews/', best:'/best/', comparisons:'/compare/', buyingGuides:'/buying-guides/', fitnessAdvice:'/fitness-advice/'
};
export const labels: Record<string,string> = {
  reviews:'Product review',best:'Best-of guide',comparisons:'Comparison',buyingGuides:'Buying guide',fitnessAdvice:'Fitness advice'
};
export const categoryMap = Object.fromEntries(categories.map(c=>[c.slug,c]));
export const href = (kind:string, id:string) => `${paths[kind]||'/'}${id}/`;
export const dateText = (value:Date | string) => new Date(value).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'});
export async function allArticles(){
  const names=['best','reviews','comparisons','buyingGuides','fitnessAdvice'] as const;
  const groups=await Promise.all(names.map(async kind =>(await getCollection(kind, ({data})=> data.status!=='draft')).map(entry=>({kind,entry,href:href(kind,entry.id)}))));
  return groups.flat().sort((a,b)=>+b.entry.data.date - +a.entry.data.date);
}
