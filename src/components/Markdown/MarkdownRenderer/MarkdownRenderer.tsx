/* eslint-disable react/no-danger */
import DOMPurify from 'dompurify';
import { marked } from 'marked';

import { markdownContentClasses } from '../markdownContentClasses';

interface IMarkdownRendererProps {
  value: string;
}

export function MarkdownRenderer({ value }: IMarkdownRendererProps) {
  const html = marked.parse(value || '');
  const sanitizedHtml = DOMPurify.sanitize(html as string);

  return (
    <div
      className={markdownContentClasses}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
