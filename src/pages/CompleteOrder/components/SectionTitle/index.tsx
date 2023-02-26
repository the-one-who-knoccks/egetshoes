import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typography'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText>{title}</RegularText>
        <RegularText color="subtitle" size="s">
          {subtitle}
        </RegularText>
      </div>
    </SectionTitleContainer>
  )
}
