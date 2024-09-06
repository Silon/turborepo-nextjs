import { UiButton } from '@repo/ui/UiButton'
import { UiFormTextInput } from '@repo/ui/UiFormTextInput'
import { UiIcon } from '@repo/ui/UiIcon'
import type { Metadata } from 'next'
import React from 'react'
import SvgIcon from 'assets/svg/icon-info.svg'
import { ArText } from 'components/common/ArText'

type Props = {
  readonly children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Ar Home Page',
  description: 'Ar Home Page Description',
}

export function ArHomePage({ children }: Props) {
  console.log('ArHomePage props:', { children })

  return (
    <div className="container flex flex-col items-start gap-6 bg-ar-primary p-10">
      <div>
        <h3 className="font-bold">UiIcon</h3>
        <UiIcon theme="primary" icon={SvgIcon} size={20} />
      </div>
      <div>
        <h3 className="font-bold">UiButton</h3>
        <UiButton>Click Me!</UiButton>
      </div>
      <div>
        <h3 className="font-bold">UiFormTextInput</h3>
        <UiFormTextInput />
      </div>
      <div>
        <h3 className="font-bold">ArText (tx)</h3>
        <ArText tx="common.title" />
      </div>
    </div>
  )
}
