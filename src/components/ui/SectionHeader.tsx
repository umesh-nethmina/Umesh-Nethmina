import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
        {subtitle}
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </p>
      {description && (
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-500 dark:text-slate-400 mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
