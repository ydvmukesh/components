export const sectionCode = `import React from "react"

interface SectionHeaderProps {
  title: string
  description?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeader({
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={\`mb-5 md:mb-8 max-w-2xl \${alignmentClasses[align]}\`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm md:text-base text-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
`
