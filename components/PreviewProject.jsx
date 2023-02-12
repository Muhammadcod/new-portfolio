import DynamicComponent from './DynamicComponent';
import { usePreview } from '../lib/sanity';
import Link from 'next/link';

export default function PreviewProject({ query, queryParams }) {
  const data = usePreview(null, query, queryParams);
  return (
    <>
      <DynamicComponent project={data} />
      <Link className="bg-blue-500 p-6 text-black font-bold" href="/api/exit-preview">
        Exit Preview
      </Link>
    </>
  );
}
