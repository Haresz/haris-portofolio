import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import projectData from '../../../data.json';

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Haris's Portfolio`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetail project={project} />
    </>
  );
}
