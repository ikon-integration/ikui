/* eslint-disable react/no-danger */
import { marked } from 'marked';

import { markdownContentClasses } from '../markdownContentClasses';

interface IMarkdownRendererProps {
  value: string;
}

export function MarkdownRenderer({ value }: IMarkdownRendererProps) {
  const html = marked.parse(value || '');

  return (
    <div
      className={markdownContentClasses}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
