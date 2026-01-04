import React from 'react'
interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

interface AlignmentClasses {
  [key: string]: string;
}
export default function SectionHeader({title, description, align= 'left'}:SectionHeaderProps) {
    const  alignmentClasses: AlignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
  return (
    <div className={`mb-5 md:mb-8 max-2xl ${alignmentClasses[align]}`}>
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      {description && <p className="mt-2 text-foreground">{description}</p>}
    </div>
  )
}
