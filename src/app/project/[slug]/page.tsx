'use client'
import React, {lazy} from 'react'
import { motion } from 'framer-motion';
import Team from '../../components/project/detail/team/team';

const Header = lazy(() => import('@components/project/detail/Header/header'));
const Video = lazy(() => import('@components/project/detail/video/video'));
const Gallery = lazy(() => import('@components/project/detail/gallery/gallery'));
const KeyFeature = lazy(() => import('@components/project/detail/key-featured/key-featured'));
const Progress = lazy(() => import('@components/project/detail/progress/progress'));
const Summary = lazy(() => import('@components/project/detail/summary/summary'));
const Insight = lazy(() => import('@components/project/detail/insight/insight'));
const RelatedProject = lazy(() => import('@components/project/detail/related-project/related-project'));
const ContactCard = lazy(() => import('@components/project/contact/contact-card'));

export default function ProjectDetailPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-12 px-4 md:px-6"
      >
        <Video />
        <Gallery />
        <KeyFeature />
        <Progress />
        <Summary />
        <Team/>
        <Insight />
        <RelatedProject />
        <ContactCard />
      </motion.main>
    </motion.div>
  )
}

